'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Camera, Upload, User } from 'lucide-react'
import Image from 'next/image'
import defaultProfilePic from '../Picture/1770466447466.PNG'

interface ProfilePictureProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const ProfilePicture = ({ className = '', size = 'lg' }: ProfilePictureProps) => {
  const [profileImage, setProfileImage] = useState<string | null>(defaultProfilePic as unknown as string)
  const [isHovered, setIsHovered] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
      className={`relative ${sizeClasses[size]} ${className}`}
    >
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-500 cursor-pointer group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={triggerFileInput}
        whileHover={{ 
          scale: 1.05,
          borderColor: "#10b981",
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        {profileImage ? (
          // If the image is a data URL (uploaded), use a normal <img> element.
          // Otherwise use Next's <Image> for the imported static image.
          profileImage.startsWith('data:') ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="relative w-full h-full">
              <Image src={profileImage} alt="Profile" fill className="object-cover" />
            </div>
          )
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-600 to-accent-600 flex items-center justify-center">
            <User size={size === 'lg' ? 80 : size === 'md' ? 60 : 40} className="text-white/70" />
          </div>
        )}

        {/* Hover Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Camera size={size === 'lg' ? 32 : size === 'md' ? 24 : 20} className="mb-2" />
          <span className={`text-${size === 'lg' ? 'sm' : 'xs'} font-medium`}>
            {profileImage ? 'Change Photo' : 'Upload Photo'}
          </span>
        </motion.div>

        {/* Animated Ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-accent-500"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />

      {/* Upload Button */}
      <motion.button
        className="absolute -bottom-2 -right-2 bg-accent-500 hover:bg-accent-600 text-white p-2 rounded-full shadow-lg transition-colors duration-300"
        onClick={triggerFileInput}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
      >
        <Upload size={16} />
      </motion.button>
    </motion.div>
  )
}

export default ProfilePicture