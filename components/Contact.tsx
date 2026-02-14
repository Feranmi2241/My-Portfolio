'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, /* Twitter, */ CheckCircle, AlertCircle, Sparkles, MessageCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'feranmiayodeji24@gmail.com',
      href: 'mailto:feranmiayodeji24@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+2348052052706',
      href: 'tel:',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nigeria',
      href: '#',
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/Feranmi2241',
      color: 'hover:text-gray-400',
      bgColor: 'hover:bg-gray-800'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/oyeniyi-feranmi-93a10a231',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-900/30'
    },
    // {
    //   icon: Twitter,
    //   label: 'Twitter',
    //   href: 'https://twitter.com/alexjohnson',
    //   color: 'hover:text-blue-400',
    //   bgColor: 'hover:bg-blue-900/30'
    // },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:feranmiayodeji24@gmail.com',
      color: 'hover:text-red-400',
      bgColor: 'hover:bg-red-900/30'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-900/5 to-transparent"></div>
      <motion.div 
        className="absolute top-20 left-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -25, 0],
          y: [0, 25, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MessageCircle className="text-accent-500" size={32} />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Get In <span className="text-gradient">Touch</span>
            </h2>
          </motion.div>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            whileHover={{ color: "#d1d5db" }}
            transition={{ duration: 0.3 }}
          >
            Ready to collaborate on your next project? Let&apos;s discuss how I can help bring your ideas to life with secure, scalable solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="relative group"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl"
                whileHover={{ scale: 1.05, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="relative bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover-lift"
                whileHover={{ 
                  borderColor: "rgba(16, 185, 129, 0.5)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="flex items-center gap-3 mb-6"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Sparkles className="text-accent-500" size={24} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
                </motion.div>
                
                <motion.p 
                  className="text-gray-300 mb-8 leading-relaxed"
                  whileHover={{ opacity: 1, x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  I&apos;m always interested in new opportunities, whether it&apos;s a full-time position or just a chat about technology. 
                  Feel free to reach out!
                </motion.p>

                <motion.div 
                  className="space-y-6 mb-8"
                  variants={containerVariants}
                >
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.label}
                      variants={itemVariants}
                      className="group/item flex items-center space-x-4"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div 
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${info.color} p-0.5 rounded-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-full h-full bg-dark-800 rounded-lg flex items-center justify-center">
                          <info.icon className="h-6 w-6 text-white" />
                        </div>
                      </motion.div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <motion.a
                          href={info.href}
                          className="text-white font-medium hover:text-accent-500 transition-colors duration-200"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          {info.value}
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-white">Follow Me</h4>
                  <motion.div 
                    className="flex space-x-4"
                    variants={containerVariants}
                  >
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -5,
                          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={`group p-3 bg-dark-900/50 rounded-lg text-gray-400 ${social.color} ${social.bgColor} transition-all duration-300 relative overflow-hidden`}
                        aria-label={social.label}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                          className="relative z-10"
                        >
                          <social.icon size={20} />
                        </motion.div>
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              className="relative group"
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-2xl blur-xl"
                whileHover={{ scale: 1.05, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="relative bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover-lift"
                whileHover={{ 
                  borderColor: "rgba(16, 185, 129, 0.5)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-2"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-400" />
                    </motion.div>
                    <span className="text-green-400">Message sent successfully! I&apos;ll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center space-x-2"
                  >
                    <motion.div
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <AlertCircle className="h-5 w-5 text-red-400" />
                    </motion.div>
                    <span className="text-red-400">Failed to send message. Please try again or contact me directly.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 bg-dark-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-200"
                        placeholder="Your Name"
                        whileFocus={{ scale: 1.02 }}
                        animate={{
                          borderColor: focusedField === 'name' ? '#10b981' : '#4b5563'
                        }}
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full px-4 py-3 bg-dark-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-200"
                        placeholder="your.email@example.com"
                        whileFocus={{ scale: 1.02 }}
                        animate={{
                          borderColor: focusedField === 'email' ? '#10b981' : '#4b5563'
                        }}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <motion.input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-dark-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-200"
                      placeholder="Project Inquiry / Job Opportunity / General Question"
                      whileFocus={{ scale: 1.02 }}
                      animate={{
                        borderColor: focusedField === 'subject' ? '#10b981' : '#4b5563'
                      }}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 transition-all duration-200 resize-vertical"
                      placeholder="Tell me about your project, requirements, or just say hello..."
                      whileFocus={{ scale: 1.02 }}
                      animate={{
                        borderColor: focusedField === 'message' ? '#10b981' : '#4b5563'
                      }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 relative overflow-hidden group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    {isSubmitting ? (
                      <>
                        <motion.div 
                          className="animate-spin rounded-full h-5 w-5 border-b-2 border-white relative z-10"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span className="relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                          className="relative z-10"
                        >
                          <Send size={20} />
                        </motion.div>
                        <span className="relative z-10">Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact