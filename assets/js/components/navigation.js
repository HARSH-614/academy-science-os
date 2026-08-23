class NavigationSystem {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        this.init();
    }

    init() {
        // Update active states when the URL hash changes
        window.addEventListener('hashchange', () => this.updateActiveState());
        // Run once on boot
        this.updateActiveState();
    }

    updateActiveState() {
        const hash = window.location.hash || '#dashboard';
        
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            // Check if the link's href matches the current hash
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.NavSystem = new NavigationSystem();
});
