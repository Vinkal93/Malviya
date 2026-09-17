import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Settings, Bell, User, Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";

function ThemeToggle({ isDark, onToggle }) {
  return (
    <div className="flex items-center space-x-2 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          isDark ? "text-slate-500 scale-75 rotate-12" : "text-amber-500 scale-100 rotate-0"
        }`}
      />
      <Switch
        checked={isDark}
        onCheckedChange={onToggle}
        aria-label="Toggle theme"
        className="transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:scale-110"
      />
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
          !isDark ? "text-slate-400 scale-75 rotate-12" : "text-blue-400 scale-100 rotate-0"
        }`}
      />
    </div>
  );
}

const menuItems = [
  {
    icon: <Home className="h-4 w-4 sm:h-5 sm:w-5" />,
    label: "Home",
    href: "#home",
    gradient: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
    iconColor: "text-blue-500",
  },
  {
    icon: <Bell className="h-4 w-4 sm:h-5 sm:w-5" />,
    label: "Notice",
    href: "#notice",
    gradient: "radial-gradient(circle, rgba(249,115,22,0.18) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
    iconColor: "text-orange-500",
  },
  {
    icon: <Settings className="h-4 w-4 sm:h-5 sm:w-5" />,
    label: "Academics",
    href: "#academics",
    gradient: "radial-gradient(circle, rgba(34,197,94,0.18) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
    iconColor: "text-green-500",
  },
  {
    icon: <User className="h-4 w-4 sm:h-5 sm:w-5" />,
    label: "Admissions",
    href: "#admissions",
    gradient: "radial-gradient(circle, rgba(239,68,68,0.18) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
    iconColor: "text-red-500",
  },
];

const itemVariants = {
  initial: { rotateX: 0, opacity: 1 },
  hover: { rotateX: -90, opacity: 0 },
};

const backVariants = {
  initial: { rotateX: 90, opacity: 0 },
  hover: { rotateX: 0, opacity: 1 },
};

const glowVariants = {
  initial: { opacity: 0, scale: 0.8 },
  hover: {
    opacity: 1,
    scale: 2,
    transition: {
      opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      scale: { duration: 0.5, type: "spring", stiffness: 300, damping: 25 },
    },
  },
};

const navGlowVariants = {
  initial: { opacity: 0 },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

const sharedTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  duration: 0.5,
};

export function GlowMenuBar({ isDark = false, onNavigate }) {
  return (
    <motion.nav
      className="p-1.5 sm:p-2 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/70 dark:border-slate-800/80 shadow-md relative overflow-hidden"
      initial="initial"
      whileHover="hover"
    >
      <motion.div
        className={`absolute -inset-2 bg-radial from-transparent ${
          isDark
            ? "via-blue-500/20 via-30% via-purple-500/20 via-60% via-red-500/20 via-90%"
            : "via-blue-500/15 via-30% via-purple-500/15 via-60% via-red-500/15 via-90%"
        } to-transparent rounded-3xl z-0 pointer-events-none`}
        variants={navGlowVariants}
      />
      <ul className="flex items-center gap-1 sm:gap-2 relative z-10">
        {menuItems.map((item) => (
          <motion.li key={item.label} className="relative">
            <motion.div
              className="block rounded-xl overflow-visible group relative"
              style={{ perspective: "600px" }}
              whileHover="hover"
              initial="initial"
            >
              <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                variants={glowVariants}
                style={{
                  background: item.gradient,
                  opacity: 0,
                  borderRadius: "16px",
                }}
              />
              <motion.button
                onClick={() => onNavigate?.(item.href.replace("#", ""))}
                className="flex items-center gap-1.5 px-3 py-1.5 relative z-10 bg-transparent text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors rounded-xl text-xs font-semibold cursor-pointer"
                variants={itemVariants}
                transition={sharedTransition}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center bottom" }}
              >
                <span className={`transition-colors duration-300 group-hover:${item.iconColor}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </motion.button>
              <motion.button
                onClick={() => onNavigate?.(item.href.replace("#", ""))}
                className="flex items-center gap-1.5 px-3 py-1.5 absolute inset-0 z-10 bg-transparent text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors rounded-xl text-xs font-semibold cursor-pointer"
                variants={backVariants}
                transition={sharedTransition}
                style={{ transformStyle: "preserve-3d", transformOrigin: "center top", rotateX: 90 }}
              >
                <span className={`transition-colors duration-300 group-hover:${item.iconColor}`}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </motion.button>
            </motion.div>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export { ThemeToggle };
export default GlowMenuBar;
