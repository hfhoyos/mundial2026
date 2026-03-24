import { Home, Star, Trophy, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BottomNavProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Partidos' },
  { id: 'especiales', icon: Star, label: 'Especiales' },
  { id: 'tabla', icon: Trophy, label: 'Tabla' },
  { id: 'reglas', icon: FileText, label: 'Reglas' },
];

export function BottomNav({ currentScreen, onNavigate }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-xl border-t border-black/10 z-50 safe-area-pb">
      <div className="flex items-center justify-around h-full px-2">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                'flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200',
                isActive 
                  ? 'bg-[#007aff]/10 text-[#007aff]' 
                  : 'text-[#8e8e93] hover:text-[#007aff]/70'
              )}
            >
              <Icon className="w-5 h-5" strokeWidth={isActive ? 2.5 : 2} />
              <span className={cn(
                'text-[10px] font-medium',
                isActive && 'font-semibold'
              )}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
