# AWS Lightsail Deployment Guide for Kaiten Software

## Prerequisites
- AWS Lightsail instance (Ubuntu 22.04 LTS recommended)
- Minimum 1GB RAM, 1 vCPU
- Domain name (optional, but recommended)

## Deployment Steps

### 1. Create Lightsail Instance
1. Go to AWS Lightsail Console
2. Create instance:
   - Platform: Linux/Unix
   - Blueprint: OS Only → Ubuntu 22.04 LTS
   - Instance plan: $5/month (1GB RAM) or higher
   - Enable Auto Snapshots (recommended)

### 2. Configure Static IP
1. Create a static IP in Lightsail
2. Attach it to your instance
3. Update your domain's DNS A record to point to this IP

### 3. Connect to Your Instance
```bash
# Download your SSH key from Lightsail console
chmod 400 LightsailDefaultKey-*.pem
ssh -i LightsailDefaultKey-*.pem ubuntu@YOUR_STATIC_IP
```

### 4. Install Node.js and Dependencies
```bash
# Update system
sudo apt-get update && sudo apt-get upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
npm --version

# Install PM2 globally
sudo npm install -g pm2

# Install Nginx
sudo apt-get install -y nginx
```

### 5. Upload Your Application
```bash
# From your local machine, upload the built files
# Option A: Using SCP
cd /path/to/Kaiten-Software-Main
tar -czf kaiten-app.tar.gz dist package.json package-lock.json server shared

scp -i LightsailDefaultKey-*.pem kaiten-app.tar.gz ubuntu@YOUR_STATIC_IP:/home/ubuntu/

# Option B: Using Git (if you have a private repository)
# On the server:
sudo mkdir -p /var/www/kaiten-software
sudo chown -R ubuntu:ubuntu /var/www/kaiten-software
cd /var/www/kaiten-software
git clone YOUR_REPO_URL .
npm run build
```

### 6. Extract and Setup Application
```bash
# On the server
sudo mkdir -p /var/www/kaiten-software
sudo chown -R ubuntu:ubuntu /var/www/kaiten-software
cd /var/www/kaiten-software

# Extract files
tar -xzf /home/ubuntu/kaiten-app.tar.gz

# Install production dependencies
npm install --production

# Create logs directory
mkdir -p logs
```

### 7. Configure PM2
```bash
# Start the application with PM2
cd /var/www/kaiten-software
pm2 start ecosystem.config.js

# Save PM2 process list
pm2 save

# Setup PM2 to start on system boot
pm2 startup
# Copy and run the command that PM2 outputs

# Check status
pm2 status
pm2 logs kaiten-software
```

### 8. Configure Nginx (Reverse Proxy)
```bash
# Copy nginx configuration
sudo cp .lightsail/nginx.conf /etc/nginx/sites-available/kaiten-software

# Update the server_name in the config with your domain
sudo nano /etc/nginx/sites-available/kaiten-software
# Change: server_name your-domain.com www.your-domain.com;
# To: server_name kaitensoftware.com www.kaitensoftware.com;

# Enable the site
sudo ln -s /etc/nginx/sites-available/kaiten-software /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx
```

### 9. Configure Firewall
```bash
# In Lightsail console, add these firewall rules:
# - HTTP (80)
# - HTTPS (443)
# - Custom TCP (3000) - for direct access if needed

# Or via command line:
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw enable
```

### 10. Setup SSL Certificate (Optional but Recommended)
```bash
# Install Certbot
sudo apt-get install -y certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Test auto-renewal
sudo certbot renew --dry-run
```

## Environment Variables (if needed)
```bash
# Create .env file
cd /var/www/kaiten-software
nano .env

# Add your environment variables:
# NODE_ENV=production
# PORT=3000
# DATABASE_URL=your_database_url

# Restart the application
pm2 restart kaiten-software
```

## Useful Commands

### Check Application Status
```bash
pm2 status
pm2 logs kaiten-software
pm2 monit
```

### Update Application
```bash
cd /var/www/kaiten-software

# Stop application
pm2 stop kaiten-software

# Pull new code (if using Git)
git pull origin main
npm run build

# Or upload new tar.gz and extract

# Install any new dependencies
npm install --production

# Restart application
pm2 restart kaiten-software
```

### Restart Services
```bash
# Restart application
pm2 restart kaiten-software

# Restart Nginx
sudo systemctl restart nginx

# Restart entire server
sudo reboot
```

### View Logs
```bash
# Application logs
pm2 logs kaiten-software

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# System logs
sudo journalctl -u nginx -f
```

## Troubleshooting

### Application won't start
```bash
# Check PM2 logs
pm2 logs kaiten-software --err

# Check if port is in use
sudo lsof -i :3000

# Restart PM2
pm2 delete kaiten-software
pm2 start ecosystem.config.js
```

### Nginx errors
```bash
# Test configuration
sudo nginx -t

# Check error logs
sudo tail -f /var/log/nginx/error.log

# Restart nginx
sudo systemctl restart nginx
```

### Out of memory
```bash
# Check memory usage
free -h

# Restart application to clear memory
pm2 restart kaiten-software

# Consider upgrading your Lightsail instance
```

## Monitoring and Maintenance

### Setup PM2 Monitoring Dashboard
```bash
# Create PM2 Plus account at https://pm2.io
pm2 link YOUR_SECRET_KEY YOUR_PUBLIC_KEY
```

### Automatic Backups
- Enable automatic snapshots in Lightsail console
- Recommended: Daily snapshots with 7-day retention

### Performance Optimization
```bash
# Enable PM2 cluster mode (in ecosystem.config.js)
# Change: instances: 1
# To: instances: 'max' (uses all CPU cores)

pm2 restart kaiten-software
```

## Cost Estimate
- Lightsail Instance: $5-10/month (1-2GB RAM)
- Static IP: Free (while attached)
- Data Transfer: 1-2TB included
- Snapshots: ~$0.05/GB/month
- Domain (if purchased): $10-15/year

**Total estimated cost: $5-15/month**

## Security Best Practices
1. ✅ Keep system updated: `sudo apt-get update && sudo apt-get upgrade`
2. ✅ Use SSL/HTTPS certificates (free with Let's Encrypt)
3. ✅ Enable firewall and only open necessary ports
4. ✅ Regular backups via Lightsail snapshots
5. ✅ Use strong SSH keys (disable password authentication)
6. ✅ Monitor logs regularly for suspicious activity
7. ✅ Keep Node.js and dependencies updated

## Support
- AWS Lightsail Docs: https://lightsail.aws.amazon.com/ls/docs
- PM2 Docs: https://pm2.keymetrics.io/docs/usage/quick-start/
- Nginx Docs: https://nginx.org/en/docs/

---

**Deployed by:** Kaiten Software  
**Last Updated:** January 2025
