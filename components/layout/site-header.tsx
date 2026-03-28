import Link from "next/link";
import { BarChart3, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Overview" },
  { href: "/pricing", label: "Pricing" },
  { href: "/dashboard-preview", label: "Dashboard" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/50 bg-[color:var(--surface-overlay)]/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-slate-900 uppercase"
        >
          <span className="flex size-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/15">
            <BarChart3 className="size-5" />
          </span>
          AdForge
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-slate-900/10 bg-white/75 p-1.5 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-900 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="hidden rounded-full border-slate-900/15 bg-white/70 px-4 md:inline-flex"
            asChild
          >
            <Link href="/pricing">Compare plans</Link>
          </Button>
          <Button
            className="rounded-full bg-slate-950 px-4 text-white shadow-lg shadow-slate-950/15 hover:bg-slate-800"
            asChild
          >
            <Link href="/dashboard-preview">
              Book a demo
              <ChevronRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
