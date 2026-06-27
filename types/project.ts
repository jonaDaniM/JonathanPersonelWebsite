export type ProjectFrontmatter = {
  title: string;
  slug: string;
  category: string;
  summary: string;
  featured: boolean;
  tools: string[];
  year: string;
  location?: string;
  confidentiality: boolean;
};

export type Project = ProjectFrontmatter & {
  content: string;
};
