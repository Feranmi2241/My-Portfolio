'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Download, ExternalLink } from 'lucide-react'

const Experience = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Cyber Security Science',
      institution: 'Ladoke Akintola University of Technology',
      location: 'Ogbomosho, Oyo State',
      period: '2020 - 2025',
      highlights: []
    }
  ]

  const experience = [
    {
      title: 'Full-Stack Developer',
      company: 'Positive Mind Estate and Reality',
      location: 'Remote',
      period: '2024 - Present',
      type: 'Full-time',
      responsibilities: [
        'Implemented security best practices including JWT authentication and input validation',
        'Familiar with diverse frameworks and programming languages required to build  a full stack project',
        'Good User Interface and User Experience Design',
        'Responsive Designs for Mobile, Tablets and Desktop',
        'Database Managment system',
        'API integration and Design',
        'Integrating Front-end and Back-end',
        'Testing and debugging',
        'Deployment and Maintenance'
      ]
    },
    // {
    //   title: 'Cybersecurity Intern',
    //   company: 'SecureTech Solutions',
    //   location: 'Boston, MA',
    //   period: 'Summer 2023',
    //   type: 'Internship',
    //   responsibilities: [
    //     'Conducted vulnerability assessments on web applications',
    //     'Assisted in developing secure coding guidelines',
    //     'Participated in penetration testing exercises',
    //     'Created security awareness training materials'
    //   ]
    // },
    // {
    //   title: 'Junior Web Developer',
    //   company: 'StartupXYZ',
    //   location: 'Remote',
    //   period: '2022 - 2023',
    //   type: 'Part-time',
    //   responsibilities: [
    //     'Built responsive web interfaces using React and Tailwind CSS',
    //     'Integrated RESTful APIs with frontend applications',
    //     'Collaborated with design team to implement UI/UX improvements',
    //     'Participated in code reviews and agile development processes'
    //   ]
    // }
  ]

  const certifications: any[] = []

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in cybersecurity and full-stack development
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Award className="mr-3 text-accent-500" />
              </motion.div>
              <motion.span
                whileHover={{ color: "#10b981" }}
                transition={{ duration: 0.3 }}
              >
                Education
              </motion.span>
            </h3>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative mb-8"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
                <div className="ml-8 bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-accent-500/50 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-accent-500/20 text-accent-400 rounded-full text-sm font-medium">
                      {edu.period}
                    </span>
                    <span className="flex items-center text-gray-400 text-sm">
                      <MapPin size={14} className="mr-1" />
                      {edu.location}
                    </span>
                  </div>
                  
                  <motion.h4 
                    className="text-xl font-bold text-white mb-2"
                    whileHover={{ color: "#10b981" }}
                    transition={{ duration: 0.3 }}
                  >
                    {edu.degree}
                  </motion.h4>
                  <motion.p 
                    className="text-primary-400 font-semibold mb-2"
                    whileHover={{ color: "#60a5fa" }}
                    transition={{ duration: 0.3 }}
                  >
                    {edu.institution}
                  </motion.p>
                  <motion.p 
                    className="text-accent-500 font-medium mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* GPA: {edu.gpa} */}
                  </motion.p>
                  
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-300">
                        <span className="w-2 h-2 bg-accent-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Calendar className="mr-3 text-primary-500" />
              </motion.div>
              <motion.span
                whileHover={{ color: "#3b82f6" }}
                transition={{ duration: 0.3 }}
              >
                Work Experience
              </motion.span>
            </h3>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"></div>
                  <div className="ml-8 bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-primary-500/50 transition-all duration-300">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                      <span className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm">
                        {exp.type}
                      </span>
                      <span className="flex items-center text-gray-400 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <motion.h4 
                      className="text-xl font-bold text-white mb-1"
                      whileHover={{ color: "#3b82f6" }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.title}
                    </motion.h4>
                    <motion.p 
                      className="text-primary-400 font-semibold mb-4"
                      whileHover={{ color: "#60a5fa" }}
                      transition={{ duration: 0.3 }}
                    >
                      {exp.company}
                    </motion.p>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start text-gray-300">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center"
            whileHover={{ 
              scale: 1.05,
              color: "#10b981"
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Certifications */}
          </motion.h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-accent-500/50 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Award className="h-12 w-12 text-accent-500 mx-auto mb-4" />
                </motion.div>
                <motion.h4 
                  className="font-bold text-white mb-2"
                  whileHover={{ color: "#10b981" }}
                  transition={{ duration: 0.3 }}
                >
                  {cert.name}
                </motion.h4>
                <motion.p 
                  className="text-gray-400 mb-2"
                  whileHover={{ color: "#d1d5db" }}
                  transition={{ duration: 0.3 }}
                >
                  {cert.issuer}
                </motion.p>
                <motion.p 
                  className="text-accent-500 font-medium mb-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {cert.date}
                </motion.p>
                <motion.p 
                  className="text-xs text-gray-500"
                  whileHover={{ color: "#9ca3af" }}
                  transition={{ duration: 0.3 }}
                >
                  ID: {cert.credentialId}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Resume Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-dark-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <motion.h3 
              className="text-2xl font-bold mb-4 text-white"
              whileHover={{ 
                scale: 1.05,
                color: "#10b981"
              }}
              transition={{ duration: 0.3 }}
            >
              Download My Resume
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-6 max-w-md mx-auto"
              whileHover={{ color: "#d1d5db" }}
              transition={{ duration: 0.3 }}
            >
              Get a detailed overview of my experience, skills, and achievements in a downloadable format.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
              >
                <Download size={20} />
                Download PDF Resume
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/feranmi-damilare-93a10a231"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent-500 text-accent-500 rounded-lg font-semibold hover:bg-accent-500 hover:text-white transition-all duration-300"
              >
                <ExternalLink size={20} />
                View LinkedIn Profile
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience