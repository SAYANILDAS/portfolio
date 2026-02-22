"use client";

import MobileLayout from "./layout/MobileLayout";

import MobileHero from "./sections/MobileHero";
import MobileExecutiveSummary from "./sections/MobileExecutiveSummary";
import MobileSystemsSection from "./sections/MobileSystemsSection";
import MobileWorkSection from "./sections/MobileWorkSection";
import MobileSkillsSection from "./sections/MobileSkillsSection";
import MobileAchievementsSection from "./sections/MobileAchievementsSection";
import MobileCertificationsSection from "./sections/MobileCertificationsSection";
import MobileContact from "./sections/MobileContact";

export default function MobileHome() {
  return (
    <div className="block md:hidden">
      <MobileLayout>
        <MobileHero />
        <MobileExecutiveSummary />
        <MobileSystemsSection />
        <MobileWorkSection />
        <MobileSkillsSection />
        <MobileAchievementsSection />
        <MobileCertificationsSection />
        <MobileContact />
      </MobileLayout>
    </div>
  );
}