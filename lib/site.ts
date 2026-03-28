import { z } from "zod";

export const heroStats = [
  { value: "8 hrs", label: "saved each week on briefs, rewrites, and approvals" },
  { value: "3.1x", label: "more ad variants launched per campaign cycle" },
  { value: "42%", label: "faster turnaround from brief to live creative" },
] as const;

export const dashboardSnapshot = [
  { label: "Creative queue", value: "128 ads", delta: "+18 this week", progress: "72%" },
  { label: "Approval velocity", value: "2.6 days", delta: "31% faster", progress: "81%" },
  { label: "Launch readiness", value: "93%", delta: "+11 pts", progress: "89%" },
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    description: "For lean teams that need one place to brief, draft, and ship high-performing ads.",
    price: "$79",
    billing: "per seat / month",
    cta: "Start creating",
    highlighted: false,
    features: [
      "Campaign briefs and AI-assisted ad generation",
      "Creative library for copy, hooks, and visuals",
      "One shared workspace for drafts and approvals",
    ],
  },
  {
    name: "Growth",
    description: "For in-house and agency teams scaling paid creative across channels and audiences.",
    price: "$149",
    billing: "per seat / month",
    cta: "Book growth demo",
    highlighted: true,
    features: [
      "Multi-channel creative planning and launch boards",
      "Role-based reviews for marketers, designers, and clients",
      "Performance insights tied back to each creative concept",
    ],
  },
  {
    name: "Scale",
    description: "For brands and agencies standardizing ad production across teams, markets, and clients.",
    price: "Custom",
    billing: "annual contracts",
    cta: "Talk to sales",
    highlighted: false,
    features: [
      "Custom workflows, templates, and brand guardrails",
      "Advanced permissions, approvals, and governance",
      "White-glove onboarding for enterprise creative ops",
    ],
  },
] as const;

export const dashboardDataSchema = z.object({
  summary: z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      change: z.string(),
    }),
  ),
  priorities: z.array(z.string()),
  teamHealth: z.array(
    z.object({
      name: z.string(),
      score: z.string(),
      note: z.string(),
    }),
  ),
});

export type DashboardData = z.infer<typeof dashboardDataSchema>;
