import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Oyeniyi Feranmi - Full Stack Developer',
  description: 'Professional portfolio of PositiveMind, a software developer specializing in application development.',
  keywords: 'MERN Stack, Cybersecurity, Full Stack Developer, React, Node.js, MongoDB',
  authors: [{ name: 'Positive Mind' }],
  creator: 'Oyeniyi Feranmi',
  openGraph: {
    title: 'Oyeniyi Feranmi, Software Developer',
    description: 'Professional portfolio scalable web applications',
    url: 'https://your-portfolio.vercel.app',
    siteName: 'Positive Mind Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oyeniyi Feranmi - MERN Stack & Cybersecurity Developer',
    description: 'Professional portfolio showcasing secure, scalable web applications',
    images: ['/images/og-image.jpg'],
  },

  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     'max-video-preview': -1,
  //     'max-image-preview': 'large',
  //     'max-snippet': -1,
  //   },
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-900 text-white`}>
        <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
          {children}
        </div>
      </body>
    </html>
  )
}