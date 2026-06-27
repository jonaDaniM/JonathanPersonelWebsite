import Link from "next/link";
import { site } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link
          href="/"
          className="focus-ring w-fit rounded-sm text-base font-bold text-ink-900"
        >
          Jonathan Muratalla
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-ink-700">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="focus-ring rounded-sm transition hover:text-copper-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
