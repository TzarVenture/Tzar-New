import React from 'react';

// ── PRESERVED EXISTING HOME STAGES (COMMENTED OUT AS DIRECTED) ───────────────
// import { HeroStage } from '../components/home/HeroStage';
// import { KineticMarquee } from '../components/home/KineticMarquee';
// import { AboutStage } from '../components/home/AboutStage';
// import { BentoGridStage } from '../components/home/BentoGridStage';
// import { TechMatrixStage } from '../components/home/TechMatrixStage';
// import { StoryShowcaseStage } from '../components/home/StoryShowcaseStage';
// import { ContactStage } from '../components/home/ContactStage';

// ── NEW HIGH-END TECH AGENCY COMPONENTS (FRAMER & NEXT.JS INSPIRED) ──────────
import { TechHero } from '../components/home/tech/TechHero';
import { TechMarquee } from '../components/home/tech/TechMarquee';
import { TechBentoGrid } from '../components/home/tech/TechBentoGrid';
import { TechArchitectureMatrix } from '../components/home/tech/TechArchitectureMatrix';
import { TechServicesGrid } from '../components/home/tech/TechServicesGrid';
import { TechProofShowcase } from '../components/home/tech/TechProofShowcase';
import { TechContactSection } from '../components/home/tech/TechContactSection';

export const HomePage: React.FC = () => {
  return (
    <div style={{ overflowX: 'hidden', background: '#090909', position: 'relative' }}>
      
      {/* 
        ══════════════════════════════════════════════════════════════════════════
        PRESERVED EXISTING HOME COMPONENTS (COMMENTED OUT - DO NOT DELETE)
        ══════════════════════════════════════════════════════════════════════════ 
      */}
      {/* 
        <HeroStage />
        <KineticMarquee />
        <AboutStage />
        <BentoGridStage />
        <TechMatrixStage />
        <StoryShowcaseStage />
        <ContactStage />
      */}

      {/* 
        ══════════════════════════════════════════════════════════════════════════
        NEW HIGH-END TECH AGENCY LANDING PAGE (FRAMER & NEXT.JS INSPIRED)
        ══════════════════════════════════════════════════════════════════════════ 
      */}
      {/* 01 • NEXT.JS INSPIRED CONNECTED CENTRAL NODE HERO */}
      <TechHero />

      {/* 02 • KINETIC METRIC & TECH STACK TICKER MARQUEE */}
      <TechMarquee />

      {/* 03 • FRAMER MOTION INSPIRED INTERACTIVE BENTO GRID */}
      <TechBentoGrid />

      {/* 04 • TECH ARCHITECTURE COMPARISON MATRIX */}
      <TechArchitectureMatrix />

      {/* 05 • FULL-STACK SERVICE CATALOG GRID */}
      <TechServicesGrid />

      {/* 06 • VERIFIED CASE STUDIES & PROOF SHOWCASE */}
      <TechProofShowcase />

      {/* 07 • HIGH-CONVERSION PROJECT PROPOSAL SECTION */}
      <TechContactSection />

    </div>
  );
};




