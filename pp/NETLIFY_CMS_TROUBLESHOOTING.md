# Netlify CMS Troubleshooting Guide

## Common Issues and Solutions

### 1. **"Cannot access CMS" or "Unauthorized" Error**

**Cause:** Netlify Identity is not properly configured

**Solution:**
1. Go to your Netlify dashboard
2. Select your site (007)
3. Go to Settings > Identity
4. Click "Enable Identity"
5. Under "Registration preferences", select "Invite only"
6. Under "Git Gateway", click "Enable Git Gateway"

### 2. **"Cannot find config.yml" Error**

**Cause:** CMS configuration file is missing or incorrect path

**Solution:**
- Ensure `/admin/config.yml` exists in your repository
- Check that the file is properly formatted (no syntax errors)

### 3. **"Cannot edit content" or "Save failed" Error**

**Cause:** Git Gateway not configured or repository permissions

**Solution:**
1. In Netlify Dashboard > Settings > Identity > Services
2. Enable "Git Gateway"
3. Ensure your GitHub account has write access to the repository

### 4. **"Cannot load CMS" or Blank Admin Page**

**Cause:** JavaScript conflicts or CDN issues

**Solution:**
- Check browser console for errors
- Ensure Netlify CMS scripts are loading properly
- Clear browser cache

### 5. **"Login required" but Login Doesn't Work**

**Cause:** Netlify Identity widget not properly initialized

**Solution:**
1. Check that `https://identity.netlify.com/v1/netlify-identity-widget.js` is loaded
2. Verify the site URL in `admin/config.yml` matches your Netlify site URL
3. Ensure Identity is enabled in Netlify settings

## Step-by-Step Setup Process

### After Deploying to Netlify:

1. **Enable Identity:**
   - Netlify Dashboard > Site Settings > Identity
   - Click "Enable Identity"

2. **Configure Registration:**
   - Set to "Invite only" for security
   - You can change this later if needed

3. **Enable Git Gateway:**
   - In Identity settings, scroll to "Services"
   - Click "Enable Git Gateway"

4. **Update Site URL:**
   - Update the `site_url` in `/admin/config.yml` with your actual Netlify URL
   - Format: `https://your-site-name.netlify.app`

5. **Create Admin User:**
   - Go to Identity tab in Netlify Dashboard
   - Click "Invite users"
   - Add your email address
   - Check your email and accept the invitation

6. **Access CMS:**
   - Go to `https://your-site-name.netlify.app/admin/`
   - Or click the "Admin" link in your portfolio navigation

## Testing Locally

To test CMS locally:

1. Enable local backend in `admin/config.yml`:
   ```yaml
   local_backend: true
   ```

2. Install and run the CMS proxy:
   ```bash
   npm install netlify-cms-proxy-server
   npx netlify-cms-proxy-server
   ```

3. Start your local development server:
   ```bash
   npm run dev
   ```

4. Access CMS at `http://localhost:3000/admin/`

## Contact for Support

If issues persist:
1. Check browser console for specific error messages
2. Verify all steps in this guide
3. Check Netlify CMS documentation: https://www.netlifycms.org/docs/
