import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import {
  ArchitectureFlow,
  BeforeAfterPair,
  ConfidentialityCallout,
  MetricStrip,
  ProjectImageGallery,
  RedactedDashboardPreview,
} from "@/components/CaseStudyMedia";
import { ConfidentialityNote } from "@/components/ConfidentialityNote";

export const mdxComponents: MDXRemoteProps["components"] = {
  ArchitectureFlow,
  BeforeAfterPair,
  ConfidentialityCallout,
  ConfidentialityNote,
  MetricStrip,
  ProjectImageGallery,
  RedactedDashboardPreview,
  h2: (props) => <h2 {...props} />,
  h3: (props) => <h3 {...props} />,
  p: (props) => <p {...props} />,
  ul: (props) => <ul {...props} />,
  li: (props) => <li {...props} />,
};
