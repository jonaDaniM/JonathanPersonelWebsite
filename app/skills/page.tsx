import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { SkillGroup } from "@/components/SkillGroup";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Jonathan Muratalla's skills across automation, data reporting, enterprise systems, construction operations, real estate, and communication.",
};

export default function SkillsPage() {
  return (
    <Section
      eyebrow="Skills"
      title="Technical skills with operational context"
      intro="Jonathan's skill set is organized around practical outcomes: automate repetitive work, clarify operational data, understand the field context, and communicate across teams."
      headingLevel="h1"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <SkillGroup key={group.title} group={group} />
        ))}
      </div>
    </Section>
  );
}
