import { useDevice } from '@/hooks/useDevice';
import { ChevronLeft, Check } from 'lucide-react';

interface ConfirmScreenProps {
  partido: { e1: string; e2: string; f1: string; f2: string; grupo?: string; fase?: string } | null;
  scores: { s1: number; s2: number };
  onBack: () => void;
  onConfirm: () => void;
}

export function ConfirmScreen({ partido, scores, onBack, onConfirm }: ConfirmScreenProps) {
  const { isMobile } = useDevice();

  if (!partido) return null;

  const diff = Math.abs(scores.s1 - scores.s2);
  const maxPts = 20;
  const factor = maxPts / 20;

  const microjuegos = [
    { label: 'Ganador / empate', pts: Math.round(6 * factor) },
    { label: `Diferencia de goles (${diff})`, pts: Math.round(6 * factor) },
    { label: `Goles ${partido.e1} (${scores.s1})`, pts: Math.round(4 * factor) },
    { label: `Goles ${partido.e2} (${scores.s2})`, pts: Math.round(4 * factor) },
  ];

  const total = microjuegos.reduce((sum, m) => sum + m.pts, 0);

  return (
    <div className="min-h-full bg-[#f2f2f7]">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#003087] to-[#1a237e] text-white">
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
                {scores.s1} - {scores.s2}
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
        <div>
          <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-1">Resumen del pronóstico</h3>
          <p className="text-sm text-gray-500">El sistema calcula automáticamente</p>
        </div>

        {/* Microjuegos */}
        <div className="space-y-3">
          {microjuegos.map((micro, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-between p-4 bg-white rounded-xl border border-black/5"
            >
              <span className="text-sm text-gray-700">{micro.label}</span>
              <span className="font-semibold text-[#34c759]">+{micro.pts} pts</span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div className="p-4 lg:p-5 bg-[#fff9ec] rounded-xl border-2 border-[#ffd080]">
          <div className="flex items-center justify-between">
            <span className="font-bold text-gray-900 text-base lg:text-lg">Total potencial</span>
            <span className="font-bold text-xl lg:text-2xl text-[#ff9500]">{total} pts</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={onConfirm}
            className="w-full bg-[#007aff] hover:bg-[#0051d5] text-white font-semibold rounded-xl py-4 text-base lg:text-lg transition-colors shadow-lg shadow-[#007aff]/25 flex items-center justify-center gap-2"
          >
            <Check className="w-5 h-5" />
            Confirmar pronóstico
          </button>
          <button
            onClick={onBack}
            className="w-full bg-transparent text-gray-500 hover:text-gray-700 font-medium rounded-xl py-3 text-base transition-colors"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
