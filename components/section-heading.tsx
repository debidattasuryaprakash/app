import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl space-y-4", className)}>
      <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[color:var(--brand-amber)]">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
        {description}
      </p>
    </div>
  );
}
