# 🚀 AWS Lightsail Deployment - Step by Step Guide

Your deployment package is ready: `kaiten-deployment-20251013-000125.tar.gz` (334KB)

## Step 1: Create a Lightsail Instance

1. **Go to AWS Lightsail Console**
   - Open: https://lightsail.aws.amazon.com/
   - Click "Create instance"

2. **Select Instance Location**
   - Choose a region close to your users (e.g., `us-east-1` for US East Coast)

3. **Pick Instance Image**
   - Platform: **Linux/Unix**
   - Blueprint: **OS Only** → Select **Ubuntu 22.04 LTS**

4. **Choose Instance Plan**
   - Recommended: **$5/month** (1 GB RAM, 1 vCPU, 40 GB SSD, 2 TB transfer)
   - For higher traffic: **$10/month** (2 GB RAM, 1 vCPU, 60 GB SSD, 3 TB transfer)

5. **Name Your Instance**
   - Example: `kaiten-software-prod`

6. **Create Instance**
   - Click "Create instance" button
   - Wait 1-2 minutes for instance to start

## Step 2: Configure Networking

1. **Create Static IP**
   - In Lightsail console, go to "Networking" tab
   - Click "Create static IP"
   - Select your instance: `kaiten-software-prod`
   - Name it: `kaiten-software-ip`
   - Click "Create"
   - **Note down this IP address** - you'll need it!

2. **Configure Firewall**
   - Go to your instance → "Networking" tab
   - Add these firewall rules:
     - ✅ SSH (TCP 22) - Already enabled
     - ✅ HTTP (TCP 80) - Click "Add rule"
     - ✅ HTTPS (TCP 443) - Click "Add rule"
     - ✅ Custom (TCP 3000) - Click "Add rule" (for direct access)

## Step 3: Connect to Your Instance

### Option A: Using Browser SSH (Easiest)
1. In Lightsail console, click on your instance
2. Click "Connect using SSH" button
3. A terminal window will open in your browser

### Option B: Using SSH Key (More Secure)
1. Download SSH key from Lightsail:
   - Click "Account" → "SSH keys"
   - Download default key for your region
2. From your Mac terminal:
```bash
chmod 400 ~/Downloads/LightsailDefaultKey-*.pem
ssh -i ~/Downloads/LightsailDefaultKey-*.pem ubuntu@YOUR_STATIC_IP
```

## Step 4: Upload Deployment Package

### Option A: Using Browser Upload
1. In the browser SSH terminal, type:
```bash
pwd
# Should show: /home/ubuntu
```

2. Open new terminal on your Mac and run:
```bash
cd /Users/rs/Documents/code/replit/Kaiten-Software-Main

# Replace YOUR_STATIC_IP with your actual IP from Step 2
scp -i ~/Downloads/LightsailDefaultKey-*.pem \
  kaiten-deployment-20251013-000125.tar.gz \
  ubuntu@YOUR_STATIC_IP:/home/ubuntu/
```

### Option B: Using SFTP (FileZilla, if you prefer GUI)
- Host: YOUR_STATIC_IP
- Protocol: SFTP
- User: ubuntu
- Key file: LightsailDefaultKey-*.pem
- Upload the tar.gz file to /home/ubuntu/

## Step 5: Install Node.js (on the server)

In your SSH terminal (browser or local), run these commands:

```bash
# Update system
sudo apt-get update
sudo apt-get upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version
# Should show: v20.x.x

npm --version
# Should show: 10.x.x

# Install PM2 (process manager)
sudo npm install -g pm2

# Verify PM2
pm2 --version
```

## Step 6: Deploy Your Application

```bash
# Create application directory
sudo mkdir -p /var/www/kaiten-software
sudo chown -R ubuntu:ubuntu /var/www/kaiten-software

# Extract deployment package
cd /var/www/kaiten-software
tar -xzf ~/kaiten-deployment-20251013-000125.tar.gz

# Verify files extracted
ls -la
# You should see: dist/ package.json ecosystem.config.js .lightsail/

# Install production dependencies
npm install --production

# This will take 2-3 minutes
# You should see: added XXX packages

# Create logs directory
mkdir -p logs
```

## Step 7: Start the Application

```bash
# Start with PM2
cd /var/www/kaiten-software
pm2 start ecosystem.config.js

# You should see:
# ┌─────┬──────────────────┬─────────────┬─────────┬─────────┬──────────┐
# │ id  │ name             │ status      │ restart │ uptime  │ cpu      │
# └─────┴──────────────────┴─────────────┴─────────┴─────────┴──────────┘

# Check if it's running
pm2 status

# View logs
pm2 logs kaiten-software --lines 20

# Save PM2 configuration
pm2 save

# Setup auto-start on server reboot
pm2 startup
# Copy the command it shows and run it (it will start with 'sudo')

# Test the application
curl http://localhost:3000
# You should see HTML output
```

## Step 8: Test Your Website

Open in your browser:
```
http://YOUR_STATIC_IP:3000
```

You should see the Kaiten Software website! 🎉

## Step 9: Setup Domain Name (Optional)

### If you have a domain name:

1. **Update DNS Records**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Add an A record:
     - Type: A
     - Name: @ (or www)
     - Value: YOUR_STATIC_IP
     - TTL: 3600 (1 hour)

2. **Install Nginx (Reverse Proxy)**
```bash
# Install Nginx
sudo apt-get install -y nginx

# Copy configuration
sudo cp /var/www/kaiten-software/.lightsail/nginx.conf /etc/nginx/sites-available/kaiten-software

# Edit server_name with your domain
sudo nano /etc/nginx/sites-available/kaiten-software
# Change this line:
#   server_name your-domain.com www.your-domain.com;
# To:
#   server_name kaitensoftware.com www.kaitensoftware.com;
# Press Ctrl+X, then Y, then Enter to save

# Enable the site
sudo ln -s /etc/nginx/sites-available/kaiten-software /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

3. **Setup SSL Certificate (HTTPS)**
```bash
# Install Certbot
sudo apt-get install -y certbot python3-certbot-nginx

# Get SSL certificate (replace with your domain)
sudo certbot --nginx -d kaitensoftware.com -d www.kaitensoftware.com

# Follow the prompts:
# - Enter your email
# - Agree to terms
# - Choose whether to redirect HTTP to HTTPS (recommended: Yes)

# Test auto-renewal
sudo certbot renew --dry-run
```

4. **Access your site**
```
https://kaitensoftware.com
```

## Useful Commands

### Check Application Status
```bash
pm2 status                    # Show all processes
pm2 logs kaiten-software      # View logs
pm2 restart kaiten-software   # Restart app
pm2 stop kaiten-software      # Stop app
pm2 delete kaiten-software    # Remove from PM2
```

### System Monitoring
```bash
pm2 monit                     # Real-time monitoring
free -h                       # Memory usage
df -h                         # Disk usage
htop                          # System resources (install: sudo apt install htop)
```

### Update Application
```bash
# Upload new deployment package
# scp new-package.tar.gz ubuntu@YOUR_IP:/home/ubuntu/

# On server:
cd /var/www/kaiten-software
pm2 stop kaiten-software
tar -xzf ~/new-package.tar.gz
npm install --production
pm2 restart kaiten-software
```

## Troubleshooting

### Application won't start
```bash
# Check logs
pm2 logs kaiten-software --err

# Check if port 3000 is in use
sudo lsof -i :3000

# Kill process on port 3000 if needed
sudo kill -9 $(sudo lsof -t -i:3000)

# Restart
pm2 restart kaiten-software
```

### Can't access website
```bash
# Check if application is running
pm2 status

# Check firewall rules in Lightsail console
# Make sure TCP 3000, 80, 443 are open

# Test locally
curl http://localhost:3000

# Check Nginx (if using domain)
sudo systemctl status nginx
sudo nginx -t
```

### Out of memory
```bash
# Check memory usage
free -h

# Restart application
pm2 restart kaiten-software

# Or upgrade your Lightsail instance to $10/month plan
```

## Security Checklist

✅ Change SSH port (optional): `sudo nano /etc/ssh/sshd_config`
✅ Enable firewall: Already configured in Lightsail
✅ Setup SSL/HTTPS: Use Let's Encrypt (free)
✅ Regular updates: `sudo apt-get update && sudo apt-get upgrade`
✅ Enable automatic snapshots in Lightsail console
✅ Use strong passwords for any admin interfaces

## Cost Breakdown

- **Lightsail Instance**: $5/month (1GB RAM)
- **Static IP**: Free (while attached to instance)
- **Data Transfer**: 2TB included
- **Domain**: $10-15/year (if you buy one)
- **SSL Certificate**: Free (Let's Encrypt)

**Total: $5/month** 💰

## Backup Strategy

1. **Enable Automatic Snapshots**
   - Go to Lightsail console → Your instance
   - Click "Snapshots" tab
   - Enable automatic snapshots
   - Recommended: Daily snapshots, 7-day retention

2. **Manual Snapshot Before Updates**
```bash
# In Lightsail console:
# Instance → Snapshots → Create snapshot
# Name: kaiten-before-update-2025-01-XX
```

## Support

- 📧 AWS Support: https://console.aws.amazon.com/support/
- 📚 Lightsail Docs: https://lightsail.aws.amazon.com/ls/docs/
- 💬 PM2 Docs: https://pm2.keymetrics.io/docs/

---

## Quick Reference

**Your Deployment Package**: `kaiten-deployment-20251013-000125.tar.gz`
**Size**: 334KB
**Instance Type**: Ubuntu 22.04 LTS
**Recommended Plan**: $5/month (1GB RAM)

**Upload Command**:
```bash
scp -i ~/Downloads/LightsailDefaultKey-*.pem \
  kaiten-deployment-20251013-000125.tar.gz \
  ubuntu@YOUR_IP:/home/ubuntu/
```

**Start Command** (on server):
```bash
cd /var/www/kaiten-software
pm2 start ecosystem.config.js
pm2 save
```

---

🎉 **Congratulations! You're ready to deploy Kaiten Software to AWS Lightsail!**

Need help? The DEPLOYMENT.md file has even more detailed instructions.
