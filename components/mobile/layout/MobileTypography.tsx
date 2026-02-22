"use client";

import { ReactNode } from "react";

export function MobileSectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold tracking-tight leading-snug">
      {children}
    </h2>
  );
}

export function MobileSubText({ children }: { children: ReactNode }) {
  return (
    <p className="text-gray-600 text-sm leading-relaxed mt-3">
      {children}
    </p>
  );
}

export function MobileCardTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-base font-semibold tracking-tight">
      {children}
    </h3>
  );
}