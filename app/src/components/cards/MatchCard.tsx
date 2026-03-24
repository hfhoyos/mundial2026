import { cn } from '@/lib/utils';
import type { Partido, Pronostico } from '@/types';

interface MatchCardProps {
  partido: Partido;
  pronostico?: Pronostico | null;
  variant?: 'default' | 'compact' | 'live';
  onClick?: () => void;
  ventana?: 'open' | 'closed' | 'pending' | 'live';
}

export function MatchCard({ 
  partido, 
  pronostico, 
  variant = 'default', 
  onClick,
  ventana = 'open'
}: MatchCardProps) {
  const isLive = ventana === 'live';

  const ventanaStyles = {
    open: 'bg-[#34c759] text-white',
    closed: 'bg-[#e5e5ea] text-[#8e8e93]',
    pending: 'bg-[#ff9500] text-white',
    live: 'bg-[#ff3b30] text-white',
  };

  const ventanaLabels = {
    open: 'Abierta · 100%',
    closed: 'Cerrada',
    pending: 'Cierra pronto',
    live: '● EN VIVO',
  };

  if (variant === 'compact') {
    return (
      <div 
        onClick={onClick}
        className={cn(
          'bg-white rounded-xl p-3 border border-black/5 cursor-pointer hover:shadow-md transition-shadow',
          isLive && 'ring-2 ring-[#ff3b30]/20'
        )}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">
            {partido.grupo ? `Grupo ${partido.grupo}` : partido.fase} · {partido.hora}
          </span>
          <span className={cn('text-[10px] font-semibold px-2 py-0.5 rounded-full', ventanaStyles[ventana])}>
            {ventanaLabels[ventana]}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">{partido.f1}</span>
            <span className="text-sm font-semibold">{partido.e1}</span>
          </div>
          <span className="text-sm text-gray-400">vs</span>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">{partido.e2}</span>
            <span className="text-xl">{partido.f2}</span>
          </div>
        </div>
        {pronostico && (
          <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
            <span className="text-gray-500">Mi pronóstico:</span>
            <span className="font-semibold text-[#007aff]">
              {partido.e1} {pronostico.s1}-{pronostico.s2} {partido.e2}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      onClick={onClick}
      className={cn(
        'bg-white rounded-2xl p-4 border border-black/5 cursor-pointer hover:shadow-lg transition-all duration-200',
        isLive && 'ring-2 ring-[#ff3b30]/20'
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-gray-500">
          {partido.grupo ? `Grupo ${partido.grupo} · Jornada ${partido.j}` : partido.fase}
        </span>
        <span className={cn('text-[11px] font-semibold px-2.5 py-1 rounded-full', ventanaStyles[ventana])}>
          {ventanaLabels[ventana]}
        </span>
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-3xl">{partido.f1}</span>
          <span className="text-sm font-semibold text-gray-900">{partido.e1}</span>
        </div>

        <div className="px-4">
          {isLive ? (
            <div className="text-2xl font-bold text-gray-900">2 - 1</div>
          ) : (
            <div className="text-sm font-medium text-gray-400">VS</div>
          )}
        </div>

        <div className="flex flex-col items-center gap-1 flex-1">
          <span className="text-3xl">{partido.f2}</span>
          <span className="text-sm font-semibold text-gray-900">{partido.e2}</span>
        </div>
      </div>

      {/* Time & Location */}
      <div className="text-center mt-3">
        <span className="text-xs text-gray-500">
          {partido.fecha} · {partido.hora} · {partido.estadio}
        </span>
      </div>

      {/* My Pick */}
      <div className="mt-4 bg-gray-50 rounded-xl p-3 flex items-center justify-between">
        <span className="text-xs text-gray-500">
          {pronostico ? 'Mi pronóstico' : 'Sin pronóstico'}
        </span>
        <span className={cn(
          'text-sm font-semibold',
          pronostico ? 'text-[#007aff]' : 'text-gray-400'
        )}>
          {pronostico 
            ? `${partido.e1} ${pronostico.s1} - ${pronostico.s2} ${partido.e2}`
            : 'Apostar →'
          }
        </span>
      </div>
    </div>
  );
}
