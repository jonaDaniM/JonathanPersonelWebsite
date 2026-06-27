# Portfolio Website Progress

## Current Status

The Jonathan Muratalla portfolio website has been scaffolded and implemented as a static-first Next.js App Router project. It is designed to position Jonathan as a hybrid construction operations, automation, real estate development, and computer science professional rather than as a generic software developer.

The site currently runs locally with:

```bash
npm install
npm run dev
```

Local URL:

```text
http://localhost:3000
```

## Completed Work

- Created a complete Next.js, TypeScript, Tailwind CSS, and MDX project structure.
- Implemented the main routes:
  - `/`
  - `/about`
  - `/projects`
  - `/projects/[slug]`
  - `/experience`
  - `/skills`
  - `/contact`
- Added reusable components for header, footer, hero, sections, cards, badges, CTAs, skill groups, experience cards, and confidentiality notes.
- Added structured data files for site-wide content, skills, and experience.
- Added MDX-based project case studies with frontmatter-driven metadata.
- Added a generated hero image at `public/operations-dashboard-workspace.png`.
- Added a placeholder resume file at `public/resume.pdf`.
- Added a README with local setup, content editing, and Vercel deployment guidance.

## Case Studies

The project case studies currently live in `content/projects/`:

- `turner-industries-dashboard-system.mdx`
- `core-automations-material-tracking-tools.mdx`
- `rsm-enterprise-automation-internship.mdx`
- `reivnt-duplex-development.mdx`
- `field-construction-pipefitting-foundation.mdx`

The Reivnt Duplex Development case study has been updated from the original generic Houston duplex placeholder into a detailed case study covering:

- Distressed construction acquisition
- City of Houston due diligence
- Permit and inspection recovery
- Contractor transfer and coordination
- Spreadsheet-based project-control workflows
- Investment analysis and refinance outcome
- Cash flow positioning and retained equity

The active Reivnt route is:

```text
/projects/reivnt-duplex-development
```

## Validation Performed

The following checks passed after implementation and after the Reivnt update:

```bash
npm run lint
npm run typecheck
npm run build
```

Browser verification confirmed:

- The project listing shows the Reivnt card.
- The old Houston Duplex Development card is no longer shown.
- The Reivnt detail page renders correctly.
- The site has no horizontal overflow in checked desktop/mobile views.
- The resume link points to `/resume.pdf`.

## Important Notes

- LinkedIn and GitHub links are still placeholders in `data/site.ts`.
- `public/resume.pdf` is a placeholder and should be replaced with Jonathan's final resume.
- Some project content still contains TODO placeholders for approved dates, screenshots, metrics, credentials, or private details.
- The project intentionally does not use a backend, database, CMS, authentication, or complex animation framework.
- Project metadata is loaded from MDX frontmatter, so updating case study cards usually only requires editing the matching `.mdx` file.

## Known Dependency Note

`next-mdx-remote` was upgraded to `6.0.0` to resolve a high-severity advisory reported by `npm audit`.

`npm audit --omit=dev` still reports moderate advisories through Next.js' transitive PostCSS dependency. At the time of validation, npm did not offer a clean non-breaking fix for that remaining advisory.

## Recommended Next Steps

1. Replace placeholder LinkedIn and GitHub URLs in `data/site.ts`.
2. Replace `public/resume.pdf` with the final resume.
3. Add real project images or redacted screenshots where appropriate.
4. Review the Reivnt financial numbers and wording for public comfort before deployment.
5. Add exact dates, certifications, and titles where safe to publish.
6. Deploy to Vercel after a final `npm run build`.
