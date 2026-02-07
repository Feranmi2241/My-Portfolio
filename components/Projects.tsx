'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Shield, Database, Server, Globe, Eye, Star, GitBranch } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Real Estate Platform',
      description: 'A comprehensive real estate platform with property listings, search functionality, user authentication, and admin dashboard. Features include property management, user profiles, and secure booking system.',
      image: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      features: [
        'Property listing and search',
        'User authentication and profiles',
        'Admin dashboard',
        'Booking management system',
        'Responsive design'
      ],
      security: [
        'JWT authentication',
        'Input validation',
        'Secure API endpoints',
        'Data encryption',
        'CORS protection'
      ],
      liveUrl: 'https://real-estate-project-front-end.vercel.app/',
      githubUrl: 'https://github.com/Feranmi2241/Real-Estate-Project-front-end-',
      category: 'Full-Stack',
      stars: 5,
      forks: 2
    }
  ]

  const categories = ['All', 'Full-Stack']
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Security': return Shield
      case 'Full-Stack': return Globe
      case 'E-commerce': return Database
      case 'DevOps': return Server
      case 'Healthcare': return Shield
      default: return Globe
    }
  }

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
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute top-40 left-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
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
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Secure, scalable applications built with modern technologies and security best practices
          </motion.p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden group ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                  : 'bg-dark-800/50 text-gray-400 hover:text-white hover:bg-dark-700/50 border border-gray-700 hover:border-accent-500/50'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <span className="relative z-10">{category}</span>
              {activeCategory !== category && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-accent-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => {
              const IconComponent = getCategoryIcon(project.category)
              return (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="group relative"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Enhanced Glow Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl"
                    animate={{
                      opacity: hoveredProject === index ? 1 : 0,
                      scale: hoveredProject === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div 
                    className="relative bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover-lift"
                    whileHover={{ 
                      borderColor: "rgba(16, 185, 129, 0.5)",
                      y: -8,
                      rotateX: 5,
                      rotateY: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Enhanced Project Image/Icon */}
                    <div className="relative h-48 bg-gradient-to-br from-primary-900/50 to-accent-900/50 flex items-center justify-center overflow-hidden">
                      <motion.div 
                        className="text-6xl opacity-20"
                        animate={{
                          rotate: hoveredProject === index ? 360 : 0,
                          scale: hoveredProject === index ? 1.2 : 1
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent />
                      </motion.div>
                      
                      {/* Floating Particles */}
                      {hoveredProject === index && (
                        <>
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-accent-500/60 rounded-full"
                              initial={{ 
                                x: Math.random() * 200 - 100,
                                y: Math.random() * 200 - 100,
                                opacity: 0
                              }}
                              animate={{
                                x: Math.random() * 400 - 200,
                                y: Math.random() * 400 - 200,
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2
                              }}
                            />
                          ))}
                        </>
                      )}
                      
                      <div className="absolute top-4 right-4">
                        <motion.span 
                          className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium backdrop-blur-sm border border-accent-500/30"
                          whileHover={{ scale: 1.1 }}
                        >
                          {project.category}
                        </motion.span>
                      </div>
                      
                      {/* GitHub Stats */}
                      <div className="absolute bottom-4 left-4 flex gap-3">
                        <motion.div 
                          className="flex items-center gap-1 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs text-gray-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <Star size={12} className="text-yellow-400" />
                          {project.stars}
                        </motion.div>
                        <motion.div 
                          className="flex items-center gap-1 px-2 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs text-gray-300"
                          whileHover={{ scale: 1.1 }}
                        >
                          <GitBranch size={12} className="text-blue-400" />
                          {project.forks}
                        </motion.div>
                      </div>
                    </div>

                    <div className="p-6">
                      <motion.h3 
                        className="text-xl font-bold text-white mb-3"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.title}
                      </motion.h3>
                      
                      <motion.p 
                        className="text-gray-400 mb-4 leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.description}
                      </motion.p>

                      {/* Enhanced Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm border border-primary-500/30 hover:bg-primary-500/30 transition-colors duration-300"
                            whileHover={{ scale: 1.1, y: -2 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: techIndex * 0.05, duration: 0.3 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>

                      {/* Enhanced Features & Security */}
                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h4 className="text-sm font-semibold text-accent-500 mb-2 flex items-center gap-2">
                            <Eye size={14} />
                            Key Features
                          </h4>
                          <ul className="text-sm text-gray-400 space-y-1">
                            {project.features.slice(0, 3).map((feature, featureIndex) => (
                              <motion.li 
                                key={feature} 
                                className="flex items-center hover:text-gray-300 transition-colors duration-300"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: featureIndex * 0.1, duration: 0.3 }}
                              >
                                <motion.span 
                                  className="w-1 h-1 bg-accent-500 rounded-full mr-2"
                                  whileHover={{ scale: 2 }}
                                />
                                {feature}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                        
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h4 className="text-sm font-semibold text-red-400 mb-2 flex items-center gap-2">
                            <Shield size={14} />
                            Security
                          </h4>
                          <ul className="text-sm text-gray-400 space-y-1">
                            {project.security.slice(0, 3).map((security, securityIndex) => (
                              <motion.li 
                                key={security} 
                                className="flex items-center hover:text-gray-300 transition-colors duration-300"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: securityIndex * 0.1, duration: 0.3 }}
                              >
                                <motion.div
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  <Shield className="w-3 h-3 text-red-400 mr-2" />
                                </motion.div>
                                {security}
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      {/* Enhanced Links */}
                      <div className="flex gap-4">
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-medium hover-lift shimmer-effect relative overflow-hidden group"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            animate={{ rotate: hoveredProject === index ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <ExternalLink size={16} />
                          </motion.div>
                          <span className="relative z-10">Live Demo</span>
                        </motion.a>
                        
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg font-medium hover:border-accent-500 hover:text-accent-500 transition-all duration-300 hover-lift"
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)"
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            whileHover={{ rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            <Github size={16} />
                          </motion.div>
                          Code
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* Enhanced View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Feranmi2241"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent-500 text-accent-500 rounded-lg font-semibold hover:bg-accent-500 hover:text-white transition-all duration-300 hover-lift shimmer-effect relative overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(16, 185, 129, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Github size={20} />
            </motion.div>
            <span className="relative z-10">View All Projects on GitHub</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-accent-500/20 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects