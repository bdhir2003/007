# Netlify CMS Setup Instructions

Follow these steps to set up Netlify CMS for your student portfolio:

## 1. Deploy to Netlify

### Option A: Deploy from GitHub
1. Push your code to a GitHub repository
2. Go to [Netlify](https://netlify.com) and sign up/login
3. Click "New site from Git"
4. Connect your GitHub account and select your repository
5. Set build settings:
   - **Build command:** `echo 'Build complete'`
   - **Publish directory:** `.`
6. Click "Deploy site"

### Option B: Drag and Drop Deploy
1. Create a zip file of your project folder
2. Go to [Netlify](https://netlify.com) and drag the zip file to deploy

## 2. Enable Netlify Identity

1. Go to your site dashboard on Netlify
2. Navigate to **Identity** tab
3. Click **"Enable Identity"**
4. In Identity settings:
   - **Registration preferences:** Set to "Invite only" (recommended)
   - **External providers:** Enable GitHub, Google, etc. (optional)

## 3. Configure Git Gateway

1. Still in the Identity section, go to **"Settings and usage"**
2. Scroll down to **"Git Gateway"**
3. Click **"Enable Git Gateway"**
4. This allows the CMS to commit directly to your repository

## 4. Add Users

1. In the Identity section, click **"Invite users"**
2. Enter your email address
3. Set role to **"admin"** or leave blank
4. Click **"Send"**
5. Check your email and accept the invitation

## 5. Access Your CMS

1. Go to `https://your-site-name.netlify.app/admin/`
2. Log in with your Netlify Identity credentials
3. Start managing your content!

## 6. Customizing the CMS

The CMS configuration is in `/admin/config.yml`. You can modify:

- **Collections:** Add/remove content types
- **Fields:** Customize form fields for each content type  
- **Widgets:** Change input types (text, image, markdown, etc.)
- **Media:** Configure where images are stored

## 7. Content Management

### Adding Projects
1. Go to CMS → Projects → New Project
2. Fill in the project details
3. Upload project images
4. Save and publish

### Writing Blog Posts
1. Go to CMS → Blog Posts → New Blog Post  
2. Write your content in Markdown
3. Add featured images
4. Set publish date
5. Save and publish

### Updating Site Settings
1. Go to CMS → Pages → Site Settings
2. Update your name, title, description
3. Upload profile images
4. Save changes

## 8. Local Development with CMS

To test the CMS locally:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Link your local project
netlify link

# Start local development with Identity
netlify dev
```

## Troubleshooting

### CMS not loading
- Check that Identity is enabled
- Verify Git Gateway is configured
- Ensure you're accessing `/admin/` with trailing slash

### Can't log in
- Check that you've accepted the email invitation
- Try clearing browser cache
- Verify you're using the correct email

### Changes not appearing
- Check that Git Gateway is enabled
- Verify the CMS is committing to the right branch
- Allow a few minutes for deployment

## Security Notes

- Keep "Registration" set to "Invite only"
- Regularly review user access
- Use strong passwords
- Enable 2FA on your Netlify account

## Next Steps

Once set up, you can:
- Customize the CMS configuration
- Add more content types
- Integrate with external services
- Set up form handling for contact forms
- Add analytics and SEO tools

Happy content managing! 🚀
