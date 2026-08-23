class WorkspaceView {
    static async render(container) {
        const { class: classLvl, subject, chapter: chapterId } = window.AppState.store.academic;

        if (!chapterId) {
            window.location.hash = '#explorer';
            return;
        }

        // Fetch data
        const data = await window.AppData.getCurriculum(classLvl, subject);
        const chapter = data.chapters.find(c => c.id === chapterId);

        if (!chapter) {
            container.innerHTML = `<h2 class="text-domain-alert">WORKSPACE CORRUPTED. MODULE NOT FOUND.</h2>`;
            return;
        }

        // Generate Topic List
        const topicsHtml = chapter.topics.map((topic, index) => {
            let icon = 'fa-book'; // default theory
            if (topic.type === 'simulation') icon = 'fa-play-circle text-domain-bio';
            if (topic.type === 'numerical') icon = 'fa-square-root-variable text-domain-che';

            return `
                <div class="sci-card" style="display: flex; justify-content: space-between; align-items: center; padding: var(--space-sm) var(--space-md); margin-bottom: var(--space-sm);">
                    <div style="display: flex; align-items: center; gap: var(--space-md);">
                        <div class="text-data text-muted" style="width: 24px;">${index + 1}.</div>
                        <div>
                            <h4 style="font-size: 1rem; font-weight: 500;">${topic.title}</h4>
                            <span class="sci-badge" style="font-size: 0.65rem; border: none; padding: 0;">TYPE: ${topic.type.toUpperCase()}</span>
                        </div>
                    </div>
                    <button class="sci-btn" onclick="console.log('Open Lesson: ${topic.id}')"><i class="fas ${icon}"></i> INIT</button>
                </div>
            `;
        }).join('');

        container.innerHTML = `
            <header style="margin-bottom: var(--space-xl);">
                <button class="sci-btn" style="margin-bottom: var(--space-md);" onclick="window.location.hash='#explorer'"><i class="fas fa-arrow-left"></i> BACK TO EXPLORER</button>
                <h1 class="text-display" style="font-size: 2rem;">${chapter.title}</h1>
                <p class="text-data text-muted">CHAPTER ${chapter.number} | ${chapter.description}</p>
            </header>

            <div class="app-layout" style="display: grid; grid-template-columns: 2fr 1fr; gap: var(--space-lg);">
                
                <!-- Main Topic Pathway -->
                <div>
                    <h3 class="text-display text-domain-phy" style="font-size: 1rem; margin-bottom: var(--space-md);">LEARNING PATHWAY</h3>
                    ${topicsHtml || '<p class="text-muted text-data">NO TOPICS DECRYPTED YET.</p>'}
                </div>

                <!-- Chapter Assessment Hub -->
                <div>
                    <h3 class="text-display text-domain-che" style="font-size: 1rem; margin-bottom: var(--space-md);">ASSESSMENT PROTOCOLS</h3>
                    <div class="sci-card" style="margin-bottom: var(--space-md);">
                        <h4 style="font-size: 1rem; margin-bottom: var(--space-xs);">Chapter Quiz</h4>
                        <p class="text-muted" style="font-size: 0.85rem; margin-bottom: var(--space-md);">Test your conceptual understanding.</p>
                        <button class="sci-btn" style="width: 100%;"><i class="fas fa-tasks"></i> LAUNCH QUIZ</button>
                    </div>
                    <div class="sci-card">
                        <h4 style="font-size: 1rem; margin-bottom: var(--space-xs);">Quick Revision</h4>
                        <p class="text-muted" style="font-size: 0.85rem; margin-bottom: var(--space-md);">Formula vault and definition summaries.</p>
                        <button class="sci-btn" style="width: 100%;"><i class="fas fa-bolt"></i> REVISE</button>
                    </div>
                </div>
            </div>
        `;
    }
}
