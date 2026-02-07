interface RateLimitOptions {
  interval: number
  uniqueTokenPerInterval: number
}

interface RateLimitResult {
  success: boolean
  limit: number
  reset: number
  remaining: number
}

class RateLimit {
  private interval: number
  private uniqueTokenPerInterval: number
  private cache: Map<string, { count: number; reset: number }> = new Map()

  constructor(options: RateLimitOptions) {
    this.interval = options.interval
    this.uniqueTokenPerInterval = options.uniqueTokenPerInterval
  }

  async check(limit: number, token: string): Promise<RateLimitResult> {
    const now = Date.now()
    const reset = now + this.interval

    // Clean up expired entries
    this.cleanup(now)

    const current = this.cache.get(token)
    
    if (!current) {
      // First request from this token
      this.cache.set(token, { count: 1, reset })
      return {
        success: true,
        limit,
        reset,
        remaining: limit - 1
      }
    }

    if (now > current.reset) {
      // Reset window has passed
      this.cache.set(token, { count: 1, reset })
      return {
        success: true,
        limit,
        reset,
        remaining: limit - 1
      }
    }

    if (current.count >= limit) {
      // Rate limit exceeded
      return {
        success: false,
        limit,
        reset: current.reset,
        remaining: 0
      }
    }

    // Increment count
    current.count++
    this.cache.set(token, current)

    return {
      success: true,
      limit,
      reset: current.reset,
      remaining: limit - current.count
    }
  }

  private cleanup(now: number) {
    // Remove expired entries to prevent memory leaks
    for (const [token, data] of this.cache.entries()) {
      if (now > data.reset) {
        this.cache.delete(token)
      }
    }

    // If cache is too large, remove oldest entries
    if (this.cache.size > this.uniqueTokenPerInterval) {
      const entries = Array.from(this.cache.entries())
      entries.sort((a, b) => a[1].reset - b[1].reset)
      
      const toRemove = entries.slice(0, entries.length - this.uniqueTokenPerInterval)
      toRemove.forEach(([token]) => this.cache.delete(token))
    }
  }
}

export default function rateLimit(options: RateLimitOptions) {
  return new RateLimit(options)
}