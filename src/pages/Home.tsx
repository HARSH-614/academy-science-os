import React from 'react';

export default function Home() {
  return (
    <div className="py-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      <header className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-text-primary md:text-4xl">
          Welcome to the Academy
        </h1>
        <p className="text-sm text-text-secondary md:text-base">
          Premium interactive science education platform. Initialize your learning sequence.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Placeholder Cards for Future Content */}
        <div className="glass-panel p-6 rounded-2xl border border-border/50 flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-accent-science/10 flex items-center justify-center text-accent-science font-bold">
            08
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-primary">Class 8 Science</h3>
            <p className="text-sm text-text-secondary mt-1">Explore chapters, concepts, and fundamentals.</p>
          </div>
          <button className="mt-2 w-full py-2 bg-surface-elevated hover:bg-accent-science hover:text-white text-text-primary rounded-lg transition-colors text-sm font-medium border border-border/50">
            Access Module
          </button>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-border/50 flex flex-col gap-4">
          <div className="w-12 h-12 rounded-xl bg-accent-secondary/10 flex items-center justify-center text-accent-secondary font-bold">
            09
          </div>
          <div>
            <h3 className="text-lg font-bold text-text-primary">Class 9 Science</h3>
            <p className="text-sm text-text-secondary mt-1">Advanced physics, chemistry, and biology.</p>
          </div>
          <button className="mt-2 w-full py-2 bg-surface-elevated hover:bg-accent-secondary hover:text-white text-text-primary rounded-lg transition-colors text-sm font-medium border border-border/50">
            Access Module
          </button>
        </div>
      </section>
      
    </div>
  );
}
