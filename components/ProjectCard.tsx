import Link from "next/link";
import type { ProjectFrontmatter } from "@/types/project";
import { Badge } from "@/components/Badge";

type ProjectCardProps = {
  project: ProjectFrontmatter;
};

function getProjectVisual(project: ProjectFrontmatter) {
  if (project.slug.includes("reivnt")) {
    return {
      eyebrow: "Real asset",
      title: "Distressed duplex recovery",
      detail: "Due diligence, project controls, contractor execution",
      className: "from-copper-100 via-white to-ink-50",
    };
  }

  if (project.slug.includes("turner")) {
    return {
      eyebrow: "Field dashboard",
      title: "Industrial operations visibility",
      detail: "Package records, refresh logic, audit workflow",
      className: "from-steel-100 via-white to-safety-100/55",
    };
  }

  if (project.category.includes("Construction")) {
    return {
      eyebrow: "Operations",
      title: "Workflow automation",
      detail: "Field-aware systems for recurring work",
      className: "from-steel-100 via-white to-ink-50",
    };
  }

  return {
    eyebrow: "Case study",
    title: "Practical execution",
    detail: "Problem, constraints, approach, and outcome",
    className: "from-ink-50 via-white to-copper-100/50",
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const visual = getProjectVisual(project);

  return (
    <article className="group flex h-full flex-col rounded-lg border border-ink-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-copper-100 hover:shadow-soft">
      <div className="flex flex-wrap gap-2">
        <Badge tone="steel">{project.category}</Badge>
        <Badge>{project.year}</Badge>
        {project.confidentiality ? (
          <Badge tone="copper">Confidential / Redacted</Badge>
        ) : null}
      </div>
      <div
        className={`mt-5 rounded-md border border-ink-100 bg-gradient-to-br p-4 ${visual.className}`}
      >
        <p className="text-xs font-semibold uppercase text-copper-700">
          {visual.eyebrow}
        </p>
        <p className="mt-2 text-base font-bold text-ink-900">{visual.title}</p>
        <p className="mt-1 text-sm leading-6 text-ink-700">{visual.detail}</p>
      </div>
      <h3 className="mt-5 text-xl font-bold text-ink-900">
        <Link href={`/projects/${project.slug}`} className="focus-ring rounded-sm">
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 leading-7 text-ink-700">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tools.slice(0, 4).map((tool) => (
          <span
            key={tool}
            className="rounded-md bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-700"
          >
            {tool}
          </span>
        ))}
      </div>
      <span className="mt-6 text-sm font-semibold text-copper-700 group-hover:text-copper-500">
        Read case study
      </span>
    </article>
  );
}
