"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

import SectionTransitionOverlay from "@/components/SectionTransitionOverlay";
import SectionReveal from "@/components/SectionReveal";

const achievements = [
  {
    title: "Rashtrapati Award – Bharat Scouts & Guides",
    description:
      "National-level recognition for leadership, discipline, and structured service excellence.",
    tag: "National Recognition",
  },
  {
    title: "Rajya Puraskar – Governor of West Bengal",
    description:
      "State-level honor for leadership contribution and structured development impact.",
    tag: "State Award",
  },
  {
    title: "2nd Rank – AICTE IDE Bootcamp 2.0",
    description:
      "Ranked 2nd for innovation, startup validation strategy, and execution planning.",
    tag: "Innovation Excellence",
  },
  {
    title: "3rd Place – IIT Kharagpur BioCraft Competition",
    description:
      "Recognized for interdisciplinary conceptual modeling and structured solution design.",
    tag: "Technical Distinction",
  },
];

export default function AchievementsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="achievements" className="relative overflow-hidden py-32 px-6">

      {/* 🔥 AI Scan Overlay */}
      <SectionTransitionOverlay />

      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 futuristic-grid opacity-20 pointer-events-none" />

      {/* Stronger Ambient Halo */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[900px] bg-purple-700/30 blur-[240px] rounded-full pointer-events-none" />

      {/* Subtle Moving Top Scan */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse opacity-40" />

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
            <h2 className="text-4xl md:text-5xl font-bold">
              Milestones & Recognition
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A structured timeline of leadership, innovation, and high-impact recognition.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative space-y-16">

            {/* Vertical Luminous Spine */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/70 via-purple-400/30 to-transparent" />

            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-14"
              >
                {/* Pulsing Node */}
                <div className="absolute left-0 top-3 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_30px_rgba(124,58,237,0.9)] animate-pulse" />

                {/* Glass Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group relative bg-white/5 backdrop-blur-2xl border border-purple-500/20 rounded-3xl p-10 shadow-[0_0_70px_rgba(124,58,237,0.2)] hover:shadow-[0_0_120px_rgba(124,58,237,0.4)] transition"
                >

                  {/* Hover Glow Layer */}
                  <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl blur-xl pointer-events-none" />

                  {/* Card Content */}
                  <div className="flex justify-between items-start flex-wrap gap-4">

                    <div className="flex items-center gap-4">
                      <Award className="text-purple-400" size={24} />
                      <h3 className="text-xl font-semibold">
                        {item.title}
                      </h3>
                    </div>

                    <span className="px-4 py-2 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-300 text-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Expand Toggle */}
                  <button
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                    className="mt-6 text-purple-400 hover:text-purple-300 transition"
                  >
                    {active === index ? "Hide Details" : "View Details"}
                  </button>

                  {/* Expandable Description */}
                  <AnimatePresence>
                    {active === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-6 text-gray-400 overflow-hidden"
                      >
                        {item.description}
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