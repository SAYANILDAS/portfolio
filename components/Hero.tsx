"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-screen pt-20 flex flex-col justify-center items-center text-center bg-black text-white relative overflow-hidden px-6"
    >
      {/* Subtle Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl top-20 -z-10"></div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-7xl font-bold mb-6 tracking-tight"
      >
        Hi, I'm Sayanil
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed"
      >
        AI Developer • Data Analyst • Founder building scalable intelligent systems.
      </motion.p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-10 inline-block bg-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-500 transition"
      >
        View My Work
      </motion.a>
    </motion.section>
  );
}