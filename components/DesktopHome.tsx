"use client";

import Hero from "@/components/Hero";
import ExecutiveSummary from "@/components/ExecutiveSummary";
import SystemsSection from "@/components/SystemsSection";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CertificationsSection from "@/components/CertificationsSection";
import Contact from "@/components/Contact";

export default function DesktopHome() {
  return (
    <div className="hidden md:block">
      <main className="relative">
        <Hero />
        <ExecutiveSummary />
        <SystemsSection />
        <WorkSection />
        <SkillsSection />
        <AchievementsSection />
        <CertificationsSection />
        <Contact />
      </main>
    </div>
  );
}