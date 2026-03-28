"use client";

import { useQuery } from "@tanstack/react-query";
import { AlertCircle, ArrowUpRight, CircleDashed, Clock3, Users2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardDataSchema, type DashboardData } from "@/lib/site";

async function getDashboardData(): Promise<DashboardData> {
  const data = await new Promise<DashboardData>((resolve) => {
    window.setTimeout(() => {
      resolve({
        summary: [
          { label: "Ads in production", value: "128", change: "+18 this week" },
          { label: "Awaiting approval", value: "23", change: "-12%" },
          { label: "Ready to launch", value: "41", change: "6 due today" },
        ],
        priorities: [
          "Finalize UGC hooks for the summer retargeting set.",
          "Resolve brand review notes on the new product launch carousel.",
          "Queue localized search copy for tomorrow's regional rollout.",
        ],
        teamHealth: [
          { name: "Paid social", score: "91", note: "Healthy variant coverage" },
          { name: "Creative studio", score: "84", note: "Watch revision load" },
          { name: "Search and display", score: "79", note: "Needs approvals cleanup" },
        ],
      });
    }, 200);
  });

  return dashboardDataSchema.parse(data);
}

export function DashboardPreviewShell() {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboard-preview"],
    queryFn: getDashboardData,
  });

  if (isLoading || !data) {
    return (
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {[0, 1].map((item) => (
          <Card
            key={item}
            className="min-h-[320px] animate-pulse rounded-[2rem] border border-white/60 bg-white/70"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="rounded-[2rem] border border-white/60 bg-white/80 shadow-[0_30px_90px_-52px_rgba(15,23,42,0.45)]">
        <CardHeader className="flex flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--brand-amber)]">
              Weekly creative pulse
            </p>
            <CardTitle className="mt-2 text-2xl">
              Team summary
            </CardTitle>
          </div>
          <Badge
            variant="outline"
            className="rounded-full border-emerald-500/20 bg-emerald-500/10 text-emerald-700"
          >
            Synced 2 min ago
          </Badge>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-3">
            {data.summary.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.5rem] border border-slate-900/10 bg-slate-50 p-5"
              >
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-4 font-heading text-3xl font-semibold text-slate-950">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-slate-600">{item.change}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[1.75rem] border border-slate-900/10 bg-slate-950 p-5 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
              Leadership priorities
            </p>
            <h3 className="mt-2 font-heading text-2xl font-semibold">
                  Suggested next actions
                </h3>
              </div>
              <ArrowUpRight className="size-5 text-[color:var(--brand-amber)]" />
            </div>
            <div className="mt-6 space-y-3">
              {data.priorities.map((priority) => (
                <div
                  key={priority}
                  className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                >
                  {priority}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        <Card className="rounded-[2rem] border border-white/60 bg-white/80 shadow-[0_30px_90px_-52px_rgba(15,23,42,0.45)]">
          <CardHeader>
            <p className="text-sm uppercase tracking-[0.22em] text-[color:var(--brand-amber)]">
              Team health
            </p>
            <CardTitle className="mt-2 text-2xl">Manager pulse</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {data.teamHealth.map((item) => (
              <div
                key={item.name}
                className="rounded-[1.5rem] border border-slate-900/10 bg-slate-50 p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Users2 className="size-4 text-slate-500" />
                    <p className="font-medium text-slate-950">{item.name}</p>
                  </div>
                  <p className="font-heading text-xl text-slate-950">{item.score}</p>
                </div>
                <p className="mt-3 text-sm text-slate-600">{item.note}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,#fff9ec_0%,#fffef7_100%)] shadow-[0_30px_90px_-52px_rgba(15,23,42,0.35)]">
          <CardHeader>
            <CardTitle className="text-2xl">Preview architecture</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm leading-7 text-slate-700">
            <div className="flex items-start gap-3">
              <CircleDashed className="mt-1 size-4 text-slate-500" />
              React Query owns async state and caching for the mock preview request.
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="mt-1 size-4 text-slate-500" />
              Zod validates the response shape before any card renders.
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 size-4 text-slate-500" />
              Swap the mock function for a real content or campaign API later without changing the UI.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
