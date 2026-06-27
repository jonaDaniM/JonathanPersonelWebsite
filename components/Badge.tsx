type BadgeProps = {
  children: React.ReactNode;
  tone?: "default" | "copper" | "steel";
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  const tones = {
    default: "border-ink-200 bg-white text-ink-700",
    copper: "border-copper-100 bg-copper-100/55 text-copper-700",
    steel: "border-steel-100 bg-steel-50 text-steel-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
