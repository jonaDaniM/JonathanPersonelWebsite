import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies for Jonathan Muratalla's construction operations, automation, consulting, real estate, and field construction work.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Section
      eyebrow="Projects"
      title="Case studies grounded in operations"
      intro="A practical look at construction operations, automation, enterprise systems, real estate execution, and field-informed problem solving."
      headingLevel="h1"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
