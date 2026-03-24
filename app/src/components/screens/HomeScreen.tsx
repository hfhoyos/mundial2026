import { useState } from 'react';
import { useDevice } from '@/hooks/useDevice';
import { MatchCard } from '@/components/cards/MatchCard';
import { StatsCard } from '@/components/cards/StatsCard';
import { cn } from '@/lib/utils';
import type { HomeTab } from '@/types';
import { HOY } from '@/data';

interface HomeScreenProps {
  onSelectPartido: (partido: { e1: string; e2: string; f1: string; f2: string; grupo?: string }) => void;
  selectedCuenta: { nombre: string; tag: string } | null;
}

const tabs: { id: HomeTab; label: string }[] = [
  { id: 'resumen', label: 'Mi resumen' },
  { id: 'grupos', label: 'Grupos' },
  { id: 'finales', label: 'Las Finales' },
];

export function HomeScreen({ onSelectPartido, selectedCuenta }: HomeScreenProps) {
  const { isMobile, isDesktop } = useDevice();
  const [activeTab, setActiveTab] = useState<HomeTab>('resumen');

  // Sample data for live match
  const liveMatch = {
    id: 'live-1',
    e1: 'Brasil',
    e2: 'México',
    f1: '🇧🇷',
    f2: '🇲🇽',
    fecha: HOY,
    hora: '15:00',
    estadio: 'SoFi Stadium',
    grupo: 'B',
    j: 1,
  };

  // Sample next matches
  const nextMatches = [
    {
      id: 'next-1',
      e1: 'Colombia',
      e2: 'Portugal',
      f1: '🇨🇴',
      f2: '🇵🇹',
      fecha: HOY,
      hora: '18:00',
      estadio: 'Estadio Azteca',
      grupo: 'K',
      j: 1,
    },
    {
      id: 'next-2',
      e1: 'Argentina',
      e2: 'Francia',
      f1: '🇦🇷',
      f2: '🇫🇷',
      fecha: HOY,
      hora: '21:00',
      estadio: 'MetLife Stadium',
      grupo: 'C',
      j: 1,
    },
  ];

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Header Stats */}
      <div className="bg-gradient-to-br from-[#003087] to-[#c8102e] rounded-2xl lg:rounded-3xl p-4 lg:p-6 text-white">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-white/80">Buenas tardes</p>
            <h2 className="text-xl lg:text-2xl font-bold">Carlos Rodríguez 👋</h2>
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-3 py-1 mt-2">
              <span className="text-xs font-semibold">
                📋 {selectedCuenta?.tag || 'Cuenta 1 · @carlos1'}
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={cn(
          'grid gap-3',
          isMobile ? 'grid-cols-4' : 'grid-cols-4 lg:grid-cols-4'
        )}>
          <StatsCard value={247} label="Mis puntos" />
          <StatsCard value="#4" label="Posición" />
          <StatsCard value={86} label="Pendientes" variant="alert" />
          <StatsCard value={3} label="Especiales" variant="warning" />
        </div>
      </div>

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

      {/* Tab Content */}
      <div className="space-y-4 lg:space-y-6">
        {activeTab === 'resumen' && (
          <>
            {/* Live Match */}
            <section>
              <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3 lg:mb-4 px-1">
                En vivo ahora
              </h3>
              <MatchCard
                partido={liveMatch}
                ventana="live"
                pronostico={{ s1: 2, s2: 0 }}
                onClick={() => onSelectPartido(liveMatch)}
              />
            </section>

            {/* Next Matches */}
            <section>
              <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3 lg:mb-4 px-1">
                Próximos partidos
              </h3>
              <div className={cn(
                'grid gap-3 lg:gap-4',
                isDesktop && 'grid-cols-2'
              )}>
                {nextMatches.map((match) => (
                  <MatchCard
                    key={match.id}
                    partido={match}
                    ventana={match.id === 'next-1' ? 'open' : 'pending'}
                    onClick={() => onSelectPartido(match)}
                  />
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === 'grupos' && (
          <section className="bg-white rounded-2xl p-4 lg:p-6 border border-black/5">
            <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-4">
              Fase de Grupos
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-3">
              {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'].map((grupo) => (
                <button
                  key={grupo}
                  className="py-3 lg:py-4 px-2 bg-gray-50 hover:bg-[#007aff] hover:text-white rounded-xl text-sm lg:text-base font-semibold text-gray-700 transition-all duration-200 border border-gray-200 hover:border-[#007aff]"
                >
                  Grupo {grupo}
                </button>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'finales' && (
          <section className="bg-white rounded-2xl p-4 lg:p-6 border border-black/5">
            <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-4">
              Fase Final
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
              {[
                { key: '16avos', label: 'Dieciseisavos', pts: '40 pts' },
                { key: 'octavos', label: 'Octavos', pts: '60 pts' },
                { key: 'cuartos', label: 'Cuartos', pts: '80 pts' },
                { key: 'semis', label: 'Semifinales', pts: '100 pts' },
                { key: '3y4', label: '3er y 4to', pts: '100 pts' },
                { key: 'final', label: 'Final', pts: '200 pts' },
              ].map((fase) => (
                <button
                  key={fase.key}
                  className="py-3 lg:py-4 px-2 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl text-sm lg:text-base font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  <div>{fase.label}</div>
                  <div className="text-xs opacity-80 mt-1">{fase.pts}</div>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
