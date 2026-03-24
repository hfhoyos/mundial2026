import { useState, useEffect } from 'react';
import { AppLayout } from '@/components/layout/AppLayout';
import { LoginScreen } from '@/components/screens/LoginScreen';
import { CuentasScreen } from '@/components/screens/CuentasScreen';
import { HomeScreen } from '@/components/screens/HomeScreen';
import { PartidoDetailScreen } from '@/components/screens/PartidoDetailScreen';
import { TablaScreen } from '@/components/screens/TablaScreen';
import { EspecialesScreen } from '@/components/screens/EspecialesScreen';
import { ReglasScreen } from '@/components/screens/ReglasScreen';
import { AdminScreen } from '@/components/screens/AdminScreen';
import { ConfirmScreen } from '@/components/screens/ConfirmScreen';
import { useDevice } from '@/hooks/useDevice';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import './App.css';

type ScreenType = 
  | 'login' 
  | 'cuentas' 
  | 'home' 
  | 'partido-detail' 
  | 'tabla' 
  | 'especiales' 
  | 'reglas' 
  | 'admin' 
  | 'confirm';

function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('login');
  const [selectedPartido, setSelectedPartido] = useState<{ 
    e1: string; 
    e2: string; 
    f1: string; 
    f2: string; 
    grupo?: string;
    fase?: string;
  } | null>(null);
  const [selectedCuenta, setSelectedCuenta] = useState<{ nombre: string; tag: string } | null>(null);
  const [pendingScores, setPendingScores] = useState<{ s1: number; s2: number } | null>(null);
  const { isMobile } = useDevice();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      // This will be handled by individual components
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLogin = () => {
    setCurrentScreen('cuentas');
  };

  const handleSelectCuenta = (cuenta: { nombre: string; tag: string }) => {
    setSelectedCuenta(cuenta);
    setCurrentScreen('home');
    toast.success(`Bienvenido, ${cuenta.nombre}`, {
      description: `Jugando con ${cuenta.tag}`,
    });
  };

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen as ScreenType);
  };

  const handleSelectPartido = (partido: { 
    e1: string; 
    e2: string; 
    f1: string; 
    f2: string; 
    grupo?: string;
    fase?: string;
  }) => {
    setSelectedPartido(partido);
    setCurrentScreen('partido-detail');
  };

  const handleConfirmPartido = (s1: number, s2: number) => {
    setPendingScores({ s1, s2 });
    setCurrentScreen('confirm');
  };

  const handleFinalConfirm = () => {
    toast.success('¡Pronóstico guardado!', {
      description: `${selectedPartido?.e1} ${pendingScores?.s1} - ${pendingScores?.s2} ${selectedPartido?.e2}`,
    });
    setCurrentScreen('home');
    setPendingScores(null);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      
      case 'cuentas':
        return (
          <CuentasScreen 
            onSelectCuenta={handleSelectCuenta} 
            onBack={() => setCurrentScreen('login')} 
          />
        );
      
      case 'home':
        return (
          <HomeScreen 
            onSelectPartido={handleSelectPartido}
            selectedCuenta={selectedCuenta}
          />
        );
      
      case 'partido-detail':
        return (
          <PartidoDetailScreen
            partido={selectedPartido}
            onBack={() => setCurrentScreen('home')}
            onConfirm={handleConfirmPartido}
          />
        );
      
      case 'confirm':
        return (
          <ConfirmScreen
            partido={selectedPartido}
            scores={pendingScores || { s1: 0, s2: 0 }}
            onBack={() => setCurrentScreen('partido-detail')}
            onConfirm={handleFinalConfirm}
          />
        );
      
      case 'tabla':
        return <TablaScreen />;
      
      case 'especiales':
        return <EspecialesScreen />;
      
      case 'reglas':
        return <ReglasScreen />;
      
      case 'admin':
        return <AdminScreen />;
      
      default:
        return <HomeScreen onSelectPartido={handleSelectPartido} selectedCuenta={selectedCuenta} />;
    }
  };

  // Full-screen screens (login, cuentas)
  if (currentScreen === 'login' || currentScreen === 'cuentas') {
    return (
      <>
        {renderScreen()}
        <Toaster position={isMobile ? 'top-center' : 'bottom-right'} />
      </>
    );
  }

  return (
    <>
      <AppLayout 
        currentScreen={currentScreen} 
        onNavigate={handleNavigate}
        showNav={currentScreen !== 'partido-detail' && currentScreen !== 'confirm'}
      >
        {renderScreen()}
      </AppLayout>
      <Toaster position={isMobile ? 'top-center' : 'bottom-right'} />
    </>
  );
}

export default App;
