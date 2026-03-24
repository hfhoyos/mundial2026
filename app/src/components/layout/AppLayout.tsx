import type { ReactNode } from 'react';
import { useDevice } from '@/hooks/useDevice';
import { BottomNav } from './BottomNav';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

interface AppLayoutProps {
  children: ReactNode;
  currentScreen: string;
  onNavigate: (screen: string) => void;
  showNav?: boolean;
}

export function AppLayout({ children, currentScreen, onNavigate, showNav = true }: AppLayoutProps) {
  const { isMobile, isTablet } = useDevice();

  // Login screen - full screen without nav
  if (currentScreen === 'login' || currentScreen === 'cuentas') {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-[#003087] via-[#c8102e] to-[#007f3b]">
        {children}
      </div>
    );
  }

  // Mobile layout - bottom navigation
  if (isMobile) {
    return (
      <div className="min-h-screen w-full bg-[#f2f2f7] flex flex-col">
        <div className="flex-1 overflow-y-auto pb-16">
          {children}
        </div>
        {showNav && <BottomNav currentScreen={currentScreen} onNavigate={onNavigate} />}
      </div>
    );
  }

  // Tablet/Desktop layout - sidebar navigation
  return (
    <div className="min-h-screen w-full bg-[#f2f2f7] flex">
      {showNav && (
        <Sidebar 
          currentScreen={currentScreen} 
          onNavigate={onNavigate} 
          collapsed={isTablet} 
        />
      )}
      <div className="flex-1 flex flex-col min-h-screen">
        <TopBar currentScreen={currentScreen} />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
