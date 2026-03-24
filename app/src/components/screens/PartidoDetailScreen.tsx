import { useState } from 'react';
import { useDevice } from '@/hooks/useDevice';
import { ChevronLeft, Minus, Plus } from 'lucide-react';

interface PartidoDetailScreenProps {
  partido: { e1: string; e2: string; f1: string; f2: string; grupo?: string; fase?: string } | null;
  onBack: () => void;
  onConfirm: (s1: number, s2: number) => void;
}

export function PartidoDetailScreen({ partido, onBack, onConfirm }: PartidoDetailScreenProps) {
  const { isMobile } = useDevice();
  const [score1, setScore1] = useState(1);
  const [score2, setScore2] = useState(1);

  if (!partido) return null;

  const diff = Math.abs(score1 - score2);
  const maxPts = 20;
  const factor = maxPts / 20;

  const microjuegos = [
    { label: 'Ganador / empate', pts: Math.round(6 * factor) },
    { label: `Diferencia de goles (${diff})`, pts: Math.round(6 * factor) },
    { label: `Goles ${partido.e1} (${score1})`, pts: Math.round(4 * factor) },
    { label: `Goles ${partido.e2} (${score2})`, pts: Math.round(4 * factor) },
  ];

  const total = microjuegos.reduce((sum, m) => sum + m.pts, 0);

  const adjustScore = (team: 1 | 2, delta: number) => {
    if (team === 1) {
      setScore1(Math.max(0, Math.min(20, score1 + delta)));
    } else {
      setScore2(Math.max(0, Math.min(20, score2 + delta)));
    }
  };

  return (
    <div className="min-h-full bg-[#f2f2f7]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#003087] to-[#1a237e] text-white">
        {/* Mobile back button */}
        {isMobile && (
          <div className="p-4">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-white/80 hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm">Volver</span>
            </button>
          </div>
        )}

        <div className="px-4 lg:px-6 pb-6 lg:pb-8">
          <p className="text-sm text-white/70 mb-1">
            {partido.grupo ? `Grupo ${partido.grupo} · Jornada 1` : partido.fase}
          </p>
          <p className="text-sm text-white/85 mb-6">
            Hoy · 18:00 · Estadio Azteca
          </p>

          {/* Teams */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-2 flex-1">
              <span className="text-4xl lg:text-5xl">{partido.f1}</span>
              <span className="text-base lg:text-lg font-semibold">{partido.e1}</span>
            </div>

            <div className="bg-white/15 rounded-2xl px-6 py-4 border border-white/20">
              <div className="text-3xl lg:text-4xl font-bold text-center">
                {score1} - {score2}
              </div>
              <div className="text-xs text-white/70 text-center mt-1">
                Tu pronóstico
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 flex-1">
              <span className="text-4xl lg:text-5xl">{partido.f2}</span>
              <span className="text-base lg:text-lg font-semibold">{partido.e2}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 lg:p-6 space-y-4 lg:space-y-6">
        {/* Window Status */}
        <div className="bg-white rounded-xl p-4 flex items-center gap-3 border border-black/5">
          <div className="w-3 h-3 rounded-full bg-[#34c759]" />
          <div className="flex-1">
            <div className="font-semibold text-sm">Ventana abierta — 100%</div>
            <div className="text-xs text-gray-500">Cierra en 2h 14min · Máximo 15 pts</div>
          </div>
        </div>

        {/* Score Picker */}
        <div className="bg-white rounded-2xl p-4 lg:p-6 border border-black/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-900">Tu pronóstico</h3>
            <span className="text-sm text-[#ff9500] font-semibold">Hasta {maxPts} pts</span>
          </div>

          <div className="flex items-center justify-center gap-6 lg:gap-12">
            {/* Team 1 */}
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-3">{partido.e1.substring(0, 3).toUpperCase()}</div>
              <div className="flex items-center gap-2 lg:gap-3">
                <button 
                  onClick={() => adjustScore(1, -1)}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <div className="w-12 lg:w-16 text-center text-2xl lg:text-3xl font-bold">{score1}</div>
                <button 
                  onClick={() => adjustScore(1, 1)}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            <span className="text-xl lg:text-2xl text-gray-300 font-light">—</span>

            {/* Team 2 */}
            <div className="text-center">
              <div className="text-xs text-gray-500 mb-3">{partido.e2.substring(0, 3).toUpperCase()}</div>
              <div className="flex items-center gap-2 lg:gap-3">
                <button 
                  onClick={() => adjustScore(2, -1)}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <div className="w-12 lg:w-16 text-center text-2xl lg:text-3xl font-bold">{score2}</div>
                <button 
                  onClick={() => adjustScore(2, 1)}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Calculated Points */}
        <div className="bg-gray-50 rounded-2xl p-4 lg:p-6">
          <h3 className="text-sm text-gray-500 mb-4">Calculado automáticamente</h3>
          <div className="space-y-3">
            {microjuegos.map((micro, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <span className="text-sm text-gray-700">{micro.label}</span>
                <span className="text-sm font-semibold text-[#34c759]">+{micro.pts} pts</span>
              </div>
            ))}
            <div className="h-px bg-gray-200 my-3" />
            <div className="flex items-center justify-between">
              <span className="font-bold text-gray-900">Total potencial</span>
              <span className="font-bold text-lg text-[#ff9500]">{total} pts</span>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={() => onConfirm(score1, score2)}
          className="w-full bg-[#007aff] hover:bg-[#0051d5] text-white font-semibold rounded-xl py-4 text-base lg:text-lg transition-colors shadow-lg shadow-[#007aff]/25"
        >
          Confirmar pronóstico
        </button>
      </div>
    </div>
  );
}
