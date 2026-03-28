import { DashboardPreviewShell } from "@/components/dashboard/dashboard-preview-shell";
import { SectionHeading } from "@/components/section-heading";

export default function DashboardPreviewPage() {
  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-12 md:px-10 md:py-16">
      <section className="rounded-[2rem] border border-slate-900/10 bg-slate-950 px-6 py-10 text-white shadow-[0_30px_100px_-40px_rgba(15,23,42,0.75)] md:px-10">
        <SectionHeading
          eyebrow="Dashboard Preview"
          title="A calm command center for briefs, approvals, and launch-ready creative."
          description="This preview uses React Query plus Zod-validated mock data so the architecture is ready for real content and performance APIs later."
          className="text-white"
        />
      </section>
      <DashboardPreviewShell />
    </div>
  );
}
