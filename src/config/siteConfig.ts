export const siteConfig = {
  name: "S.Baruah Science Academy",
  shortName: "Science Academy",
  version: "2.0.0",
  developer: "S. Baruah",
  
  // Main navigation for desktop sidebar and mobile bottom nav
  navigation: [
    { id: 'home', label: 'Home', path: '/', icon: 'Home' },
    { id: 'class8', label: 'Class 8', path: '/class-8', icon: 'BookOpen' },
    { id: 'class9', label: 'Class 9', path: '/class-9', icon: 'Atom' },
    { id: 'quiz', label: 'Quiz', path: '/quiz', icon: 'BrainCircuit' },
    { id: 'progress', label: 'Progress', path: '/progress', icon: 'Activity' },
  ],

  // Theme Configuration
  themes: [
    { id: 'dark', label: 'Dark Science' },
    { id: 'light', label: 'Light' },
    { id: 'quantum', label: 'Quantum' }
  ]
};
