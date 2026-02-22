"use client";

import { motion } from "framer-motion";

export default function SectionTransitionOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.4 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className="absolute inset-0 pointer-events-none"
    >
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse" />
    </motion.div>
  );
}