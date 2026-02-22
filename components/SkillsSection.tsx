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
      className="relative overflow-hidden py-20 md:py-32 px-6 bg-white md:bg-transparent text-black md:text-white"
    >
      {/* Desktop Cinematic Layers */}
      <div className="hidden md:block">
        <SectionTransitionOverlay />
      </div>

      <div className="hidden md:block absolute inset-0 futuristic-grid opacity-30 pointer-events-none" />

      <div className="hidden md:block absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[900px] bg-purple-700/30 blur-[240px] rounded-full pointer-events-none" />

      <div className="hidden md:block absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse opacity-40" />

      <SectionReveal>
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight">
              AI Capability Matrix
            </h2>

            <p className="text-gray-600 md:text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base">
              A structured stack of intelligent systems engineering,
              cloud architecture, analytics modeling, and strategic execution.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">

            {skillClusters.map((cluster, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="relative group 
                p-6 md:p-10 
                rounded-2xl md:rounded-3xl 
                bg-gray-50 md:bg-white/5 
                backdrop-blur-0 md:backdrop-blur-2xl 
                border border-gray-200 md:border-purple-500/20 
                shadow-sm md:shadow-[0_0_80px_rgba(124,58,237,0.2)] 
                hover:md:shadow-[0_0_140px_rgba(124,58,237,0.45)] 
                transition"
              >

                {/* Desktop Glow */}
                <div className="hidden md:block absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl blur-xl pointer-events-none" />

                <h3 className="text-purple-600 md:text-purple-400 font-semibold text-base md:text-lg mb-5 md:mb-8 tracking-wide">
                  {cluster.title}
                </h3>

                <div className="flex flex-wrap gap-3 md:gap-4">
                  {cluster.items.map((skill, i) => (
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
                      transition"
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