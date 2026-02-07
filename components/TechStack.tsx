'use client'

import { motion } from 'framer-motion'

const TechStack = () => {
  const techCategories = [
    {
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        { name: 'React', icon: '⚛️', level: 95 },
        { name: 'Next.js', icon: '▲', level: 90 },
        { name: 'TypeScript', icon: '📘', level: 85 },
        { name: 'Tailwind CSS', icon: '🎨', level: 90 },
        { name: 'Bootstrap', icon: '🅱️', level: 80 },
      ]
    },
    {
      title: 'Backend',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        { name: 'Node.js', icon: '🟢', level: 90 },
        { name: 'Express.js', icon: '🚀', level: 85 },
        { name: 'REST APIs', icon: '🔗', level: 90 },
        { name: 'GraphQL', icon: '📊', level: 75 },
        { name: 'Socket.io', icon: '🔌', level: 70 },
      ]
    },
    {
      title: 'Database',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'MongoDB', icon: '🍃', level: 90 },
        { name: 'Firebase', icon: '🔥', level: 80 },
        { name: 'PostgreSQL', icon: '🐘', level: 75 },
        { name: 'Redis', icon: '🔴', level: 70 },
      ]
    },
    {
      title: 'Security & Tools',
      color: 'from-red-500 to-orange-500',
      technologies: [
        { name: 'JWT', icon: '🔐', level: 95 },
        { name: 'OAuth', icon: '🛡️', level: 85 },
        { name: 'Helmet.js', icon: '⛑️', level: 90 },
        { name: 'Git/GitHub', icon: '📚', level: 95 },
        { name: 'Docker', icon: '🐳', level: 75 },
        { name: 'Vercel', icon: '▲', level: 85 },
      ]
    }
  ]

  return (
    <section id="tech" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <motion.span 
              className="text-gradient"
              whileHover={{ 
                scale: 1.05,
                textShadow: "0 0 20px rgba(16, 185, 129, 0.5)"
              }}
              transition={{ duration: 0.3 }}
            >
              Stack
            </motion.span>
          </h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            whileHover={{ color: "#d1d5db" }}
            transition={{ duration: 0.3 }}
          >
            Technologies I use to build  scalable, and modern applications
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(135deg, ${category.color.split(' ')[1]}, ${category.color.split(' ')[3]})` }}></div>
              
              <div className="relative bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-accent-500/50 transition-all duration-300">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-6 bg-gradient-to-r ${category.color} text-white`}>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {category.title}
                  </motion.span>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center justify-between p-3 bg-dark-900/50 rounded-lg hover:bg-dark-900/70 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <motion.span 
                          className="text-2xl"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          {tech.icon}
                        </motion.span>
                        <motion.span 
                          className="text-white font-medium"
                          whileHover={{ color: "#10b981" }}
                          transition={{ duration: 0.3 }}
                        >
                          {tech.name}
                        </motion.span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${tech.level}%` }}
                            transition={{ duration: 1, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                            viewport={{ once: true }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                        <span className="text-xs text-gray-400 w-8">{tech.level}%</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.h3 
            className="text-2xl font-bold mb-6 text-white"
            whileHover={{ 
              scale: 1.05,
              color: "#10b981"
            }}
            transition={{ duration: 0.3 }}
          >
            Additional Skills
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Responsiveness', 'Testing', 'Performance Optimization', 'Accessibility', 'Code Review', 'Mentoring'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-gradient-to-r from-primary-600/20 to-accent-600/20 border border-primary-500/30 rounded-full text-sm text-gray-300 hover:text-white hover:border-accent-500/50 transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack