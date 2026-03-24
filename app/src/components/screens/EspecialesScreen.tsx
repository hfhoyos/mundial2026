import { useState } from 'react';
import { useDevice } from '@/hooks/useDevice';
import { cn } from '@/lib/utils';
import { equipos, grupos, getFlag } from '@/data';
import { ChevronDown, Trophy, Check } from 'lucide-react';

interface FinalistaSelection {
  campeon: string | null;
  subcampeon: string | null;
  tercero: string | null;
  cuarto: string | null;
}

interface GrupoSelection {
  [grupo: string]: {
    primero: string | null;
    segundo: string | null;
  };
}

export function EspecialesScreen() {
  const { isDesktop } = useDevice();
  const [activeGrupo, setActiveGrupo] = useState<string | null>(null);
  const [finalistas, setFinalistas] = useState<FinalistaSelection>({
    campeon: 'Brasil',
    subcampeon: 'Francia',
    tercero: null,
    cuarto: null,
  });
  const [grupoSel, setGrupoSel] = useState<GrupoSelection>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const finalistasConfig = [
    { key: 'campeon', title: '🥇 Campeón del Mundial', pts: 720 },
    { key: 'subcampeon', title: '🥈 Subcampeón', pts: 360 },
    { key: 'tercero', title: '🥉 Tercer puesto', pts: 180 },
    { key: 'cuarto', title: '4° Cuarto puesto', pts: 90 },
  ];

  const handleFinalistaSelect = (key: keyof FinalistaSelection, equipo: string) => {
    setFinalistas(prev => ({ ...prev, [key]: equipo }));
    setOpenDropdown(null);
  };

  const handleGrupoSelect = (grupo: string, pos: 'primero' | 'segundo', equipo: string) => {
    setGrupoSel(prev => ({
      ...prev,
      [grupo]: {
        ...prev[grupo],
        [pos]: equipo,
      },
    }));
    setOpenDropdown(null);
  };

  const getUsedFinalistas = (excludeKey: string) => {
    return Object.entries(finalistas)
      .filter(([key, val]) => key !== excludeKey && val)
      .map(([, val]) => val);
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-4 lg:p-6 border border-black/5">
        <h2 className="text-lg lg:text-xl font-bold text-gray-900">Categorías especiales</h2>
        <p className="text-sm text-gray-500">Pronósticos del torneo completo</p>
      </div>

      {/* Ciclo 1: Fase de Grupos */}
      <section>
        <div className="bg-gradient-to-r from-[#003087] to-[#1565c0] rounded-2xl p-4 lg:p-6 text-white mb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-white/20 px-3 py-1 rounded-lg text-xs font-bold tracking-wide">CICLO 1</span>
            <h3 className="font-bold text-lg lg:text-xl">Fase de Grupos</h3>
          </div>
          <p className="text-sm text-white/70">Pronostica quién clasifica en cada grupo</p>
        </div>

        {/* Grupos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-3 mb-4">
          {Object.keys(grupos).map((grupo) => {
            const sel = grupoSel[grupo];
            const isComplete = sel?.primero && sel?.segundo;
            return (
              <button
                key={grupo}
                onClick={() => setActiveGrupo(activeGrupo === grupo ? null : grupo)}
                className={cn(
                  'py-3 px-2 rounded-xl text-sm font-semibold transition-all duration-200 border-2',
                  isComplete 
                    ? 'bg-[#e8f3ff] border-[#007aff] text-[#007aff]'
                    : activeGrupo === grupo
                      ? 'bg-[#007aff] border-[#007aff] text-white'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-[#007aff]/50'
                )}
              >
                Grupo {grupo}
              </button>
            );
          })}
        </div>

        {/* Grupo Detail */}
        {activeGrupo && (
          <div className="bg-white rounded-2xl p-4 lg:p-6 border border-black/5 animate-in slide-in-from-top-2">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold text-gray-900">Grupo {activeGrupo}</h4>
              <span className="text-xs bg-[#fff9ec] text-[#c05a00] px-2 py-1 rounded-full font-semibold border border-[#ffd080]">
                60 pts orden / 30 pts desorden
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {grupos[activeGrupo].map((equipo) => (
                <span key={equipo} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  {getFlag(equipo)} {equipo}
                </span>
              ))}
            </div>

            <div className="space-y-3">
              {['primero', 'segundo'].map((pos) => {
                const sel = grupoSel[activeGrupo]?.[pos as 'primero' | 'segundo'];
                const otherSel = grupoSel[activeGrupo]?.[pos === 'primero' ? 'segundo' : 'primero'];
                const dropId = `grupo-${activeGrupo}-${pos}`;
                
                return (
                  <div key={pos} className="relative">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-500 w-16">
                        {pos === 'primero' ? '1° lugar' : '2° lugar'}
                      </span>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === dropId ? null : dropId)}
                        className={cn(
                          'flex-1 flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all',
                          sel
                            ? 'bg-[#e8f3ff] border-[#007aff] text-[#007aff]'
                            : 'bg-gray-50 border-gray-200 text-gray-500'
                        )}
                      >
                        <span className="font-medium">
                          {sel ? `${getFlag(sel)} ${sel}` : 'Seleccionar...'}
                        </span>
                        <ChevronDown className={cn(
                          'w-4 h-4 transition-transform',
                          openDropdown === dropId && 'rotate-180'
                        )} />
                      </button>
                    </div>

                    {openDropdown === dropId && (
                      <div className="absolute top-full left-[76px] right-0 mt-2 bg-white rounded-xl border border-black/10 shadow-xl z-50 max-h-60 overflow-auto">
                        {grupos[activeGrupo].map((equipo) => {
                          const isUsed = otherSel === equipo;
                          const isSelected = sel === equipo;
                          return (
                            <button
                              key={equipo}
                              disabled={isUsed}
                              onClick={() => handleGrupoSelect(activeGrupo, pos as 'primero' | 'segundo', equipo)}
                              className={cn(
                                'w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors',
                                isUsed && 'opacity-40 cursor-not-allowed',
                                isSelected && 'bg-[#e8f3ff] text-[#007aff]'
                              )}
                            >
                              <span>{getFlag(equipo)}</span>
                              <span className="flex-1">{equipo}</span>
                              {isSelected && <Check className="w-4 h-4" />}
                              {isUsed && <span className="text-xs text-gray-400">ya elegido</span>}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* Ciclo 2: Fase Final */}
      <section>
        <div className="bg-gradient-to-r from-purple-700 to-pink-600 rounded-2xl p-4 lg:p-6 text-white mb-4">
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-white/20 px-3 py-1 rounded-lg text-xs font-bold tracking-wide">CICLO 2</span>
            <h3 className="font-bold text-lg lg:text-xl">Fase Final</h3>
          </div>
          <p className="text-sm text-white/70">Pronostica los finalistas del torneo</p>
        </div>

        <div className={cn(
          'space-y-3 lg:space-y-4',
          isDesktop && 'grid grid-cols-2 gap-4 space-y-0'
        )}>
          {finalistasConfig.map((config) => {
            const key = config.key as keyof FinalistaSelection;
            const sel = finalistas[key];
            const dropId = `finalista-${key}`;
            const usedTeams = getUsedFinalistas(key);

            return (
              <div key={key} className="bg-white rounded-2xl p-4 lg:p-5 border border-black/5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-gray-900 text-sm lg:text-base">{config.title}</h4>
                  <span className="text-xs bg-[#fff9ec] text-[#c05a00] px-2 py-1 rounded-full font-semibold border border-[#ffd080]">
                    {config.pts} pts
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-[#34c759]" />
                  <span className="text-xs text-gray-500">Abierta · 100% hasta inicio del torneo</span>
                </div>

                <div className="relative">
                  <button
                    onClick={() => setOpenDropdown(openDropdown === dropId ? null : dropId)}
                    className={cn(
                      'w-full flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all',
                      sel
                        ? key === 'campeon'
                          ? 'bg-[#fff9ec] border-[#ff9500] text-[#c05a00]'
                          : 'bg-[#e8f3ff] border-[#007aff] text-[#007aff]'
                        : 'bg-gray-50 border-gray-200 text-gray-500'
                    )}
                  >
                    <span className="font-medium">
                      {sel ? `${getFlag(sel)} ${sel}` : 'Seleccionar equipo...'}
                    </span>
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-transform',
                      openDropdown === dropId && 'rotate-180'
                    )} />
                  </button>

                  {openDropdown === dropId && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl border border-black/10 shadow-xl z-50 max-h-60 overflow-auto">
                      {equipos.map((equipo) => {
                        const isUsed = usedTeams.includes(equipo.name);
                        const isSelected = sel === equipo.name;
                        return (
                          <button
                            key={equipo.name}
                            disabled={isUsed}
                            onClick={() => handleFinalistaSelect(key, equipo.name)}
                            className={cn(
                              'w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors',
                              isUsed && 'opacity-40 cursor-not-allowed',
                              isSelected && 'bg-[#e8f3ff] text-[#007aff]'
                            )}
                          >
                            <span className="text-lg">{equipo.flag}</span>
                            <span className="flex-1">{equipo.name}</span>
                            {isSelected && <Check className="w-4 h-4" />}
                            {isUsed && <span className="text-xs text-gray-400">ya elegido</span>}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Summary */}
      <div className="bg-gradient-to-r from-[#003087] via-[#c8102e] to-[#007f3b] rounded-2xl p-4 lg:p-6 text-white">
        <div className="flex items-center gap-3 mb-3">
          <Trophy className="w-6 h-6" />
          <h3 className="font-bold text-lg">Resumen de Pronósticos</h3>
        </div>
        <p className="text-sm text-white/80 mb-4">
          Completa todos tus pronósticos para maximizar tus puntos. 
          Los finalistas en orden exacto otorgan 1,350 pts adicionales.
        </p>
        <div className="flex items-center justify-between bg-white/10 rounded-xl p-3">
          <span className="text-sm">Puntos potenciales:</span>
          <span className="text-xl font-bold">1,350 - 6,570 pts</span>
        </div>
      </div>
    </div>
  );
}
