"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import SectionTransitionOverlay from "@/components/SectionTransitionOverlay";
import SectionReveal from "@/components/SectionReveal";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-20 md:py-32 px-6 bg-white md:bg-[#0B0B12] text-black md:text-white"
    >
      {/* Desktop Cinematic Layers */}
      <div className="hidden md:block">
        <SectionTransitionOverlay />
      </div>

      <div className="hidden md:block absolute inset-0 futuristic-grid opacity-20 pointer-events-none" />

      <div className="hidden md:block absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[900px] bg-purple-700/30 blur-[240px] rounded-full pointer-events-none" />

      <div className="hidden md:block absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse opacity-40" />

      <SectionReveal>
        <div className="max-w-6xl mx-auto relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-5xl font-bold tracking-tight">
              Let’s Build Something Intelligent.
            </h2>
            <p className="text-gray-600 md:text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base">
              Open to strategic collaborations, AI system architecture,
              government-tech initiatives, and high-impact product consulting.
            </p>
          </motion.div>

          {/* Engagement Console */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative grid gap-10 md:grid-cols-2 md:gap-12 
            bg-gray-50 md:bg-white/5 
            backdrop-blur-0 md:backdrop-blur-2xl 
            border border-gray-200 md:border-purple-500/20 
            rounded-2xl md:rounded-3xl 
            p-6 md:p-12 
            shadow-sm md:shadow-[0_0_80px_rgba(124,58,237,0.25)] 
            hover:md:shadow-[0_0_120px_rgba(124,58,237,0.4)] 
            transition"
          >
            {/* Desktop Glow */}
            <div className="hidden md:block absolute inset-0 bg-purple-600/10 opacity-0 hover:opacity-100 transition duration-500 rounded-3xl blur-xl pointer-events-none" />

            {/* LEFT — FORM */}
            <div>
              <h3 className="text-lg md:text-2xl font-semibold mb-5 md:mb-6 text-black md:text-white">
                Initiate Strategic Dialogue
              </h3>

              <form
                className="space-y-5 md:space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setLoading(true);
                  setTimeout(() => setLoading(false), 2000);
                }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white md:bg-white/5 
                  border border-gray-300 md:border-white/10 
                  rounded-xl px-4 py-3 
                  focus:outline-none 
                  focus:border-purple-500 
                  focus:ring-2 focus:ring-purple-500/40 
                  transition text-sm md:text-base"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white md:bg-white/5 
                  border border-gray-300 md:border-white/10 
                  rounded-xl px-4 py-3 
                  focus:outline-none 
                  focus:border-purple-500 
                  focus:ring-2 focus:ring-purple-500/40 
                  transition text-sm md:text-base"
                />

                <textarea
                  rows={4}
                  placeholder="Describe your AI system vision or collaboration scope..."
                  className="w-full bg-white md:bg-white/5 
                  border border-gray-300 md:border-white/10 
                  rounded-xl px-4 py-3 
                  focus:outline-none 
                  focus:border-purple-500 
                  focus:ring-2 focus:ring-purple-500/40 
                  transition text-sm md:text-base"
                />

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl 
                  bg-purple-600 md:bg-gradient-to-r md:from-purple-600 md:to-purple-500 
                  hover:opacity-90 
                  text-white 
                  transition 
                  shadow-none md:shadow-lg md:shadow-purple-600/50"
                >
                  {loading
                    ? "Establishing Secure Channel..."
                    : "Deploy Collaboration →"}
                </button>
              </form>
            </div>

            {/* RIGHT — EXECUTIVE INFO */}
            <div className="flex flex-col justify-between">

              <div>
                <h3 className="text-lg md:text-2xl font-semibold mb-5 md:mb-6 text-black md:text-white">
                  Direct Executive Access
                </h3>

                <div className="space-y-4 text-gray-600 md:text-gray-400 text-sm md:text-base">
                  <p>
                    <span className="text-purple-600 md:text-purple-400 font-medium">
                      Email:
                    </span>{" "}
                    sayanilkr@gmail.com
                  </p>

                  <p>
                    <span className="text-purple-600 md:text-purple-400 font-medium">
                      Availability:
                    </span>{" "}
                    Open for AI / Strategy Projects
                  </p>

                  <p>
                    <span className="text-purple-600 md:text-purple-400 font-medium">
                      Focus Areas:
                    </span>{" "}
                    AI Systems Architecture, Government-Tech, MSME Digital Enablement,
                    Intelligent Automation
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-8 md:mt-10">
                <div className="inline-flex items-center gap-3 
                bg-green-100 md:bg-green-500/10 
                text-green-700 md:text-green-400 
                border border-green-300 md:border-green-500/20 
                px-4 py-2 rounded-full text-xs md:text-sm 
                shadow-none md:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <span className="w-2 h-2 bg-green-500 md:bg-green-400 rounded-full animate-pulse"></span>
                  Available for Strategic Engagement
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </SectionReveal>
    </section>
  );
}