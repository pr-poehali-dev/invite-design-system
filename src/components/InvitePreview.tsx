import { Template, Track, InviteEvent } from '@/data/invitations';
import Icon from '@/components/ui/icon';

interface InvitePreviewProps {
  template: Template;
  track: Track;
  event: InviteEvent;
  compact?: boolean;
}

const InvitePreview = ({ template, track, event, compact }: InvitePreviewProps) => {
  return (
    <div
      className="relative overflow-hidden rounded-3xl shadow-2xl animate-scale-in"
      style={{ background: template.gradient }}
    >
      {template.bgImage && (
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${template.bgImage})` }}
        />
      )}

      <div className="absolute inset-3 rounded-2xl border-2 border-white/40 pointer-events-none" />

      <div className={`relative z-10 flex flex-col items-center text-center text-white ${compact ? 'p-6 gap-3' : 'p-10 gap-5'}`}>
        <div className={`${compact ? 'text-4xl' : 'text-6xl'} animate-float`}>{template.emoji}</div>

        <p className="font-body uppercase tracking-[0.3em] text-xs text-white/80">
          {template.nameKz}
        </p>

        <h2 className={`font-script ${compact ? 'text-2xl' : 'text-4xl'} leading-tight`}>
          {event.title}
        </h2>

        <div
          className="h-px w-24"
          style={{ background: template.accent }}
        />

        <p className={`font-display ${compact ? 'text-base' : 'text-xl'} font-medium`}>
          {event.guestName}
        </p>

        {!compact && (
          <p className="font-body text-sm text-white/90 max-w-xs leading-relaxed">
            {event.textKz}
          </p>
        )}

        <div className="flex flex-col gap-2 mt-2 font-body text-sm">
          <span className="flex items-center justify-center gap-2">
            <Icon name="Calendar" size={16} style={{ color: template.accent }} />
            {event.date}
          </span>
          <span className="flex items-center justify-center gap-2">
            <Icon name="MapPin" size={16} style={{ color: template.accent }} />
            {event.place}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
          <Icon name="Music" size={14} style={{ color: template.accent }} />
          <span className="text-xs font-body">{track.emoji} {track.title}</span>
        </div>
      </div>
    </div>
  );
};

export default InvitePreview;
