import React, { useState, useEffect } from 'react';
import { Activity, Wifi, Clock, Server } from 'lucide-react';

export default function DesktopTelemetry({ className = '' }: { className?: string }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <aside className={`w-64 glass-panel border-l border-border/50 flex flex-col z-20 ${className}`}>
      <div className="p-4 border-b border-border/50">
        <h3 className="text-xs font-bold tracking-widest text-text-muted uppercase mb-4">System Telemetry</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-text-secondary">
              <Clock size={14} />
              <span className="text-xs">Local Time</span>
            </div>
            <span className="text-xs font-mono text-accent-science">{time}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-text-secondary">
              <Wifi size={14} />
              <span className="text-xs">Status</span>
            </div>
            <span className="text-xs font-mono text-accent-success flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-success animate-pulse"></span>
              ONLINE
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-text-secondary">
              <Server size={14} />
              <span className="text-xs">Sync</span>
            </div>
            <span className="text-xs font-mono text-text-primary">Up to date</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex-1">
        <h3 className="text-xs font-bold tracking-widest text-text-muted uppercase mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex gap-3">
            <div className="mt-1">
              <Activity size={12} className="text-accent-science" />
            </div>
            <div>
              <p className="text-xs font-medium text-text-primary">System Initialized</p>
              <p className="text-[10px] text-text-muted font-mono">{time}</p>
            </div>
          </div>
          {/* Future real activity items will populate here */}
        </div>
      </div>
    </aside>
  );
}
