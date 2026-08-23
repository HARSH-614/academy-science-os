/**
 * ROUTING FOUNDATION
 * Minimal client-side router to handle SPA navigation.
 */
import { siteConfig } from './config/siteConfig.js';
import { $ } from './utils/helpers.js';

class AppRouter {
    constructor() {
        this.routes = {};
        this.appRoot = $('#app-root');
        
        // Listen for navigation events
        window.addEventListener('popstate', this.handleRoute.bind(this));
        
        // Log initialization in dev mode
        if (siteConfig.app.environment === 'development') {
            console.log(`[Router] Initialized ${siteConfig.app.name} Core`);
        }
    }

    addRoute(path, renderFunction) {
        this.routes[path] = renderFunction;
    }

    async handleRoute() {
        const path = window.location.pathname;
        const route = this.routes[path] || this.routes['/404'] || this.defaultRoute;
        
        if (route) {
            this.appRoot.innerHTML = ''; // Clear current view
            const view = await route();
            if (view) this.appRoot.appendChild(view);
        }
    }

    defaultRoute() {
        const div = document.createElement('div');
        div.innerHTML = `<h1>System Initialized</h1><p>Ready for Step 02: Design System.</p>`;
        return div;
    }
    
    init() {
        this.handleRoute();
    }
}

export const router = new AppRouter();
router.init();
