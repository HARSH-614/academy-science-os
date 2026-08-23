import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function MobileHeader({ className = '' }: { className?: string }) {
  return (
    <header className={`glass-panel sticky top-0 z-50 flex h-16 items-center justify-between px-4 border-b border-border/50 ${className}`}>
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-lg text-text-secondary hover:bg-surface-elevated hover:text-text-primary transition-colors">
          <Menu size={20} />
        </button>
        <span className="font-bold text-sm tracking-wider text-text-primary uppercase">
          S.Baruah
        </span>
      </div>
      
      <div className="flex items-center gap-1">
        <button className="p-2 rounded-lg text-text-secondary hover:text-accent-science transition-colors">
          <Search size={18} />
        </button>
        <button className="p-2 rounded-lg text-text-secondary hover:text-accent-warning transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-accent-danger rounded-full"></span>
        </button>
        <button className="p-2 rounded-lg text-text-secondary hover:text-text-primary transition-colors">
          <User size={18} />
        </button>
      </div>
    </header>
  );
}
