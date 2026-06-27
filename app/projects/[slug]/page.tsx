import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Badge } from "@/components/Badge";
import { ConfidentialityNote } from "@/components/ConfidentialityNote";
import { mdxComponents } from "@/components/MdxContent";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="bg-white">
      <header className="border-b border-ink-100 bg-ink-900 text-white">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            <Badge tone="copper">{project.category}</Badge>
            <Badge tone="steel">{project.year}</Badge>
            {project.location ? <Badge>{project.location}</Badge> : null}
          </div>
          <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-ink-100">
            {project.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-medium text-white"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8">
        {project.confidentiality ? (
          <div className="mb-10">
            <ConfidentialityNote />
          </div>
        ) : null}
        <div className="prose-industrial">
          <MDXRemote source={project.content} components={mdxComponents} />
        </div>
      </div>
    </article>
  );
}
