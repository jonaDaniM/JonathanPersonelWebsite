import Image from "next/image";
import { CTA } from "@/components/CTA";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[82vh] overflow-hidden border-b border-ink-100 bg-ink-900">
      <Image
        src="/operations-dashboard-workspace.png"
        alt="Construction operations workspace with dashboard, drawings, and project materials"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,25,0.86)_0%,rgba(17,24,25,0.68)_46%,rgba(17,24,25,0.22)_100%)]" />
      <div className="relative mx-auto flex min-h-[82vh] max-w-6xl items-center px-5 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-safety-100">
            {site.title}
          </p>
          <h1 className="mt-5 text-4xl font-bold text-white sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-semibold leading-9 text-white">
            {site.tagline}
          </p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-ink-100">
            {site.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTA href="/projects">View Projects</CTA>
            <CTA href={site.resumePath} variant="secondary">
              Download Resume
            </CTA>
            <CTA href="/contact" variant="secondary">
              Contact
            </CTA>
          </div>
        </div>
      </div>
    </section>
  );
}
