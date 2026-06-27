import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Project, ProjectFrontmatter } from "@/types/project";

const projectsDirectory = path.join(process.cwd(), "content", "projects");

function assertProjectFrontmatter(
  data: Record<string, unknown>,
  filename: string,
): ProjectFrontmatter {
  const requiredStringFields = [
    "title",
    "slug",
    "category",
    "summary",
    "year",
  ] as const;

  for (const field of requiredStringFields) {
    if (typeof data[field] !== "string" || !data[field]) {
      throw new Error(`Project ${filename} is missing frontmatter field: ${field}`);
    }
  }

  if (typeof data.featured !== "boolean") {
    throw new Error(`Project ${filename} is missing boolean frontmatter: featured`);
  }

  if (typeof data.confidentiality !== "boolean") {
    throw new Error(
      `Project ${filename} is missing boolean frontmatter: confidentiality`,
    );
  }

  if (!Array.isArray(data.tools) || !data.tools.every((tool) => typeof tool === "string")) {
    throw new Error(`Project ${filename} is missing string array frontmatter: tools`);
  }

  const tools = data.tools as string[];

  return {
    title: data.title as string,
    slug: data.slug as string,
    category: data.category as string,
    summary: data.summary as string,
    featured: data.featured,
    tools,
    year: data.year as string,
    location: typeof data.location === "string" ? data.location : undefined,
    confidentiality: data.confidentiality,
  };
}

export function getAllProjects(): Project[] {
  const files = fs
    .readdirSync(projectsDirectory)
    .filter((filename) => filename.endsWith(".mdx"));

  return files
    .map((filename) => {
      const fullPath = path.join(projectsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const frontmatter = assertProjectFrontmatter(data, filename);

      return {
        ...frontmatter,
        content,
      };
    })
    .sort((a, b) => b.year.localeCompare(a.year));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((project) => project.slug);
}
