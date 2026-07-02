import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/initiatives")({
  head: () => ({
    meta: [
      { title: "المبادرات — نادي آفاق المعرفة" },
      { name: "description", content: "تعرف على مبادرات نادي آفاق المعرفة القادمة والحالية." },
      { property: "og:title", content: "المشعاع المعرفة" },
      { property: "og:description", content: "تعرف على مبادرات نادي آفاق المعرفة القادمة والحالية." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InitiativesPage,
});

function InitiativesPage() {
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
            المبادرات
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-[var(--navy-deep)] md:text-5xl lg:text-6xl">
            مبادرات <span className="text-[var(--gold)]">آفاق المعرفة</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 pb-20">
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center shadow-sm transition-all hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-elegant)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-gold)] opacity-80" />

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--navy-deep)] text-[var(--gold)] ring-1 ring-[var(--gold)]/30">
            <LightbulbIcon />
          </div>

          <h2 className="mt-6 font-display text-2xl font-bold text-[var(--navy-deep)]">
            لا توجد مبادرات مقامة
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-lg leading-loose text-[var(--ink)]/85">
            سيتم الإعلان عن المبادرات القادمة قريبًا. تابعونا لتكونوا أول من يعلم بالمشاريع والمبادرات التي نُعدّها لكم.
          </p>
        </div>
      </div>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} نادي آفاق المعرفة
      </footer>
    </div>
  );
}

function LightbulbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2v1" />
      <path d="M12 15a5 5 0 0 0 5-5c0-2-1.5-3.5-3-4.5C14 4.5 12 5 12 5s-2-.5-2 0.5c-1.5 1-3 2.5-3 4.5a5 5 0 0 0 5 5z" />
    </svg>
  );
}
