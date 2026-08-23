import React from 'react';
import MobileHeader from './MobileHeader';
import MobileBottomNav from './MobileBottomNav';
import DesktopSidebar from './DesktopSidebar';
import DesktopTelemetry from './DesktopTelemetry';
import DynamicBackground from '../common/DynamicBackground';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-background">
      <DynamicBackground />
      
      {/* Desktop Sidebar (Hidden on Mobile) */}
      <DesktopSidebar className="hidden lg:flex" />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col relative z-10 w-full">
        {/* Mobile Header (Hidden on Desktop) */}
        <MobileHeader className="lg:hidden" />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden pb-20 lg:pb-0 px-4 md:px-8 pt-4">
          <div className="mx-auto max-w-4xl w-full h-full">
            {children}
          </div>
        </main>

        {/* Mobile Bottom Navigation (Hidden on Desktop) */}
        <MobileBottomNav className="lg:hidden" />
      </div>

      {/* Desktop Telemetry/Activity Sidebar (Hidden on Mobile & Tablet) */}
      <DesktopTelemetry className="hidden xl:flex" />
    </div>
  );
}
