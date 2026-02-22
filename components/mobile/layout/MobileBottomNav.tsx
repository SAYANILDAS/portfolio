"use client";

import { useEffect, useState } from "react";
import { Home, Layers, Briefcase, Award, Mail } from "lucide-react";

const navItems = [
  { id: "executive", icon: Home },
  { id: "systems", icon: Layers },
  { id: "work", icon: Briefcase },
  { id: "achievements", icon: Award },
  { id: "contact", icon: Mail },
];

export default function MobileBottomNav() {
  const [active, setActive] = useState("executive");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (let item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActive(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-[999]">
      <div className="flex justify-around py-3">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <a
              key={index}
              href={`#${item.id}`}
              className={`transition ${
                isActive
                  ? "text-purple-600"
                  : "text-gray-500"
              }`}
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  );
}