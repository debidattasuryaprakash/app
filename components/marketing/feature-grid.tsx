import { Activity, Bot, Compass, Layers3, ShieldCheck, TimerReset } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Generate dozens of ad angles from one brief",
    description:
      "Turn product details, audience notes, and campaign goals into hooks, headlines, captions, and concept directions in minutes.",
    icon: Activity,
  },
  {
    title: "AI drafting with brand-aware structure",
    description:
      "Create cleaner first drafts while keeping tone, prohibited phrases, and channel-specific constraints visible to the whole team.",
    icon: Bot,
  },
  {
    title: "Campaign planning tied to production reality",
    description:
      "Briefs, deadlines, and launch windows stay connected to the actual creative queue instead of living in scattered docs and chats.",
    icon: Compass,
  },
  {
    title: "Built for marketers, designers, and clients",
    description:
      "Each role gets a focused workflow, while comments, approvals, and assets stay synced in one shared system.",
    icon: Layers3,
  },
  {
    title: "Brand-safe by default",
    description:
      "Every revision has traceability, every asset has ownership, and every prompt can inherit brand rules automatically.",
    icon: ShieldCheck,
  },
  {
    title: "Creative operations, not content chaos",
    description:
      "Templates for briefs, reviews, and launch checklists make the product useful on week one instead of month three.",
    icon: TimerReset,
  },
];

export function FeatureGrid() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 md:px-10">
      <SectionHeading
        eyebrow="Why teams switch"
        title="Everything you need to create better ad content without slowing the team down."
        description="We designed AdForge to feel like a creative command center, not another bloated content tool. The UI stays calm while the workflow stays sharp."
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
