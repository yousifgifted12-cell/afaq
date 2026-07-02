import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "رسالتنا — نادي آفاق المعرفة" },
      { name: "description", content: "تعرّف على رسالة ورؤية وأهداف نادي آفاق المعرفة." },
      { property: "og:title", content: "رسالتنا — نادي آفاق المعرفة" },
      { property: "og:description", content: "تعرّف على رسالة ورؤية وأهداف نادي آفاق المعرفة." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MissionPage,
});

function MissionPage() {
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
            رسالتنا
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-[var(--navy-deep)] md:text-5xl lg:text-6xl">
            رسالة <span className="text-[var(--gold)]">آفاق المعرفة</span>
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 pb-20 space-y-12">
        <SectionCard title="لماذا أُسس النادي؟">
          <p className="text-lg leading-loose text-[var(--ink)]/85">
            أسس نادي آفاق المعرفة لأننا نؤمن أن المعرفة قادرة على تغيير حياة الإنسان وفتح أبواب لم يكن يتخيلها. أردنا أن يكون هذا النادي مكانًا يجتمع فيه الشغف بالتعلم، وتُصنع فيه الأفكار والطموحات، ليكون لكل شخص فرصة أن يكتشف آفاقًا جديدة في نفسه وفي مستقبله. فالمعرفة ليست مجرد معلومات، بل نور يقودنا إلى الأفضل.
          </p>
        </SectionCard>

        <SectionCard title="الرؤية">
          <p className="text-lg leading-loose text-[var(--ink)]/85">
            رؤية نادي آفاق المعرفة هي بناء جيلٍ محبٍ للتعلم، مؤمنٍ بقوة المعرفة، وقادرٍ على تحويل الأفكار إلى إنجازات. نسعى إلى أن يكون النادي مساحةً تلهم الإبداع، وتنمّي القدرات، وتفتح آفاقًا جديدة لكل من يطمح إلى مستقبلٍ أفضل.
          </p>
        </SectionCard>

        <SectionCard title="الرسالة">
          <p className="text-lg leading-loose text-[var(--ink)]/85">
            تتمثل رسالة نادي آفاق المعرفة في نشر ثقافة التعلم والمعرفة، وتشجيع الإبداع والتفكير، وتوفير بيئة داعمة تساعد الأفراد على تطوير مهاراتهم واكتشاف إمكاناتهم، ليكونوا أكثر قدرة على صناعة مستقبلهم وخدمة مجتمعهم.
          </p>
        </SectionCard>

        <SectionCard title="أهداف النادي">
          <ul className="space-y-4">
            {[
              "نشر حب التعلم والمعرفة.",
              "تشجيع القراءة وتبادل المعلومات.",
              "تطوير مهارات الأعضاء وقدراتهم.",
              "تنمية الإبداع والتفكير.",
              "تعزيز التعاون والعمل الجماعي.",
              "اكتشاف المواهب ودعمها.",
              "المساهمة في بناء جيل واعٍ ومثقف.",
            ].map((goal, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[var(--gold)]" />
                <span className="text-lg text-[var(--ink)]/85">{goal}</span>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="ماذا يميز آفاق المعرفة عن غيره؟">
          <p className="text-lg leading-loose text-[var(--ink)]/85">
            آفاق المعرفه ليس مجرد نادي مختص بقسم معين بل نادينا واسع النطاق والافق يقدم أكثر من مجال معرفي لذا سمي بنادي آفاق المعرفه
          </p>
        </SectionCard>
      </div>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} نادي آفاق المعرفة
      </footer>
    </div>
  );
}

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-elegant)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-gold)] opacity-80" />
      <h2 className="font-display text-2xl font-bold text-[var(--navy-deep)] mb-5">{title}</h2>
      {children}
    </div>
  );
}
