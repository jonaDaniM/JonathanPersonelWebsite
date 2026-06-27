import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";
import { CTA } from "@/components/CTA";
import { getFeaturedProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Portfolio for Jonathan Muratalla, focused on construction operations, automation, real estate development, and computer science.",
};

const credibilityCards = [
  {
    title: "Computer Science Graduate",
    copy: "Technical foundation for building maintainable tools, dashboards, scripts, and web systems.",
  },
  {
    title: "NCCER Pipefitting Background",
    copy: "Field context for how drawings, materials, handoffs, and jobsite constraints affect operations.",
  },
  {
    title: "Real Estate Developer",
    copy: "Owner-side judgment around contractors, inspections, financing, closeout, and leasing readiness.",
  },
  {
    title: "Construction Automation Builder",
    copy: "Dashboard and workflow experience focused on visibility, data cleanup, and practical adoption.",
  },
];

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Hero />
      <Section
        eyebrow="Credibility"
        title="Built from field, technical, and owner-side experience"
        intro="Jonathan's work is strongest where software has to match real operational pressure: field crews need clarity, managers need visibility, and business teams need repeatable systems."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {credibilityCards.map((card) => (
            <article
              key={card.title}
              className="rounded-lg border border-ink-100 bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-bold text-ink-900">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-700">{card.copy}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section
        eyebrow="Selected work"
        title="Featured project case studies"
        intro="Initial case studies are written as editable MDX files with placeholders for screenshots, exact metrics, and private details Jonathan can add later."
        className="bg-white"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-8">
          <CTA href="/projects" variant="secondary">
            View all projects
          </CTA>
        </div>
      </Section>
      <Section
        eyebrow="Why it matters"
        title="The best automation starts with operational awareness"
        intro="A dashboard is only useful if it respects how people actually work. Jonathan's mix of field construction, material tracking, enterprise automation, and real estate development helps him design systems that answer practical questions instead of adding another layer of administration."
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg border border-ink-100 bg-white p-6 shadow-sm">
            <Badge tone="copper">Positioning</Badge>
            <p className="mt-5 text-xl font-semibold leading-8 text-ink-900">
              Field context plus technical execution creates tools that teams can
              trust, explain, and maintain.
            </p>
          </div>
          <div className="rounded-lg border border-ink-100 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-ink-900">
              Where this background is useful
            </h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                "Construction operations dashboards",
                "Material tracking and discrepancy review",
                "Spreadsheet cleanup and workflow automation",
                "Real estate development coordination",
              ].map((item) => (
                <p key={item} className="rounded-md bg-ink-50 p-4 text-sm font-semibold text-ink-700">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-8 text-sm text-ink-500">
          <Link href="/contact" className="focus-ring rounded-sm font-semibold text-copper-700">
            Contact Jonathan
          </Link>{" "}
          for construction technology, operations automation, consulting, or real
          estate development conversations.
        </p>
      </Section>
    </>
  );
}
