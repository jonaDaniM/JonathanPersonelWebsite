import type { ExperienceItem } from "@/types/experience";
import { Badge } from "@/components/Badge";

type ExperienceCardProps = {
  item: ExperienceItem;
};

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className="rounded-lg border border-ink-100 bg-white p-6 shadow-sm">
      <Badge tone="copper">{item.area}</Badge>
      <div className="mt-5 grid gap-2 sm:grid-cols-[1fr_auto] sm:items-start">
        <div>
          <h3 className="text-xl font-bold text-ink-900">{item.title}</h3>
          <p className="mt-1 font-semibold text-steel-700">{item.organization}</p>
        </div>
        <p className="text-sm font-medium text-ink-500">{item.timeframe}</p>
      </div>
      <p className="mt-4 leading-7 text-ink-700">{item.summary}</p>
      <ul className="mt-5 space-y-3">
        {item.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 leading-7 text-ink-700">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-copper-500" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
