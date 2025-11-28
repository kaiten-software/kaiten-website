# Hostinger GitHub Auto-Deployment Setup

## 🚀 Step-by-Step Guide to Deploy from GitHub

### Step 1: Access GitHub Deployment in Hostinger

1. Log in to **Hostinger hPanel**
2. Navigate to **Advanced** → **Git**
3. Click **"Create New Repository"** or **"Connect Repository"**

### Step 2: Connect Your GitHub Repository

1. **Repository URL**: `https://github.com/kaiten-software/kaiten-website.git`
2. **Branch**: `main`
3. **Repository Path**: `/public_html`

### Step 3: Configure Build Settings

Since this is a Vite/React app, you MUST configure the build process:

#### Build Configuration:
```
Build Command: npm run build
Build Output Directory: dist/public
Deploy Path: public_html
```

### Step 4: Add Post-Deployment Script

Create a deployment script in Hostinger that runs after pulling from GitHub:

1. In the Git section, look for **"Post-Deployment Script"** or **"Deployment Commands"**
2. Add this script:

```bash
#!/bin/bash
# Install dependencies
npm install --production=false

# Build the project
npm run build

# Clear public_html and copy build files
rm -rf ~/public_html/*
cp -r ~/kaiten-website/dist/public/* ~/public_html/

# Copy .htaccess
cp ~/kaiten-website/.htaccess ~/public_html/

# Set correct permissions
find ~/public_html -type f -exec chmod 644 {} \;
find ~/public_html -type d -exec chmod 755 {} \;

echo "Deployment complete!"
```

### Step 5: Alternative - Manual Deployment

If Hostinger doesn't support automated builds, you can:

**Option A: Use SSH**
```bash
# SSH into your Hostinger server
ssh username@your-server.com

# Navigate to home directory
cd ~

# Clone or pull the repository
git clone https://github.com/kaiten-software/kaiten-website.git
# OR if already cloned: cd kaiten-website && git pull

# Install dependencies and build
cd kaiten-website
npm install
npm run build

# Deploy to public_html
rm -rf ~/public_html/*
cp -r dist/public/* ~/public_html/
cp .htaccess ~/public_html/

# Fix permissions
find ~/public_html -type f -exec chmod 644 {} \;
find ~/public_html -type d -exec chmod 755 {} \;
```

**Option B: GitHub Actions (Automated)**
If your Hostinger plan supports SSH, you can use GitHub Actions to auto-deploy on push.

### Step 6: Trigger Deployment

Once configured:
1. Any push to the `main` branch will trigger auto-deployment
2. Or click **"Pull Changes"** manually in Hostinger's Git section

### Important Notes for Hostinger:

✅ **What's Included:**
- `.htaccess` file (for React Router)
- Build configuration
- All necessary files

⚠️ **Common Issues:**

**Issue: Build fails**
- Ensure Node.js version is compatible (v18+ recommended)
- Check if Hostinger has enough memory for the build
- Verify `package.json` dependencies

**Issue: 403 Error persists**
- Verify `index.html` is in `public_html/` (not in a subdirectory)
- Check `.htaccess` is copied to `public_html/`
- Verify file permissions

**Issue: Routes don't work**
- Ensure `.htaccess` is present in `public_html/`
- Verify Apache mod_rewrite is enabled (usually is on Hostinger)

### Quick Deploy Command (SSH)

Save this as a script on your Hostinger server for quick deployments:

```bash
#!/bin/bash
cd ~/kaiten-website
git pull origin main
npm install
npm run build
rm -rf ~/public_html/*
cp -r dist/public/* ~/public_html/
cp .htaccess ~/public_html/
find ~/public_html -type f -exec chmod 644 {} \;
find ~/public_html -type d -exec chmod 755 {} \;
echo "✅ Deployment complete!"
```

### Verification Checklist

After deployment, verify:
- [ ] `public_html/index.html` exists
- [ ] `public_html/assets/` folder exists
- [ ] `public_html/.htaccess` exists
- [ ] Website loads at your domain
- [ ] All routes work (test navigation)
- [ ] Assets load correctly (images, CSS, JS)

### Your Repository Details:
- **GitHub URL**: https://github.com/kaiten-software/kaiten-website
- **Branch**: main
- **Build Output**: dist/public
- **Deploy Target**: public_html

---

## Need Help?

If you encounter issues:
1. Check Hostinger's deployment logs
2. Verify SSH access is enabled
3. Contact Hostinger support about Node.js availability
4. Check that your plan supports SSH/Git deployments
