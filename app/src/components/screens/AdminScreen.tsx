import { useDevice } from '@/hooks/useDevice';
import { SimpleStatsCard } from '@/components/cards/StatsCard';
import { cn } from '@/lib/utils';
import { Trophy, TrendingUp, Calendar } from 'lucide-react';

export function AdminScreen() {
  const { isDesktop } = useDevice();

  const podio = [
    { rank: 1, name: 'María Ramírez', pts: 412, apuestas: 32, exactos: 14, color: '#fff3e0', textColor: '#e65100', icon: '🥇' },
    { rank: 2, name: 'Juan García', pts: 389, apuestas: 30, exactos: 11, color: '#e8eaf6', textColor: '#283593', icon: '🥈' },
    { rank: 3, name: 'Laura Pérez', pts: 356, apuestas: 31, exactos: 10, color: '#e8f5e9', textColor: '#1b5e20', icon: '🥉' },
  ];

  const ultimosResultados = [
    { match: '🇨🇴 Col 2-0 Uzb 🇺🇿', info: 'Grupo K · 18 jun', pts: 20, tipo: 'Exacto ✅' },
    { match: '🇦🇷 Arg 1-1 Fra 🇫🇷', info: 'Grupo C · 13 jun', pts: 10, tipo: 'Ganador ✓' },
    { match: '🇧🇷 Bra 2-1 Mex 🇲🇽', info: 'Grupo B · 13 jun', pts: 8, tipo: 'Parcial' },
  ];

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 lg:p-6 text-white">
        <h2 className="text-lg lg:text-xl font-bold">Resumen del torneo</h2>
        <p className="text-sm text-white/60">La Polla Mundialista 2026 · En vivo</p>
      </div>

      {/* Stats Grid */}
      <div className={cn(
        'grid gap-3 lg:gap-4',
        isDesktop ? 'grid-cols-4' : 'grid-cols-2'
      )}>
        <SimpleStatsCard value={127} label="Jugadores" trend="up" />
        <SimpleStatsCard value="1,847" label="Apuestas" trend="up" />
        <SimpleStatsCard value={72} label="Jugados" trend="neutral" />
        <SimpleStatsCard value="68%" label="Participación" trend="up" />
      </div>

      <div className={cn(
        'grid gap-4 lg:gap-6',
        isDesktop && 'grid-cols-2'
      )}>
        {/* Podio */}
        <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
          <div className="p-4 lg:p-6 border-b border-black/5">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-[#ff9500]" />
              <h3 className="font-bold text-gray-900">Podio actual</h3>
            </div>
          </div>
          <div className="divide-y divide-black/5">
            {podio.map((p) => (
              <div key={p.rank} className="flex items-center p-4">
                <div className="text-2xl mr-3">{p.icon}</div>
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold mr-3"
                  style={{ backgroundColor: p.color, color: p.textColor }}
                >
                  {p.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-sm">{p.name}</div>
                  <div className="text-xs text-gray-500">{p.apuestas} apuestas · {p.exactos} exactos</div>
                </div>
                <div className="text-right">
                  <div className={cn(
                    'font-bold text-lg',
                    p.rank === 1 ? 'text-[#ff9500]' : p.rank === 2 ? 'text-gray-400' : 'text-[#c8a062]'
                  )}>
                    {p.pts}
                  </div>
                  <div className="text-xs text-gray-500">pts</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mi Posición */}
        <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
          <div className="p-4 lg:p-6 border-b border-black/5">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#007aff]" />
              <h3 className="font-bold text-gray-900">Mi posición</h3>
            </div>
          </div>
          <div className="p-4 lg:p-6 bg-[#e8f3ff] border-2 border-[#007aff] m-4 lg:m-6 rounded-xl">
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-[#007aff] text-white flex items-center justify-center text-lg font-bold mr-4">
                #4
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">Carlos Rodríguez</div>
                <div className="text-xs text-gray-500">18 apuestas · 7 exactos · a 165 pts del líder</div>
              </div>
              <div className="text-right">
                <div className="font-bold text-xl text-[#007aff]">247</div>
                <div className="text-xs text-gray-500">pts</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
        <div className="p-4 lg:p-6 border-b border-black/5">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#34c759]" />
            <h3 className="font-bold text-gray-900">Estadísticas</h3>
          </div>
        </div>
        <div className="divide-y divide-black/5">
          {[
            { label: 'Marcadores exactos', value: '342', color: 'text-[#34c759]' },
            { label: 'Promedio pts por jugador', value: '198 pts', color: 'text-gray-900' },
            { label: 'Más apostado a campeón', value: '🇧🇷 Brasil (34%)', color: 'text-gray-900' },
            { label: 'Jugador más activo', value: 'María R. (104/104)', color: 'text-gray-900' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-600">{stat.label}</span>
              <span className={`font-bold ${stat.color}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Últimos Resultados */}
      <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
        <div className="p-4 lg:p-6 border-b border-black/5">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#ff9500]" />
            <h3 className="font-bold text-gray-900">Últimos resultados</h3>
          </div>
        </div>
        <div className="divide-y divide-black/5">
          {ultimosResultados.map((result, idx) => (
            <div key={idx} className="flex items-center justify-between p-4">
              <div>
                <div className="font-semibold text-sm">{result.match}</div>
                <div className="text-xs text-gray-500">{result.info}</div>
              </div>
              <div className="text-right">
                <div className={cn(
                  'font-bold',
                  result.pts === 20 ? 'text-[#34c759]' : result.pts === 10 ? 'text-[#ff9500]' : 'text-[#ff3b30]'
                )}>
                  +{result.pts} pts
                </div>
                <div className="text-xs text-gray-500">{result.tipo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
