import { useState } from 'react';
import { useDevice } from '@/hooks/useDevice';
import { PositionRow } from '@/components/cards/PositionRow';
import { cn } from '@/lib/utils';
import { jugadores } from '@/data';
import type { TablaTab } from '@/types';
import { ChevronDown, Trophy } from 'lucide-react';

const tabs: { id: TablaTab; label: string }[] = [
  { id: 'general', label: 'General' },
  { id: 'categorias', label: 'Por Categorías' },
  { id: 'auditoria', label: 'Auditoría' },
];

const categorias = [
  { id: 'grupos', title: '⚽ Fase Grupos', subtitle: 'Partidos + Clasificados · máx 2.160 pts', premio: '1.440 pts' },
  { id: 'finales', title: '🏆 Fase Finales', subtitle: 'Partidos + Finalistas · máx 4.010 pts', premio: '1.940 pts' },
  { id: 'lideres', title: '👑 Líderes de la Polla', subtitle: 'Fase Grupos + Fase Finales · máx 5.450 pts', premio: '5.450 pts' },
];

export function TablaScreen() {
  const { isDesktop } = useDevice();
  const [activeTab, setActiveTab] = useState<TablaTab>('general');
  const [expandedCat, setExpandedCat] = useState<string | null>(null);

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Tabs */}
      <div className="bg-white rounded-xl lg:rounded-2xl p-1 border border-black/5 sticky top-0 z-30">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                'flex-1 py-2.5 lg:py-3 px-2 lg:px-4 rounded-lg lg:rounded-xl text-xs lg:text-sm font-medium transition-all duration-200',
                activeTab === tab.id
                  ? 'bg-[#007aff] text-white shadow-md'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      {activeTab === 'general' && (
        <div className="bg-white rounded-2xl border border-black/5 overflow-hidden">
          <div className="p-4 lg:p-6 border-b border-black/5">
            <h2 className="text-lg lg:text-xl font-bold text-gray-900">Tabla General</h2>
            <p className="text-sm text-gray-500">Ranking de todos los participantes</p>
          </div>
          <div className={cn(
            'divide-y divide-black/5',
            isDesktop && 'grid grid-cols-2 divide-y-0 divide-x divide-black/5'
          )}>
            {jugadores.map((jugador) => (
              <PositionRow key={jugador.rank} jugador={jugador} />
            ))}
          </div>
        </div>
      )}

      {activeTab === 'categorias' && (
        <div className="space-y-3 lg:space-y-4">
          {categorias.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl border border-black/5 overflow-hidden">
              <button
                onClick={() => setExpandedCat(expandedCat === cat.id ? null : cat.id)}
                className="w-full p-4 lg:p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 text-sm lg:text-base">{cat.title}</h3>
                  <p className="text-xs lg:text-sm text-gray-500">{cat.subtitle}</p>
                </div>
                <ChevronDown 
                  className={cn(
                    'w-5 h-5 text-gray-400 transition-transform duration-200',
                    expandedCat === cat.id && 'rotate-180'
                  )} 
                />
              </button>
              
              {expandedCat === cat.id && (
                <div className="border-t border-black/5">
                  <div className="p-4 lg:p-6 space-y-3">
                    {jugadores.slice(0, 5).map((jugador) => (
                      <div 
                        key={jugador.rank}
                        className={cn(
                          'flex items-center gap-3 p-3 rounded-xl',
                          jugador.isMe ? 'bg-[#e8f3ff]' : 'bg-gray-50'
                        )}
                      >
                        <div className={cn(
                          'w-6 font-bold',
                          jugador.rank === 1 && 'text-[#ff9500]',
                          jugador.rank === 2 && 'text-gray-400',
                          jugador.rank === 3 && 'text-[#c8a062]',
                        )}>
                          {jugador.rank}
                        </div>
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                          style={{ backgroundColor: jugador.color, color: jugador.textColor }}
                        >
                          {jugador.initials}
                        </div>
                        <div className="flex-1">
                          <div className={cn(
                            'font-semibold text-sm',
                            jugador.isMe && 'text-[#007aff]'
                          )}>
                            {jugador.name}
                          </div>
                        </div>
                        <div className="font-bold">{jugador.puntos} pts</div>
                      </div>
                    ))}
                    <div className="flex items-center justify-between pt-3 border-t border-black/5">
                      <span className="text-sm text-gray-500 flex items-center gap-2">
                        <Trophy className="w-4 h-4" />
                        Gana el ganador de {cat.title}
                      </span>
                      <span className="text-sm font-bold text-[#007aff]">Premio: {cat.premio}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'auditoria' && (
        <div className="bg-white rounded-2xl p-4 lg:p-6 border border-black/5">
          <div className="text-center py-8 lg:py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Auditoría de Pronósticos</h3>
            <p className="text-sm text-gray-500 max-w-sm mx-auto">
              Revisa todos tus pronósticos y los de otros participantes. 
              Función disponible próximamente.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
