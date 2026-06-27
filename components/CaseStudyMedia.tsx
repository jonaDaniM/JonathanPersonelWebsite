import type { ReactNode } from "react";

type MediaItem = {
  src: string;
  alt: string;
  caption?: string;
};

type Metric = {
  value: string;
  label: string;
  note?: string;
};

function MediaFrame({ item, label }: { item: MediaItem; label?: string }) {
  return (
    <figure className="overflow-hidden rounded-lg border border-ink-100 bg-white shadow-sm">
      <div className="relative flex aspect-[4/3] items-center justify-center bg-[linear-gradient(135deg,#eef2f4_0%,#f6f7f7_55%,#f2dfcd_100%)]">
        <div className="p-5 text-center">
          {label ? (
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-copper-700">
              {label}
            </p>
          ) : null}
          <p className="mt-2 text-sm font-semibold text-ink-900">
            Image reserved for public-safe project media
          </p>
          <p className="mt-2 text-xs leading-5 text-ink-600">{item.alt}</p>
          <p className="mt-3 break-all rounded-md bg-white/70 px-3 py-2 text-xs leading-5 text-ink-500">
            {item.src}
          </p>
        </div>
      </div>
      {item.caption ? (
        <figcaption className="border-t border-ink-100 px-4 py-3 text-sm leading-6 text-ink-700">
          {item.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export function BeforeAfterPair({
  before,
  after,
  beforeSrc,
  beforeAlt,
  beforeCaption,
  afterSrc,
  afterAlt,
  afterCaption,
  title,
}: {
  before?: MediaItem;
  after?: MediaItem;
  beforeSrc?: string;
  beforeAlt?: string;
  beforeCaption?: string;
  afterSrc?: string;
  afterAlt?: string;
  afterCaption?: string;
  title: string;
}) {
  const beforeItem = before ?? {
    src: beforeSrc ?? "",
    alt: beforeAlt ?? "Before image placeholder",
    caption: beforeCaption,
  };
  const afterItem = after ?? {
    src: afterSrc ?? "",
    alt: afterAlt ?? "After image placeholder",
    caption: afterCaption,
  };

  return (
    <section className="my-8 rounded-lg border border-ink-100 bg-ink-50 p-4">
      <h3 className="text-lg font-bold text-ink-900">{title}</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <MediaFrame item={beforeItem} label="Before" />
        <MediaFrame item={afterItem} label="After" />
      </div>
    </section>
  );
}

export function ProjectImageGallery({
  images,
  imageOneSrc,
  imageOneAlt,
  imageOneCaption,
  imageTwoSrc,
  imageTwoAlt,
  imageTwoCaption,
  imageThreeSrc,
  imageThreeAlt,
  imageThreeCaption,
  imageFourSrc,
  imageFourAlt,
  imageFourCaption,
  title = "Supporting Images",
}: {
  images?: MediaItem[];
  imageOneSrc?: string;
  imageOneAlt?: string;
  imageOneCaption?: string;
  imageTwoSrc?: string;
  imageTwoAlt?: string;
  imageTwoCaption?: string;
  imageThreeSrc?: string;
  imageThreeAlt?: string;
  imageThreeCaption?: string;
  imageFourSrc?: string;
  imageFourAlt?: string;
  imageFourCaption?: string;
  title?: string;
}) {
  const fallbackImageOptions: Array<MediaItem | undefined> = [
    imageOneSrc
      ? {
          src: imageOneSrc,
          alt: imageOneAlt ?? "Project image placeholder",
          caption: imageOneCaption,
        }
      : undefined,
    imageTwoSrc
      ? {
          src: imageTwoSrc,
          alt: imageTwoAlt ?? "Project image placeholder",
          caption: imageTwoCaption,
        }
      : undefined,
    imageThreeSrc
      ? {
          src: imageThreeSrc,
          alt: imageThreeAlt ?? "Project image placeholder",
          caption: imageThreeCaption,
        }
      : undefined,
    imageFourSrc
      ? {
          src: imageFourSrc,
          alt: imageFourAlt ?? "Project image placeholder",
          caption: imageFourCaption,
        }
      : undefined,
  ];
  const fallbackImages = fallbackImageOptions.filter(
    (image): image is MediaItem => Boolean(image),
  );
  const galleryImages = images ?? fallbackImages;

  return (
    <section className="my-8">
      <h3 className="text-lg font-bold text-ink-900">{title}</h3>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {galleryImages.map((image) => (
          <MediaFrame key={image.src} item={image} />
        ))}
      </div>
    </section>
  );
}

function parseMetricString(metricsText?: string) {
  if (!metricsText) {
    return [];
  }

  return metricsText.split(";").map((item) => {
    const [value = "", label = "", note] = item.split("|").map((part) => part.trim());

    return {
      value,
      label,
      note,
    };
  });
}

export function MetricStrip({
  metrics,
  metricsText,
}: {
  metrics?: Metric[];
  metricsText?: string;
}) {
  const metricItems = metrics ?? parseMetricString(metricsText);

  return (
    <section className="my-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {metricItems.map((metric) => (
        <article
          key={`${metric.value}-${metric.label}`}
          className="rounded-lg border border-ink-100 bg-white p-4 shadow-sm"
        >
          <p className="text-2xl font-bold text-ink-900">{metric.value}</p>
          <p className="mt-2 text-sm font-semibold leading-6 text-ink-700">
            {metric.label}
          </p>
          {metric.note ? (
            <p className="mt-2 text-xs leading-5 text-ink-500">{metric.note}</p>
          ) : null}
        </article>
      ))}
    </section>
  );
}

export function ConfidentialityCallout({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 rounded-lg border border-safety-100 bg-safety-100/45 p-5 text-sm leading-7 text-ink-700">
      <div className="[&_p]:mt-0 [&_p]:inline">
        <strong className="font-semibold text-ink-900">Public-safe note:</strong>{" "}
        {children}
      </div>
    </aside>
  );
}

export function RedactedDashboardPreview() {
  const rows = [
    ["PKG-1048", "Pipe rack area", "Ready for review", "Open"],
    ["PKG-1182", "Unit A materials", "Field verified", "Closed"],
    ["PKG-1267", "Spool package", "Needs quantity check", "Open"],
    ["PKG-1320", "Bolt/gasket set", "Pending refresh", "Watching"],
  ];

  return (
    <section className="my-8 overflow-hidden rounded-lg border border-ink-100 bg-steel-900 text-white shadow-soft">
      <div className="border-b border-white/10 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-safety-100">
          Recreated public-safe dashboard preview
        </p>
        <h3 className="mt-2 text-xl font-bold">
          Field Execution Package Status
        </h3>
        <p className="mt-2 text-sm leading-6 text-steel-100">
          Mock data only. No workbook IDs, package numbers, project records,
          internal links, source code, or manager names are shown.
        </p>
      </div>
      <div className="grid gap-3 p-5 sm:grid-cols-3">
        {[
          ["2,300+", "package records supported"],
          ["Scheduled", "refresh and audit workflow"],
          ["Protected", "user-entry fields preserved"],
        ].map(([value, label]) => (
          <div key={label} className="rounded-md border border-white/10 bg-white/10 p-4">
            <p className="text-2xl font-bold">{value}</p>
            <p className="mt-1 text-sm text-steel-100">{label}</p>
          </div>
        ))}
      </div>
      <div className="overflow-x-auto border-t border-white/10">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-white/10 text-xs uppercase tracking-[0.12em] text-steel-100">
            <tr>
              {["Package", "Scope", "Status", "Follow-up"].map((header) => (
                <th key={header} className="px-5 py-3 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-t border-white/10">
                {row.map((cell) => (
                  <td key={`${row[0]}-${cell}`} className="px-5 py-4 text-steel-50">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function ArchitectureFlow({
  steps,
  stepsText,
}: {
  steps?: string[];
  stepsText?: string;
}) {
  const flowSteps = steps ?? stepsText?.split("|").map((step) => step.trim()) ?? [];

  return (
    <section className="my-8 rounded-lg border border-ink-100 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-bold text-ink-900">Public-Safe Architecture</h3>
      <div className="mt-4 grid gap-3 md:grid-cols-5">
        {flowSteps.map((step, index) => (
          <div key={step} className="flex items-center gap-3 md:block">
            <div className="rounded-md border border-ink-100 bg-ink-50 p-4 text-sm font-semibold leading-6 text-ink-800">
              {step}
            </div>
            {index < flowSteps.length - 1 ? (
              <span className="text-copper-700 md:mt-3 md:block md:text-center">
                -&gt;
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
