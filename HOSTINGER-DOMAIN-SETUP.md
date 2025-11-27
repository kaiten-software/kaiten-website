# Pointing Your Hostinger Domain to AWS Server

Your AWS Server IP: **43.205.85.113**

## Step 1: Access Hostinger DNS Settings

1. **Login to Hostinger**: https://www.hostinger.com/
2. Go to **"Domains"** section
3. Find your domain (e.g., `kaitensoftware.com`)
4. Click **"Manage"** or **"DNS Settings"**

## Step 2: Update DNS Records

### Option A: Point Main Domain (kaitensoftware.com)

1. Find the **A Record** with:
   - **Type**: A
   - **Name**: @ (or leave blank)
   
2. Edit it to:
   - **Type**: A
   - **Name**: @ (or blank)
   - **Points to**: `43.205.85.113`
   - **TTL**: 14400 (or leave default)

### Option B: Point www Subdomain (www.kaitensoftware.com)

1. Find or create an **A Record**:
   - **Type**: A
   - **Name**: www
   - **Points to**: `43.205.85.113`
   - **TTL**: 14400

### Recommended: Point Both

Create/Update these two records:

```
Type    Name    Points to         TTL
A       @       43.205.85.113    14400
A       www     43.205.85.113    14400
```

## Step 3: Save Changes

1. Click **"Save"** or **"Add Record"** / **"Update Record"**
2. DNS changes can take **15 minutes to 48 hours** to propagate
3. Usually it's ready in **30 minutes - 2 hours**

## Step 4: Install Nginx on AWS Server

Once DNS is pointing, you need to configure Nginx to serve your site on port 80 (HTTP):

```bash
# SSH to your server
ssh -i /Users/rs/Documents/code/Koristu_Udit/koristu_main.pem ubuntu@43.205.85.113

# Install Nginx
sudo apt-get update
sudo apt-get install -y nginx

# Create Nginx configuration
sudo nano /etc/nginx/sites-available/kaitensoftware
```

Paste this configuration (replace `kaitensoftware.com` with your actual domain):

```nginx
server {
    listen 80;
    server_name kaitensoftware.com www.kaitensoftware.com;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/javascript application/json;

    # Proxy to Node.js application on port 3000
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

Save and exit (Ctrl+X, then Y, then Enter)

## Step 5: Enable the Site

```bash
# Create symbolic link to enable site
sudo ln -s /etc/nginx/sites-available/kaitensoftware /etc/nginx/sites-enabled/

# Remove default site (optional, if you don't have other sites)
# sudo rm /etc/nginx/sites-enabled/default

# Test Nginx configuration
sudo nginx -t

# If test passes, restart Nginx
sudo systemctl restart nginx

# Enable Nginx to start on boot
sudo systemctl enable nginx
```

## Step 6: Configure AWS Security Groups

Make sure these ports are open in your AWS Security Group:

1. Go to **AWS EC2 Console**: https://console.aws.amazon.com/ec2/
2. Click **"Security Groups"**
3. Select your instance's security group
4. Click **"Edit inbound rules"**
5. Ensure these rules exist:

```
Type          Port    Source          Description
SSH           22      My IP           SSH access
HTTP          80      0.0.0.0/0       Website HTTP
HTTPS         443     0.0.0.0/0       Website HTTPS (for future SSL)
Custom TCP    3000    127.0.0.1/32    Node.js (localhost only)
```

## Step 7: Test Your Domain

After DNS propagates (wait 30 mins - 2 hours):

1. **Test DNS propagation**: 
   - Visit: https://www.whatsmydns.net/
   - Enter your domain
   - Should show: `43.205.85.113`

2. **Test website**:
   - Visit: `http://kaitensoftware.com`
   - Should show your website!

3. **Test www subdomain**:
   - Visit: `http://www.kaitensoftware.com`
   - Should also work!

## Step 8: Setup SSL Certificate (HTTPS) - Optional but Recommended

Once your domain is working on HTTP, add SSL:

```bash
# Install Certbot
sudo apt-get install -y certbot python3-certbot-nginx

# Get SSL certificate (replace with your domain)
sudo certbot --nginx -d kaitensoftware.com -d www.kaitensoftware.com

# Follow the prompts:
# 1. Enter your email
# 2. Agree to terms
# 3. Choose to redirect HTTP to HTTPS (recommended)

# Test auto-renewal
sudo certbot renew --dry-run
```

After SSL is installed, your site will be available at:
- **https://kaitensoftware.com** ✅
- **https://www.kaitensoftware.com** ✅

## Quick Reference Commands

```bash
# SSH to server
ssh -i /Users/rs/Documents/code/Koristu_Udit/koristu_main.pem ubuntu@43.205.85.113

# Check Nginx status
sudo systemctl status nginx

# Restart Nginx
sudo systemctl restart nginx

# View Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Check if domain resolves
nslookup kaitensoftware.com

# Test website locally
curl http://localhost:3000
curl http://kaitensoftware.com
```

## Troubleshooting

### Domain not resolving:
- Wait longer (DNS can take up to 48 hours)
- Clear your DNS cache: `sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder` (macOS)
- Check DNS: `dig kaitensoftware.com` or use https://www.whatsmydns.net/

### Nginx errors:
```bash
sudo nginx -t                              # Test config
sudo tail -f /var/log/nginx/error.log     # View errors
sudo systemctl restart nginx               # Restart
```

### Site not loading:
```bash
# Check if app is running
pm2 status

# Check if Nginx is running
sudo systemctl status nginx

# Check ports
sudo lsof -i :80
sudo lsof -i :3000
```

## Important Notes

⚠️ **Do NOT remove or modify other Nginx configurations** - This setup creates a new site config without touching existing ones.

✅ **Nginx will proxy to your Node.js app** - Your app stays on port 3000, Nginx serves it on port 80/443

✅ **SSL is recommended** - Free with Let's Encrypt (Certbot)

## Summary

1. ✅ Update Hostinger DNS A records to `43.205.85.113`
2. ✅ Wait 30 mins - 2 hours for DNS propagation
3. ✅ Install and configure Nginx on AWS
4. ✅ Open ports 80 and 443 in AWS Security Group
5. ✅ Test domain access
6. ✅ Install SSL certificate with Certbot

After completing these steps, your website will be live at your custom domain! 🎉
