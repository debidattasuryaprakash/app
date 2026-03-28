import { CallToAction } from "@/components/marketing/call-to-action";
import { PricingGrid } from "@/components/marketing/pricing-grid";
import { SectionHeading } from "@/components/section-heading";

export default function PricingPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 py-12 md:px-10 md:py-16">
      <section className="rounded-[2rem] border border-white/50 bg-white/80 px-6 py-10 shadow-[0_30px_80px_-48px_rgba(15,23,42,0.45)] backdrop-blur md:px-10">
        <SectionHeading
          eyebrow="Pricing"
          title="Pick the ad creation workspace your team can grow into."
          description="Start with faster briefs and cleaner approvals, then add richer campaign planning, collaboration, and governance as production scales."
        />
      </section>
      <PricingGrid />
      <CallToAction />
    </div>
  );
}
