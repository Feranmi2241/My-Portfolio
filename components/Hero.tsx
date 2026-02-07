'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Github, Linkedin, ArrowDown, Sparkles, Code, Shield } from 'lucide-react'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 10, 0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  const sparkleVariants = {
    animate: {
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
      rotate: [0, 180, 360],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-800/50 to-accent-900/20 animate-gradient"></div>
      
      {/* Multiple Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.7, 0.4],
            rotate: [0, 360]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-20 text-primary-400/30"
        variants={floatingVariants}
        animate="animate"
        whileHover={{ 
          scale: 1.2,
          color: "rgba(59, 130, 246, 0.8)"
        }}
        transition={{ duration: 0.3 }}
      >
        <Code size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-20 text-accent-400/30"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
        whileHover={{ 
          scale: 1.2,
          color: "rgba(16, 185, 129, 0.8)"
        }}
      >
        <Shield size={35} />
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-10 text-purple-400/30"
        variants={sparkleVariants}
        animate="animate"
        whileHover={{ 
          scale: 1.3,
          color: "rgba(147, 51, 234, 0.8)"
        }}
        transition={{ duration: 0.3 }}
      >
        <Sparkles size={25} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span 
              className="inline-block px-4 py-2 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium mb-4 border border-accent-500/30"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(16, 185, 129, 0.8)",
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              Available for Remote Opportunities
            </motion.span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <motion.span 
              className="text-white"
              whileHover={{ 
                textShadow: "0 0 20px rgba(255, 255, 255, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              Hi, I'm{' '}
            </motion.span>
            <motion.span 
              className="text-gradient"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 30px rgba(16, 185, 129, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              Oyeniyi Feranmi 
            </motion.span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl text-gray-300 mb-6 font-light"
            whileHover={{ 
              color: "#e5e7eb",
              scale: 1.02
            }}
            transition={{ duration: 0.3 }}
          >
          Software Developer
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            whileHover={{ 
              color: "#d1d5db",
              scale: 1.02
            }}
            transition={{ duration: 0.3 }}
          >
            Building secure, scalable web applications with modern technologies. 
            Specialized in full-stack development and integration.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">View My Projects</span>
            </motion.a>
            
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(16, 185, 129, 1)",
                color: "#ffffff",
                boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 border-2 border-accent-500 text-accent-500 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-accent-500 scale-x-0 group-hover:scale-x-100 origin-left"
                transition={{ duration: 0.3 }}
              />
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <Download size={20} />
              </motion.div>
              <motion.span 
                className="relative z-10"
                whileHover={{ x: 2 }}
                transition={{ duration: 0.3 }}
              >
                Download Resume
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Mail, href: 'mailto:feranmiayodeji24@gmail.com', label:'Email', color: 'hover: text-red-400' },
              { icon: Github, href: 'https://github.com/alexjohnson', label: 'GitHub', color: 'hover:text-gray-400' },
              { icon: Linkedin, href: 'https://linkedin.com/in/alexjohnson', label: 'LinkedIn', color: 'hover:text-blue-400' },
            ].map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ 
                  scale: 1.2, 
                  y: -5,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
                className={`group p-3 bg-white/10 rounded-full text-gray-300 ${color} transition-all duration-300 relative overflow-hidden`}
                aria-label={label}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 opacity-0 group-hover:opacity-100 rounded-full"
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <Icon size={24} />
                </motion.div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="text-gray-400 hover:text-accent-500 transition-colors duration-300"
            >
              <ArrowDown size={24} />
            </motion.div>
            <motion.div
              className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Particle Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero