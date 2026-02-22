"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function MobileWorkSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="work" className="space-y-6">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold tracking-tight"
      >
        Executive Work Experience
      </motion.h2>

      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="p-5 rounded-2xl bg-gray-50 border border-gray-200"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-base font-semibold">
              {exp.role}
            </h3>
            <span className="text-xs text-purple-600">
              {exp.duration}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 mt-3">
            {exp.metrics.map((metric, i) => (
              <span
                key={i}
                className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full"
              >
                {metric}
              </span>
            ))}
          </div>

          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            {exp.impact.map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>

          <button
            onClick={() =>
              setActive(active === index ? null : index)
            }
            className="block mt-4 text-sm text-purple-600"
          >
            {active === index ? "Hide Architecture" : "View Architecture"}
          </button>

          <AnimatePresence>
            {active === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-3 text-sm text-gray-600"
              >
                {exp.details}
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      ))}

    </section>
  );
}