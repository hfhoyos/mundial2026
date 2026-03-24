import { ChevronRight, LogOut, ArrowLeft } from 'lucide-react';
import { cuentas } from '@/data';

interface CuentasScreenProps {
  onSelectCuenta: (cuenta: { nombre: string; tag: string }) => void;
  onBack: () => void;
}

export function CuentasScreen({ onSelectCuenta, onBack }: CuentasScreenProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 lg:p-8" style={{ background: 'linear-gradient(135deg, #003087 0%, #c8102e 50%, #007f3b 100%)' }}>
      {/* Logo */}
      <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl lg:text-4xl mb-4 border border-white/25">
        ⚽
      </div>

      {/* Title */}
      <h1 className="text-xl lg:text-3xl font-bold text-white text-center mb-1">
        ¡Hola, Carlos!
      </h1>
      <p className="text-sm lg:text-base text-white/65 text-center mb-8 max-w-xs">
        Tienes varias cuentas registradas.<br />¿Con cuál vas a jugar hoy?
      </p>

      {/* Cuentas List */}
      <div className="w-full max-w-sm space-y-3">
        {cuentas.map((cuenta, index) => (
          <button
            key={cuenta.id}
            onClick={() => onSelectCuenta({ nombre: cuenta.nombre, tag: cuenta.tag })}
            className="w-full bg-white/12 hover:bg-white/25 border border-white/20 rounded-2xl p-4 flex items-center gap-4 transition-all duration-200 group"
          >
            {/* Avatar */}
            <div 
              className="w-11 h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center text-sm lg:text-base font-bold flex-shrink-0"
              style={{ backgroundColor: cuenta.avatarColor, color: '#fff' }}
            >
              CR
            </div>

            {/* Info */}
            <div className="flex-1 text-left">
              <div className="font-bold text-white text-sm lg:text-base">{cuenta.nombre}</div>
              <div className="text-xs lg:text-sm text-white/60">
                Cuenta {index + 1} · {cuenta.tag}
              </div>
            </div>

            {/* Points */}
            <div className="text-white/85 font-bold text-sm lg:text-base">
              {cuenta.puntos} pts
            </div>

            {/* Chevron */}
            <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-white/80 transition-colors" />
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="w-full max-w-sm mt-8 space-y-3">
        <button
          onClick={onBack}
          className="w-full flex items-center justify-center gap-2 text-white/60 hover:text-white/80 text-sm lg:text-base py-2 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver / Cambiar usuario
        </button>
        
        <div className="h-px bg-white/15" />
        
        <button
          onClick={onBack}
          className="w-full flex items-center justify-center gap-2 text-[#ff8080] hover:text-[#ff9999] text-sm lg:text-base py-2 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Salir del App
        </button>
      </div>
    </div>
  );
}
