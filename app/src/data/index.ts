import type { Equipo, GrupoEquipos, Jugador, Partido, StandingTeam, FaseType } from '@/types';

export const equipos: Equipo[] = [
  { flag: '🇧🇷', name: 'Brasil' },
  { flag: '🇦🇷', name: 'Argentina' },
  { flag: '🇫🇷', name: 'Francia' },
  { flag: '🇵🇹', name: 'Portugal' },
  { flag: '🇪🇸', name: 'España' },
  { flag: '🇩🇪', name: 'Alemania' },
  { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'Inglaterra' },
  { flag: '🇳🇱', name: 'Países Bajos' },
  { flag: '🇧🇪', name: 'Bélgica' },
  { flag: '🇺🇾', name: 'Uruguay' },
  { flag: '🇨🇴', name: 'Colombia' },
  { flag: '🇲🇽', name: 'México' },
  { flag: '🇺🇸', name: 'EE.UU.' },
  { flag: '🇯🇵', name: 'Japón' },
  { flag: '🇲🇦', name: 'Marruecos' },
  { flag: '🇸🇳', name: 'Senegal' },
  { flag: '🇨🇦', name: 'Canadá' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇰🇷', name: 'Corea del Sur' },
  { flag: '🇺🇿', name: 'Uzbekistán' },
];

export const grupos: GrupoEquipos = {
  A: ['México', 'Canadá', 'EE.UU.', 'Uruguay'],
  B: ['Brasil', 'Alemania', 'Japón', 'Marruecos'],
  C: ['Argentina', 'Francia', 'Bélgica', 'Corea del Sur'],
  D: ['España', 'Países Bajos', 'Senegal', 'Australia'],
  E: ['Portugal', 'Inglaterra', 'Colombia', 'Uzbekistán'],
  F: ['Brasil', 'Marruecos', 'Canadá', 'Senegal'],
  G: ['Argentina', 'Alemania', 'México', 'Corea del Sur'],
  H: ['Francia', 'Portugal', 'EE.UU.', 'Japón'],
  I: ['España', 'Uruguay', 'Bélgica', 'Australia'],
  J: ['Inglaterra', 'Brasil', 'Colombia', 'Marruecos'],
  K: ['Colombia', 'Portugal', 'Uzbekistán', 'Repechaje'],
  L: ['México', 'Francia', 'Senegal', 'Canadá'],
};

export const fixture: Record<string, Partido[]> = {
  A: [
    { id: 'A-0', e1: 'México', e2: 'Uruguay', f1: '🇲🇽', f2: '🇺🇾', fecha: '12 jun', hora: '15:00', estadio: 'Azteca', grupo: 'A', j: 1 },
    { id: 'A-1', e1: 'Canadá', e2: 'EE.UU.', f1: '🇨🇦', f2: '🇺🇸', fecha: '12 jun', hora: '18:00', estadio: 'BC Place', grupo: 'A', j: 1 },
    { id: 'A-2', e1: 'México', e2: 'Canadá', f1: '🇲🇽', f2: '🇨🇦', fecha: '18 jun', hora: '15:00', estadio: 'Azteca', grupo: 'A', j: 2 },
    { id: 'A-3', e1: 'Uruguay', e2: 'EE.UU.', f1: '🇺🇾', f2: '🇺🇸', fecha: '18 jun', hora: '18:00', estadio: 'MetLife', grupo: 'A', j: 2 },
    { id: 'A-4', e1: 'EE.UU.', e2: 'México', f1: '🇺🇸', f2: '🇲🇽', fecha: '24 jun', hora: '20:00', estadio: 'AT&T Stadium', grupo: 'A', j: 3 },
    { id: 'A-5', e1: 'Uruguay', e2: 'Canadá', f1: '🇺🇾', f2: '🇨🇦', fecha: '24 jun', hora: '20:00', estadio: 'Rose Bowl', grupo: 'A', j: 3 },
  ],
  B: [
    { id: 'B-0', e1: 'Brasil', e2: 'Marruecos', f1: '🇧🇷', f2: '🇲🇦', fecha: '13 jun', hora: '15:00', estadio: 'SoFi Stadium', grupo: 'B', j: 1 },
    { id: 'B-1', e1: 'Alemania', e2: 'Japón', f1: '🇩🇪', f2: '🇯🇵', fecha: '13 jun', hora: '18:00', estadio: 'Allegiant Stadium', grupo: 'B', j: 1 },
    { id: 'B-2', e1: 'Brasil', e2: 'Alemania', f1: '🇧🇷', f2: '🇩🇪', fecha: '19 jun', hora: '15:00', estadio: 'MetLife', grupo: 'B', j: 2 },
    { id: 'B-3', e1: 'Marruecos', e2: 'Japón', f1: '🇲🇦', f2: '🇯🇵', fecha: '19 jun', hora: '18:00', estadio: 'Gillette Stadium', grupo: 'B', j: 2 },
    { id: 'B-4', e1: 'Japón', e2: 'Brasil', f1: '🇯🇵', f2: '🇧🇷', fecha: '25 jun', hora: '20:00', estadio: 'Rose Bowl', grupo: 'B', j: 3 },
    { id: 'B-5', e1: 'Marruecos', e2: 'Alemania', f1: '🇲🇦', f2: '🇩🇪', fecha: '25 jun', hora: '20:00', estadio: 'AT&T Stadium', grupo: 'B', j: 3 },
  ],
  C: [
    { id: 'C-0', e1: 'Argentina', e2: 'Francia', f1: '🇦🇷', f2: '🇫🇷', fecha: '13 jun', hora: '21:00', estadio: 'MetLife', grupo: 'C', j: 1 },
    { id: 'C-1', e1: 'Bélgica', e2: 'Corea del Sur', f1: '🇧🇪', f2: '🇰🇷', fecha: '14 jun', hora: '15:00', estadio: 'Levis Stadium', grupo: 'C', j: 1 },
    { id: 'C-2', e1: 'Argentina', e2: 'Bélgica', f1: '🇦🇷', f2: '🇧🇪', fecha: '20 jun', hora: '18:00', estadio: 'Azteca', grupo: 'C', j: 2 },
    { id: 'C-3', e1: 'Francia', e2: 'Corea del Sur', f1: '🇫🇷', f2: '🇰🇷', fecha: '20 jun', hora: '21:00', estadio: 'SoFi Stadium', grupo: 'C', j: 2 },
    { id: 'C-4', e1: 'Corea del Sur', e2: 'Argentina', f1: '🇰🇷', f2: '🇦🇷', fecha: '26 jun', hora: '20:00', estadio: 'Gillette Stadium', grupo: 'C', j: 3 },
    { id: 'C-5', e1: 'Francia', e2: 'Bélgica', f1: '🇫🇷', f2: '🇧🇪', fecha: '26 jun', hora: '20:00', estadio: 'Allegiant Stadium', grupo: 'C', j: 3 },
  ],
  K: [
    { id: 'K-0', e1: 'Colombia', e2: 'Uzbekistán', f1: '🇨🇴', f2: '🇺🇿', fecha: '18 jun', hora: '21:00', estadio: 'Azteca', grupo: 'K', j: 1 },
    { id: 'K-1', e1: 'Portugal', e2: 'Repechaje', f1: '🇵🇹', f2: '🔄', fecha: '23 jun', hora: '18:00', estadio: 'MetLife', grupo: 'K', j: 1 },
    { id: 'K-2', e1: 'Colombia', e2: 'Portugal', f1: '🇨🇴', f2: '🇵🇹', fecha: '27 jun', hora: '21:00', estadio: 'Rose Bowl', grupo: 'K', j: 2 },
  ],
};

export const fixtureFinales: Record<FaseType, Partido[]> = {
  '16avos': [
    { id: '16-1', e1: '1A', e2: '3B/C/D', f1: '🏳️', f2: '🏳️', fecha: '1 jul', hora: '12:00', estadio: 'MetLife', fase: '16avos' },
    { id: '16-2', e1: '1B', e2: '3A/C/G', f1: '🏳️', f2: '🏳️', fecha: '1 jul', hora: '15:00', estadio: 'AT&T Stadium', fase: '16avos' },
    { id: '16-3', e1: '1C', e2: '3A/B/F', f1: '🏳️', f2: '🏳️', fecha: '1 jul', hora: '18:00', estadio: 'Rose Bowl', fase: '16avos' },
    { id: '16-4', e1: '1D', e2: '3B/E/F', f1: '🏳️', f2: '🏳️', fecha: '1 jul', hora: '21:00', estadio: 'SoFi Stadium', fase: '16avos' },
    { id: '16-5', e1: '1E', e2: '3A/D/H', f1: '🏳️', f2: '🏳️', fecha: '2 jul', hora: '12:00', estadio: 'Allegiant Stadium', fase: '16avos' },
    { id: '16-6', e1: '1F', e2: '3C/E/H', f1: '🏳️', f2: '🏳️', fecha: '2 jul', hora: '15:00', estadio: 'Gillette Stadium', fase: '16avos' },
    { id: '16-7', e1: '1G', e2: '3D/E/I', f1: '🏳️', f2: '🏳️', fecha: '2 jul', hora: '18:00', estadio: 'Levis Stadium', fase: '16avos' },
    { id: '16-8', e1: '1H', e2: '3F/G/I', f1: '🏳️', f2: '🏳️', fecha: '2 jul', hora: '21:00', estadio: 'Azteca', fase: '16avos' },
    { id: '16-9', e1: '1I', e2: '3G/J/K', f1: '🏳️', f2: '🏳️', fecha: '3 jul', hora: '12:00', estadio: 'MetLife', fase: '16avos' },
    { id: '16-10', e1: '1J', e2: '3H/K/L', f1: '🏳️', f2: '🏳️', fecha: '3 jul', hora: '15:00', estadio: 'AT&T Stadium', fase: '16avos' },
    { id: '16-11', e1: '1K', e2: '3I/J/L', f1: '🏳️', f2: '🏳️', fecha: '3 jul', hora: '18:00', estadio: 'Rose Bowl', fase: '16avos' },
    { id: '16-12', e1: '1L', e2: '3E/F/J', f1: '🏳️', f2: '🏳️', fecha: '3 jul', hora: '21:00', estadio: 'SoFi Stadium', fase: '16avos' },
    { id: '16-13', e1: '2A', e2: '2C', f1: '🏳️', f2: '🏳️', fecha: '4 jul', hora: '12:00', estadio: 'Allegiant Stadium', fase: '16avos' },
    { id: '16-14', e1: '2B', e2: '2D', f1: '🏳️', f2: '🏳️', fecha: '4 jul', hora: '15:00', estadio: 'Gillette Stadium', fase: '16avos' },
    { id: '16-15', e1: '2E', e2: '2G', f1: '🏳️', f2: '🏳️', fecha: '4 jul', hora: '18:00', estadio: 'Azteca', fase: '16avos' },
    { id: '16-16', e1: '2F', e2: '2H', f1: '🏳️', f2: '🏳️', fecha: '4 jul', hora: '21:00', estadio: 'MetLife', fase: '16avos' },
  ],
  'octavos': [
    { id: '8-1', e1: 'G16-1', e2: 'G16-2', f1: '🏳️', f2: '🏳️', fecha: '5 jul', hora: '15:00', estadio: 'MetLife', fase: 'octavos' },
    { id: '8-2', e1: 'G16-3', e2: 'G16-4', f1: '🏳️', f2: '🏳️', fecha: '5 jul', hora: '19:00', estadio: 'AT&T Stadium', fase: 'octavos' },
    { id: '8-3', e1: 'G16-5', e2: 'G16-6', f1: '🏳️', f2: '🏳️', fecha: '6 jul', hora: '15:00', estadio: 'Rose Bowl', fase: 'octavos' },
    { id: '8-4', e1: 'G16-7', e2: 'G16-8', f1: '🏳️', f2: '🏳️', fecha: '6 jul', hora: '19:00', estadio: 'SoFi Stadium', fase: 'octavos' },
    { id: '8-5', e1: 'G16-9', e2: 'G16-10', f1: '🏳️', f2: '🏳️', fecha: '7 jul', hora: '15:00', estadio: 'Allegiant Stadium', fase: 'octavos' },
    { id: '8-6', e1: 'G16-11', e2: 'G16-12', f1: '🏳️', f2: '🏳️', fecha: '7 jul', hora: '19:00', estadio: 'Azteca', fase: 'octavos' },
    { id: '8-7', e1: 'G16-13', e2: 'G16-14', f1: '🏳️', f2: '🏳️', fecha: '8 jul', hora: '15:00', estadio: 'Gillette Stadium', fase: 'octavos' },
    { id: '8-8', e1: 'G16-15', e2: 'G16-16', f1: '🏳️', f2: '🏳️', fecha: '8 jul', hora: '19:00', estadio: 'MetLife', fase: 'octavos' },
  ],
  'cuartos': [
    { id: '4-1', e1: 'G8-1', e2: 'G8-2', f1: '🏳️', f2: '🏳️', fecha: '11 jul', hora: '15:00', estadio: 'MetLife', fase: 'cuartos' },
    { id: '4-2', e1: 'G8-3', e2: 'G8-4', f1: '🏳️', f2: '🏳️', fecha: '11 jul', hora: '19:00', estadio: 'AT&T Stadium', fase: 'cuartos' },
    { id: '4-3', e1: 'G8-5', e2: 'G8-6', f1: '🏳️', f2: '🏳️', fecha: '12 jul', hora: '15:00', estadio: 'Rose Bowl', fase: 'cuartos' },
    { id: '4-4', e1: 'G8-7', e2: 'G8-8', f1: '🏳️', f2: '🏳️', fecha: '12 jul', hora: '19:00', estadio: 'SoFi Stadium', fase: 'cuartos' },
  ],
  'semis': [
    { id: 'semi-1', e1: 'G4-1', e2: 'G4-2', f1: '🏳️', f2: '🏳️', fecha: '14 jul', hora: '19:00', estadio: 'MetLife', fase: 'semis' },
    { id: 'semi-2', e1: 'G4-3', e2: 'G4-4', f1: '🏳️', f2: '🏳️', fecha: '15 jul', hora: '19:00', estadio: 'AT&T Stadium', fase: 'semis' },
  ],
  '3y4': [
    { id: '3y4-1', e1: 'P-Semi1', e2: 'P-Semi2', f1: '🏳️', f2: '🏳️', fecha: '18 jul', hora: '15:00', estadio: 'AT&T Stadium', fase: '3y4' },
  ],
  'final': [
    { id: 'final-1', e1: 'G-Semi1', e2: 'G-Semi2', f1: '🏳️', f2: '🏳️', fecha: '19 jul', hora: '18:00', estadio: 'MetLife', fase: 'final' },
  ],
};

export const fasesFinalesConfig = [
  { key: '16avos' as FaseType, label: 'Dieciseisavos', pts: '40 pts' },
  { key: 'octavos' as FaseType, label: 'Octavos', pts: '60 pts' },
  { key: 'cuartos' as FaseType, label: 'Cuartos', pts: '80 pts' },
  { key: 'semis' as FaseType, label: 'Semifinales', pts: '100 pts' },
  { key: '3y4' as FaseType, label: '3er y 4to', pts: '100 pts' },
  { key: 'final' as FaseType, label: 'Final', pts: '200 pts' },
];

export const standings: Record<string, StandingTeam[]> = {
  A: [
    { pos: 1, flag: '🇺🇾', name: 'Uruguay', pj: 3, g: 2, e: 0, p: 1, gf: 5, gc: 3, gd: 2, pts: 6 },
    { pos: 2, flag: '🇲🇽', name: 'México', pj: 3, g: 2, e: 0, p: 1, gf: 4, gc: 3, gd: 1, pts: 6 },
    { pos: 3, flag: '🇺🇸', name: 'EE.UU.', pj: 3, g: 1, e: 1, p: 1, gf: 3, gc: 3, gd: 0, pts: 4 },
    { pos: 4, flag: '🇨🇦', name: 'Canadá', pj: 3, g: 0, e: 1, p: 2, gf: 2, gc: 5, gd: -3, pts: 1 },
  ],
  B: [
    { pos: 1, flag: '🇧🇷', name: 'Brasil', pj: 3, g: 3, e: 0, p: 0, gf: 7, gc: 1, gd: 6, pts: 9 },
    { pos: 2, flag: '🇩🇪', name: 'Alemania', pj: 3, g: 2, e: 0, p: 1, gf: 5, gc: 3, gd: 2, pts: 6 },
    { pos: 3, flag: '🇯🇵', name: 'Japón', pj: 3, g: 1, e: 0, p: 2, gf: 3, gc: 5, gd: -2, pts: 3 },
    { pos: 4, flag: '🇲🇦', name: 'Marruecos', pj: 3, g: 0, e: 0, p: 3, gf: 1, gc: 7, gd: -6, pts: 0 },
  ],
  C: [
    { pos: 1, flag: '🇦🇷', name: 'Argentina', pj: 3, g: 2, e: 1, p: 0, gf: 6, gc: 2, gd: 4, pts: 7 },
    { pos: 2, flag: '🇫🇷', name: 'Francia', pj: 3, g: 2, e: 0, p: 1, gf: 5, gc: 3, gd: 2, pts: 6 },
    { pos: 3, flag: '🇧🇪', name: 'Bélgica', pj: 3, g: 1, e: 0, p: 2, gf: 3, gc: 5, gd: -2, pts: 3 },
    { pos: 4, flag: '🇰🇷', name: 'Corea del Sur', pj: 3, g: 0, e: 1, p: 2, gf: 2, gc: 6, gd: -4, pts: 1 },
  ],
  K: [
    { pos: 1, flag: '🇨🇴', name: 'Colombia', pj: 3, g: 2, e: 0, p: 1, gf: 6, gc: 3, gd: 3, pts: 6 },
    { pos: 2, flag: '🇵🇹', name: 'Portugal', pj: 3, g: 2, e: 1, p: 0, gf: 5, gc: 2, gd: 3, pts: 7 },
    { pos: 3, flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: 'Inglaterra', pj: 3, g: 1, e: 1, p: 1, gf: 3, gc: 4, gd: -1, pts: 4 },
    { pos: 4, flag: '🇺🇿', name: 'Uzbekistán', pj: 3, g: 0, e: 0, p: 3, gf: 1, gc: 6, gd: -5, pts: 0 },
  ],
};

export const jugadores: Jugador[] = [
  { rank: 1, initials: 'MR', name: 'María Ramírez', color: '#fff3e0', textColor: '#e65100', partidos: 380, especiales: 32, puntos: 412 },
  { rank: 2, initials: 'JG', name: 'Juan García', color: '#e8eaf6', textColor: '#283593', partidos: 359, especiales: 30, puntos: 389 },
  { rank: 3, initials: 'LP', name: 'Laura Pérez', color: '#e8f5e9', textColor: '#1b5e20', partidos: 326, especiales: 30, puntos: 356 },
  { rank: 4, initials: 'CR', name: 'Carlos Rodríguez (Yo)', color: '#e3f2fd', textColor: '#0d47a1', partidos: 247, especiales: 0, puntos: 247, isMe: true },
  { rank: 5, initials: 'AS', name: 'Andrés Soto', color: '#fce4ec', textColor: '#880e4f', partidos: 201, especiales: 30, puntos: 231 },
  { rank: 6, initials: 'VM', name: 'Valeria Mora', color: '#f3e5f5', textColor: '#4a148c', partidos: 198, especiales: 0, puntos: 198 },
  { rank: 7, initials: 'DC', name: 'Diego Castro', color: '#e0f7fa', textColor: '#006064', partidos: 176, especiales: 0, puntos: 176 },
];

export const cuentas = [
  { id: '1', nombre: 'Carlos Rodríguez', tag: '@carlos1', avatarColor: '#f0a500', puntos: 247 },
  { id: '2', nombre: 'Carlos Rodríguez', tag: '@carlos2', avatarColor: '#34c759', puntos: 183 },
  { id: '3', nombre: 'Carlos Rodríguez', tag: '@carlos3', avatarColor: '#af52de', puntos: 95 },
];

export const dateOrder = ['12 jun', '13 jun', '14 jun', '15 jun', '16 jun', '17 jun', '18 jun', '19 jun', '20 jun', '21 jun', '22 jun', '23 jun', '24 jun', '25 jun', '26 jun', '27 jun', '28 jun'];

export const HOY = '18 jun';

export function getFlag(name: string): string {
  const e = equipos.find((x) => x.name === name);
  return e ? e.flag : '🏳️';
}
