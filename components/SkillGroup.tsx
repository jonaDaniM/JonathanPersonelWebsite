import type { SkillGroup as SkillGroupType } from "@/types/skill";

type SkillGroupProps = {
  group: SkillGroupType;
};

export function SkillGroup({ group }: SkillGroupProps) {
  return (
    <article className="rounded-lg border border-ink-100 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-ink-900">{group.title}</h3>
      <p className="mt-3 leading-7 text-ink-700">{group.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-ink-100 bg-ink-50 px-3 py-1.5 text-sm font-medium text-ink-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
