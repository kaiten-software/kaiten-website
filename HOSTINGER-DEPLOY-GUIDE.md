# Hostinger Deployment Guide for Kaiten Website

## Issue: 403 Forbidden Error

### The Problem
Your React/Vite app builds to `dist/public` but Hostinger expects files in `public_html`.

### Solution Steps

#### 1. Build Your Project Locally
```bash
npm run build
```
This creates the production build in `dist/public/`

#### 2. Upload Files to Hostinger

**Option A: Using File Manager**
1. Go to Hostinger's hPanel → File Manager
2. Navigate to `public_html` directory
3. Delete any existing files in `public_html` (or backup first)
4. Upload ALL files from your local `dist/public/` folder:
   - `index.html`
   - `assets/` folder (contains all JS, CSS, images)
   - `.htaccess` file
   - Any other static files

**Option B: Using FTP/SFTP**
1. Connect via FTP client (FileZilla, etc.) using your Hostinger credentials
2. Navigate to `public_html`
3. Upload all contents from `dist/public/` to `public_html`

**Option C: Using GitHub Auto-Deploy**
If using Hostinger's Git deployment:
1. In hPanel → Git → Set deployment path to `public_html`
2. Add a build command: `npm run build`
3. Add a post-deployment script to move files:
   ```bash
   cp -r dist/public/* public_html/
   ```

#### 3. Verify File Permissions
In File Manager or via SSH:
- Files should be: `644` (rw-r--r--)
- Folders should be: `755` (rwxr-xr-x)

To fix permissions via SSH:
```bash
find public_html -type f -exec chmod 644 {} \;
find public_html -type d -exec chmod 755 {} \;
```

#### 4. Check .htaccess
The `.htaccess` file should be in `public_html/` and should contain the routing rules for React Router.

### Verification Checklist
- [ ] `public_html/index.html` exists
- [ ] `public_html/assets/` folder exists with JS/CSS files
- [ ] `public_html/.htaccess` exists
- [ ] File permissions are correct (644 for files, 755 for folders)
- [ ] Domain points to `public_html` directory
- [ ] Clear browser cache and test

### Common Issues

**Issue: Still getting 403**
- Check if `index.html` exists in `public_html` (not in a subfolder)
- Verify file permissions
- Check Hostinger error logs

**Issue: Page loads but routes don't work**
- Ensure `.htaccess` is uploaded
- Check if mod_rewrite is enabled (it usually is on Hostinger)

**Issue: Assets not loading**
- Check if `assets/` folder uploaded correctly
- Verify paths in browser console

### Quick Fix Command (if you have SSH access)
```bash
# Navigate to your project
cd ~/kaiten-website

# Build the project
npm run build

# Copy files to public_html
rm -rf ~/public_html/*
cp -r dist/public/* ~/public_html/
cp .htaccess ~/public_html/

# Fix permissions
chmod 644 ~/public_html/.htaccess
find ~/public_html -type f -exec chmod 644 {} \;
find ~/public_html -type d -exec chmod 755 {} \;
```

### Need Help?
If you're still seeing 403:
1. Check Hostinger's error logs in hPanel
2. Contact Hostinger support
3. Verify your domain DNS settings point to the correct server
