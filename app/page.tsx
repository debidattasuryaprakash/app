import { CallToAction } from "@/components/marketing/call-to-action";
import { DashboardShowcase } from "@/components/marketing/dashboard-showcase";
import { FeatureGrid } from "@/components/marketing/feature-grid";
import { HeroSection } from "@/components/marketing/hero-section";
import { PricingPreview } from "@/components/marketing/pricing-preview";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <DashboardShowcase />
      <PricingPreview />
      <CallToAction />
    </>
  );
}
