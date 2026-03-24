import { useDevice } from '@/hooks/useDevice';
import { Download, Home, ChevronLeft } from 'lucide-react';

interface TopBarProps {
  currentScreen: string;
}

const screenTitles: Record<string, { title: string; subtitle?: string }> = {
  home: { title: 'Mis Partidos', subtitle: 'Gestiona tus pronósticos' },
  partidos: { title: 'Todos los Partidos', subtitle: 'Calendario completo' },
  'partido-detail': { title: 'Detalle del Partido', subtitle: 'Ingresa tu pronóstico' },
  tabla: { title: 'Tabla de Posiciones', subtitle: 'Ranking de jugadores' },
  especiales: { title: 'Categorías Especiales', subtitle: 'Pronósticos del torneo' },
  reglas: { title: 'Reglas', subtitle: 'Cómo funciona la polla' },
  admin: { title: 'Resumen del Torneo', subtitle: 'Estadísticas en vivo' },
  confirm: { title: 'Confirmar Pronóstico', subtitle: 'Revisa antes de guardar' },
};

export function TopBar({ currentScreen }: TopBarProps) {
  const { isTablet } = useDevice();
  const screenInfo = screenTitles[currentScreen] || { title: '' };

  return (
    <header className="h-16 lg:h-20 bg-white border-b border-black/5 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-40">
      <div className="flex items-center gap-3">
        {currentScreen === 'partido-detail' && (
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
        )}
        <div>
          <h2 className="font-bold text-gray-900 text-base lg:text-lg">{screenInfo.title}</h2>
          {screenInfo.subtitle && (
            <p className="text-xs lg:text-sm text-gray-500 hidden sm:block">{screenInfo.subtitle}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-3">
        <button 
          className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          onClick={() => alert('Generando PDF...')}
        >
          <Download className="w-4 h-4 text-gray-600" />
          {!isTablet && <span className="text-sm font-medium text-gray-700 hidden sm:inline">PDF</span>}
        </button>
        <button className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
          <Home className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </header>
  );
}
