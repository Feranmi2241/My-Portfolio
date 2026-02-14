'use client'

import { motion } from 'framer-motion'
import { Shield, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    'Projects': [
      { name: 'Project 1', href: '#projects' },
      { name: 'Project 2', href: '#projects' },
      { name: 'Project 3', href: '#projects' },
      { name: 'Project 4', href: '#projects' },
    ],
    'Connect': [
      { name: 'GitHub', href: 'https://github.com/Feranmi2241' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/oyeniyi-feranmi-93a10a231' },
      { name: 'WhatsApp', href: 'https://wa.me/2348052052706' },
      { name: 'Email', href: 'mailto:feranmiayodeji24@gmail.com' },
    ],
  }

  return (
    <footer className="relative bg-dark-900/95 backdrop-blur-sm border-t border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Shield className="h-8 w-8 text-accent-500" />
              </motion.div>
              <motion.span 
                className="text-xl font-bold text-gradient"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
               Positive Mind
              </motion.span>
            </div>
            <motion.p 
              className="text-gray-400 mb-4 leading-relaxed"
              whileHover={{ color: "#d1d5db" }}
              transition={{ duration: 0.3 }}
            >
              Software Developer building secure, 
              scalable applications with modern technologies.
            </motion.p>
            <div className="flex items-center space-x-1 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
          </motion.div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-lg font-semibold text-white mb-4"
                whileHover={{ color: "#10b981" }}
                transition={{ duration: 0.3 }}
              >
                {category}
              </motion.h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-accent-500 transition-colors duration-200 block py-1"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      whileHover={{ x: 5, color: "#10b981" }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <motion.p
              whileHover={{ color: "#d1d5db" }}
              transition={{ duration: 0.3 }}
            >
              &copy; {new Date().getFullYear()} Oyeniyi Fernami (Positive Mind) all right reserved...
            </motion.p>
            <motion.p 
              className="mt-1"
              whileHover={{ color: "#d1d5db" }}
              transition={{ duration: 0.3 }}
            >
              Built with Next.js, React,Mongo DB, Express, firebase, Tailwind css, bootstrap e.t.c. Hosting on Github and Deployment on vercel and Render...

            </motion.p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-gray-400 text-sm">
              <motion.span 
                className="flex items-center space-x-1"
                whileHover={{ color: "#10b981" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Shield className="h-4 w-4 text-accent-500" />
                </motion.div>
                {/* <span>Security First</span> */}
              </motion.span>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-primary-600/20 hover:bg-primary-600/30 text-primary-400 rounded-lg transition-all duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-6 border-t border-gray-800/50 text-center"
        >
          <motion.p 
            className="text-gray-500 text-xs"
            whileHover={{ color: "#9ca3af" }}
            transition={{ duration: 0.3 }}
          >
            Transforming ideas into code, exploring and showcasing fullstack mastery, clean UI and problem-solving skills.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer