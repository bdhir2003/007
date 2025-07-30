// Netlify Identity configuration for CMS access
(function() {
    // Initialize Netlify Identity
    if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", user => {
            // Redirect to admin if not logged in
            if (!user) {
                window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                });
            }
        });
    }

    // Handle CMS login from main site
    document.addEventListener('DOMContentLoaded', function() {
        const adminLink = document.querySelector('a[href="/admin/"]');
        if (adminLink) {
            adminLink.addEventListener('click', function(e) {
                e.preventDefault();
                if (window.netlifyIdentity) {
                    window.netlifyIdentity.open();
                } else {
                    window.location.href = '/admin/';
                }
            });
        }
    });
})();
