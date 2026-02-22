"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Systems", id: "systems" },
    { name: "Work", id: "work" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  /* -------- Scroll Based Active Detection -------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let section of links) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActive(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[9999]"
    >
      <div className="relative px-10 py-4 rounded-full backdrop-blur-xl bg-[#0B0B12]/80 border border-purple-500/20 shadow-[0_0_60px_rgba(124,58,237,0.35)] flex items-center gap-12">

        {/* Logo */}
        <a href="#" className="text-white font-semibold tracking-wide">
          <span className="text-purple-400">Sayanil</span> Das
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10 relative">
          {links.map((link) => (
            <MagneticItem
              key={link.id}
              active={active === link.id}
              href={`#${link.id}`}
              label={link.name}
            />
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-purple-400"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>
    </motion.nav>
  );
}

/* ---------------- Magnetic Nav Item ---------------- */

function MagneticItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    element.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative transition-transform duration-200"
    >
      <a
        href={href}
        className={`text-sm transition ${
          active
            ? "text-purple-400"
            : "text-gray-400 hover:text-white"
        }`}
      >
        {label}
      </a>

      {active && (
        <motion.div
          layoutId="nav-underline"
          className="absolute left-0 -bottom-2 h-[2px] w-full bg-purple-500 rounded-full"
        />
      )}
    </div>
  );
}