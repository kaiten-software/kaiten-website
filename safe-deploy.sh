#!/bin/bash
# Safe deployment script for Kaiten Software
# This will NOT modify existing nginx configurations or other sites

set -e  # Exit on any error

echo "🚀 Starting Kaiten Software deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "📦 Installing Node.js 20.x..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "✅ Node.js already installed: $(node --version)"
fi

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    sudo npm install -g pm2
else
    echo "✅ PM2 already installed: $(pm2 --version)"
fi

# Create application directory
echo "📁 Creating application directory..."
sudo mkdir -p /var/www/kaitensoftware
sudo chown -R ubuntu:ubuntu /var/www/kaitensoftware

# Extract deployment package
echo "📦 Extracting deployment package..."
cd /var/www/kaitensoftware
tar -xzf ~/kaiten-deployment-20251013-000125.tar.gz

# Install dependencies
echo "📦 Installing dependencies..."
npm install --production

# Create logs directory
mkdir -p logs

# Check if application is already running on port 3000
if sudo lsof -i :3000 &> /dev/null; then
    echo "⚠️  Port 3000 is in use. Checking if it's our app..."
    if pm2 list | grep -q "kaiten-software"; then
        echo "🔄 Restarting existing application..."
        pm2 restart kaiten-software
    else
        echo "❌ Port 3000 is used by another application!"
        echo "Please choose a different port or stop the other application."
        exit 1
    fi
else
    # Start the application
    echo "🚀 Starting application with PM2..."
    pm2 start ecosystem.config.js
    
    # Save PM2 configuration
    pm2 save
    
    # Setup PM2 to start on boot (only if not already configured)
    if ! sudo systemctl is-enabled pm2-ubuntu &> /dev/null; then
        echo "⚙️  Setting up PM2 auto-start..."
        pm2 startup | grep "sudo" | bash
    fi
fi

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📊 Application Status:"
pm2 status

echo ""
echo "🔗 Your application is running at:"
echo "   http://43.205.85.113:3000"
echo ""
echo "📝 Useful commands:"
echo "   pm2 status              - Check application status"
echo "   pm2 logs kaiten-software - View application logs"
echo "   pm2 restart kaiten-software - Restart application"
echo "   pm2 stop kaiten-software    - Stop application"
echo ""
echo "⚠️  Note: This deployment does NOT modify nginx or any existing sites."
echo "   If you want to use a domain, you'll need to manually configure nginx."
