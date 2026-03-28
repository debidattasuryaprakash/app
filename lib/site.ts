import { z } from "zod";

export const heroStats = [
  { value: "11 hrs", label: "saved per manager each forecast cycle" },
  { value: "2.4x", label: "faster deal-risk identification across segments" },
  { value: "98%", label: "board-ready forecast confidence for finance leaders" },
] as const;

export const dashboardSnapshot = [
  { label: "Commit forecast", value: "$1.28M", delta: "+6.4%", progress: "72%" },
  { label: "Coverage ratio", value: "3.7x", delta: "Above target", progress: "81%" },
  { label: "Deal hygiene", value: "89%", delta: "+14 pts", progress: "89%" },
] as const;

export const pricingPlans = [
  {
    name: "Starter",
    description: "For founder-led or first-line teams building a repeatable pipeline rhythm.",
    price: "$79",
    billing: "per seat / month",
    cta: "Start pilot",
    highlighted: false,
    features: [
      "Pipeline review templates and scorecards",
      "AI call summaries with task extraction",
      "Forecast snapshots for one business unit",
    ],
  },
  {
    name: "Growth",
    description: "For scaling orgs that need cleaner forecasting and sharper manager coaching.",
    price: "$149",
    billing: "per seat / month",
    cta: "Book growth demo",
    highlighted: true,
    features: [
      "Segment-level forecasting and commit tracking",
      "Role-based workspaces for reps, managers, and ops",
      "Board-ready exports plus executive dashboards",
    ],
  },
  {
    name: "Scale",
    description: "For multi-team organizations standardizing forecasting across regions and leaders.",
    price: "Custom",
    billing: "annual contracts",
    cta: "Talk to sales",
    highlighted: false,
    features: [
      "Custom objects, score models, and data lineage",
      "Advanced permissions and workspace governance",
      "White-glove rollout with dedicated rev ops support",
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
