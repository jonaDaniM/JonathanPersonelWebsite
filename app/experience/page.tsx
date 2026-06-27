import type { Metadata } from "next";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Section } from "@/components/Section";
import { experienceItems } from "@/data/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Jonathan Muratalla's experience across construction operations, enterprise automation, real estate development, and field pipefitting.",
};

export default function ExperiencePage() {
  return (
    <Section
      eyebrow="Experience"
      title="Grouped by the work Jonathan can connect"
      intro="Instead of only showing a chronological resume, this page groups experience by the professional areas that shape Jonathan's value: operations automation, enterprise systems, real estate development, and field construction."
      headingLevel="h1"
    >
      <div className="grid gap-6">
        {experienceItems.map((item) => (
          <ExperienceCard key={`${item.organization}-${item.title}`} item={item} />
        ))}
      </div>
    </Section>
  );
}
