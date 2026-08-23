class NexusState {
    constructor() {
        // Default initial state
        const initialState = {
            academic: { class: null, subject: null, chapter: null },
            student: { xp: 0, streak: 0, level: 1 },
            preferences: { theme: 'dark', reducedMotion: false }
        };

        // Attempt to load from LocalStorage
        const savedState = JSON.parse(localStorage.getItem('nexus_os_state')) || {};
        
        // Merge saved state with defaults
        this._data = { ...initialState, ...savedState };
        this.listeners = [];

        // Proxy to automatically trigger updates on state change
        this.store = new Proxy(this._data, {
            set: (target, property, value) => {
                target[property] = value;
                this.persist();
                this.notify(property, value);
                return true;
            }
        });
    }

    persist() {
        localStorage.setItem('nexus_os_state', JSON.stringify(this._data));
    }

    subscribe(callback) {
        this.listeners.push(callback);
    }

    notify(property, value) {
        this.listeners.forEach(listener => listener(property, value));
        // Also dispatch globally for loosely coupled components
        window.dispatchEvent(new CustomEvent('nexusStateChange', { 
            detail: { property, value } 
        }));
    }

    updateAcademic(domain, value) {
        this.store.academic = { ...this.store.academic, [domain]: value };
    }
}

window.AppState = new NexusState();
