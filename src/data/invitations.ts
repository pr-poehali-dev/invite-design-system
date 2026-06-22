export type Category = 'toy' | 'lesson';

export interface Template {
  id: string;
  category: Category;
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
  textRu: string;
}

export const TEMPLATES: Template[] = [
  {
    id: 'qudalyq',
    category: 'toy',
    name: 'Свадьба',
    nameKz: 'Үйлену тойы',
    gradient: 'linear-gradient(160deg, #0e7490 0%, #14b8a6 55%, #f0c75e 100%)',
    accent: '#f0c75e',
    emoji: '💍',
    bgImage: 'https://cdn.poehali.dev/projects/44e10473-1690-4bd2-a3ff-18e31f80ad75/files/ac8d6f66-69bd-44d4-a03d-6526817d8134.jpg',
  },
  {
    id: 'tusau',
    category: 'toy',
    name: 'Тұсаукесер',
    nameKz: 'Тұсаукесер',
    gradient: 'linear-gradient(160deg, #ec4899 0%, #f97316 60%, #fde047 100%)',
    accent: '#fde047',
    emoji: '👶',
  },
  {
    id: 'sundet',
    category: 'toy',
    name: 'Сүндет той',
    nameKz: 'Сүндет той',
    gradient: 'linear-gradient(160deg, #1e3a8a 0%, #2563eb 55%, #38bdf8 100%)',
    accent: '#38bdf8',
    emoji: '🎉',
  },
  {
    id: 'mereytoy',
    category: 'toy',
    name: 'Мерейтой',
    nameKz: 'Мерейтой',
    gradient: 'linear-gradient(160deg, #7c2d12 0%, #b91c1c 55%, #f0c75e 100%)',
    accent: '#f0c75e',
    emoji: '🎂',
  },

  // Открытые уроки — отдельный дизайн под каждый предмет
  {
    id: 'math',
    category: 'lesson',
    name: 'Математика',
    nameKz: 'Математика',
    gradient: 'linear-gradient(160deg, #312e81 0%, #4f46e5 55%, #818cf8 100%)',
    accent: '#c7d2fe',
    emoji: '📐',
  },
  {
    id: 'kazakh',
    category: 'lesson',
    name: 'Казахский язык',
    nameKz: 'Қазақ тілі',
    gradient: 'linear-gradient(160deg, #065f46 0%, #059669 55%, #fcd34d 100%)',
    accent: '#fcd34d',
    emoji: '📖',
  },
  {
    id: 'physics',
    category: 'lesson',
    name: 'Физика',
    nameKz: 'Физика',
    gradient: 'linear-gradient(160deg, #0c4a6e 0%, #0891b2 55%, #67e8f9 100%)',
    accent: '#67e8f9',
    emoji: '⚛️',
  },
  {
    id: 'chemistry',
    category: 'lesson',
    name: 'Химия',
    nameKz: 'Химия',
    gradient: 'linear-gradient(160deg, #4a044e 0%, #a21caf 55%, #f0abfc 100%)',
    accent: '#f0abfc',
    emoji: '🧪',
  },
  {
    id: 'history',
    category: 'lesson',
    name: 'История',
    nameKz: 'Тарих',
    gradient: 'linear-gradient(160deg, #451a03 0%, #b45309 55%, #fcd34d 100%)',
    accent: '#fcd34d',
    emoji: '🏛️',
  },
  {
    id: 'biology',
    category: 'lesson',
    name: 'Биология',
    nameKz: 'Биология',
    gradient: 'linear-gradient(160deg, #14532d 0%, #16a34a 55%, #86efac 100%)',
    accent: '#86efac',
    emoji: '🌿',
  },
  {
    id: 'english',
    category: 'lesson',
    name: 'Английский язык',
    nameKz: 'Ағылшын тілі',
    gradient: 'linear-gradient(160deg, #7f1d1d 0%, #dc2626 55%, #fca5a5 100%)',
    accent: '#fca5a5',
    emoji: '🌍',
  },
  {
    id: 'literature',
    category: 'lesson',
    name: 'Литература',
    nameKz: 'Әдебиет',
    gradient: 'linear-gradient(160deg, #1e1b4b 0%, #7c3aed 55%, #c4b5fd 100%)',
    accent: '#c4b5fd',
    emoji: '✒️',
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
export const DEFAULT_TEXT_RU =
  'Приглашаем вас разделить с нами радость нашего семейного праздника! Добро пожаловать, дорогие гости.';

export const LESSON_TEXT_KZ =
  'Сізді ашық сабағыма қатысуға шақырамын. Бірге білім әлеміне саяхат жасаймыз! Қош келдіңіз, құрметті әріптестер.';
export const LESSON_TEXT_RU =
  'Приглашаю вас на мой открытый урок. Вместе отправимся в увлекательное путешествие в мир знаний! Добро пожаловать, дорогие коллеги.';

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
    textRu: DEFAULT_TEXT_RU,
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
    textRu: DEFAULT_TEXT_RU,
  },
  {
    id: 'e3',
    title: 'Ашық сабақ — Математика',
    templateId: 'math',
    trackId: 't2',
    guestName: 'Құрметті әріптес',
    date: '20 ақпан 2026, 10:00',
    place: '№12 мектеп, 204-кабинет',
    textKz: LESSON_TEXT_KZ,
    textRu: LESSON_TEXT_RU,
  },
  {
    id: 'e4',
    title: 'Открытый урок — Химия',
    templateId: 'chemistry',
    trackId: 't4',
    guestName: 'Уважаемый коллега',
    date: '25 февраля 2026, 11:30',
    place: 'Школа №12, кабинет 301',
    textKz: LESSON_TEXT_KZ,
    textRu: LESSON_TEXT_RU,
  },
];