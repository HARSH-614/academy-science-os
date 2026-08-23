class NexusRouter {
    constructor() {
        this.routes = {
            '#dashboard': this.renderDashboard,
            '#explorer': this.renderExplorer,
            '#workspace': this.renderWorkspace
        };
        
        window.addEventListener('hashchange', () => this.handleRoute());
    }

    handleRoute() {
        const hash = window.location.hash || '#dashboard';
        const routeAction = this.routes[hash];
        const workspace = document.getElementById('workspace');

        // Clear current workspace safely
        workspace.innerHTML = ''; 

        if (routeAction) {
            routeAction(workspace);
        } else {
            workspace.innerHTML = '<h2>Module Not Found</h2>';
        }
    }

    renderDashboard(container) {
        container.innerHTML = '<h1 style="font-family: var(--font-heading);">COMMAND DASHBOARD</h1><p>Welcome to Science Nexus.</p>';
        // Logic to inject the Dashboard Components will go here (Prompt 3)
    }

    renderExplorer(container) {
        container.innerHTML = '<h1 style="font-family: var(--font-heading);">SUBJECT EXPLORER</h1>';
    }

    renderWorkspace(container) {
        container.innerHTML = '<h1 style="font-family: var(--font-heading);">CHAPTER WORKSPACE</h1>';
    }
}

window.AppRouter = new NexusRouter();
