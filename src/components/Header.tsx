import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logoAsset from "@/assets/logo.jpg.asset.json";

const topics = [
  { to: "/", label: "الرئيسية" },
  { to: "/mission", label: "رسالتنا" },
  { to: "/worlds", label: "عوالم المعرفة" },
  { to: "/events", label: "الفعاليات" },
  { to: "/achievements", label: "الإنجازات" },
  { to: "/library", label: "مكتبة آفاق" },
  { to: "/community", label: "مجتمع آفاق" },
  { to: "/initiatives", label: "المبادرات" },
  { to: "/contact", label: "تواصل معنا" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--gold)]/20 bg-[var(--navy-deep)] text-[var(--offwhite)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 overflow-hidden px-6 py-4">
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <div className="h-11 w-11 overflow-hidden rounded-full ring-2 ring-[var(--gold)]/60">
            <img src={logoAsset.url} alt="شعار نادي آفاق المعرفة" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-[var(--gold-soft)]">آفاق المعرفة</span>
            <span className="text-[11px] tracking-widest text-[var(--sky)]/80">نــادي</span>
          </div>
        </Link>

        <div className="relative flex min-w-0 items-center">
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-[var(--navy-deep)] to-transparent md:hidden" />
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-[var(--navy-deep)] to-transparent md:hidden" />

          <ChevronRight className="pointer-events-none absolute right-1 z-20 h-4 w-4 text-[var(--gold)]/60 animate-pulse md:hidden" />
          <ChevronLeft className="pointer-events-none absolute left-1 z-20 h-4 w-4 text-[var(--gold)]/60 animate-pulse md:hidden" />

          <nav className="flex min-w-0 items-center gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-6">
            {topics.map((t) => (
              <Link
                key={t.to}
                to={t.to}
                activeProps={{
                  className: "bg-[var(--gold)] text-[var(--navy-deep)] shadow-[var(--shadow-gold)]",
                }}
                className="relative rounded-full px-5 py-2 text-sm font-medium transition-colors text-[var(--offwhite)]/80 hover:text-[var(--gold-soft)]"
              >
                {t.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
