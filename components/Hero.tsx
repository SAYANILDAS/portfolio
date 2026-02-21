"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen pt-20 flex flex-col justify-center items-center text-center bg-black text-white relative overflow-hidden">
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-4"
      >
        Hi, I'm Sayanil
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-xl text-gray-400 max-w-xl"
      >
        AI Developer • Data Analyst • Founder
      </motion.p>

      <motion.button
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
      >
        View My Work
      </motion.button>

    </section>
  );
}