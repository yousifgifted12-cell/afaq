import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "الفعاليات — نادي آفاق المعرفة" },
      { name: "description", content: "تابع فعاليات نادي آفاق المعرفة القادمة والسابقة." },
      { property: "og:title", content: "الفعاليات — نادي آفاق المعرفة" },
      { property: "og:description", content: "تابع فعاليات نادي آفاق المعرفة القادمة والسابقة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--sky)_22%,transparent),transparent_60%)]" />
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--gold)]/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--navy-deep)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            الفعاليات
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-[var(--navy-deep)] md:text-5xl lg:text-6xl">
            فعاليات <span className="text-[var(--gold)]">آفاق المعرفة</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 pb-20">
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center shadow-sm transition-all hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-elegant)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-gold)] opacity-80" />

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--navy-deep)] text-[var(--gold)] ring-1 ring-[var(--gold)]/30">
            <CalendarIcon />
          </div>

          <h2 className="mt-6 font-display text-2xl font-bold text-[var(--navy-deep)]">
            لا توجد فعاليات للآن
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-lg leading-loose text-[var(--ink)]/85">
            سيتم الإعلان عن الفعاليات القادمة قريبًا. تابعونا لمعرفة آخر الأخبار والأنشطة التي نُعدّها لكم.
          </p>
        </div>
      </div>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} نادي آفاق المعرفة
      </footer>
    </div>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
