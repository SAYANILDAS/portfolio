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
      className="relative overflow-hidden py-20 md:py-32 px-6 bg-white md:bg-transparent text-black md:text-white"
    >
      {/* Desktop Cinematic Layers */}
      <div className="hidden md:block">
        <SectionTransitionOverlay />
      </div>

      <div className="hidden md:block absolute inset-0 futuristic-grid opacity-25 pointer-events-none" />

      <div className="hidden md:block absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[900px] bg-purple-700/35 blur-[240px] rounded-full pointer-events-none" />

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
            <h2 className="text-2xl md:text-5xl font-bold">
              Executive Validation Interface
            </h2>
            <p className="text-gray-600 md:text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base">
              Verified credentials supporting AI systems architecture,
              strategic leadership, and scalable technology execution.
            </p>
          </motion.div>

          {/* Certification Grid */}
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">

            {certifications.map((cert, index) => (
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
                shadow-sm md:shadow-[0_0_70px_rgba(124,58,237,0.2)] 
                hover:md:shadow-[0_0_130px_rgba(124,58,237,0.45)] 
                transition"
              >

                {/* Desktop Glow */}
                <div className="hidden md:block absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl blur-xl pointer-events-none" />

                {/* VERIFIED Header */}
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <ShieldCheck
                    className="text-purple-600 md:text-purple-400"
                    size={22}
                  />
                  <span className="text-purple-600 md:text-purple-400 text-xs md:text-sm font-semibold tracking-wide">
                    VERIFIED
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-xl font-semibold mb-2 text-black md:text-white">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-purple-600 md:text-purple-400 text-xs md:text-sm mb-3 md:mb-4">
                  {cert.issuer}
                </p>

                {/* Description */}
                <p className="text-gray-600 md:text-gray-400 leading-relaxed mb-5 md:mb-6 text-sm md:text-base">
                  {cert.description}
                </p>

                {/* Credential Footer */}
                <div className="flex items-center gap-2 text-xs text-gray-500 md:text-gray-400 border-t border-gray-200 md:border-purple-500/10 pt-4">
                  <BadgeCheck
                    size={14}
                    className="text-purple-600 md:text-purple-400"
                  />
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