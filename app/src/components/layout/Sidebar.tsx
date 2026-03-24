import { Home, Star, Trophy, FileText, BarChart3 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
  collapsed?: boolean;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Partidos' },
  { id: 'especiales', icon: Star, label: 'Especiales' },
  { id: 'tabla', icon: Trophy, label: 'Tabla' },
  { id: 'reglas', icon: FileText, label: 'Reglas' },
  { id: 'admin', icon: BarChart3, label: 'Resumen' },
];

export function Sidebar({ currentScreen, onNavigate, collapsed = false }: SidebarProps) {
  return (
    <aside className={cn(
      'h-screen bg-white border-r border-black/10 flex flex-col sticky top-0',
      collapsed ? 'w-20' : 'w-64'
    )}>
      {/* Logo */}
      <div className="p-4 lg:p-6 border-b border-black/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-[#003087] to-[#c8102e] rounded-xl flex items-center justify-center text-white text-xl lg:text-2xl flex-shrink-0">
            ⚽
          </div>
          {!collapsed && (
            <div className="hidden lg:block">
              <h1 className="font-bold text-gray-900 text-sm lg:text-base leading-tight">La Polla Mundialista</h1>
              <p className="text-xs text-gray-500">FIFA 2026</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 lg:p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = currentScreen === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                'w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200',
                isActive
                  ? 'bg-[#007aff] text-white shadow-lg shadow-[#007aff]/25'
                  : 'text-gray-600 hover:bg-gray-100',
                collapsed && 'justify-center'
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={isActive ? 2.5 : 2} />
              {!collapsed && (
                <span className={cn(
                  'font-medium text-sm hidden lg:block',
                  isActive && 'font-semibold'
                )}>
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* User info */}
      <div className="p-3 lg:p-4 border-t border-black/5">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gradient-to-br from-[#e3f2fd] to-[#bbdefb] flex items-center justify-center text-[#0d47a1] font-bold text-sm flex-shrink-0">
            CR
          </div>
          {!collapsed && (
            <div className="hidden lg:block overflow-hidden">
              <p className="font-semibold text-sm text-gray-900 truncate">Carlos Rodríguez</p>
              <p className="text-xs text-gray-500 truncate">247 pts</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
