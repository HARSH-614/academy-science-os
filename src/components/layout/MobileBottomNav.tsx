import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, BookOpen, Atom, BrainCircuit, Activity } from 'lucide-react';

const icons = {
  Home, BookOpen, Atom, BrainCircuit, Activity
};

export default function MobileBottomNav({ className = '' }: { className?: string }) {
  const navItems = [
    { id: 'home', label: 'Home', path: '/', icon: 'Home' },
    { id: 'class8', label: 'Class 8', path: '/class-8', icon: 'BookOpen' },
    { id: 'class9', label: 'Class 9', path: '/class-9', icon: 'Atom' },
    { id: 'quiz', label: 'Quiz', path: '/quiz', icon: 'BrainCircuit' },
    { id: 'progress', label: 'Progress', path: '/progress', icon: 'Activity' },
  ];

  return (
    <nav className={`glass-panel fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 safe-bottom ${className}`}>
      <div className="flex justify-around items-center h-16 px-2">
        {navItems.map((item) => {
          const IconComponent = icons[item.icon as keyof typeof icons];
          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => 
                `flex flex-col items-center justify-center w-16 h-full gap-1 transition-colors ${
                  isActive ? 'text-accent-science' : 'text-text-secondary hover:text-text-primary'
                }`
              }
            >
              <IconComponent size={20} />
              <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
