import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Badge } from "@/components/Badge";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Jonathan Muratalla's path through computer science, field construction, automation, consulting, and real estate development.",
};

const pathItems = [
  "Computer Science graduate from the University of Houston",
  "Hands-on industrial and construction field exposure",
  "NCCER pipefitting background and jobsite coordination awareness",
  "Turner Industries experience moving from field work into material, automation, and data support",
  "RSM internship experience with enterprise automation and business process testing",
  "Reivnt duplex development experience across due diligence, project controls, contractors, inspections, financing, and leasing strategy",
];

export default function AboutPage() {
  return (
    <Section
      eyebrow="About"
      title="A practical technical background shaped by jobsite realities"
      intro="Jonathan Muratalla brings together computer science, construction operations, pipefitting context, consulting automation, and real estate development. The throughline is practical problem-solving: build systems that make complex work easier to see, coordinate, and improve."
      headingLevel="h1"
    >
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-ink-100 bg-white p-6 shadow-sm">
          <Badge tone="copper">Working style</Badge>
          <p className="mt-5 text-xl font-semibold leading-8 text-ink-900">
            Jonathan can communicate with field crews, managers, business teams,
            and technical stakeholders because his background crosses those
            environments.
          </p>
          <p className="mt-4 leading-8 text-ink-700">
            His work favors clear interfaces, accurate data, simple maintenance,
            and systems that fit the way operations teams already make decisions.
          </p>
        </div>
        <div className="rounded-lg border border-ink-100 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-ink-900">Path</h2>
          <ul className="mt-5 space-y-4">
            {pathItems.map((item) => (
              <li key={item} className="flex gap-3 leading-7 text-ink-700">
                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-copper-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 rounded-lg border border-ink-100 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-ink-900">
          What makes the combination useful
        </h2>
        <p className="mt-4 leading-8 text-ink-700">
          Construction automation fails when it ignores the field. Real estate
          projects struggle when ownership lacks operational awareness. Technical
          tools become fragile when business context is missing. Jonathan&apos;s
          background connects those points: field knowledge helps him ask better
          questions, computer science helps him build durable systems, consulting
          exposure helps him think in processes, and development experience helps
          him understand owner-side accountability.
        </p>
      </div>
    </Section>
  );
}
