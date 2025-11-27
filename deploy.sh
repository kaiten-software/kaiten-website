#!/bin/bash
# Quick deployment script for AWS Lightsail

echo "🚀 Preparing Kaiten Software for AWS Lightsail deployment..."

# Build the application
echo "📦 Building production bundle..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors and try again."
    exit 1
fi

# Create deployment package
echo "📦 Creating deployment package..."
tar -czf kaiten-deployment-$(date +%Y%m%d-%H%M%S).tar.gz \
    dist/ \
    package.json \
    package-lock.json \
    ecosystem.config.js \
    .lightsail/

echo "✅ Deployment package created!"
echo ""
echo "📋 Next steps:"
echo "1. Upload the tar.gz file to your Lightsail instance"
echo "2. Follow the instructions in DEPLOYMENT.md"
echo ""
echo "Quick upload command:"
echo "scp -i your-key.pem kaiten-deployment-*.tar.gz ubuntu@YOUR_IP:/home/ubuntu/"
echo ""
echo "🎉 Ready for deployment!"
