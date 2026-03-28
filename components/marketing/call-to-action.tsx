import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-8 md:px-10 md:pb-16">
      <div className="overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(135deg,#0f172a_0%,#16294d_55%,#1f3f63_100%)] px-6 py-10 text-white shadow-[0_36px_120px_-54px_rgba(15,23,42,0.9)] md:px-10">
        <div className="relative max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-amber)]">
            Ready when you are
          </p>
          <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
            Launch more ad content without adding another chaotic review loop.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            Launch a pilot in two weeks, centralize briefs and approvals, and give your team one place to turn ideas into production-ready ads.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="rounded-full bg-[color:var(--brand-amber)] px-6 text-slate-950 hover:bg-[#e7a31e]"
              asChild
            >
              <Link href="/pricing">
                Start with a plan
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-white/15 bg-white/5 px-6 text-white hover:bg-white/10"
              asChild
            >
              <Link href="/dashboard-preview">See the product</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
