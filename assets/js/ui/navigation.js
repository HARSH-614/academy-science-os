/**
 * SCIENCE NEXUS 2.0 - NAVIGATION CONTROLLER
 * Handles route active states and mobile menu toggles.
 */
class NavigationController {
    constructor() {
        this.navLinks = document.querySelectorAll('.nav-link, .bottom-nav-link');
        this.defaultRoute = '#/dashboard';
        
        this.init();
    }

    init() {
        // Listen for URL hash changes
        window.addEventListener('hashchange', () => this.handleRouteChange());
        
        // Ensure correct state on initial load
        this.handleRouteChange();
    }

    handleRouteChange() {
        // Get current hash, fallback to default
        let currentHash = window.location.hash;
        if (!currentHash || currentHash === '#') {
            currentHash = this.defaultRoute;
            // We use replaceState to avoid cluttering history if landing on root
            window.history.replaceState(null, null, currentHash);
        }

        // Update active class on all navigation links
        this.navLinks.forEach(link => {
            link.classList.remove('active');
            
            // Check if the link's href matches the current hash
            const linkHref = link.getAttribute('href');
            if (linkHref === currentHash) {
                link.classList.add('active');
            }
        });

        // Broadcast route change for future modules (like Chapter Engine) to load content
        window.dispatchEvent(new CustomEvent('nexusRouteChange', {
            detail: { route: currentHash }
        }));
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.NexusNavigation = new NavigationController();
});
