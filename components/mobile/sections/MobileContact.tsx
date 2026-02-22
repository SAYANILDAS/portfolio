"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MobileContact() {
  const [loading, setLoading] = useState(false);

  return (
    <section id="contact" className="space-y-6">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-semibold tracking-tight"
      >
        Let’s Build Something Intelligent.
      </motion.h2>

      <p className="text-sm text-gray-600 leading-relaxed">
        Open to strategic collaborations, AI system architecture,
        government-tech initiatives, and high-impact product consulting.
      </p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="space-y-4 p-5 bg-gray-50 border border-gray-200 rounded-2xl"
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => setLoading(false), 2000);
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm"
        />

        <textarea
          rows={4}
          placeholder="Describe your AI system vision or collaboration scope..."
          className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-purple-600 text-white text-sm"
        >
          {loading
            ? "Establishing Secure Channel..."
            : "Deploy Collaboration →"}
        </button>
      </motion.form>

    </section>
  );
}