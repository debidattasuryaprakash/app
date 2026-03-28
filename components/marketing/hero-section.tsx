import Link from "next/link";
import { ArrowRight, CheckCircle2, Play, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { dashboardSnapshot, heroStats } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-18">
      <div className="space-y-8">
        <Badge
          variant="outline"
          className="rounded-full border-[color:var(--brand-amber)]/30 bg-[color:var(--brand-amber)]/10 px-3 py-1 text-[color:var(--brand-navy)]"
        >
          <Sparkles className="size-3.5" />
          Built for modern ad teams
        </Badge>
        <SectionHeading
          eyebrow="Ad Content OS"
          title="Turn one brief into launch-ready ad content across every channel."
          description="AdForge gives marketers, designers, and performance teams a single workspace to generate concepts, refine copy, review assets, and ship creative faster."
        />

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="rounded-full bg-slate-950 px-6 text-white shadow-[0_18px_38px_-18px_rgba(15,23,42,0.55)] hover:bg-slate-800"
            asChild
          >
            <Link href="/dashboard-preview">
              Explore workspace
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-slate-900/15 bg-white/70 px-6"
            asChild
          >
            <Link href="/pricing">
              <Play className="size-4" />
              View pricing
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <Card
              key={stat.label}
              className="border border-white/60 bg-white/70 shadow-[0_22px_50px_-42px_rgba(15,23,42,0.55)] backdrop-blur"
            >
              <CardHeader className="pb-2">
                <CardTitle className="font-heading text-3xl font-semibold">
                  {stat.value}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm leading-6 text-muted-foreground">
                {stat.label}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="relative overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.20),_transparent_30%),linear-gradient(180deg,#fffdf8_0%,#eef4ff_100%)] p-2 shadow-[0_40px_120px_-52px_rgba(15,23,42,0.7)]">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-32 rounded-full bg-[color:var(--brand-amber)]/15 blur-3xl" />
        <CardContent className="relative rounded-[1.5rem] border border-white/70 bg-slate-950 p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                Live creative board
              </p>
              <h3 className="mt-2 font-heading text-2xl font-semibold">
                Spring campaign sprint
              </h3>
            </div>
            <Badge className="rounded-full bg-emerald-500/15 px-3 py-1 text-emerald-200">
              <CheckCircle2 className="size-3.5" />
              Ready to launch
            </Badge>
          </div>

          <div className="mt-8 grid gap-4">
            {dashboardSnapshot.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-400">{item.label}</p>
                  <span className="text-sm font-medium text-slate-200">
                    {item.delta}
                  </span>
                </div>
                <p className="mt-3 font-heading text-3xl font-semibold">
                  {item.value}
                </p>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[linear-gradient(90deg,var(--brand-amber),#f8d37c)]"
                    style={{ width: item.progress }}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
