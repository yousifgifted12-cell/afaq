import { createFileRoute } from "@tanstack/react-router";
import { Shield, Users } from "lucide-react";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "مجتمع آفاق — نادي آفاق المعرفة" },
      { name: "description", content: "مجتمع آفاق — المشرفون." },
      { property: "og:title", content: "مجتمع آفاق — نادي آفاق المعرفة" },
      { property: "og:description", content: "مجتمع آفاق — المشرفون." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});

function CommunityPage() {
  const supervisors = [
    { name: "زيد مهند قيس", role: "مشرف" },
    { name: "يوسف خالد جبار", role: "مشرف" },
  ];

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
            مجتمع آفاق
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-[var(--navy-deep)] md:text-5xl lg:text-6xl">
            مجتمع <span className="text-[var(--gold)]">آفاق المعرفة</span>
          </h1>
        </div>
      </section>

      {/* Supervisors */}
      <div className="mx-auto max-w-4xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          {supervisors.map((s) => (
            <div
              key={s.name}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-gold)] opacity-80" />

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--navy-deep)] text-[var(--gold)] ring-1 ring-[var(--gold)]/30">
                <Shield className="h-9 w-9" />
              </div>

              <h2 className="mt-6 font-display text-2xl font-bold text-[var(--navy-deep)]">
                {s.name}
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-base leading-loose text-[var(--ink)]/70">
                {s.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} نادي آفاق المعرفة
      </footer>
    </div>
  );
}
