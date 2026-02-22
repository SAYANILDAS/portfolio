"use client";

import GlobalTransition from "@/components/GlobalTransition";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import SystemsSection from "@/components/SystemsSection";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Navbar OUTSIDE animation wrapper */}
      <Navbar />

      <GlobalTransition>
        <main className="relative z-0">
          <Hero />
          <ExecutiveSummary />
          <SystemsSection />
          <WorkSection />
          <SkillsSection />
          <AchievementsSection />
          <CertificationsSection />
          <Contact />
        </main>
      </GlobalTransition>
    </>
  );
}