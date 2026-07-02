import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});



function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">

      {/* Hero */}
      <section id="main" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--sky)_22%,transparent),transparent_60%)]" />
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--gold)]/10 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="order-2 md:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--navy-deep)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              الرئيسية
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-[var(--navy-deep)] md:text-5xl lg:text-6xl">
              نادي <span className="text-[var(--gold)]">آفاق المعرفة</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-loose text-[var(--ink)]/85 md:text-xl">
              نادي آفاق المعارف ليس مجرد نادٍ عادي، بل هو مساحة يجتمع فيها الفكر والإبداع.
              نستكشف العلوم والآداب والفنون، وننمّي مهارات البحث والتفكير وحل المشكلات،
              لنصنع عقولًا لا تعرف حدودًا.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <PersonCard role="مؤسس النادي" name="زيد مهند قيس" icon={<FounderIcon />} />
              <PersonCard role="الرئيس التنفيذي" name="يوسف خالد جبار" icon={<CEOIcon />} />
            </div>
          </div>

          <div className="order-1 flex justify-center md:order-2">
            <div className="relative">
              <div className="absolute inset-0 -m-6 rounded-full bg-[var(--gradient-navy)] opacity-20 blur-2xl" />
              <div className="relative rounded-full bg-[var(--navy-deep)] p-3 shadow-[var(--shadow-elegant)] ring-1 ring-[var(--gold)]/30">
                <img
                  src={logoAsset.url}
                  alt="شعار نادي آفاق المعرفة"
                  className="h-72 w-72 rounded-full object-cover md:h-96 md:w-96"
                />
              </div>
              <div className="pointer-events-none absolute -inset-2 rounded-full border border-[var(--gold)]/30" />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} نادي آفاق المعرفة
      </footer>
    </div>
  );
}

function PersonCard({ role, name, icon }: { role: string; name: string; icon: React.ReactNode }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-elegant)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-gold)] opacity-80" />
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[var(--navy-deep)] text-[var(--gold)] ring-1 ring-[var(--gold)]/30">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="text-xs font-medium uppercase tracking-wider text-[var(--sky)]">{role}</div>
          <div className="mt-1 font-display text-lg font-bold text-[var(--navy-deep)] truncate">{name}</div>
        </div>
      </div>
    </div>
  );
}

function FounderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 14.8 7.1 17.2 8 11.7 4 7.8l5.5-.8L12 2z" />
      <path d="M5 21h14" />
    </svg>
  );
}

function CEOIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M4.5 20c1.2-3.6 4.2-5.5 7.5-5.5s6.3 1.9 7.5 5.5" />
      <path d="M9 3.5l3 2 3-2" />
    </svg>
  );
}
