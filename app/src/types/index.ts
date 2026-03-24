// Tipos principales de la aplicación

export interface Equipo {
  flag: string;
  name: string;
}

export interface Partido {
  id?: string;
  e1: string;
  e2: string;
  f1: string;
  f2: string;
  fecha: string;
  hora: string;
  estadio: string;
  grupo?: string;
  j?: number;
  fase?: string;
}

export interface Pronostico {
  s1: number;
  s2: number;
}

export interface Jugador {
  rank: number;
  initials: string;
  name: string;
  color: string;
  textColor: string;
  partidos: number;
  especiales: number;
  puntos: number;
  isMe?: boolean;
}

export interface Cuenta {
  id: string;
  nombre: string;
  tag: string;
  avatarColor: string;
  puntos: number;
}

export interface GrupoEquipos {
  [key: string]: string[];
}

export interface StandingTeam {
  pos: number;
  flag: string;
  name: string;
  pj: number;
  g: number;
  e: number;
  p: number;
  gf: number;
  gc: number;
  gd: number;
  pts: number;
}

export type ScreenType = 
  | 'login' 
  | 'cuentas' 
  | 'home' 
  | 'partidos' 
  | 'partido-detail' 
  | 'tabla' 
  | 'especiales' 
  | 'reglas' 
  | 'admin' 
  | 'confirm';

export type HomeTab = 'resumen' | 'grupos' | 'finales';
export type TablaTab = 'general' | 'categorias' | 'auditoria';
export type PartidosTab = 'grupos' | 'finales';
export type FaseType = '16avos' | 'octavos' | 'cuartos' | 'semis' | '3y4' | 'final';

export interface ReglaSection {
  id: string;
  icon: string;
  title: string;
  content: React.ReactNode;
}
