export interface Template {
  id: string;
  name: string;
  nameKz: string;
  gradient: string;
  accent: string;
  emoji: string;
  bgImage?: string;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  emoji: string;
}

export interface InviteEvent {
  id: string;
  title: string;
  templateId: string;
  trackId: string;
  guestName: string;
  date: string;
  place: string;
  textKz: string;
}

export const TEMPLATES: Template[] = [
  {
    id: 'qudalyq',
    name: 'Свадьба',
    nameKz: 'Үйлену тойы',
    gradient: 'linear-gradient(160deg, #0e7490 0%, #14b8a6 55%, #f0c75e 100%)',
    accent: '#f0c75e',
    emoji: '💍',
    bgImage: 'https://cdn.poehali.dev/projects/44e10473-1690-4bd2-a3ff-18e31f80ad75/files/ac8d6f66-69bd-44d4-a03d-6526817d8134.jpg',
  },
  {
    id: 'tusau',
    name: 'Тұсаукесер',
    nameKz: 'Тұсаукесер',
    gradient: 'linear-gradient(160deg, #ec4899 0%, #f97316 60%, #fde047 100%)',
    accent: '#fde047',
    emoji: '👶',
  },
  {
    id: 'sundet',
    name: 'Сүндет той',
    nameKz: 'Сүндет той',
    gradient: 'linear-gradient(160deg, #1e3a8a 0%, #2563eb 55%, #38bdf8 100%)',
    accent: '#38bdf8',
    emoji: '🎉',
  },
  {
    id: 'mereytoy',
    name: 'Мерейтой',
    nameKz: 'Мерейтой',
    gradient: 'linear-gradient(160deg, #7c2d12 0%, #b91c1c 55%, #f0c75e 100%)',
    accent: '#f0c75e',
    emoji: '🎂',
  },
];

export const TRACKS: Track[] = [
  { id: 't1', title: 'Той бастар', artist: 'Дәстүрлі ән', emoji: '🎵' },
  { id: 't2', title: 'Romantic Piano', artist: 'Instrumental', emoji: '🎹' },
  { id: 't3', title: 'Қара жорға', artist: 'Күй', emoji: '🪕' },
  { id: 't4', title: 'Soft Strings', artist: 'Orchestra', emoji: '🎻' },
];

export const DEFAULT_TEXT_KZ =
  'Сізді отбасылық шаттық сәтімізге арналған тойымызға шақырамыз! Қош келдіңіздер, құрметті қонақтар.';

export const EVENTS: InviteEvent[] = [
  {
    id: 'e1',
    title: 'Айдана & Нұрлан',
    templateId: 'qudalyq',
    trackId: 't1',
    guestName: 'Құрметті қонақ',
    date: '15 шілде 2026',
    place: 'Той сарайы «Астана»',
    textKz: DEFAULT_TEXT_KZ,
  },
  {
    id: 'e2',
    title: 'Тұсаукесер — Әмина',
    templateId: 'tusau',
    trackId: 't3',
    guestName: 'Қадірлі дос',
    date: '3 тамыз 2026',
    place: 'Ресторан «Шаңырақ»',
    textKz: DEFAULT_TEXT_KZ,
  },
];
