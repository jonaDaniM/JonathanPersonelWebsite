# Jonathan Muratalla Portfolio

Professional portfolio website for Jonathan Muratalla, built with Next.js App Router, TypeScript, Tailwind CSS, and MDX case studies.

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `app/` contains the site routes.
- `components/` contains reusable UI components.
- `content/projects/` contains MDX case studies.
- `data/` contains editable site, skills, and experience data.
- `lib/projects.ts` loads project frontmatter and MDX content.
- `public/resume.pdf` is the resume download target.

## Add a New Project Case Study

1. Create a new `.mdx` file in `content/projects/`.
2. Add frontmatter using this shape:

```mdx
---
title: "Project Title"
slug: "project-title"
category: "Category"
summary: "Short project summary."
featured: false
tools:
  - "Tool One"
  - "Tool Two"
year: "2026"
confidentiality: true
---
```

3. Write the case study below the frontmatter using Markdown headings.
4. Set `featured: true` if it should appear on the homepage.
5. Avoid fake metrics. Use TODO placeholders until numbers, screenshots, and private details are approved.

## Update Skills and Experience

- Edit skills in `data/skills.ts`.
- Edit experience entries in `data/experience.ts`.
- Edit name, email, resume path, navigation, LinkedIn, and GitHub placeholders in `data/site.ts`.

## Replace the Resume PDF

Replace `public/resume.pdf` with Jonathan's final PDF. Keep the filename as `resume.pdf` unless you also update `data/site.ts`.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Run `npm run build` before deploying to catch content or type errors.

## Customization Checklist

- Replace LinkedIn and GitHub placeholders in `data/site.ts`.
- Replace `public/resume.pdf`.
- Add approved project years, screenshots, and outcomes in `content/projects/`.
- Add exact Turner, RSM, NCCER, and real estate details only when they are safe to publish.
