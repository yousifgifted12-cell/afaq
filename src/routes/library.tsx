import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "مكتبة آفاق — نادي آفاق المعرفة" },
      { name: "description", content: "مكتبة آفاق — ملخصات وكتب قريبًا." },
      { property: "og:title", content: "مكتبة آفارق — نادي آفاق المعرفة" },
      { property: "og:description", content: "مكتبة آفاق — ملخصات وكتب قريبًا." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LibraryPage,
});

function LibraryPage() {
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
            مكتبة آفاق
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-[var(--navy-deep)] md:text-5xl lg:text-6xl">
            مكتبة <span className="text-[var(--gold)]">آفاق المعرفة</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 pb-20">
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-10 text-center shadow-sm transition-all hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-elegant)]">
          <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-gold)] opacity-80" />

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--navy-deep)] text-[var(--gold)] ring-1 ring-[var(--gold)]/30">
            <BookIcon />
          </div>

          <h2 className="mt-6 font-display text-2xl font-bold text-[var(--navy-deep)]">
            قريبًا
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-lg leading-loose text-[var(--ink)]/85">
            ستتضمن مكتبة آفاق ملخصات وكتب.
          </p>
        </div>
      </div>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} نادي آفاق المعرفة
      </footer>
    </div>
  );
}

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-9 w-9">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}
