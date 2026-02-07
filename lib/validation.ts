interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface ValidationResult {
  isValid: boolean
  errors: string[]
  data?: ContactFormData
}

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .trim()
}

// Validate individual fields
function validateName(name: string): string[] {
  const errors: string[] = []
  
  if (!name || name.trim().length === 0) {
    errors.push('Name is required')
  } else if (name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long')
  } else if (name.trim().length > 100) {
    errors.push('Name must be less than 100 characters')
  } else if (!/^[a-zA-Z\s'-]+$/.test(name.trim())) {
    errors.push('Name contains invalid characters')
  }
  
  return errors
}

function validateEmail(email: string): string[] {
  const errors: string[] = []
  
  if (!email || email.trim().length === 0) {
    errors.push('Email is required')
  } else if (!EMAIL_REGEX.test(email.trim())) {
    errors.push('Please enter a valid email address')
  } else if (email.trim().length > 254) {
    errors.push('Email address is too long')
  }
  
  return errors
}

function validateSubject(subject: string): string[] {
  const errors: string[] = []
  
  if (!subject || subject.trim().length === 0) {
    errors.push('Subject is required')
  } else if (subject.trim().length < 5) {
    errors.push('Subject must be at least 5 characters long')
  } else if (subject.trim().length > 200) {
    errors.push('Subject must be less than 200 characters')
  }
  
  return errors
}

function validateMessage(message: string): string[] {
  const errors: string[] = []
  
  if (!message || message.trim().length === 0) {
    errors.push('Message is required')
  } else if (message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long')
  } else if (message.trim().length > 5000) {
    errors.push('Message must be less than 5000 characters')
  }
  
  return errors
}

// Check for spam patterns
function checkSpamPatterns(data: ContactFormData): string[] {
  const errors: string[] = []
  const spamKeywords = [
    'viagra', 'casino', 'lottery', 'winner', 'congratulations',
    'click here', 'free money', 'make money fast', 'work from home',
    'weight loss', 'lose weight', 'diet pills'
  ]
  
  const fullText = `${data.name} ${data.email} ${data.subject} ${data.message}`.toLowerCase()
  
  const foundSpamWords = spamKeywords.filter(keyword => 
    fullText.includes(keyword.toLowerCase())
  )
  
  if (foundSpamWords.length > 0) {
    errors.push('Message appears to contain spam content')
  }
  
  // Check for excessive links
  const linkCount = (data.message.match(/https?:\/\/[^\s]+/g) || []).length
  if (linkCount > 3) {
    errors.push('Message contains too many links')
  }
  
  // Check for repeated characters (potential spam)
  if (/(.)\1{10,}/.test(data.message)) {
    errors.push('Message contains suspicious repeated characters')
  }
  
  return errors
}

export function validateContactForm(data: any): ValidationResult {
  const errors: string[] = []
  
  // Type checking
  if (typeof data !== 'object' || data === null) {
    return {
      isValid: false,
      errors: ['Invalid request data']
    }
  }
  
  const { name, email, subject, message } = data
  
  // Validate each field
  errors.push(...validateName(name))
  errors.push(...validateEmail(email))
  errors.push(...validateSubject(subject))
  errors.push(...validateMessage(message))
  
  if (errors.length > 0) {
    return {
      isValid: false,
      errors
    }
  }
  
  // Sanitize the data
  const sanitizedData: ContactFormData = {
    name: sanitizeInput(name),
    email: sanitizeInput(email).toLowerCase(),
    subject: sanitizeInput(subject),
    message: sanitizeInput(message)
  }
  
  // Check for spam
  const spamErrors = checkSpamPatterns(sanitizedData)
  if (spamErrors.length > 0) {
    return {
      isValid: false,
      errors: spamErrors
    }
  }
  
  return {
    isValid: true,
    errors: [],
    data: sanitizedData
  }
}

// Additional utility functions
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
}