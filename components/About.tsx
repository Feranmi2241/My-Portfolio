'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Shield, Code, Users, Award, /* Target, */ Zap, Heart, Camera, Upload } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const About = () => {
  const [profileImage, setProfileImage] = useState('/images/Tech-savvy developer with futuristic vision.png')

  const stats = [
    { number: '2+', label: 'Years Learning', icon: Award },
    // { number: '15+', label: 'Projects Completed', icon: Target },
    { number: '100%', label: 'Security Focused', icon: Shield },
    { number: '24/7', label: 'Problem Solver', icon: Zap },
  ]

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'B.Tech in Cyber Security Science (2020-2025)',
      color: 'from-blue-500 to-purple-600'
    },
    // {
    //   icon: Shield,
    //   title: 'Security First',
    //   description: 'Every application built with security best practices',
    //   color: 'from-green-500 to-teal-600'
    // },
    {
      icon: Code,
      title: 'Full-Stack',
      description: 'End-to-end development with modern technologies',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication',
      color: 'from-pink-500 to-rose-600'
    },
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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent"></div>
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 20, 0],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-24 h-24 bg-primary-500/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -15, 0],
          y: [0, 15, 0]
        }}
        transition={{
          duration: 5,
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
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 20px rgba(16, 185, 129, 0.5)"
            }}
            transition={{ duration: 0.3 }}
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ color: "#e5e7eb" }}
          >
            Passionate about creating scalable solutions that make a difference
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Profile Picture Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="relative group">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-2xl blur-xl"
                whileHover={{ scale: 1.1, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                className="relative bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center"
                whileHover={{ 
                  borderColor: "rgba(16, 185, 129, 0.5)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="relative w-48 h-48 mx-auto mb-6 group/image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full p-1"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="w-full h-full bg-dark-900 rounded-full p-2">
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={profileImage}
                          alt="Profile"
                          fill
                          className="object-cover transition-all duration-300 group-hover/image:scale-110"
                          onError={() => setProfileImage('/images/default-avatar.jpg')}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/image:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100"
                          transition={{ duration: 0.3 }}
                        >
                          <Camera className="text-white" size={32} />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Upload Button */}
                  <motion.label
                    className="absolute bottom-2 right-2 bg-accent-500 hover:bg-accent-600 text-white p-2 rounded-full cursor-pointer shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Upload size={16} />
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          const reader = new FileReader()
                          reader.onload = (e) => {
                            setProfileImage(e.target?.result as string)
                          }
                          reader.readAsDataURL(file)
                        }
                      }}
                    />
                  </motion.label>
                </motion.div>
                
                <motion.h3
                  className="text-2xl font-bold text-white mb-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Positive Mind
                </motion.h3>
                <motion.p
                  className="text-accent-500 font-medium mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  Software Developer
                </motion.p>
                <motion.p
                  className="text-gray-400 text-sm"
                  whileHover={{ color: "#e5e7eb" }}
                  transition={{ duration: 0.3 }}
                >
                  
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Journey Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative group">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-2xl blur-xl"
                whileHover={{ scale: 1.05, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="relative bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8"
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
                    <Heart className="text-accent-500" size={24} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">My Journey</h3>
                </motion.div>
                
                <div className="space-y-4">
                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                  I am a results-driven Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js)
                   with strong experience in Next.js for building modern, scalable, and high-performance web 
                   applications. I focus on developing clean, maintainable code and creating intuitive user interfaces that deliver excellent user experiences. My approach combines solid
                   frontend engineering with robust backend architecture to build complete, production-ready solutions.
                  </motion.p>
                  
                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                   On the frontend, I work extensively with React.js, leveraging server-side rendering (SSR), static site generation (SSG),
                    and API routes to optimize performance and SEO. I build responsive, accessible interfaces 
                    using modern tools such as Tailwind CSS, CSS3, and JavaScript (ES6+), while ensuring seamless state management,
                     efficient component design, and smooth user interactions. I pay close attention to performance, responsiveness, and
                      cross-browser compatibility.
                  </motion.p>
                  
                  <motion.p 
                    className="text-gray-300 leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    On the backend, I design and implement secure RESTful APIs and server-side logic using Node.js
                     and Express.js, with MongoDB for flexible and scalable data storage. 
                     I integrate authentication and authorization systems using JWT, OAuth, and Firebase,
                     manage cloud deployments with platforms like Vercel and Render, and follow best practices 
                     for version control using Git and GitHub. With a strong problem-solving mindset and a commitment
                      to continuous learning, I build full-stack applications that are reliable, scalable, and aligned
                       with real-world business needs.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group relative overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center relative overflow-hidden h-full"
                whileHover={{ 
                  borderColor: "rgba(16, 185, 129, 0.5)",
                  scale: 1.05,
                  rotateY: 5
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10`}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 mb-4"
                >
                  <item.icon className="h-8 w-8 text-accent-500 mx-auto" />
                </motion.div>
                
                <motion.h4 
                  className="font-semibold text-white mb-2 relative z-10"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.h4>
                
                <motion.p 
                  className="text-gray-400 text-sm relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.description}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="relative p-6 bg-dark-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl group overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(16, 185, 129, 0.5)",
                  boxShadow: "0 10px 30px rgba(16, 185, 129, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="relative z-10 mb-4"
                  whileHover={{ 
                    rotate: [0, -5, 5, 0],
                    scale: 1.2
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="h-8 w-8 text-accent-500 mx-auto" />
                </motion.div>
                
                <motion.div 
                  className="text-3xl md:text-4xl font-bold text-gradient mb-2 relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.number}
                </motion.div>
                
                <motion.div 
                  className="text-gray-400 font-medium relative z-10"
                  whileHover={{ color: "#10b981" }}
                  transition={{ duration: 0.3 }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About