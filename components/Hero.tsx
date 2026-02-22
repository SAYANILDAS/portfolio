"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import SectionTransitionOverlay from "@/components/SectionTransitionOverlay";
import SectionReveal from "@/components/SectionReveal";

export default function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 500], [0, 50]);

  const [text, setText] = useState("");
  const fullText = "Building Intelligent AI Architectures";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const headlineWords = ["Sayanil", "Das"];

  return (
    <section className="relative min-h-screen flex items-center px-6 overflow-hidden">

      {/* AI Scan Overlay */}
      <SectionTransitionOverlay />

      {/* Futuristic Grid */}
      <div className="absolute inset-0 futuristic-grid opacity-40 pointer-events-none" />

      {/* Strong Ambient Halo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[1000px] bg-purple-700/30 blur-[220px] rounded-full pointer-events-none" />

      {/* Vertical Scan Sweep */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent animate-pulse opacity-40" />
      </div>

      {/* Bottom Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />

      <SectionReveal>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center w-full relative z-10">

          {/* LEFT — IMAGE */}
          <motion.div
            style={{ y: imageY }}
            whileHover={{ rotateY: 4, rotateX: -2 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="flex justify-center md:justify-start perspective-1000"
          >
            <div className="relative w-60 h-72 md:w-64 md:h-80 rounded-2xl overflow-hidden border border-purple-500/30 shadow-[0_0_80px_rgba(124,58,237,0.45)]">

              {/* Image Glow */}
              <div className="absolute -inset-10 bg-purple-600/40 blur-3xl -z-10" />

              <Image
                src="/profile.jpg"
                alt="Sayanil Das"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT — TEXT */}
          <div className="space-y-8">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-purple-400 tracking-widest text-sm uppercase"
            >
              Founder • AI Systems Architect • Data Strategist
            </motion.p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="inline-block mr-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Typing Line */}
            <h2 className="text-3xl font-semibold">
              <span className="bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="animate-pulse">|</span>
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-xl">
              I design AI-driven decision systems, cloud-native intelligence
              platforms, and scalable analytics architectures that transform
              complex workflows into structured, high-impact systems.
            </p>

            <motion.a
              href="#systems"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 shadow-[0_0_50px_rgba(124,58,237,0.6)] hover:shadow-[0_0_80px_rgba(124,58,237,0.8)] transition text-lg font-medium"
            >
              Explore My AI Systems →
            </motion.a>

          </div>
        </div>
      </SectionReveal>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-purple-400 text-sm tracking-wide flex flex-col items-center gap-2"
      >
        <span>Scroll</span>
        <div className="w-[2px] h-8 bg-gradient-to-b from-purple-400 to-transparent animate-pulse" />
      </motion.div>

    </section>
  );
}