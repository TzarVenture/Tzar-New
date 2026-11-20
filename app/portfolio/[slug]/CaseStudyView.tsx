import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, Lock } from "lucide-react";
import { ConsistentCTA } from "@/app/components/ui/ConsistentCTA";
import { CATEGORY_LABELS, type CaseStudy } from "../caseStudies";
import {
  GridTexture,
  DarkBackdrop,
  WaveHero,
  DeviceDuo,
  BrowserFrame,
  PhoneFrame,
  ModuleIconBadge,
  TechStack,
} from "../components/PortfolioUI";
import { DARK_GRADIENT } from "../theme";

const darkPanel = { backgroundColor: "#061309", backgroundImage: DARK_GRADIENT };

export default function CaseStudyView({ study, next }: { study: CaseStudy; next: CaseStudy }) {
  const meta = [
    { k: "Industry", v: study.industry },
    { k: "Category", v: CATEGORY_LABELS[study.category] },
  ];

  return (
    <div className="relative isolate text-white min-h-screen selection:bg-[#FFAE00] selection:text-[#0E2015] overflow-x-clip">
      <DarkBackdrop />
      {/* ── HERO ── */}
      <WaveHero className="relative w-full pt-28 sm:pt-32 lg:pt-36 pb-0 text-white overflow-hidden" style={darkPanel}>
        <GridTexture opacity={0.08} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono tracking-wider mb-6 text-[#FFAE00]"
          >
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              HOME
            </Link>
            <span className="opacity-40">/</span>
            <Link href="/portfolio" className="hover:underline opacity-80 hover:opacity-100">
              PORTFOLIO
            </Link>
            <span className="opacity-40">/</span>
            <span className="text-white font-bold uppercase">{study.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <h1 className="font-montserrat font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
                {study.name}
              </h1>
              <p className="mt-4 text-lg sm:text-xl text-[#B6F8DD] leading-snug max-w-md">{study.tagline}</p>

              <dl className="mt-7 grid grid-cols-2 gap-4 pt-5 border-t border-white/10">
                {meta.map((m) => (
                  <div key={m.k}>
                    <dt className="text-xs text-[#FFAE00] font-bold">{m.k}</dt>
                    <dd className="mt-0.5 text-sm text-white font-medium">{m.v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5">
                <p className="text-xs text-[#FFAE00] font-bold">Built with</p>
                <TechStack items={study.stack} className="mt-2.5" />
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                {study.liveUrl ? (
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 bg-[#FFAE00] text-[#0E2015] font-bold px-6 rounded-xl inline-flex items-center gap-2 text-sm pf-btn pf-btn-primary"
                  >
                    Visit {study.domain}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm text-white/75 font-semibold pr-2">
                    <Lock className="w-4 h-4 text-[#FFAE00]" />
                    Demo on request
                  </span>
                )}
                <Link
                  href="/contact"
                  className="h-12 border border-[#3A5A40] text-white px-6 rounded-xl font-bold text-sm inline-flex items-center gap-2 pf-btn pf-btn-ghost"
                >
                  Start a similar project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7">
              <DeviceDuo
                desktop={study.images.desktop}
                desktopAlt={study.images.desktopAlt}
                mobile={study.images.mobile}
                name={study.name}
                domain={study.domain}
                tone="dark"
                priority
              />
            </div>
          </div>
        </div>

      </WaveHero>

      {/* ── OVERVIEW: summary, challenge, approach ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-16">
        <p className="max-w-3xl font-montserrat text-xl sm:text-2xl lg:text-[28px] text-white font-bold leading-snug tracking-tight">
          {study.summary}
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-[#0E2015] rounded-3xl border border-[#244A2C] p-6 sm:p-8 shadow-sm">
            <h2 className="font-montserrat font-black text-xl sm:text-2xl text-white">The challenge</h2>
            <p className="mt-3 text-base text-[#B6F8DD] leading-relaxed">{study.challenge}</p>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[#FFAE00] p-6 sm:p-8 text-white shadow-xl" style={darkPanel}>
            <GridTexture />
            <div className="relative z-10">
              <h2 className="font-montserrat font-black text-xl sm:text-2xl text-white">What we built</h2>
              <p className="mt-3 text-base text-white/85 leading-relaxed">{study.approach}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY MODULES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20">
        <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-white tracking-tight">
          Inside {study.name}
        </h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {study.modules.map((m) => (
            <div
              key={m.title}
              className="bg-[#0E2015] rounded-2xl border border-[#244A2C] p-5 sm:p-6"
            >
              <span className="w-10 h-10 rounded-xl bg-[#FFAE00] flex items-center justify-center pf-btn pf-btn-primary">
                <ModuleIconBadge icon={m.icon} className="w-5 h-5 text-[#0E2015]" />
              </span>
              <h3 className="mt-4 font-montserrat font-bold text-base sm:text-lg text-white">{m.title}</h3>
              <p className="mt-1.5 text-sm text-white/75 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SCREENS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20">
        <div
          className="relative overflow-hidden rounded-3xl sm:rounded-[2rem] border border-[#244A2C] shadow-2xl px-4 py-8 sm:p-10 lg:p-12"
          style={darkPanel}
        >
          <GridTexture />
          <div className="relative z-10">
            <h2 className="font-montserrat font-black text-2xl sm:text-4xl text-white tracking-tight">
              {study.images.mobile ? "On desktop and on the phone" : "From the live product"}
            </h2>
            {study.kind === "platform" && (
              <p className="mt-2 text-sm text-white/60">
                Screens show demo data, or have names, contact details and business figures blurred to protect
                client data.
              </p>
            )}

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
              <div className={study.images.mobile ? "lg:col-span-9" : "lg:col-span-12"}>
                <BrowserFrame
                  src={study.images.desktop}
                  alt={`${study.name} desktop screen`}
                  domain={study.domain}
                  tone="dark"
                  sizes="(min-width: 1024px) 900px, 100vw"
                />
              </div>
              {study.images.mobile && (
                <div className="lg:col-span-3">
                  <PhoneFrame
                    src={study.images.mobile}
                    alt={`${study.name} mobile screen`}
                    className="w-[62%] sm:w-[42%] lg:w-full max-w-[280px] mx-auto"
                    sizes="(min-width: 1024px) 280px, 60vw"
                  />
                </div>
              )}
              {study.images.desktopAlt && (
                <div className="lg:col-span-12">
                  <BrowserFrame
                    src={study.images.desktopAlt}
                    alt={`${study.name} second screen`}
                    domain={study.domain}
                    tone="dark"
                    sizes="(min-width: 1024px) 900px, 100vw"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS / STACK / ROLE ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
          <div className="lg:col-span-6 bg-[#0E2015] rounded-3xl border border-[#244A2C] p-6 sm:p-8">
            <h2 className="font-montserrat font-black text-xl text-white">What it delivers</h2>
            <ul className="mt-5 space-y-3">
              {study.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FFAE00] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white font-medium">{h}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 bg-[#0E2015] rounded-3xl border border-[#244A2C] p-6 sm:p-8">
            <h2 className="font-montserrat font-black text-xl text-white">Tech stack</h2>
            <TechStack items={study.stack} className="mt-5" />
          </div>
          <div className="lg:col-span-3 bg-[#0E2015] rounded-3xl border border-[#244A2C] p-6 sm:p-8">
            <h2 className="font-montserrat font-black text-xl text-white">Our role</h2>
            <ul className="mt-5 space-y-2">
              {study.services.map((s) => (
                <li key={s} className="text-sm text-white font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFAE00] shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── NEXT PROJECT ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20">
        <Link
          href="/portfolio"
          className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-[#B6F8DD] hover:text-[#FFAE00]"
        >
          <ArrowLeft className="w-4 h-4" />
          All work
        </Link>
        <Link
          href={`/portfolio/${next.slug}`}
          className="group relative block overflow-hidden rounded-3xl border border-[#244A2C] shadow-2xl text-white"
          style={darkPanel}
        >
          <GridTexture />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 sm:p-10">
            <div className="md:col-span-6">
              <p className="text-sm text-[#FFAE00] font-bold">Next case study</p>
              <h2 className="mt-2 font-montserrat font-black text-3xl sm:text-4xl tracking-tight">{next.name}</h2>
              <p className="mt-2 text-sm sm:text-base text-[#B6F8DD]">{next.tagline}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#FFAE00]">
                Read case study
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
            <div className="md:col-span-6">
              <div className="relative aspect-16/10 rounded-xl overflow-hidden border border-white/10">
                <Image
                  src={next.images.desktop}
                  alt={`${next.name} preview`}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Link>
      </section>

      <div className="pt-6">
        <ConsistentCTA
          title={`Want something like ${study.name}?`}
          description="Tell us how your team works today. We will come back with a clear plan, a timeline and the right stack for it."
          primaryText="Start a Project"
          primaryHref="/contact"
          secondaryText="See all work"
          secondaryHref="/portfolio"
        />
      </div>
    </div>
  );
}
