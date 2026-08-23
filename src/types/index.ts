// Core Data Models Foundation

export interface User {
  uid: string;
  email: string;
  displayName: string;
  role: 'student' | 'teacher' | 'admin' | 'guest';
}

export interface ClassLevel {
  id: string;
  name: string; // e.g., "Class 9"
  subjects: Subject[];
}

export interface Subject {
  id: string;
  name: string; // e.g., "Physics"
  icon: string;
}

export interface Chapter {
  id: string;
  classLevel: string;
  subject: string;
  chapterNumber: number;
  title: string;
  subtitle?: string;
  description: string;
  status: 'draft' | 'published';
  // Nested content ids
  sections: string[];
  formulas: string[];
  questions: string[];
  numericals: string[];
  simulations: string[];
}

export interface ThemeSettings {
  mode: 'dark' | 'light' | 'quantum' | 'deep-space';
  reduceMotion: boolean;
}
