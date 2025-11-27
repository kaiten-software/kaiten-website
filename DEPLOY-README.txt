# Kaiten Software - Quick Deploy Package

This package contains everything you need to deploy Kaiten Software to AWS Lightsail.

## Contents
- `dist/` - Production build files
- `package.json` - Dependencies list
- `ecosystem.config.js` - PM2 configuration
- `.lightsail/` - Nginx and launch scripts
- `DEPLOYMENT.md` - Full deployment guide

## Quick Start

### 1. Upload to Server
```bash
scp -i your-key.pem kaiten-deployment-*.tar.gz ubuntu@YOUR_IP:/home/ubuntu/
```

### 2. On the Server
```bash
# Extract
sudo mkdir -p /var/www/kaiten-software
sudo chown -R ubuntu:ubuntu /var/www/kaiten-software
cd /var/www/kaiten-software
tar -xzf ~/kaiten-deployment-*.tar.gz

# Install dependencies
npm install --production

# Start with PM2
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### 3. Setup Nginx (Optional, for custom domain)
```bash
sudo apt-get install -y nginx
sudo cp .lightsail/nginx.conf /etc/nginx/sites-available/kaiten-software

# Edit server_name with your domain
sudo nano /etc/nginx/sites-available/kaiten-software

# Enable site
sudo ln -s /etc/nginx/sites-available/kaiten-software /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

### 4. Access Your Site
- Direct: http://YOUR_IP:3000
- With Nginx: http://YOUR_DOMAIN

## Full Documentation
See `DEPLOYMENT.md` for complete deployment instructions.

---
**Kaiten Software** - Transforming businesses through technology
