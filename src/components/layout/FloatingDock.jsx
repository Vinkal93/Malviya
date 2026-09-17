import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home, Trophy, Compass, PhoneCall, LogIn, ExternalLink } from "lucide-react";
import { schoolConfig } from "../../data/schoolData";

const spanVariants = {
  initial: { width: 0, opacity: 0 },
  animate: {
    width: "auto",
    opacity: 1,
    transition: { delay: 0.05, duration: 0.2, ease: "easeOut" },
  },
  exit: {
    width: 0,
    opacity: 0,
    transition: { duration: 0.1, ease: "easeIn" },
  },
};

export default function FloatingDock({ onNavigate, onOpenVirtualTour }) {
  const [selected, setSelected] = useState(0);

  const TABS = [
    { title: "Home", icon: Home, target: "home" },
    { title: "Campus", icon: Trophy, target: "campus-life" },
    { title: "360° Tour", icon: Compass, target: "location-and-tour", action: onOpenVirtualTour },
    { title: "Contact", icon: PhoneCall, target: "location-and-tour" },
  ];

  const handleSelect = (index, tab) => {
    setSelected(index);
    if (tab.action) {
      tab.action();
    } else if (tab.target) {
      onNavigate?.(tab.target);
    }
  };

  return (
    <div className="fixed bottom-5 inset-x-0 z-40 flex justify-center items-center pointer-events-none px-3 sm:px-4">
      
      {/* Soft Ambient Blur Glow under the dock */}
      <div className="absolute w-80 h-10 bg-blue-500/15 rounded-full blur-2xl pointer-events-none -bottom-1"></div>

      {/* Main Floating Capsule */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="pointer-events-auto flex items-center gap-1 sm:gap-1.5 rounded-full border border-slate-200/90 dark:border-slate-700/80 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl px-2 sm:px-3 py-1.5 shadow-[0_14px_38px_-6px_rgba(0,0,0,0.18)] ring-1 ring-black/5"
      >
        {/* Navigation Tabs */}
        {TABS.map((tab, index) => {
          const Icon = tab.icon;
          const isSelected = selected === index;

          return (
            <button
              key={tab.title}
              onClick={() => handleSelect(index, tab)}
              className={`relative z-10 flex items-center rounded-full px-3 sm:px-4 py-2 text-xs font-bold transition-all focus:outline-none cursor-pointer select-none ${
                isSelected
                  ? "text-blue-900 dark:text-blue-300"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
              }`}
            >
              {/* Active Spring Pill */}
              {isSelected && (
                <motion.div
                  layoutId="dock-pill"
                  className="absolute inset-0 z-0 rounded-full bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-800 shadow-2xs"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}

              <span className="relative z-10 flex items-center gap-1.5">
                <Icon
                  className={`h-4 w-4 flex-shrink-0 transition-colors ${
                    isSelected ? "text-blue-600 dark:text-blue-400 stroke-[2.4]" : "text-slate-500 dark:text-slate-400"
                  }`}
                />
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.span
                      variants={spanVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="overflow-hidden whitespace-nowrap text-[12px] font-extrabold tracking-tight text-blue-950 dark:text-blue-200"
                    >
                      {tab.title}
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </button>
          );
        })}

        {/* Vertical Divider */}
        <div className="h-5 w-px bg-slate-200 dark:bg-slate-700 mx-0.5" aria-hidden="true" />

        {/* LOGIN PORTAL BUTTON DIRECTLY IN DOCK (As Requested) */}
        <a
          href={schoolConfig.portalLoginUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 flex items-center space-x-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-blue-950 text-xs font-black shadow-sm active:scale-95 transition-all cursor-pointer"
          title="Login to School Study Portal"
        >
          <LogIn className="w-3.5 h-3.5 stroke-[2.8]" />
          <span>Login</span>
          <ExternalLink className="w-3 h-3 opacity-70 hidden sm:inline" />
        </a>

      </motion.div>
    </div>
  );
}
