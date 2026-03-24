import { useState } from 'react';
import { Clock, Trophy, Target, Crown, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReglaSection {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const reglasSections: ReglaSection[] = [
  {
    id: 'ventana',
    icon: <Clock className="w-5 h-5" />,
    title: 'Ventana de apuesta',
    content: (
      <div className="space-y-3">
        <div className="flex items-center justify-between p-3 bg-[#eafaf1] rounded-xl">
          <div>
            <div className="font-semibold text-sm text-[#1e8449]">⏰ Antes del pitazo</div>
            <div className="text-xs text-[#27ae60]">Hasta 5 min antes del inicio</div>
          </div>
          <span className="font-bold text-[#34c759]">100%</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-[#fff9ec] rounded-xl">
          <div>
            <div className="font-semibold text-sm text-[#c05a00]">🟡 Durante el 1er tiempo</div>
            <div className="text-xs text-[#e67e22]">Hasta 5 min después del descanso</div>
          </div>
          <span className="font-bold text-[#ff9500]">50%</span>
        </div>
        <div className="flex items-center justify-between p-3 bg-[#fff2f2] rounded-xl">
          <div>
            <div className="font-semibold text-sm text-[#c0392b]">🔴 Pitazo del 2do tiempo</div>
            <div className="text-xs text-[#e74c3c]">Ventana cerrada definitivamente</div>
          </div>
          <span className="font-bold text-gray-400">❌</span>
        </div>
        <div className="p-3 bg-[#e8f3ff] rounded-xl text-sm text-[#007aff]">
          💡 Siempre vale más apostar tarde que no apostar. El 50% es una segunda oportunidad generosa.
        </div>
      </div>
    ),
  },
  {
    id: 'micro',
    icon: <Target className="w-5 h-5" />,
    title: 'Microjuegos por partido',
    content: (
      <div className="space-y-4">
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-2 rounded-tl-lg">Microjuego</th>
                <th className="text-center p-2">Grupos</th>
                <th className="text-center p-2">16avos</th>
                <th className="text-center p-2">8vos</th>
                <th className="text-center p-2">4tos</th>
                <th className="text-center p-2">Semis</th>
                <th className="text-center p-2 rounded-tr-lg">Final</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Ganador/empate', 6, 12, 18, 24, 30, 60],
                ['Dif. de goles', 6, 12, 18, 24, 30, 60],
                ['Goles equipo 1', 4, 8, 12, 16, 20, 40],
                ['Goles equipo 2', 4, 8, 12, 16, 20, 40],
                ['Marcador inverso', 4, 8, 12, 16, 20, 40],
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="p-2 font-medium">{row[0]}</td>
                  {row.slice(1).map((val, j) => (
                    <td key={j} className="text-center p-2 text-gray-600">{val}</td>
                  ))}
                </tr>
              ))}
              <tr className="bg-[#fff9ec]">
                <td className="p-2 font-bold text-[#c05a00]">✅ Marcador exacto</td>
                <td className="text-center p-2 font-bold text-[#ff9500]">20</td>
                <td className="text-center p-2 font-bold text-[#ff9500]">40</td>
                <td className="text-center p-2 font-bold text-[#ff9500]">60</td>
                <td className="text-center p-2 font-bold text-[#ff9500]">80</td>
                <td className="text-center p-2 font-bold text-[#ff9500]">100</td>
                <td className="text-center p-2 font-bold text-[#ff9500]">200</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p-3 bg-[#fff9ec] rounded-xl text-sm text-[#c05a00]">
          ✅ Marcador exacto activa los 4 microjuegos anteriores automáticamente
        </div>
      </div>
    ),
  },
  {
    id: 'fases',
    icon: <Trophy className="w-5 h-5" />,
    title: 'Puntos por fase',
    content: (
      <div className="space-y-2">
        {[
          { fase: 'Fase de grupos', partidos: 72, factor: '1x', pts: 20 },
          { fase: 'Dieciseisavos', partidos: 16, factor: '2x', pts: 40 },
          { fase: 'Octavos de final', partidos: 8, factor: '3x', pts: 60 },
          { fase: 'Cuartos de final', partidos: 4, factor: '4x', pts: 80 },
          { fase: 'Semifinales', partidos: 2, factor: '5x', pts: 100 },
          { fase: '3er y 4to puesto', partidos: 1, factor: '5x', pts: 100 },
          { fase: '⭐ Final', partidos: 1, factor: '10x', pts: 200, highlight: true },
        ].map((item) => (
          <div 
            key={item.fase}
            className={cn(
              'flex items-center justify-between p-3 rounded-xl',
              item.highlight ? 'bg-[#fff9ec]' : 'bg-gray-50'
            )}
          >
            <div>
              <div className={cn('font-semibold text-sm', item.highlight && 'text-[#c05a00]')}>{item.fase}</div>
              <div className="text-xs text-gray-500">{item.partidos} partidos · factor {item.factor}</div>
            </div>
            <span className={cn('font-bold', item.highlight ? 'text-[#ff9500] text-lg' : 'text-gray-900')}>{item.pts} pts</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'especiales',
    icon: <Zap className="w-5 h-5" />,
    title: 'Categorías especiales',
    content: (
      <div className="space-y-4">
        <div className="p-3 bg-gradient-to-r from-[#003087] to-[#1565c0] rounded-xl text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold">CICLO 1</span>
            <span className="font-bold text-sm">Fase de Grupos</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Los 2 clasificados en orden exacto (x12 grupos)</span>
              <span className="font-bold">60 pts c/u</span>
            </div>
            <div className="flex justify-between">
              <span>Los 2 clasificados en desorden (x12 grupos)</span>
              <span className="font-bold">30 pts c/u</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-gradient-to-r from-purple-700 to-pink-600 rounded-xl text-white">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-white/20 px-2 py-0.5 rounded text-xs font-bold">CICLO 2</span>
            <span className="font-bold text-sm">Fase Final</span>
          </div>
          <div className="space-y-2 text-sm">
            {[
              { label: '🥇 Campeón', pts: 720 },
              { label: '🥈 Subcampeón', pts: 360 },
              { label: '🥉 Tercer puesto', pts: 180 },
              { label: '4° Cuarto puesto', pts: 90 },
            ].map((item) => (
              <div key={item.label} className="flex justify-between">
                <span>{item.label}</span>
                <span className="font-bold">{item.pts} pts</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 bg-[#fff9ec] rounded-xl">
          <div className="flex justify-between items-center">
            <span className="font-bold text-[#c05a00]">Los 4 en orden exacto</span>
            <span className="font-bold text-lg text-[#ff9500]">1,350 pts</span>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'ganadores',
    icon: <Crown className="w-5 h-5" />,
    title: 'Ganadores de la polla',
    content: (
      <div className="space-y-3">
        {[
          { 
            title: '🥇 Ganador Fase de Grupos', 
            subtitle: 'Más pts en 72 partidos grupos + clasificados',
            pts: '2.160 pts',
            color: 'from-[#003087] to-[#1565c0]'
          },
          { 
            title: '🏆 Ganador Fase Final', 
            subtitle: 'Más pts en 32 partidos finales + Finalistas',
            pts: '3.290 pts',
            color: 'from-purple-700 to-pink-600'
          },
        ].map((item) => (
          <div key={item.title} className={`p-4 bg-gradient-to-r ${item.color} rounded-xl text-white`}>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold">{item.title}</div>
                <div className="text-xs text-white/70">{item.subtitle}</div>
              </div>
              <span className="font-bold text-lg">{item.pts}</span>
            </div>
          </div>
        ))}
        
        <div className="p-4 bg-[#e8f3ff] rounded-xl border-2 border-[#007aff]">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold text-[#007aff]">👑 Campeón de la Polla</div>
              <div className="text-xs text-[#007aff]/70">Acumulado total: Ciclo Grupos + Ciclo Finales</div>
            </div>
            <span className="font-bold text-xl text-[#007aff]">5.450 pts</span>
          </div>
        </div>

        <div className="p-3 bg-[#fff9ec] rounded-xl text-sm text-[#c05a00]">
          🚀 Un acierto en finalistas en orden puede remontar semanas de desventaja en partidos.
        </div>
      </div>
    ),
  },
];

export function ReglasScreen() {
  const [expanded, setExpanded] = useState<string | null>('ventana');

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl p-4 lg:p-6 border border-black/5">
        <h2 className="text-lg lg:text-xl font-bold text-gray-900">Reglas</h2>
        <p className="text-sm text-gray-500">Cómo funciona La Polla Mundialista</p>
      </div>

      {/* Accordion */}
      <div className="space-y-3">
        {reglasSections.map((section) => (
          <div 
            key={section.id}
            className="bg-white rounded-2xl border border-black/5 overflow-hidden"
          >
            <button
              onClick={() => setExpanded(expanded === section.id ? null : section.id)}
              className="w-full flex items-center justify-between p-4 lg:p-5 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center transition-colors',
                  expanded === section.id ? 'bg-[#007aff] text-white' : 'bg-gray-100 text-gray-600'
                )}>
                  {section.icon}
                </div>
                <span className="font-semibold text-gray-900 text-sm lg:text-base">{section.title}</span>
              </div>
              <svg 
                className={cn(
                  'w-5 h-5 text-gray-400 transition-transform duration-200',
                  expanded === section.id && 'rotate-180'
                )}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {expanded === section.id && (
              <div className="px-4 lg:px-5 pb-4 lg:pb-5 border-t border-gray-100">
                <div className="pt-4">
                  {section.content}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
