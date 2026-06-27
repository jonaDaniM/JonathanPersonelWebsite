import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-900 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <p className="font-bold">{site.name}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-100">
            Construction operations, automation, real estate development, and
            computer science.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-semibold text-ink-100">
          <Link href="/projects" className="focus-ring rounded-sm hover:text-white">
            Projects
          </Link>
          <Link href="/contact" className="focus-ring rounded-sm hover:text-white">
            Contact
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="focus-ring rounded-sm hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
