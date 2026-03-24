import { cn } from '@/lib/utils';
import type { Jugador } from '@/types';

interface PositionRowProps {
  jugador: Jugador;
  showDetails?: boolean;
}

export function PositionRow({ jugador, showDetails = true }: PositionRowProps) {
  const rankColors: Record<number, string> = {
    1: 'text-[#ff9500]',
    2: 'text-gray-400',
    3: 'text-[#c8a062]',
  };

  return (
    <div className={cn(
      'flex items-center gap-3 lg:gap-4 p-3 lg:p-4 border-b border-black/5 last:border-b-0',
      jugador.isMe && 'bg-[#e8f3ff]'
    )}>
      {/* Rank */}
      <div className={cn(
        'w-6 lg:w-8 text-center font-bold text-base lg:text-lg',
        rankColors[jugador.rank] || 'text-gray-400'
      )}>
        {jugador.rank}
      </div>

      {/* Avatar */}
      <div 
        className="w-9 h-9 lg:w-11 lg:h-11 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold flex-shrink-0"
        style={{ backgroundColor: jugador.color, color: jugador.textColor }}
      >
        {jugador.initials}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className={cn(
          'font-semibold text-sm lg:text-base truncate',
          jugador.isMe && 'text-[#007aff]'
        )}>
          {jugador.name}
        </div>
        {showDetails && (
          <div className="flex gap-2 mt-1">
            <span className="text-[10px] lg:text-xs bg-[#e8f3ff] text-[#007aff] px-1.5 py-0.5 rounded font-medium">
              Partidos {jugador.partidos}
            </span>
            <span className="text-[10px] lg:text-xs bg-[#fff9ec] text-[#c05a00] px-1.5 py-0.5 rounded font-medium">
              Especiales {jugador.especiales}
            </span>
          </div>
        )}
      </div>

      {/* Points */}
      <div className="text-right">
        <div className={cn(
          'text-lg lg:text-xl font-bold',
          jugador.isMe ? 'text-[#007aff]' : 'text-gray-900'
        )}>
          {jugador.puntos}
        </div>
        <div className="text-[10px] lg:text-xs text-gray-500">pts</div>
      </div>
    </div>
  );
}
