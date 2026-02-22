"use client";

import Navbar from "@/components/Navbar";
import GlobalTransition from "@/components/GlobalTransition";
import DesktopHome from "@/components/DesktopHome";
import MobileHome from "@/components/mobile/MobileHome";
import MobileBottomNav from "@/components/mobile/layout/MobileBottomNav";

export default function Home() {
  return (
    <>
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Page Content Animation Only */}
      <GlobalTransition>
        <>
          <DesktopHome />
          <MobileHome />
        </>
      </GlobalTransition>

      {/* Mobile Bottom Navigation */}
      <div className="block md:hidden">
        <MobileBottomNav />
      </div>
    </>
  );
}