# Student Portfolio with Netlify CMS

A modern, responsive student portfolio website with integrated Netlify CMS for easy content management. Perfect for showcasing your projects, skills, and blog posts.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Content Management**: Easy-to-use Netlify CMS for managing content
- **Project Showcase**: Dedicated section for displaying your work
- **Blog Integration**: Share your thoughts and experiences
- **Contact Form**: Let visitors get in touch with you
- **SEO Optimized**: Built with search engine optimization in mind
- **Fast Loading**: Optimized performance and loading times

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- Git
- A Netlify account (for CMS functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd student-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view your portfolio

## 📁 Project Structure

```
student-portfolio/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # Stylesheet
├── js/
│   └── script.js           # JavaScript functionality
├── admin/
│   ├── index.html          # Netlify CMS admin interface
│   └── config.yml          # CMS configuration
├── _projects/              # Project markdown files
├── _posts/                 # Blog post markdown files
├── _data/                  # Site configuration files
├── images/                 # Image assets
└── netlify.toml           # Netlify deployment config
```

## 🎨 Customization

### Personal Information

1. **Update site settings**: Edit `_data/settings.yml`
2. **Modify about page**: Edit `_data/about.yml`
3. **Update contact info**: Edit `_data/contact.yml`
4. **Replace placeholder images**: Add your photos to the `images/` folder

### Content Management

Access the CMS at `/admin` after deployment to:
- Add and edit projects
- Write and publish blog posts
- Update your about information
- Manage site settings

### Styling

The website uses CSS custom properties for easy theming. Main colors can be changed in the `:root` section of `css/style.css`.

## 🌐 Deployment

### Deploy to Netlify

1. **Connect your repository** to Netlify
2. **Set build settings**:
   - Build command: `echo 'Build complete'`
   - Publish directory: `.`
3. **Enable Netlify Identity** for CMS authentication
4. **Configure Git Gateway** in Netlify Identity settings

### Enable CMS Access

1. Go to your Netlify site dashboard
2. Navigate to Identity > Settings
3. Enable Git Gateway
4. Add users who should have CMS access

## 📝 Adding Content

### Projects

Create a new file in `_projects/` with the following format:

```markdown
---
title: "Project Name"
description: "Brief project description"
image: "/images/project-image.jpg"
technologies: ["React", "Node.js", "MongoDB"]
demo_url: "https://your-demo.com"
github_url: "https://github.com/username/project"
featured: true
date: 2024-03-15T10:00:00.000Z
---

# Project Details

Your detailed project description goes here...
```

### Blog Posts

Create a new file in `_posts/` with the following format:

```markdown
---
title: "Blog Post Title"
date: 2024-03-15T10:00:00.000Z
image: "/images/blog-image.jpg"
excerpt: "Brief description of the post"
tags: ["web development", "tutorial"]
---

# Blog Post Content

Your blog post content goes here...
```

## 🛠 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

### Adding New Sections

1. Add HTML structure to `index.html`
2. Add corresponding styles to `css/style.css`
3. Add any interactive functionality to `js/script.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- CMS powered by [Netlify CMS](https://www.netlifycms.org/)

---

**Happy coding!** 🚀

If you found this helpful, please consider giving it a ⭐ on GitHub!
