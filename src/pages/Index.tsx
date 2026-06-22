import { useState } from 'react';
import {
  TEMPLATES,
  TRACKS,
  EVENTS as INITIAL_EVENTS,
  DEFAULT_TEXT_KZ,
  InviteEvent,
} from '@/data/invitations';
import InvitePreview from '@/components/InvitePreview';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const ADMIN_PASSWORD = 'admin2026';

type Tab = 'templates' | 'music' | 'events';

const Index = () => {
  const [events, setEvents] = useState<InviteEvent[]>(INITIAL_EVENTS);
  const [selectedEventId, setSelectedEventId] = useState<string>(INITIAL_EVENTS[0].id);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [tab, setTab] = useState<Tab>('events');

  const selectedEvent = events.find((e) => e.id === selectedEventId)!;
  const selectedTemplate = TEMPLATES.find((t) => t.id === selectedEvent.templateId)!;
  const selectedTrack = TRACKS.find((t) => t.id === selectedEvent.trackId)!;

  const updateEvent = (patch: Partial<InviteEvent>) => {
    setEvents((prev) =>
      prev.map((e) => (e.id === selectedEventId ? { ...e, ...patch } : e))
    );
  };

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setLoginOpen(false);
      setPassword('');
      toast.success('Қош келдіңіз, әкімші!');
    } else {
      toast.error('Қате құпия сөз');
    }
  };

  const addEvent = () => {
    const id = 'e' + Date.now();
    const newEvent: InviteEvent = {
      id,
      title: 'Жаңа той',
      templateId: TEMPLATES[0].id,
      trackId: TRACKS[0].id,
      guestName: 'Құрметті қонақ',
      date: '1 қаңтар 2026',
      place: 'Той сарайы',
      textKz: DEFAULT_TEXT_KZ,
    };
    setEvents((prev) => [...prev, newEvent]);
    setSelectedEventId(id);
    toast.success('Жаңа шақыру қосылды');
  };

  return (
    <div className="min-h-screen bg-festive">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-2xl">
              💌
            </div>
            <div>
              <h1 className="font-script text-2xl leading-none text-primary">Шақыру</h1>
              <p className="font-body text-xs text-muted-foreground">пригласительные</p>
            </div>
          </div>
          {isAdmin ? (
            <Button variant="ghost" onClick={() => setIsAdmin(false)} className="gap-2">
              <Icon name="LogOut" size={18} /> Шығу
            </Button>
          ) : (
            <Button onClick={() => setLoginOpen(true)} className="gap-2">
              <Icon name="Lock" size={18} /> Әкімші
            </Button>
          )}
        </div>
      </header>

      {/* Hero */}
      <section className="container py-12 text-center animate-fade-in">
        <p className="font-body uppercase tracking-[0.3em] text-xs text-accent mb-3">
          ✦ цифровые пригласительные ✦
        </p>
        <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
          Әрбір тойға <span className="text-gold-gradient">ерекше шақыру</span>
        </h2>
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          Создавайте красивые приглашения, меняйте имена гостей и отправляйте каждому свой вариант — оригинал останется нетронутым.
        </p>
      </section>

      <main className="container pb-24 grid lg:grid-cols-[1fr_400px] gap-10 items-start">
        {/* Admin panel */}
        <div className="order-2 lg:order-1">
          {isAdmin ? (
            <div className="rounded-3xl border border-border bg-card p-6 shadow-lg">
              {/* Tabs */}
              <div className="flex gap-2 mb-6 rounded-2xl bg-muted p-1">
                {([
                  { k: 'events', label: 'Мероприятия', icon: 'CalendarHeart' },
                  { k: 'templates', label: 'Шаблоны', icon: 'LayoutTemplate' },
                  { k: 'music', label: 'Музыка', icon: 'Music' },
                ] as const).map((t) => (
                  <button
                    key={t.k}
                    onClick={() => setTab(t.k)}
                    className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-2.5 font-body text-sm transition-all ${
                      tab === t.k
                        ? 'bg-card text-primary shadow font-medium'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon name={t.icon} size={16} /> {t.label}
                  </button>
                ))}
              </div>

              {/* Events tab */}
              {tab === 'events' && (
                <div className="space-y-6 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-semibold">Мероприятия</h3>
                    <Button size="sm" onClick={addEvent} className="gap-1">
                      <Icon name="Plus" size={16} /> Қосу
                    </Button>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {events.map((e) => {
                      const tpl = TEMPLATES.find((t) => t.id === e.templateId)!;
                      return (
                        <button
                          key={e.id}
                          onClick={() => setSelectedEventId(e.id)}
                          className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition-all hover:shadow-md ${
                            selectedEventId === e.id
                              ? 'border-primary ring-2 ring-primary/20'
                              : 'border-border'
                          }`}
                        >
                          <div
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-2xl"
                            style={{ background: tpl.gradient }}
                          >
                            {tpl.emoji}
                          </div>
                          <div className="min-w-0">
                            <p className="font-body font-medium truncate">{e.title}</p>
                            <p className="font-body text-xs text-muted-foreground truncate">
                              {e.guestName}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Editor */}
                  <div className="rounded-2xl border border-border bg-muted/40 p-5 space-y-4">
                    <h4 className="font-display text-xl font-semibold flex items-center gap-2">
                      <Icon name="Pencil" size={18} className="text-primary" /> Редактирование
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label>Название</Label>
                        <Input
                          value={selectedEvent.title}
                          onChange={(e) => updateEvent({ title: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Имя гостя</Label>
                        <Input
                          value={selectedEvent.guestName}
                          onChange={(e) => updateEvent({ guestName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Дата</Label>
                        <Input
                          value={selectedEvent.date}
                          onChange={(e) => updateEvent({ date: e.target.value })}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label>Место</Label>
                        <Input
                          value={selectedEvent.place}
                          onChange={(e) => updateEvent({ place: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label>Қазақша мәтін</Label>
                      <Textarea
                        rows={3}
                        value={selectedEvent.textKz}
                        onChange={(e) => updateEvent({ textKz: e.target.value })}
                      />
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => updateEvent({ textKz: DEFAULT_TEXT_KZ })}
                      className="gap-1"
                    >
                      <Icon name="RotateCcw" size={14} /> Стандартный текст
                    </Button>
                  </div>
                </div>
              )}

              {/* Templates tab */}
              {tab === 'templates' && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="font-display text-2xl font-semibold">Шаблоны оформления</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {TEMPLATES.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => updateEvent({ templateId: t.id })}
                        className={`relative overflow-hidden rounded-2xl p-5 text-left text-white transition-all hover:scale-[1.02] ${
                          selectedEvent.templateId === t.id ? 'ring-4 ring-primary/40' : ''
                        }`}
                        style={{ background: t.gradient }}
                      >
                        <div className="text-3xl mb-2">{t.emoji}</div>
                        <p className="font-display text-lg font-semibold">{t.nameKz}</p>
                        <p className="font-body text-xs text-white/80">{t.name}</p>
                        {selectedEvent.templateId === t.id && (
                          <Icon
                            name="Check"
                            size={20}
                            className="absolute top-3 right-3 rounded-full bg-white/25 p-1"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Music tab */}
              {tab === 'music' && (
                <div className="space-y-4 animate-fade-in">
                  <h3 className="font-display text-2xl font-semibold">Музыка</h3>
                  <div className="space-y-3">
                    {TRACKS.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => updateEvent({ trackId: t.id })}
                        className={`flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all hover:shadow-md ${
                          selectedEvent.trackId === t.id
                            ? 'border-primary ring-2 ring-primary/20 bg-primary/5'
                            : 'border-border'
                        }`}
                      >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-2xl">
                          {t.emoji}
                        </div>
                        <div className="flex-1">
                          <p className="font-body font-medium">{t.title}</p>
                          <p className="font-body text-xs text-muted-foreground">{t.artist}</p>
                        </div>
                        <Icon
                          name={selectedEvent.trackId === t.id ? 'CirclePause' : 'CirclePlay'}
                          size={28}
                          className="text-primary"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-border bg-card/50 p-10 text-center">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="font-display text-2xl font-semibold mb-2">Панель редактора</h3>
              <p className="font-body text-muted-foreground mb-5 max-w-sm mx-auto">
                Войдите как администратор, чтобы создавать шаблоны, добавлять музыку и редактировать приглашения.
              </p>
              <Button onClick={() => setLoginOpen(true)} className="gap-2">
                <Icon name="Lock" size={18} /> Войти в панель
              </Button>
            </div>
          )}
        </div>

        {/* Live preview */}
        <div className="order-1 lg:order-2 lg:sticky lg:top-24">
          <p className="font-body text-sm text-muted-foreground mb-3 flex items-center gap-2">
            <Icon name="Eye" size={16} /> Так увидят гости:
          </p>
          <InvitePreview
            template={selectedTemplate}
            track={selectedTrack}
            event={selectedEvent}
          />
          <Button
            className="w-full mt-4 gap-2"
            variant="secondary"
            onClick={() => toast.success('Сілтеме көшірілді! Можно отправлять гостю.')}
          >
            <Icon name="Send" size={18} /> Отправить приглашение
          </Button>
        </div>
      </main>

      {/* Login modal */}
      {loginOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in"
          onClick={() => setLoginOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl bg-card p-8 shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="text-4xl mb-3">🔑</div>
              <h3 className="font-display text-2xl font-semibold">Вход для админа</h3>
              <p className="font-body text-sm text-muted-foreground">Введите пароль</p>
            </div>
            <div className="space-y-4">
              <Input
                type="password"
                placeholder="Құпия сөз"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                autoFocus
              />
              <Button className="w-full" onClick={handleLogin}>
                Кіру
              </Button>
              <p className="text-center font-body text-xs text-muted-foreground">
                Демо-пароль: admin2026
              </p>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-border/60 py-6 text-center font-body text-sm text-muted-foreground">
        Шақыру © 2026 — әдемі шақырулар платформасы
      </footer>
    </div>
  );
};

export default Index;
