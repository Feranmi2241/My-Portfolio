# 🛡️ Cybersecurity-Focused Developer Portfolio

A modern, secure, and responsive portfolio website built with the MERN stack and Next.js, specifically designed for a cybersecurity-focused software developer.

## 🚀 Features

### 🔒 Security-First Approach
- **JWT Authentication** with secure token handling
- **Input Validation & Sanitization** to prevent XSS attacks
- **Rate Limiting** on API endpoints
- **CSRF Protection** and security headers
- **Environment Variable Security** for sensitive data
- **Content Security Policy** implementation

### 🎨 Modern Design
- **Dark Mode** with accent colors
- **Responsive Design** (mobile-first approach)
- **Smooth Animations** using Framer Motion
- **Glass Morphism** effects and modern UI patterns
- **Accessibility Compliant** components

### 📱 Portfolio Sections
- **Hero Section** with professional introduction
- **About Section** with education background (B.Tech Cyber Security Science 2020-2024)
- **Tech Stack** showcase with skill levels
- **Projects Section** featuring 5 real-world MERN projects
- **Experience & Education** timeline
- **Secure Contact Form** with validation
- **Downloadable Resume** section

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** (App Router)
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

### Backend & Security
- **Node.js** with Express.js patterns
- **MongoDB** ready integration
- **JWT** for authentication
- **Rate Limiting** middleware
- **Input Validation** with custom utilities
- **Security Headers** configuration

### Development Tools
- **TypeScript** for type safety
- **ESLint** for code quality
- **PostCSS** for CSS processing
- **Git** version control

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git installed
- Code editor (VS Code recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cybersecurity-portfolio.git
   cd cybersecurity-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secure_jwt_secret
   SMTP_HOST=your_smtp_host
   SMTP_USER=your_email
   SMTP_PASS=your_email_password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── TechStack.tsx     # Skills showcase
│   ├── Projects.tsx      # Projects gallery
│   ├── Experience.tsx    # Experience timeline
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer component
├── lib/                  # Utility libraries
│   ├── rateLimit.ts      # Rate limiting utility
│   └── validation.ts     # Input validation
├── public/               # Static assets
│   └── images/          # Project images
├── styles/              # Additional styles
└── README.md           # This file
```

## 🔧 Customization

### Personal Information
Update the following files with your information:
- `components/Hero.tsx` - Name, title, and introduction
- `components/About.tsx` - Education background and journey
- `components/Experience.tsx` - Work experience and education
- `components/Contact.tsx` - Contact information
- `app/layout.tsx` - SEO metadata

### Projects
Edit `components/Projects.tsx` to showcase your projects:
- Update project data with your actual projects
- Add project images to `public/images/`
- Modify categories and technologies as needed

### Styling
- Colors: Edit `tailwind.config.js` for custom color scheme
- Animations: Modify Framer Motion configurations
- Layout: Adjust component layouts and spacing

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
- **Netlify**: Configure build settings for Next.js
- **Railway**: Use for full-stack deployment with database
- **AWS**: Deploy using AWS Amplify or EC2

## 🔒 Security Features

### API Security
- Rate limiting (5 requests per 15 minutes)
- Input validation and sanitization
- CORS configuration
- Security headers (CSP, X-Frame-Options, etc.)

### Form Security
- XSS prevention through input sanitization
- Spam detection patterns
- Email validation with regex
- Message length limits

### Best Practices
- Environment variables for sensitive data
- Secure JWT implementation ready
- HTTPS enforcement in production
- Content Security Policy headers

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic with Next.js App Router

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons
- **Vercel** for seamless deployment

## 📞 Support

If you have any questions or need help customizing this portfolio:

- 📧 Email: alex.johnson@email.com
- 💼 LinkedIn: [linkedin.com/in/alexjohnson](https://linkedin.com/in/alexjohnson)
- 🐙 GitHub: [github.com/alexjohnson](https://github.com/alexjohnson)

---

**Built with ❤️ and lots of ☕ by Alex Johnson**

*Secure. Scalable. Professional.*