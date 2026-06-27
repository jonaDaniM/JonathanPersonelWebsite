import Link from "next/link";
import { CTA } from "@/components/CTA";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-copper-700">
        Page not found
      </p>
      <h1 className="mt-4 text-4xl font-bold text-ink-900">
        This page is not available.
      </h1>
      <p className="mt-4 text-lg leading-8 text-ink-700">
        The page may have moved, or the link may need to be updated.
      </p>
      <div className="mt-8">
        <CTA href="/">Return home</CTA>
      </div>
      <p className="mt-6 text-sm text-ink-500">
        You can also visit the <Link href="/projects">projects page</Link>.
      </p>
    </section>
  );
}
