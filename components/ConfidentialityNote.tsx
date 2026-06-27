import { confidentialityNote } from "@/data/site";

export function ConfidentialityNote() {
  return (
    <aside className="rounded-md border border-safety-100 bg-safety-100/45 p-5 text-sm leading-7 text-ink-700">
      <strong className="font-semibold text-ink-900">Confidentiality note:</strong>{" "}
      {confidentialityNote}
    </aside>
  );
}
