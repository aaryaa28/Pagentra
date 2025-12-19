# PageNTRA Deployment Guide

## Production Deployment Checklist

### 1. Domain & DNS Setup
- [ ] Register your domain (e.g., pagentra.com)
- [ ] Point DNS A record to your server IP
- [ ] Set up CNAME for www subdomain
- [ ] Configure SSL certificate (Let's Encrypt recommended)

### 2. Server Configuration
- [ ] Update `.env.production` with your domain
- [ ] Set up reverse proxy (nginx recommended)
- [ ] Configure firewall (allow ports 80, 443)
- [ ] Set up process manager (PM2 recommended)

### 3. Environment Variables
Update these in your production environment:
- `DOMAIN=yourdomain.com`
- `BASE_URL=https://yourdomain.com``
- `NODE_ENV=production`
- `PORT=3000` (or your preferred port)
- `DATABASE_URL=` (your production database)

### 4. Files to Update
1. **client/index.html**: Update meta tags with your domain
2. **package.json**: Update homepage field
3. **.env.production**: Configure all environment variables

### 5. Build & Deploy Commands
```bash
# Build for production
npm run build

# Start production server
npm start

# Or with PM2
pm2 start dist/index.cjs --name "pagentra"
```

### 6. Nginx Configuration Example
```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com www.yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    ssl_certificate /path/to/ssl/cert.pem;
    ssl_certificate_key /path/to/ssl/private.key;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 7. Database Setup
- [ ] Set up production PostgreSQL database
- [ ] Update DATABASE_URL in production environment
- [ ] Run database migrations: `npm run db:push`

### 8. Security Checklist
- [ ] Generate strong SESSION_SECRET and JWT_SECRET
- [ ] Set up HTTPS with SSL certificate
- [ ] Configure CORS if needed
- [ ] Set up rate limiting (already configured)
- [ ] Review and update security headers

### 9. Monitoring & Analytics
- [ ] Set up Google Analytics (update GA_ID)
- [ ] Configure error logging
- [ ] Set up uptime monitoring
- [ ] Configure backup strategy

### 10. Performance Optimization
- [ ] Enable gzip compression (nginx)
- [ ] Set up CDN for static assets
- [ ] Configure caching headers
- [ ] Optimize images and assets