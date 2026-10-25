import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { TIMER_MINUTES } from "@/config/offer";

export function scrollToOffer() {
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
}

export function CtaButton({
  children,
  onClick,
  variant = "primary",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}) {
  const base =
    "inline-flex min-h-14 w-full items-center justify-center rounded-full px-8 py-4 text-center font-display text-lg font-semibold tracking-wide transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 sm:w-auto";
  const styles =
    variant === "primary"
      ? "bg-primary text-primary-foreground shadow-cta hover:brightness-105"
      : "border-2 border-navy bg-card text-navy hover:bg-sun-soft";
  return (
    <button type="button" onClick={onClick ?? scrollToOffer} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className="text-3xl font-semibold leading-tight text-navy sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

/* ---------- Countdown (sessão) ---------- */
const TIMER_KEY = "ludorakids_offer_end";

export function Countdown() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    let end = Number(sessionStorage.getItem(TIMER_KEY));
    if (!end) {
      end = Date.now() + TIMER_MINUTES * 60 * 1000;
      sessionStorage.setItem(TIMER_KEY, String(end));
    }
    const tick = () => setLeft(Math.max(0, Math.round((end - Date.now()) / 1000)));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const secs = left ?? TIMER_MINUTES * 60;
  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");
  const done = left === 0;

  return (
    <div className="rounded-2xl bg-sky-soft p-4 text-center" aria-live="polite">
      <p className="text-sm font-semibold text-navy">
        {done ? "Seu tempo de visita terminou — a oferta continua disponível." : "Tempo da sua sessão nesta oferta"}
      </p>
      <div className="mt-2 flex items-center justify-center gap-2 font-display text-navy">
        {[mm, ss].map((v, i) => (
          <div key={i} className="flex items-center gap-2">
            {i === 1 && <span className="text-3xl font-semibold">:</span>}
            <div className="flex flex-col items-center rounded-xl bg-card px-4 py-2 shadow-soft">
              <span className="text-3xl font-semibold tabular-nums">{v}</span>
              <span className="text-xs text-muted-foreground">{i === 0 ? "min" : "seg"}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- FAQ ---------- */
export function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border bg-card shadow-soft">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-lg font-medium text-navy focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/30 rounded-2xl"
      >
        {q}
        <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- Carousel ---------- */
export type Slide = { src: string; title: string; alt: string };

export function Carousel({ slides }: { slides: Slide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState<Slide | null>(null);

  const goTo = (i: number) => {
    const n = (i + slides.length) % slides.length;
    const track = trackRef.current;
    const child = track?.children[n] as HTMLElement | undefined;
    if (track && child) track.scrollTo({ left: child.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const w = (track.children[0] as HTMLElement).offsetWidth;
    setIndex(Math.round(track.scrollLeft / w));
  };

  useEffect(() => {
    if (!zoom) return;
    const k = (e: KeyboardEvent) => e.key === "Escape" && setZoom(null);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [zoom]);

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none]"
        aria-label="Prévias do material"
      >
        {slides.map((s) => (
          <figure key={s.title} className="w-[85%] shrink-0 snap-start sm:w-[48%] lg:w-[31%]">
            <button
              type="button"
              onClick={() => setZoom(s)}
              className="block w-full overflow-hidden rounded-2xl border bg-card shadow-soft focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/30"
              aria-label={`Ampliar: ${s.title}`}
            >
              <img src={s.src} alt={s.alt} width={768} height={1044} loading="lazy" className="aspect-[768/1044] w-full object-contain" />
            </button>
            <figcaption className="mt-3 text-center font-display font-medium text-navy">{s.title}</figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        <button type="button" onClick={() => goTo(index - 1)} aria-label="Imagem anterior" className="rounded-full border bg-card p-3 text-navy shadow-soft hover:bg-sun-soft">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir para ${s.title}`}
              aria-current={i === index}
              className={`h-3 rounded-full transition-all ${i === index ? "w-8 bg-primary" : "w-3 bg-border"}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => goTo(index + 1)} aria-label="Próxima imagem" className="rounded-full border bg-card p-3 text-navy shadow-soft hover:bg-sun-soft">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {zoom && (
        <div role="dialog" aria-modal="true" aria-label={zoom.title} onClick={() => setZoom(null)} className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 p-4">
          <button type="button" aria-label="Fechar" className="absolute right-4 top-4 rounded-full bg-card p-2 text-navy">
            <X className="h-6 w-6" />
          </button>
          <img src={zoom.src} alt={zoom.alt} className="max-h-[90vh] max-w-full rounded-2xl" />
        </div>
      )}
    </div>
  );
}
