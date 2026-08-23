class NexusDataManager {
    constructor() {
        this.cache = new Map();
    }

    /**
     * Fetches curriculum data based on class and subject.
     * @param {number} classLevel - e.g., 9
     * @param {string} subject - e.g., 'physics'
     * @returns {Promise<Object>} The curriculum JSON
     */
    async getCurriculum(classLevel, subject) {
        const cacheKey = `c${classLevel}_${subject}`;
        
        // Return from memory cache if available
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }

        try {
            // Construct the path (e.g., assets/data/curriculum/class9-physics.json)
            const response = await fetch(`assets/data/curriculum/class${classLevel}-${subject}.json`);
            
            if (!response.ok) throw new Error(`Databank unavailable: ${response.status}`);
            
            const data = await response.json();
            this.cache.set(cacheKey, data); // Store in cache
            return data;
            
        } catch (error) {
            console.error('[DATA ENGINE]', error);
            return null; // Graceful degradation handled by the view
        }
    }
}

window.AppData = new NexusDataManager();
