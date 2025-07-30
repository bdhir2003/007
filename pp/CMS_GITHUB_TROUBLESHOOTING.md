# Netlify CMS GitHub Integration Troubleshooting

## Issue: Content created in CMS not appearing in GitHub repository

### Step-by-Step Diagnosis:

1. **Check Your Netlify Site URL:**
   - Go to your Netlify Dashboard
   - Find your actual site URL (it might be different from bdhir2003-007.netlify.app)
   - Note the correct URL

2. **Update admin/config.yml with correct URL:**
   ```yaml
   site_url: https://YOUR-ACTUAL-SITE-URL.netlify.app
   display_url: https://YOUR-ACTUAL-SITE-URL.netlify.app
   ```

3. **Enable Git Gateway:**
   - Netlify Dashboard → Your Site → Settings → Identity
   - Make sure "Enable Identity" is ON
   - Scroll to "Services" section
   - Click "Enable Git Gateway"

4. **Create Admin User:**
   - Go to Identity tab in Netlify Dashboard
   - Click "Invite users"
   - Enter your email
   - Check email and accept invitation

5. **Test CMS Access:**
   - Go to https://your-site-url.netlify.app/admin/
   - Login with your credentials
   - Try creating a test project or blog post

### Common Error Messages and Solutions:

**"Unable to access git-gateway"**
- Solution: Enable Git Gateway in Netlify Identity settings

**"Not Authorized" or "Login Required"**
- Solution: Make sure you're invited as a user in Netlify Identity

**"Cannot save changes"**
- Solution: Check that Git Gateway is enabled and your GitHub repo permissions are correct

**"Site not found"**
- Solution: Update site_url in admin/config.yml with your actual Netlify URL

### Manual Test:

1. Create a simple test file through CMS
2. Check if it appears in your GitHub repository within a few minutes
3. If not, check Netlify Functions logs for errors

### Contact Info:

If issues persist, check:
- Netlify Dashboard → Functions → Deploy logs
- Browser console errors when using CMS
- GitHub repository permissions
