"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award } from "lucide-react";

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

export default function MobileAchievementsSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="achievements" className="space-y-6">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-semibold tracking-tight"
      >
        Milestones & Recognition
      </motion.h2>

      {achievements.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="p-5 rounded-2xl bg-gray-50 border border-gray-200"
        >
          <div className="flex items-center gap-3">
            <Award className="text-purple-600" size={18} />
            <h3 className="text-base font-semibold">{item.title}</h3>
          </div>

          <span className="inline-block mt-2 text-xs text-purple-600">
            {item.tag}
          </span>

          <button
            onClick={() =>
              setActive(active === index ? null : index)
            }
            className="block mt-4 text-sm text-purple-600"
          >
            {active === index ? "Hide Details" : "View Details"}
          </button>

          <AnimatePresence>
            {active === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-3 text-sm text-gray-600"
              >
                {item.description}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}

    </section>
  );
}