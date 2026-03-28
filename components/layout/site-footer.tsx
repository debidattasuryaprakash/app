import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-900/10 bg-white/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between md:px-10">
        <p>AdForge helps creative teams move from messy briefs to launch-ready ads with less friction.</p>
        <div className="flex items-center gap-4">
          <Link href="/" className="transition hover:text-slate-950">
            Overview
          </Link>
          <Link href="/pricing" className="transition hover:text-slate-950">
            Pricing
          </Link>
          <Link href="/dashboard-preview" className="transition hover:text-slate-950">
            Dashboard
          </Link>
        </div>
      </div>
    </footer>
  );
}
