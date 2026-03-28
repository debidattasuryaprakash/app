import Link from "next/link";

import { PricingGrid } from "@/components/marketing/pricing-grid";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

export function PricingPreview() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8 md:px-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          eyebrow="Simple pricing"
          title="Start lean, then unlock forecasting depth when the team needs it."
          description="Every tier includes the core workflow engine, clean design, and collaborative operating cadence. No opaque platform tax."
        />
        <Button
          variant="outline"
          className="rounded-full border-slate-900/15 bg-white/70 px-6"
          asChild
        >
          <Link href="/pricing">See full pricing</Link>
        </Button>
      </div>
      <PricingGrid />
    </section>
  );
}
