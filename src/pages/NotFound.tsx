import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-6">
      <AlertCircle size={64} className="text-accent-danger opacity-80" />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-mono tracking-widest text-text-primary">404</h1>
        <h2 className="text-lg text-text-secondary">SYSTEM OVERRIDE: DATA NOT FOUND</h2>
      </div>
      <p className="text-sm text-text-muted max-w-sm">
        The educational sector you are attempting to access does not exist in the current database registry.
      </p>
      <Link 
        to="/"
        className="px-6 py-2 bg-accent-science text-white rounded-lg text-sm font-medium hover:bg-accent-science/90 transition-colors shadow-glow"
      >
        Return to Dashboard
      </Link>
    </div>
  );
}
