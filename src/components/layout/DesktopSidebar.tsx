import React from 'react';
import { NavLink } from 'react-router-dom';
import { Atom, Home, BookOpen, BrainCircuit, Activity, Settings } from 'lucide-react';

const icons = { Home, BookOpen, Atom, BrainCircuit, Activity, Settings };

export default function DesktopSidebar({ className = '' }: { className?: string }) {
  const navItems = [
    { id: 'home', label: 'Dashboard', path: '/', icon: 'Home' },
    { id: 'class8', label: 'Class 8', path: '/class-8', icon: 'BookOpen' },
    { id: 'class9', label: 'Class 9', path: '/class-9', icon: 'Atom' },
    { id: 'quiz', label: 'Quiz Center', path: '/quiz', icon: 'BrainCircuit' },
    { id: 'progress', label: 'My Progress', path: '/progress', icon: 'Activity' },
  ];

  return (
    <aside className={`w-64 glass-panel border-r border-border/50 flex flex-col z-20 ${className}`}>
      <div className="h-16 flex items-center px-6 border-b border-border/50">
        <Atom className="text-accent-science mr-3" size={24} />
        <span className="font-bold tracking-widest text-sm uppercase text-text-primary">
          S.Baruah
        </span>
      </div>
      
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2 hide-scrollbar">
        {navItems.map((item) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive 
                    ? 'bg-accent-science/10 text-accent-science border border-accent-science/20 shadow-glow' 
                    : 'text-text-secondary hover:bg-surface-elevated hover:text-text-primary'
                }`
              }
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border/50">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-text-secondary hover:bg-surface-elevated hover:text-text-primary transition-all">
          <Settings size={18} />
          <span className="text-sm font-medium">Settings</span>
        </button>
      </div>
    </aside>
  );
}
