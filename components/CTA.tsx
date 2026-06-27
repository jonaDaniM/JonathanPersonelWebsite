import Link from "next/link";

type CTAProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function CTA({ href, children, variant = "primary" }: CTAProps) {
  const variants = {
    primary:
      "border-ink-900 bg-ink-900 text-white hover:border-copper-700 hover:bg-copper-700",
    secondary:
      "border-ink-300 bg-white text-ink-900 hover:border-ink-900 hover:bg-ink-50",
    ghost:
      "border-transparent bg-transparent text-ink-900 hover:border-ink-200 hover:bg-white",
  };

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-md border px-5 py-3 text-sm font-semibold transition ${variants[variant]}`}
    >
      {children}
    </Link>
  );
}
