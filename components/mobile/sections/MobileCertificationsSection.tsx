"use client";

import { motion } from "framer-motion";

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

export default function MobileCertificationsSection() {
  return (
    <section id="certifications" className="space-y-6">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold tracking-tight"
      >
        Executive Validation Interface
      </motion.h2>

      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="p-5 rounded-2xl bg-gray-50 border border-gray-200"
        >
          <h3 className="text-base font-semibold">
            {cert.title}
          </h3>

          <p className="text-xs text-purple-600 mt-1">
            {cert.issuer}
          </p>

          <p className="text-sm text-gray-600 mt-3 leading-relaxed">
            {cert.description}
          </p>

          <div className="text-xs text-gray-500 mt-3">
            Credential ID: {cert.id}
          </div>
        </motion.div>
      ))}

    </section>
  );
}