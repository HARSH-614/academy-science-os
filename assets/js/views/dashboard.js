class DashboardView {
    static render(container) {
        // Read state
        const currentClass = window.AppState.store.academic.class;

        // If no class is selected in state, show Class Selector
        if (!currentClass) {
            this.renderClassSelector(container);
            return;
        }

        // If class is selected, show the personalized dashboard
        this.renderStudentDashboard(container, currentClass);
    }

    static renderClassSelector(container) {
        container.innerHTML = `
            <div style="max-width: 800px; margin: 0 auto; text-align: center; padding-top: var(--space-xl);">
                <h1 class="text-display" style="font-size: 2rem; margin-bottom: var(--space-sm);">SELECT YOUR ENVIRONMENT</h1>
                <p class="text-muted" style="margin-bottom: var(--space-xl);">Initialize your databanks for the current academic cycle.</p>
                
                <div class="grid-cards">
                    <button class="sci-card" onclick="DashboardView.selectClass(8)" data-domain="biology">
                        <i class="fas fa-seedling text-domain-bio" style="font-size: 2rem; margin-bottom: var(--space-md);"></i>
                        <h3 class="text-display">CLASS 8</h3>
                        <p class="text-data text-muted">Foundation Science</p>
                    </button>
                    
                    <button class="sci-card" onclick="DashboardView.selectClass(9)" data-domain="physics">
                        <i class="fas fa-atom text-domain-phy" style="font-size: 2rem; margin-bottom: var(--space-md);"></i>
                        <h3 class="text-display">CLASS 9</h3>
                        <p class="text-data text-muted">Concept Building</p>
                    </button>
                    
                    <button class="sci-card" onclick="DashboardView.selectClass(10)" data-domain="chemistry">
                        <i class="fas fa-flask text-domain-che" style="font-size: 2rem; margin-bottom: var(--space-md);"></i>
                        <h3 class="text-display">CLASS 10</h3>
                        <p class="text-data text-muted">Board Examination</p>
                    </button>
                </div>
            </div>
        `;
    }

    static selectClass(classNumber) {
        // Update global state
        window.AppState.updateAcademic('class', classNumber);
        // Re-render the dashboard
        const workspace = document.getElementById('workspace');
        this.render(workspace);
    }

    static renderStudentDashboard(container, currentClass) {
        container.innerHTML = `
            <header style="margin-bottom: var(--space-xl);">
                <h1 class="text-display" style="font-size: 2rem;">COMMAND CENTER</h1>
                <p class="text-data text-muted">ACTIVE ENVIRONMENT: CLASS ${currentClass} SCIENCE</p>
            </header>

            <div class="grid-cards" style="margin-bottom: var(--space-xl);">
                <!-- Continue Learning Card -->
                <div class="sci-card" data-domain="physics">
                    <span class="sci-badge" style="margin-bottom: var(--space-sm);">PRIORITY TASK</span>
                    <h3 class="text-display" style="margin-bottom: var(--space-xs); font-size: 1.2rem;">Motion: Velocity</h3>
                    <p class="text-muted" style="margin-bottom: var(--space-md); font-size: 0.9rem;">Continue from your last session.</p>
                    <button class="sci-btn primary" data-domain="physics">RESUME MODULE</button>
                </div>

                <!-- Simulation Recommendation -->
                <div class="sci-card" data-domain="chemistry">
                    <span class="sci-badge" style="margin-bottom: var(--space-sm);">SIMULATION LAB</span>
                    <h3 class="text-display" style="margin-bottom: var(--space-xs); font-size: 1.2rem;">State Changes</h3>
                    <p class="text-muted" style="margin-bottom: var(--space-md); font-size: 0.9rem;">Visualize latent heat dynamics.</p>
                    <button class="sci-btn" onclick="window.location.hash='#simulate'"><i class="fas fa-play"></i> LAUNCH</button>
                </div>
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-md);">
                <h2 class="text-display" style="font-size: 1.2rem;">DOMAIN QUICK LAUNCH</h2>
                <button class="sci-btn" style="font-size: 0.7rem; padding: 4px 8px;" onclick="DashboardView.selectClass(null)">CHANGE CLASS</button>
            </div>
            
            <div class="grid-cards">
                <a href="#explorer" class="sci-card" style="display: flex; align-items: center; gap: var(--space-md);">
                    <div style="background: rgba(0, 229, 255, 0.1); padding: var(--space-sm); border-radius: var(--radius-sm);"><i class="fas fa-atom text-domain-phy" style="font-size: 1.5rem;"></i></div>
                    <div><h3 class="text-display" style="font-size: 1rem;">PHYSICS</h3><span class="text-data text-muted">8 CHAPTERS</span></div>
                </a>
                <a href="#explorer" class="sci-card" style="display: flex; align-items: center; gap: var(--space-md);">
                    <div style="background: rgba(255, 170, 0, 0.1); padding: var(--space-sm); border-radius: var(--radius-sm);"><i class="fas fa-flask text-domain-che" style="font-size: 1.5rem;"></i></div>
                    <div><h3 class="text-display" style="font-size: 1rem;">CHEMISTRY</h3><span class="text-data text-muted">6 CHAPTERS</span></div>
                </a>
                <a href="#explorer" class="sci-card" style="display: flex; align-items: center; gap: var(--space-md);">
                    <div style="background: rgba(0, 255, 136, 0.1); padding: var(--space-sm); border-radius: var(--radius-sm);"><i class="fas fa-dna text-domain-bio" style="font-size: 1.5rem;"></i></div>
                    <div><h3 class="text-display" style="font-size: 1rem;">BIOLOGY</h3><span class="text-data text-muted">7 CHAPTERS</span></div>
                </a>
            </div>
        `;
    }
}
