#!/bin/bash

# Hostinger Deployment Script for Kaiten Website
# This script builds the project and prepares it for Hostinger deployment

set -e  # Exit on error

echo "🚀 Starting Hostinger deployment preparation..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Clean previous builds
echo -e "${YELLOW}📦 Cleaning previous builds...${NC}"
rm -rf dist/

# Step 2: Build the project
echo -e "${YELLOW}🔨 Building the project...${NC}"
npm run build

# Step 3: Copy .htaccess to build directory
echo -e "${YELLOW}📋 Copying .htaccess to build directory...${NC}"
if [ -f ".htaccess" ]; then
  cp .htaccess dist/public/.htaccess
  echo -e "${GREEN}✓ .htaccess copied${NC}"
else
  echo -e "${RED}✗ .htaccess file not found!${NC}"
  exit 1
fi

# Step 4: Create a deployment package
echo -e "${YELLOW}📦 Creating deployment package...${NC}"
cd dist/public
zip -r ../../hostinger-deployment.zip . -x "*.DS_Store"
cd ../..

echo -e "${GREEN}✅ Build complete!${NC}"
echo ""
echo "📂 Your deployment files are ready in: ${YELLOW}dist/public/${NC}"
echo "📦 Deployment package created: ${YELLOW}hostinger-deployment.zip${NC}"
echo ""
echo "Next steps:"
echo "1. Go to Hostinger File Manager"
echo "2. Navigate to public_html directory"
echo "3. Delete all existing files (backup first if needed)"
echo "4. Upload all files from dist/public/ OR extract hostinger-deployment.zip"
echo "5. Verify file permissions (644 for files, 755 for folders)"
echo ""
echo "OR if you have SSH access:"
echo "  scp hostinger-deployment.zip user@yourserver.com:~/"
echo "  ssh user@yourserver.com"
echo "  cd ~/public_html && rm -rf * && unzip ~/hostinger-deployment.zip"
echo ""
