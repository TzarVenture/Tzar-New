import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/app/lib/schemas";
import { CASE_STUDIES, getCaseStudy, getNextCaseStudy } from "../caseStudies";
import CaseStudyView from "./CaseStudyView";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  const url = `https://www.tzar.co/portfolio/${study.slug}`;
  // Root layout appends " | Tzar Digital Agency".
  const title = `${study.name} Case Study | ${study.label}`;
  return {
    title,
    description: study.summary,
    alternates: { canonical: url },
    openGraph: {
      title: `${study.name}: ${study.tagline}`,
      description: study.summary,
      url,
      siteName: "Tzar Digital Agency",
      images: [{ url: study.images.desktop, width: 1600, height: 1000, alt: `${study.name} by Tzar Digital Agency` }],
      locale: "en_IN",
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const breadcrumb = createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Portfolio", url: "/portfolio" },
    { name: study.name, url: `/portfolio/${study.slug}` },
  ]);

  return (
    <>
      <JsonLd data={breadcrumb} />
      <CaseStudyView study={study} next={getNextCaseStudy(study.slug)} />
    </>
  );
}
