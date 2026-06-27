type SectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
  headingLevel?: "h1" | "h2";
};

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
  headingLevel = "h2",
}: SectionProps) {
  const Heading = headingLevel;

  return (
    <section className={`py-16 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-copper-700">
              {eyebrow}
            </p>
          ) : null}
          <Heading className="text-3xl font-bold text-ink-900 sm:text-4xl">
            {title}
          </Heading>
          {intro ? (
            <p className="mt-4 text-lg leading-8 text-ink-700">{intro}</p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
