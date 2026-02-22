"use client";

import { motion } from "framer-motion";

import SectionTransitionOverlay from "@/components/SectionTransitionOverlay";
import SectionReveal from "@/components/SectionReveal";

const skillClusters = [
  {
    title: "AI & Machine Learning",
    items: [
      "Natural Language Processing",
      "Clause Risk Classification",
      "LLM Integration",
      "Model Evaluation",
      "Feature Engineering",
    ],
  },
  {
    title: "Cloud & Backend Systems",
    items: [
      "Python",
      "FastAPI",
      "AWS Infrastructure",
      "API Architecture",
      "Cloud Deployment",
    ],
  },
  {
    title: "Data & Analytics Engineering",
    items: [
      "SQL",
      "EDA",
      "KPI Systems",
      "Decision Analytics",
      "Performance Modeling",
    ],
  },
  {
    title: "Strategy & Execution",
    items: [
      "Startup Advisory",
      "MSME Strategy",
      "Operational Intelligence",
      "Digital Enablement",
      "Cross-functional Leadership",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-32 px-6"
    >
      {/* 🔥 AI Scan Overlay */}
      <SectionTransitionOverlay />

      {/* Futuristic Grid */}
      <div className="absolute inset-0 futuristic-grid opacity-30 pointer-events-none" />

      {/* Strong Ambient Halo */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[900px] bg-purple-700/30 blur-[240px] rounded-full pointer-events-none" />

      {/* Subtle Top Scan Beam */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse opacity-40" />

      <SectionReveal>
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              AI Capability Matrix
            </h2>

            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              A structured stack of intelligent systems engineering,
              cloud architecture, analytics modeling, and strategic execution.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">

            {skillClusters.map((cluster, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                className="relative group p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-purple-500/20 shadow-[0_0_80px_rgba(124,58,237,0.2)] hover:shadow-[0_0_140px_rgba(124,58,237,0.45)] transition"
              >

                {/* Hover Glow Layer */}
                <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl blur-xl pointer-events-none" />

                <h3 className="text-purple-400 font-semibold text-lg mb-8 tracking-wide">
                  {cluster.title}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {cluster.items.map((skill, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-5 py-2 rounded-full bg-purple-600/15 border border-purple-500/30 text-purple-200 text-sm transition shadow-[0_0_25px_rgba(124,58,237,0.25)] hover:shadow-[0_0_40px_rgba(124,58,237,0.45)]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </SectionReveal>
    </section>
  );
}