"use client";

import { motion } from "framer-motion";

import SectionTransitionOverlay from "@/components/SectionTransitionOverlay";
import SectionReveal from "@/components/SectionReveal";

export default function ExecutiveSummary() {
  return (
    <section
      id="executive"
      className="relative overflow-hidden py-32 px-6"
    >
      {/* 🔥 AI Scan Overlay */}
      <SectionTransitionOverlay />

      {/* Futuristic Grid */}
      <div className="absolute inset-0 futuristic-grid opacity-25 pointer-events-none" />

      {/* Strong Ambient Halo */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[900px] bg-purple-700/35 blur-[240px] rounded-full pointer-events-none" />

      {/* Subtle Top Scan Beam */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse opacity-40" />

      <SectionReveal>
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid md:grid-cols-2 gap-20 items-start">

            {/* LEFT — EXECUTIVE NARRATIVE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">
                Executive Profile
              </h2>

              <div className="space-y-8 text-gray-300 leading-relaxed text-lg">

                <p>
                  Founder & Chief Executive Officer of Solvo Solutions,
                  leading AI-integrated strategy and digital enablement
                  initiatives for startups and MSMEs. Architect of cloud-native
                  AI systems including contract intelligence platforms,
                  NLP-driven analytics engines, and structured decision
                  frameworks designed for measurable operational impact.
                </p>

                <p>
                  Combining technical system design expertise with
                  cross-functional execution and government collaboration,
                  I specialize in building scalable AI infrastructures that
                  bridge business strategy and applied machine intelligence.
                </p>

              </div>
            </motion.div>

            {/* RIGHT — AI LAB PANELS */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                {
                  title: "Leadership",
                  description:
                    "Founder & CEO – Solvo Solutions (AI-driven consultancy for startups & MSMEs)",
                },
                {
                  title: "AI Systems Architecture",
                  description:
                    "Architected LawLytics – AI Legal Contract Intelligence Platform using Python, FastAPI & AWS.",
                },
                {
                  title: "NLP & Decision Analytics",
                  description:
                    "Built sentiment analytics engines and structured decision systems for investment and enforcement intelligence.",
                },
                {
                  title: "Government Collaboration",
                  description:
                    "Partnered with MSME Government branch on digital enablement and enterprise development initiatives.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative group p-8 rounded-3xl bg-white/5 backdrop-blur-2xl border border-purple-500/20 shadow-[0_0_80px_rgba(124,58,237,0.2)] hover:shadow-[0_0_130px_rgba(124,58,237,0.45)] transition"
                >
                  {/* Hover Glow Layer */}
                  <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl blur-xl pointer-events-none" />

                  <h3 className="text-purple-400 font-semibold mb-4 text-lg tracking-wide">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>

        </div>
      </SectionReveal>
    </section>
  );
}