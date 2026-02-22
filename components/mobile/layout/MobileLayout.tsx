"use client";

import { ReactNode } from "react";

export default function MobileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="md:hidden bg-white text-black min-h-screen">
      <div className="max-w-md mx-auto px-6 pt-10 pb-28 space-y-20">
        {children}
      </div>
    </div>
  );
}