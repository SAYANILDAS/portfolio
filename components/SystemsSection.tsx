"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import SectionTransitionOverlay from "@/components/SectionTransitionOverlay";
import SectionReveal from "@/components/SectionReveal";

const systems = [
  {
    title: "LawLytics — AI Legal Intelligence Platform",
    architecture:
      "Built using a microservices architecture with a Python ML inference layer, Next.js frontend, PostgreSQL storage, and AI contract clause extraction pipelines.",
    metrics: "Reduced manual review time by 65%",
    tech: ["Next.js", "Python", "PostgreSQL", "NLP", "Cloud Deployment"],
  },
  {
    title: "MSME AI Strategy Engine",
    architecture:
      "AI-driven decision support system integrating analytics dashboards, growth modeling engines, and digital enablement frameworks for MSME sectors.",
    metrics: "Improved operational efficiency by 40%",
    tech: ["Data Analytics", "Dashboard Systems", "AI Modeling"],
  },
];

export default function SystemsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="systems"
      className="relative overflow-hidden py-20 md:py-32 px-6 bg-white md:bg-transparent text-black md:text-white"
    >
      {/* 🔥 AI Scan Overlay — Desktop Only */}
      <div className="hidden md:block">
        <SectionTransitionOverlay />
      </div>

      {/* Futuristic Grid — Desktop Only */}
      <div className="hidden md:block absolute inset-0 futuristic-grid opacity-30 pointer-events-none" />

      {/* Ambient Halo — Desktop Only */}
      <div className="hidden md:block absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[900px] bg-purple-700/35 blur-[240px] rounded-full pointer-events-none" />

      {/* Top Scan Beam — Desktop Only */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent animate-pulse opacity-40" />

      <SectionReveal>
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight">
              AI Systems Architecture
            </h2>
            <p className="text-gray-600 md:text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base">
              Production-grade intelligent systems engineered for performance,
              scalability, and measurable real-world impact.
            </p>
          </motion.div>

          {/* Systems Stack */}
          <div className="space-y-8 md:space-y-12">

            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="relative group 
                bg-gray-50 md:bg-white/5 
                backdrop-blur-0 md:backdrop-blur-2xl 
                border border-gray-200 md:border-purple-500/20 
                rounded-2xl md:rounded-3xl 
                p-6 md:p-12 
                shadow-sm md:shadow-[0_0_90px_rgba(124,58,237,0.25)] 
                hover:md:shadow-[0_0_160px_rgba(124,58,237,0.45)] 
                transition"
              >
                {/* Hover Glow Layer — Desktop Only */}
                <div className="hidden md:block absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl blur-xl pointer-events-none" />

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-6">

                  <h3 className="text-lg md:text-2xl font-semibold text-black md:text-white">
                    {system.title}
                  </h3>

                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="text-purple-600 md:text-purple-400 hover:opacity-80 transition font-medium text-sm md:text-base"
                  >
                    {activeIndex === index ? "− Collapse" : "+ Expand Architecture"}
                  </button>
                </div>

                {/* Metric Badge */}
                <div className="mt-4 md:mt-6 inline-flex items-center 
                bg-purple-100 md:bg-purple-600/15 
                border border-purple-300 md:border-purple-500/30 
                text-purple-700 md:text-purple-300 
                px-4 md:px-5 py-2 rounded-full text-xs md:text-sm 
                shadow-none md:shadow-[0_0_25px_rgba(124,58,237,0.3)]">
                  {system.metrics}
                </div>

                {/* Expandable Architecture */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-6 md:mt-10 overflow-hidden"
                    >
                      <p className="text-gray-600 md:text-gray-400 leading-relaxed text-sm md:text-base">
                        {system.architecture}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8">
                        {system.tech.map((tech, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="px-4 md:px-5 py-1.5 md:py-2 
                            rounded-full 
                            bg-gray-200 md:bg-purple-600/15 
                            border border-gray-300 md:border-purple-500/30 
                            text-gray-800 md:text-purple-200 
                            text-xs md:text-sm 
                            shadow-none md:shadow-[0_0_25px_rgba(124,58,237,0.25)] 
                            hover:md:shadow-[0_0_45px_rgba(124,58,237,0.45)] 
                            transition"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            ))}

          </div>

        </div>
      </SectionReveal>
    </section>
  );
}