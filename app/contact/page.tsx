import type { Metadata } from "next";
import { CTA } from "@/components/CTA";
import { Section } from "@/components/Section";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume & Contact",
  description:
    "Contact Jonathan Muratalla for construction technology, operations automation, consulting, and real estate development inquiries.",
};

const contactCards = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Best for professional inquiries and direct follow-up.",
  },
  {
    label: "LinkedIn",
    value: "LinkedIn placeholder",
    href: site.linkedinUrl,
    note: "TODO: Replace with Jonathan's public LinkedIn profile URL.",
  },
  {
    label: "GitHub",
    value: "GitHub placeholder",
    href: site.githubUrl,
    note: "TODO: Replace with Jonathan's public GitHub profile URL.",
  },
];

export default function ContactPage() {
  return (
    <Section
      eyebrow="Resume & Contact"
      title="Professional inquiries"
      intro="Reach out for conversations around construction technology, operations automation, consulting, real estate development, or roles where field-aware technical execution matters."
      headingLevel="h1"
    >
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="rounded-lg border border-ink-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-ink-900">Resume</h2>
          <p className="mt-4 leading-8 text-ink-700">
            Downloadable resume placeholder. Replace
            <code className="mx-1 rounded bg-ink-50 px-1.5 py-0.5 text-sm">
              public/resume.pdf
            </code>
            with Jonathan&apos;s final PDF before publishing.
          </p>
          <div className="mt-6">
            <CTA href={site.resumePath}>Download Resume</CTA>
          </div>
        </article>
        <div className="grid gap-4">
          {contactCards.map((card) => (
            <article
              key={card.label}
              className="rounded-lg border border-ink-100 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-copper-700">
                {card.label}
              </p>
              <a
                href={card.href}
                className="focus-ring mt-2 inline-block rounded-sm text-xl font-bold text-ink-900 hover:text-copper-700"
              >
                {card.value}
              </a>
              <p className="mt-3 text-sm leading-6 text-ink-700">{card.note}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
