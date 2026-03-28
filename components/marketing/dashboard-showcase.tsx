import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

const boardRows = [
  ["Meta retargeting", "18 ads", "Ready Friday", "2 awaiting review"],
  ["TikTok launch", "24 ads", "In production", "UGC cuts due today"],
  ["Search refresh", "12 ads", "Approved", "Copy localized"],
];

export function DashboardShowcase() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-8 md:grid-cols-[0.92fr_1.08fr] md:px-10">
      <Card className="rounded-[2rem] border border-slate-900/10 bg-slate-950 p-2 text-white shadow-[0_36px_120px_-48px_rgba(15,23,42,0.85)]">
        <CardContent className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                Campaign scoreboard
              </p>
              <h3 className="mt-2 font-heading text-2xl font-semibold">
                Creative progress at a glance
              </h3>
            </div>
            <span className="flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-1 text-sm text-emerald-200">
              <TrendingUp className="size-4" />
              +27% output
            </span>
          </div>

          <div className="mt-8 space-y-4">
            {boardRows.map(([segment, attainment, forecast, note]) => (
              <div
                key={segment}
                className="grid gap-3 rounded-[1.25rem] border border-white/10 bg-white/5 p-4 md:grid-cols-[1fr_90px_110px_1fr]"
              >
                <p className="font-medium text-white">{segment}</p>
                <p className="text-sm text-slate-300">{attainment}</p>
                <p className="text-sm text-slate-300">{forecast}</p>
                <p className="text-sm text-slate-400">{note}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-8">
        <SectionHeading
          eyebrow="Preview"
          title="A workspace that helps the team ship, not just brainstorm."
          description="AdForge keeps the next decision obvious: what to create next, what needs feedback, and what is actually ready to go live."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Campaign views with clear production status",
            "Creative drill-downs by channel and audience",
            "Approval queues tied to real launch blockers",
            "Performance context without spreadsheet cleanup",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.5rem] border border-slate-900/10 bg-white/80 px-5 py-4 text-sm leading-7 text-slate-700 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.55)]"
            >
              {item}
            </div>
          ))}
        </div>
        <Button
          size="lg"
          className="rounded-full bg-[color:var(--brand-amber)] px-6 text-slate-950 hover:bg-[#e7a31e]"
          asChild
        >
          <Link href="/dashboard-preview">
            Open live preview
            <ArrowUpRight className="size-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
