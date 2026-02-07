# 🚀 Deployment Guide

This guide covers deploying your cybersecurity portfolio to various platforms.

## 🌟 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:
1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub
   - Import your repository
   - Configure project settings

3. **Environment Variables**
   Add these in Vercel dashboard:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secure_jwt_secret
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Custom Domain:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Configure DNS records as instructed

## 🚀 Netlify

### Steps:
1. **Build Configuration**
   Create `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = ".next"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. **Deploy**
   - Connect GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `.next`
   - Add environment variables

## 🐳 Docker Deployment

### Dockerfile:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["npm", "start"]
```

### Deploy:
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## ☁️ AWS Deployment

### AWS Amplify:
1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize**
   ```bash
   amplify init
   amplify add hosting
   amplify publish
   ```

### AWS EC2:
1. **Launch EC2 instance**
2. **Install Node.js and PM2**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   sudo npm install -g pm2
   ```

3. **Deploy application**
   ```bash
   git clone your-repo
   cd portfolio
   npm install
   npm run build
   pm2 start npm --name "portfolio" -- start
   ```

## 🔧 Environment Variables Setup

### Required Variables:
```env
# Database
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio

# JWT Security
JWT_SECRET=your-super-secure-jwt-secret-minimum-32-characters
JWT_EXPIRES_IN=7d

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password

# API Configuration
NEXT_PUBLIC_API_URL=https://your-domain.com/api
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Security
BCRYPT_ROUNDS=12
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100
```

### Gmail App Password Setup:
1. Enable 2-Factor Authentication
2. Go to Google Account Settings
3. Security → App passwords
4. Generate app password for "Mail"
5. Use this password in SMTP_PASS

## 🔒 Security Checklist

Before deploying:

- [ ] Environment variables are set correctly
- [ ] JWT secret is strong (32+ characters)
- [ ] HTTPS is enabled
- [ ] Security headers are configured
- [ ] Rate limiting is active
- [ ] Input validation is working
- [ ] CORS is properly configured
- [ ] No sensitive data in client-side code

## 📊 Performance Optimization

### Before Deployment:
1. **Optimize Images**
   - Use WebP format
   - Compress images
   - Use Next.js Image component

2. **Bundle Analysis**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

3. **Lighthouse Audit**
   - Run in Chrome DevTools
   - Aim for 90+ scores

### After Deployment:
1. **Monitor Performance**
   - Use Vercel Analytics
   - Set up error tracking
   - Monitor Core Web Vitals

2. **SEO Optimization**
   - Submit sitemap to Google
   - Set up Google Analytics
   - Configure meta tags

## 🚨 Troubleshooting

### Common Issues:

1. **Build Failures**
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

2. **Environment Variables**
   - Ensure all required variables are set
   - Check variable names (case-sensitive)
   - Restart deployment after changes

3. **API Routes Not Working**
   - Verify API route file structure
   - Check for CORS issues
   - Validate request/response formats

4. **Images Not Loading**
   - Check image paths
   - Verify images are in public folder
   - Configure image domains in next.config.js

### Getting Help:
- Check deployment platform documentation
- Review build logs for errors
- Test locally before deploying
- Use browser developer tools for debugging

## 📈 Post-Deployment

### Analytics Setup:
1. **Google Analytics**
   ```bash
   npm install @next/third-parties
   ```

2. **Vercel Analytics**
   - Enable in Vercel dashboard
   - Add analytics component

### Monitoring:
- Set up uptime monitoring
- Configure error tracking (Sentry)
- Monitor performance metrics
- Set up backup strategies

### Maintenance:
- Regular dependency updates
- Security patches
- Performance monitoring
- Content updates

---

**Happy Deploying! 🚀**

Your cybersecurity portfolio is now ready to showcase your skills to the world!