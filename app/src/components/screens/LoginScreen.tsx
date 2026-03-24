import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-6 lg:p-8" style={{ background: 'linear-gradient(135deg, #003087 0%, #c8102e 50%, #007f3b 100%)' }}>
      {/* Logo */}
      <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/15 backdrop-blur-sm rounded-3xl flex items-center justify-center text-4xl lg:text-5xl mb-6 border border-white/25">
        ⚽
      </div>

      {/* Title */}
      <h1 className="text-2xl lg:text-4xl font-bold text-white text-center mb-2">
        La Polla Mundialista
      </h1>
      <p className="text-sm lg:text-base text-white/70 text-center mb-10">
        Copa Mundial FIFA 2026
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Usuario"
          className="w-full bg-white/15 border border-white/25 rounded-xl px-4 py-3.5 lg:py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-base lg:text-lg"
        />
        
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            className="w-full bg-white/15 border border-white/25 rounded-xl px-4 py-3.5 lg:py-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 text-base lg:text-lg pr-12"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <p className="text-xs text-white/50 text-center">
          Las credenciales son asignadas por el organizador
        </p>

        <button
          type="submit"
          className="w-full bg-white text-[#003087] font-semibold rounded-xl py-4 lg:py-5 text-base lg:text-lg hover:bg-white/90 transition-colors shadow-lg"
        >
          Entrar
        </button>
      </form>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-xs text-white/40">
          © 2026 La Polla Mundialista
        </p>
      </div>
    </div>
  );
}
