import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/worlds")({
  head: () => ({
    meta: [
      { title: "عوالم المعرفة — نادي آفاق المعرفة" },
      { name: "description", content: "استكشف عوالم المعرفة الثلاثة في نادي آفاق المعرفة: نبض الكلمات، شعاع المعرفة، ومعقل الاستراتيجيات." },
      { property: "og:title", content: "عوالم المعرفة — نادي آفاق المعرفة" },
      { property: "og:description", content: "نبض الكلمات، شعاع المعرفة، ومعقل الاستراتيجيات — ثلاثة عوالم تُشكّل رحلة المعرفة في النادي." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorldsPage,
});

type Section = { name: string; description: string };
type World = {
  key: string;
  title: string;
  intro: string;
  sectionsIntro: string;
  sections: Section[];
};

const worlds: World[] = [
  {
    key: "words",
    title: "نبض الكلمات",
    intro:
      "نبض الكلمات هو العالم الذي تنبض فيه اللغة بالحياة، حيث تتحول الأفكار إلى كلمات، والكلمات إلى إبداع يترك أثرًا في النفوس. يهدف هذا القسم إلى تنمية مهارات التعبير، وصقل المواهب الأدبية والفنية، وغرس حب اللغة العربية، ليكون منبرًا يكتشف فيه الأعضاء قدراتهم ويشاركون إبداعاتهم بثقة وتميز.",
    sectionsIntro: "أقسام نبض الكلمات",
    sections: [
      {
        name: "الأدب",
        description:
          "الأدب هو مرآة الإنسان وصوت الحضارات، فمن خلاله نقرأ تجارب الأمم ونتعرف إلى ثقافاتها وقيمها. يهتم هذا القسم بتنمية الذائقة الأدبية لدى الأعضاء، وتشجيعهم على قراءة الروايات والقصص والنصوص الأدبية وتحليلها، بالإضافة إلى تنمية مهارات الكتابة والتعبير بأسلوب راقٍ ومبدع.",
      },
      {
        name: "الفن",
        description:
          "الفن هو لغة عالمية تعبر عن الأفكار والمشاعر دون حدود. يهدف هذا القسم إلى تنمية الحس الإبداعي لدى الأعضاء من خلال الرسم والتصميم والأعمال الفنية المختلفة، وإتاحة مساحة حرة للتعبير عن المواهب وصناعة أعمال تعكس شخصية كل مبدع.",
      },
      {
        name: "الشعر",
        description:
          "الشعر هو موسيقى الكلمات وجمال المعاني، وهو أحد أعرق فنون اللغة العربية. يهتم هذا القسم بتعريف الأعضاء بعالم الشعر، وأوزانه وأساليبه، وتشجيعهم على قراءة القصائد وإلقائها وكتابتها، لتنمية قدرتهم على التعبير بأسلوب يجمع بين البلاغة والإحساس.",
      },
    ],
  },
  {
    key: "knowledge",
    title: "شعاع المعرفة",
    intro:
      "شعاع المعرفة هو القسم الذي يفتح آفاق العقل لاستكشاف أسرار الكون وفهم الظواهر التي تحيط بنا. يجمع بين العلوم والتقنية، ويشجع الأعضاء على التفكير العلمي، والبحث، والتجريب، وتحويل الفضول إلى معرفة، والمعرفة إلى ابتكار يخدم المجتمع.",
    sectionsIntro: "أقسام شعاع المعرفة",
    sections: [
      {
        name: "الفيزياء",
        description:
          "الفيزياء هي العلم الذي يفسر حركة الكون وقوانينه، بدءًا من أصغر الجسيمات وصولًا إلى المجرات. يهدف هذا القسم إلى تنمية التفكير العلمي، وفهم الظواهر الطبيعية، وربط المفاهيم النظرية بالتجارب العملية، ليصبح العلم وسيلة لاكتشاف العالم من حولنا.",
      },
      {
        name: "الكيمياء",
        description:
          "الكيمياء هي علم المادة وتفاعلاتها، ومن خلالها نفهم تركيب الأشياء التي نستخدمها في حياتنا اليومية وكيفية تغيرها. يهتم هذا القسم بتنمية مهارات الملاحظة والاستنتاج، وإجراء التجارب العلمية بطريقة آمنة، وتشجيع الأعضاء على اكتشاف أسرار العالم من منظور علمي.",
      },
      {
        name: "الحاسوب",
        description:
          "الحاسوب هو أداة العصر ومحرك التطور التقني، ويمثل بوابة نحو الابتكار والإبداع. يهدف هذا القسم إلى تعريف الأعضاء بأساسيات الحاسوب والبرمجة والتقنيات الحديثة، وتنمية مهارات التفكير المنطقي وحل المشكلات باستخدام التكنولوجيا.",
      },
    ],
  },
  {
    key: "strategies",
    title: "معقل الاستراتيجيات",
    intro:
      "معقل الاستراتيجيات هو مساحة لتنمية التفكير العميق واتخاذ القرارات المدروسة. يركز على بناء العقل التحليلي، وتعزيز مهارات التخطيط والمنطق، وإعداد الأعضاء لمواجهة التحديات بثقة وذكاء، من خلال أنشطة تعتمد على التفكير قبل التنفيذ.",
    sectionsIntro: "أقسام معقل الاستراتيجيات",
    sections: [
      {
        name: "الشطرنج",
        description:
          "الشطرنج أكثر من مجرد لعبة؛ فهو مدرسة في التخطيط والصبر واتخاذ القرار. يساعد هذا القسم الأعضاء على تنمية مهارات التفكير الاستراتيجي، وتحليل المواقف، والتنبؤ بالنتائج، مما ينعكس إيجابًا على حياتهم الدراسية واليومية.",
      },
      {
        name: "الحساب الذهني",
        description:
          "الحساب الذهني هو مهارة تعتمد على سرعة التفكير ودقة الملاحظة، ويهدف إلى إجراء العمليات الحسابية دون الحاجة إلى أدوات مساعدة. يعمل هذا القسم على تطوير التركيز، وتقوية الذاكرة، وزيادة سرعة معالجة المعلومات، مما يعزز الثقة بالقدرات العقلية.",
      },
      {
        name: "البحوث",
        description:
          "البحث العلمي هو الطريق المنظم للوصول إلى المعرفة واكتشاف الحقائق. يهدف هذا القسم إلى تعليم الأعضاء أساليب البحث، وجمع المعلومات من مصادر موثوقة، وتحليلها، وعرضها بطريقة علمية، بما يسهم في بناء شخصية باحثة قادرة على التفكير النقدي والإبداع.",
      },
    ],
  },
];

function WorldsPage() {
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
            عوالم المعرفة
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-[var(--navy-deep)] md:text-5xl lg:text-6xl">
            عوالم <span className="text-[var(--gold)]">المعرفة</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-loose text-[var(--ink)]/85">
            ثلاثة عوالم تتشابك لتصنع رحلة العقل في نادي آفاق المعرفة — من نبض الكلمات، إلى شعاع المعرفة، فمعقل الاستراتيجيات.
          </p>
        </div>
      </section>

      {/* Worlds */}
      <div className="mx-auto max-w-5xl px-6 pb-20 space-y-16">
        {worlds.map((world, idx) => (
          <WorldBlock key={world.key} world={world} index={idx + 1} />
        ))}
      </div>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} نادي آفاق المعرفة
      </footer>
    </div>
  );
}

function WorldBlock({ world, index }: { world: World; index: number }) {
  return (
    <section className="relative">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
        <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-gold)] opacity-80" />
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--navy-deep)] font-display text-xl font-bold text-[var(--gold)] ring-1 ring-[var(--gold)]/30">
            {toArabicNumeral(index)}
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-[var(--navy-deep)] md:text-4xl">{world.title}</h2>
            <p className="mt-4 text-lg leading-loose text-[var(--ink)]/85">{world.intro}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4 px-2">
        <span className="h-px flex-1 bg-[var(--gold)]/30" />
        <span className="rounded-full border border-[var(--gold)]/40 bg-[var(--gold)]/10 px-4 py-1.5 text-xs font-medium tracking-wide text-[var(--navy-deep)]">
          {world.sectionsIntro}
        </span>
        <span className="h-px flex-1 bg-[var(--gold)]/30" />
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {world.sections.map((s) => (
          <article
            key={s.name}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--gold)]/60 hover:shadow-[var(--shadow-elegant)]"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-[var(--gradient-gold)] opacity-70" />
            <h3 className="font-display text-xl font-bold text-[var(--navy-deep)]">{s.name}</h3>
            <div className="my-3 h-px w-10 bg-[var(--gold)]" />
            <p className="text-[15px] leading-loose text-[var(--ink)]/85">{s.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function toArabicNumeral(n: number) {
  return n.toLocaleString("ar-EG");
}
