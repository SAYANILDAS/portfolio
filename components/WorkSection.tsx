"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import SectionTransitionOverlay from "@/components/SectionTransitionOverlay";
import SectionReveal from "@/components/SectionReveal";

const experiences = [
  {
    role: "Founder & CEO — Solvo Solutions",
    duration: "2023 – Present",
    impact: [
      "Led AI-driven digital transformation initiatives",
      "Designed MSME advisory frameworks",
      "Built AI-powered strategic growth models",
    ],
    metrics: ["40% Efficiency Gain", "Multi-Industry Impact"],
    details:
      "Architected AI-enabled decision systems, operational strategy frameworks, and intelligent digital enablement pipelines for MSMEs and startup ecosystems.",
  },
  {
    role: "AI Systems Architect — LawLytics",
    duration: "Final Year Project",
    impact: [
      "Developed AI contract intelligence engine",
      "Automated clause risk classification",
      "Built scalable backend architecture",
    ],
    metrics: ["65% Review Time Reduction", "Production-ready API"],
    details:
      "Designed a full-stack AI legal intelligence platform using NLP models, microservices architecture, and structured cloud deployment for scalable document intelligence.",
  },
];

export default function WorkSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section
      id="work"
      className="relative overflow-hidden py-32 px-6"
    >
      {/* 🔥 AI Scan Overlay */}
      <SectionTransitionOverlay />

      {/* Futuristic Grid */}
      <div className="absolute inset-0 futuristic-grid opacity-30 pointer-events-none" />

      {/* Strong Ambient Halo */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[900px] bg-purple-700/35 blur-[240px] rounded-full pointer-events-none" />

      {/* Top Scan Beam */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent animate-pulse opacity-40" />

      <SectionReveal>
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Executive Work Experience
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Strategic leadership, AI system design, and measurable operational impact.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative space-y-20">

            {/* Vertical Luminous Spine */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/70 via-purple-400/30 to-transparent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-14"
              >
                {/* Timeline Node */}
                <div className="absolute left-0 top-3 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_30px_rgba(124,58,237,0.9)] animate-pulse" />

                {/* Executive Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative group bg-white/5 backdrop-blur-2xl border border-purple-500/20 rounded-3xl p-12 shadow-[0_0_90px_rgba(124,58,237,0.25)] hover:shadow-[0_0_160px_rgba(124,58,237,0.45)] transition"
                >

                  {/* Hover Glow Layer */}
                  <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl blur-xl pointer-events-none" />

                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <h3 className="text-2xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-purple-400 text-sm font-medium">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Metrics Chips */}
                  <div className="flex flex-wrap gap-4 mt-8">
                    {exp.metrics.map((metric, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.08 }}
                        className="px-5 py-2 rounded-full bg-purple-600/15 border border-purple-500/30 text-purple-300 text-sm shadow-[0_0_25px_rgba(124,58,237,0.3)] hover:shadow-[0_0_45px_rgba(124,58,237,0.5)] transition"
                      >
                        {metric}
                      </motion.span>
                    ))}
                  </div>

                  {/* Impact Bullets */}
                  <ul className="mt-8 space-y-4 text-gray-400">
                    {exp.impact.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>

                  {/* Expandable Detail */}
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className="mt-8 text-purple-400 hover:text-purple-300 transition font-medium"
                  >
                    {activeIndex === index ? "− Hide Architecture" : "+ View Architecture"}
                  </button>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-8 overflow-hidden text-gray-400 leading-relaxed"
                      >
                        {exp.details}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </motion.div>
            ))}

          </div>

        </div>
      </SectionReveal>
    </section>
  );
}