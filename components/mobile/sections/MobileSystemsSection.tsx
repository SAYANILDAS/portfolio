"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function MobileSystemsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="systems" className="space-y-6">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold tracking-tight"
      >
        AI Systems Architecture
      </motion.h2>

      <p className="text-sm text-gray-600 leading-relaxed">
        Production-grade intelligent systems engineered for performance,
        scalability, and measurable real-world impact.
      </p>

      {systems.map((system, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="p-5 rounded-2xl bg-gray-50 border border-gray-200"
        >
          <h3 className="text-base font-semibold">
            {system.title}
          </h3>

          <div className="mt-3 text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full inline-block">
            {system.metrics}
          </div>

          <button
            onClick={() =>
              setActive(active === index ? null : index)
            }
            className="block mt-4 text-sm text-purple-600"
          >
            {active === index ? "Collapse Architecture" : "Expand Architecture"}
          </button>

          <AnimatePresence>
            {active === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden mt-4"
              >
                <p className="text-sm text-gray-600 leading-relaxed">
                  {system.architecture}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {system.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>
      ))}

    </section>
  );
}