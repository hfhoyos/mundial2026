import { useState, useCallback } from 'react';
import type { ScreenType, HomeTab, TablaTab, PartidosTab } from '@/types';

interface NavigationState {
  currentScreen: ScreenType;
  previousScreen: ScreenType | null;
  homeTab: HomeTab;
  tablaTab: TablaTab;
  partidosTab: PartidosTab;
  selectedPartido: { e1: string; e2: string; f1: string; f2: string; grupo?: string; fase?: string } | null;
  selectedCuenta: { nombre: string; tag: string } | null;
}

export function useNavigation() {
  const [state, setState] = useState<NavigationState>({
    currentScreen: 'login',
    previousScreen: null,
    homeTab: 'resumen',
    tablaTab: 'general',
    partidosTab: 'grupos',
    selectedPartido: null,
    selectedCuenta: null,
  });

  const navigateTo = useCallback((screen: ScreenType, params?: Partial<NavigationState>) => {
    setState((prev) => ({
      ...prev,
      previousScreen: prev.currentScreen,
      currentScreen: screen,
      ...(params || {}),
    }));
    window.scrollTo(0, 0);
  }, []);

  const goBack = useCallback(() => {
    if (state.previousScreen) {
      setState((prev) => ({
        ...prev,
        currentScreen: prev.previousScreen as ScreenType,
        previousScreen: null,
      }));
    }
  }, [state.previousScreen]);

  const setHomeTab = useCallback((tab: HomeTab) => {
    setState((prev) => ({ ...prev, homeTab: tab }));
  }, []);

  const setTablaTab = useCallback((tab: TablaTab) => {
    setState((prev) => ({ ...prev, tablaTab: tab }));
  }, []);

  const setPartidosTab = useCallback((tab: PartidosTab) => {
    setState((prev) => ({ ...prev, partidosTab: tab }));
  }, []);

  const selectPartido = useCallback((partido: { e1: string; e2: string; f1: string; f2: string; grupo?: string; fase?: string }) => {
    setState((prev) => ({
      ...prev,
      selectedPartido: partido,
      previousScreen: prev.currentScreen,
      currentScreen: 'partido-detail',
    }));
  }, []);

  const selectCuenta = useCallback((cuenta: { nombre: string; tag: string }) => {
    setState((prev) => ({ ...prev, selectedCuenta: cuenta }));
  }, []);

  return {
    ...state,
    navigateTo,
    goBack,
    setHomeTab,
    setTablaTab,
    setPartidosTab,
    selectPartido,
    selectCuenta,
  };
}
