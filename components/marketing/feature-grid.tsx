import { Activity, Bot, Compass, Layers3, ShieldCheck, TimerReset } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Risk signals that surface themselves",
    description:
      "Call activity, stage drift, MEDDPICC coverage, and stakeholder gaps roll into one score so managers know where to coach first.",
    icon: Activity,
  },
  {
    title: "AI notes with human-level context",
    description:
      "Summaries and follow-ups keep the nuance from calls intact without making the team babysit another assistant tab.",
    icon: Bot,
  },
  {
    title: "Quarter plans tied to reality",
    description:
      "Capacity, segment mix, and conversion assumptions stay connected to the forecast instead of living in stale planning decks.",
    icon: Compass,
  },
  {
    title: "Designed for ops, managers, and reps",
    description:
      "Each view feels native to the person using it, while the data model stays shared underneath.",
    icon: Layers3,
  },
  {
    title: "Audit-friendly by default",
    description:
      "Every number has lineage, every change has ownership, and every export is ready for board prep.",
    icon: ShieldCheck,
  },
  {
    title: "Weekly rhythm, not dashboard theater",
    description:
      "Templates for pipeline reviews, forecast calls, and rep 1:1s make the product useful the first week it lands.",
    icon: TimerReset,
  },
];

export function FeatureGrid() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 md:px-10">
      <SectionHeading
        eyebrow="Why teams switch"
        title="Everything leaders need to tighten execution without slowing sellers down."
        description="We designed SignalStack to feel more like a sharp operating ritual than another analytics tool. The UI stays calm, the model stays rigorous."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="rounded-[1.75rem] border border-white/60 bg-white/75 shadow-[0_24px_60px_-44px_rgba(15,23,42,0.55)] backdrop-blur transition-transform duration-300 hover:-translate-y-1"
          >
            <CardHeader className="space-y-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-[color:var(--brand-amber)]">
                <feature.icon className="size-5" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm leading-7 text-muted-foreground">
              {feature.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
