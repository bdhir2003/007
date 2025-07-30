// Content Management System Integration
// This file handles loading content from Netlify CMS

class CMSContentLoader {
    constructor() {
        this.loadProjects();
        this.loadBlogPosts();
        this.loadSiteSettings();
    }

    // Load projects from markdown files
    async loadProjects() {
        try {
            // In a production setup, you might fetch from a JSON API or use build-time generation
            // For now, this serves as a placeholder for CMS integration
            console.log('Loading projects from CMS...');
            
            // Example of how you might load project data
            const projectsContainer = document.getElementById('projects-container');
            if (projectsContainer) {
                // Projects are already in HTML for now
                // In production, you'd fetch from your CMS API endpoint
                this.enhanceProjectCards();
            }
        } catch (error) {
            console.error('Error loading projects:', error);
        }
    }

    // Load blog posts from markdown files
    async loadBlogPosts() {
        try {
            console.log('Loading blog posts from CMS...');
            
            const blogContainer = document.getElementById('blog-container');
            if (blogContainer) {
                // Blog posts are already in HTML for now
                // In production, you'd fetch from your CMS API endpoint
                this.enhanceBlogCards();
            }
        } catch (error) {
            console.error('Error loading blog posts:', error);
        }
    }

    // Load site settings
    async loadSiteSettings() {
        try {
            console.log('Loading site settings from CMS...');
            // This would load from your CMS and update site title, description, etc.
        } catch (error) {
            console.error('Error loading site settings:', error);
        }
    }

    // Enhance project cards with additional functionality
    enhanceProjectCards() {
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            // Add entrance animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Enhance blog cards with additional functionality
    enhanceBlogCards() {
        const blogCards = document.querySelectorAll('.blog-card');
        blogCards.forEach((card, index) => {
            // Add entrance animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 200 + 300);
        });
    }
}

// Utility function to format dates
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

// Utility function to create project card HTML
function createProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image || '/images/project-placeholder.jpg'}" alt="${project.title}">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demo_url ? `<a href="${project.demo_url}" class="btn btn-small" target="_blank">Live Demo</a>` : ''}
                    ${project.github_url ? `<a href="${project.github_url}" class="btn btn-small btn-secondary" target="_blank">GitHub</a>` : ''}
                </div>
            </div>
        </div>
    `;
}

// Utility function to create blog card HTML
function createBlogCard(post) {
    return `
        <article class="blog-card">
            <div class="blog-image">
                <img src="${post.image || '/images/blog-placeholder.jpg'}" alt="${post.title}">
            </div>
            <div class="blog-content">
                <div class="blog-meta">
                    <span class="blog-date">${formatDate(post.date)}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <a href="/blog/${post.slug}.html" class="read-more">Read More</a>
            </div>
        </article>
    `;
}

// Initialize CMS content loader when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new CMSContentLoader();
});
