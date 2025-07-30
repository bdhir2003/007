#!/bin/bash

# Netlify CMS Local Development Setup Script

echo "🚀 Setting up Netlify CMS for local development..."

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "📦 Installing Netlify CLI..."
    npm install -g netlify-cli
else
    echo "✅ Netlify CLI is already installed"
fi

echo ""
echo "🔧 Next steps:"
echo "1. Run 'netlify login' to authenticate with Netlify"
echo "2. Run 'netlify link' to connect this project to your Netlify site"
echo "3. Run 'netlify dev' to start local development server with Identity"
echo ""
echo "📝 For complete setup instructions, see NETLIFY_CMS_SETUP.md"
echo ""
echo "🌐 After deployment, access your CMS at: https://your-site.netlify.app/admin/"
