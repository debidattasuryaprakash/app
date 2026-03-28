import { Check } from "lucide-react";

import { pricingPlans } from "@/lib/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function PricingGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricingPlans.map((plan) => (
        <Card
          key={plan.name}
          className={`rounded-[2rem] border p-2 shadow-[0_30px_90px_-50px_rgba(15,23,42,0.55)] ${
            plan.highlighted
              ? "border-slate-950 bg-slate-950 text-white"
              : "border-white/60 bg-white/80"
          }`}
        >
          <CardHeader className="space-y-4 rounded-[1.5rem] border border-transparent">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              {plan.highlighted ? (
                <Badge className="rounded-full bg-[color:var(--brand-amber)] px-3 py-1 text-slate-950">
                  Most popular
                </Badge>
              ) : null}
            </div>
            <p
              className={`text-sm leading-7 ${
                plan.highlighted ? "text-slate-300" : "text-muted-foreground"
              }`}
            >
              {plan.description}
            </p>
            <div className="flex items-end gap-2">
              <span className="font-heading text-5xl font-semibold">
                {plan.price}
              </span>
              <span
                className={`pb-2 text-sm ${
                  plan.highlighted ? "text-slate-300" : "text-muted-foreground"
                }`}
              >
                {plan.billing}
              </span>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <span
                  className={`mt-1 flex size-5 items-center justify-center rounded-full ${
                    plan.highlighted
                      ? "bg-white/10 text-[color:var(--brand-amber)]"
                      : "bg-slate-950 text-[color:var(--brand-amber)]"
                  }`}
                >
                  <Check className="size-3.5" />
                </span>
                <p
                  className={`text-sm leading-7 ${
                    plan.highlighted ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {feature}
                </p>
              </div>
            ))}
          </CardContent>
          <CardFooter className="border-transparent bg-transparent">
            <Button
              className={`w-full rounded-full ${
                plan.highlighted
                  ? "bg-[color:var(--brand-amber)] text-slate-950 hover:bg-[#e7a31e]"
                  : "bg-slate-950 text-white hover:bg-slate-800"
              }`}
            >
              {plan.cta}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
