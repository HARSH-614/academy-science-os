class ExplorerView {
    static async render(container) {
        const currentClass = window.AppState.store.academic.class;
        
        if (!currentClass) {
            container.innerHTML = `
                <div style="text-align: center; padding-top: var(--space-xl);">
                    <i class="fas fa-exclamation-triangle text-domain-alert" style="font-size: 3rem; margin-bottom: var(--space-md);"></i>
                    <h2 class="text-display" style="font-size: 1.5rem;">NO ENVIRONMENT SELECTED</h2>
                    <p class="text-muted" style="margin-top: var(--space-sm);">Please select your class from the Command Center first.</p>
                    <button class="sci-btn" style="margin-top: var(--space-lg);" onclick="window.location.hash='#dashboard'">RETURN TO DASHBOARD</button>
                </div>`;
            return;
        }

        // Determine current subject or default to physics
        const subject = window.AppState.store.academic.subject || 'physics';

        // Build the Subject Selector Header
        let html = `
            <header style="margin-bottom: var(--space-xl); display: flex; justify-content: space-between; align-items: flex-end;">
                <div>
                    <h1 class="text-display" style="font-size: 2rem;">SUBJECT EXPLORER</h1>
                    <p class="text-data text-muted">CLASS ${currentClass} DATABANKS</p>
                </div>
                <div style="display: flex; gap: var(--space-sm);">
                    <button class="sci-btn ${subject === 'physics' ? 'primary' : ''}" data-domain="physics" onclick="ExplorerView.selectSubject('physics')">PHYSICS</button>
                    <button class="sci-btn ${subject === 'chemistry' ? 'primary' : ''}" data-domain="chemistry" onclick="ExplorerView.selectSubject('chemistry')">CHEMISTRY</button>
                    <button class="sci-btn ${subject === 'biology' ? 'primary' : ''}" data-domain="biology" onclick="ExplorerView.selectSubject('biology')">BIOLOGY</button>
                </div>
            </header>
            <div id="explorer-grid" class="grid-cards">
                <div class="text-data text-muted"><i class="fas fa-spinner fa-spin"></i> ESTABLISHING DATALINK...</div>
            </div>
        `;
        container.innerHTML = html;

        // Fetch Data and Render Cards
        const grid = document.getElementById('explorer-grid');
        const data = await window.AppData.getCurriculum(currentClass, subject);

        if (!data) {
            grid.innerHTML = `<p class="text-domain-alert text-data">ERROR: UNABLE TO DECRYPT SUBJECT PAYLOAD.</p>`;
            return;
        }

        // Map JSON Chapters to UI Cards
        grid.innerHTML = data.chapters.map(chapter => `
            <div class="sci-card" data-domain="${subject}">
                <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: var(--space-xs);">
                    <span class="text-data text-muted">CHAPTER ${chapter.number}</span>
                    <span class="sci-badge">${chapter.id.toUpperCase()}</span>
                </div>
                <h3 class="text-display" style="font-size: 1.2rem; margin-bottom: var(--space-sm);">${chapter.title}</h3>
                <p class="text-muted" style="font-size: 0.9rem; margin-bottom: var(--space-md); flex-grow: 1;">${chapter.description}</p>
                
                <div style="display: flex; gap: var(--space-xs); margin-bottom: var(--space-lg);">
                    <span class="text-data text-muted" style="font-size: 0.75rem;"><i class="fas fa-layer-group"></i> ${chapter.metrics.topics} TOPICS</span>
                    <span class="text-data text-muted" style="font-size: 0.75rem;"><i class="fas fa-flask"></i> ${chapter.metrics.simulations} SIMS</span>
                </div>
                
                <button class="sci-btn primary" data-domain="${subject}" style="width: 100%;" onclick="ExplorerView.openWorkspace('${chapter.id}')">
                    ENTER WORKSPACE <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `).join('');
    }

    static selectSubject(subject) {
        window.AppState.updateAcademic('subject', subject);
        window.AppRouter.handleRoute(); // Re-render
    }

    static openWorkspace(chapterId) {
        window.AppState.updateAcademic('chapter', chapterId);
        window.location.hash = '#workspace';
    }
}
