"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck } from "lucide-react";

import SectionTransitionOverlay from "@/components/SectionTransitionOverlay";
import SectionReveal from "@/components/SectionReveal";

const certifications = [
  {
    title: "AICTE IDE Bootcamp 2.0",
    issuer: "AICTE",
    description:
      "National innovation bootcamp focused on startup validation, scalable business modeling, and strategic execution.",
    id: "AICTE-IDE-2023",
  },
  {
    title: "Artificial Intelligence Foundations",
    issuer: "Academic Certification",
    description:
      "Core foundations in ML systems, structured model evaluation, and applied AI decision frameworks.",
    id: "AI-FOUND-2023",
  },
  {
    title: "Cloud & Backend Systems",
    issuer: "Technical Certification",
    description:
      "Cloud-native backend architecture, API design principles, and scalable infrastructure deployment.",
    id: "CLOUD-BE-2024",
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-32 px-6"
    >

      {/* 🔥 AI Scan Overlay */}
      <SectionTransitionOverlay />

      {/* Futuristic Grid */}
      <div className="absolute inset-0 futuristic-grid opacity-25 pointer-events-none" />

      {/* Stronger Ambient Halo */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[900px] bg-purple-700/35 blur-[240px] rounded-full pointer-events-none" />

      {/* Subtle Moving Top Scan */}
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
            <h2 className="text-4xl md:text-5xl font-bold">
              Executive Validation Interface
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Verified credentials supporting AI systems architecture,
              strategic leadership, and scalable technology execution.
            </p>
          </motion.div>

          {/* Certification Grid */}
          <div className="grid md:grid-cols-3 gap-10">

            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                className="relative group p-10 rounded-3xl bg-white/5 backdrop-blur-2xl border border-purple-500/20 shadow-[0_0_70px_rgba(124,58,237,0.2)] hover:shadow-[0_0_130px_rgba(124,58,237,0.45)] transition"
              >

                {/* Hover Glow Layer */}
                <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl blur-xl pointer-events-none" />

                {/* VERIFIED Header */}
                <div className="flex items-center gap-4 mb-6">
                  <ShieldCheck className="text-purple-400" size={28} />
                  <span className="text-purple-400 text-sm font-semibold tracking-wide">
                    VERIFIED
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-purple-400 text-sm mb-4">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Credential Footer */}
                <div className="flex items-center gap-2 text-xs text-gray-500 border-t border-purple-500/10 pt-4">
                  <BadgeCheck size={16} className="text-purple-400" />
                  Credential ID: {cert.id}
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </SectionReveal>
    </section>
  );
}