document.addEventListener('DOMContentLoaded', () => {
    // Phase 1: Simulate checking local storage, validating offline cache
    setTimeout(() => {
        const bootScreen = document.getElementById('boot-sequence');
        const appShell = document.getElementById('app-shell');
        
        // Phase 2: Fade out boot screen, reveal application
        bootScreen.style.opacity = '0';
        appShell.style.opacity = '1';
        
        setTimeout(() => {
            bootScreen.remove();
            // Initialize router to read current URL and paint workspace
            window.AppRouter.handleRoute();
        }, 500);
        
    }, 1200); // 1.2s minimum delay to establish presence
});
