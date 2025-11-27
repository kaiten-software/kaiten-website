#!/bin/bash
# AWS Lightsail startup script for Kaiten Software

# Update system
sudo apt-get update
sudo apt-get upgrade -y

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally for process management
sudo npm install -g pm2

# Create application directory
sudo mkdir -p /var/www/kaiten-software
sudo chown -R ubuntu:ubuntu /var/www/kaiten-software

# Navigate to app directory
cd /var/www/kaiten-software

# Install dependencies
npm install --production

# Start the application with PM2
pm2 start dist/index.js --name kaiten-software
pm2 save
pm2 startup

# Configure PM2 to restart on reboot
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u ubuntu --hp /home/ubuntu

echo "Deployment complete! Application is running on port 3000"
