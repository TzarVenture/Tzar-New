import React from "react";
import { TechHero } from "@/legacy-src/components/home/tech/TechHero";
import { TechMarquee } from "@/legacy-src/components/home/tech/TechMarquee";
import { TechBentoGrid } from "@/legacy-src/components/home/tech/TechBentoGrid";
import { TechArchitectureMatrix } from "@/legacy-src/components/home/tech/TechArchitectureMatrix";
import { TechServicesGrid } from "@/legacy-src/components/home/tech/TechServicesGrid";
import { TechProofShowcase } from "@/legacy-src/components/home/tech/TechProofShowcase";
import { TechContactSection } from "@/legacy-src/components/home/tech/TechContactSection";

export default function Home() {
  return (
    <main className="bg-[#090909] text-white min-h-screen">
      {/* 01 • NEXT.JS CONNECTED CENTRAL NODE HERO */}
      <TechHero />

      {/* 02 • KINETIC METRIC & TECH STACK TICKER MARQUEE */}
      <TechMarquee />

      {/* 03 • INTERACTIVE BENTO GRID */}
      <TechBentoGrid />

      {/* 04 • TECH ARCHITECTURE COMPARISON MATRIX */}
      <TechArchitectureMatrix />

      {/* 05 • FULL-STACK SERVICE CATALOG GRID */}
      <TechServicesGrid />

      {/* 06 • VERIFIED CASE STUDIES & PROOF SHOWCASE */}
      <TechProofShowcase />

      {/* 07 • HIGH-CONVERSION PROJECT PROPOSAL SECTION */}
      <TechContactSection />
    </main>
  );
}
