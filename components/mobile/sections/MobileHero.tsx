"use client";

import Image from "next/image";

export default function MobileHero() {
  return (
    <section className="text-center space-y-8">

      <div className="flex justify-center">
        <div className="relative w-32 h-40 rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
          <Image
            src="/profile.jpg"
            alt="Sayanil Das"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-purple-600 text-xs uppercase tracking-widest">
          Founder • AI Systems Architect • Data Strategist
        </p>

        <h1 className="text-3xl font-semibold tracking-tight leading-[1.1]">
          Sayanil Das
        </h1>

        <p className="text-sm text-gray-600 leading-relaxed">
          Building Intelligent AI Architectures
        </p>
      </div>

      <a
        href="#systems"
        className="inline-block px-6 py-3 bg-purple-600 text-white rounded-xl text-sm font-medium"
      >
        Explore My AI Systems →
      </a>

    </section>
  );
}