import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  Home, 
  GraduationCap, 
  Compass, 
  PhoneCall, 
  LogIn, 
  Trophy,
  ExternalLink
} from "lucide-react";
import { schoolConfig } from "../../data/schoolData";

// Individual iPhone Dock Icon with physical magnification
function DockItem({ mouseX, item, isActive, onClick, isMobile }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Distance calculation from mouse for iOS magnification
  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Responsive magnification curve: smaller on phones, larger on desktop
  const minWidth = isMobile ? 38 : 46;
  const maxWidth = isMobile ? 50 : 64;

  const widthSync = useTransform(distance, [-100, 0, 100], [minWidth, maxWidth, minWidth]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 220, damping: 15 });

  const Icon = item.icon;

  return (
    <div className="relative flex flex-col items-center">
      {/* iOS Floating Tooltip (Desktop/hover) */}
      <AnimatePresence>
        {hovered && !isMobile && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.85 }}
            animate={{ opacity: 1, y: -10, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 z-50 px-2.5 py-1 rounded-lg bg-slate-900/90 dark:bg-slate-800/95 backdrop-blur-md text-white text-[11px] font-bold shadow-lg border border-white/10 whitespace-nowrap pointer-events-none select-none"
          >
            {item.title}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900/90 dark:bg-slate-800/95 rotate-45 border-r border-b border-white/10" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* iOS Dock App Icon */}
      {item.isExternal ? (
        <motion.a
          ref={ref}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ width, height: width }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileTap={{ scale: 0.86 }}
          className={`relative flex items-center justify-center rounded-xl sm:rounded-2xl shadow-md cursor-pointer transition-shadow hover:shadow-lg ${item.gradient} p-2 sm:p-2.5 text-white active:scale-90`}
          title={item.title}
        >
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-[2.4] drop-shadow flex-shrink-0" />
          
          {/* Subtle iOS App Gloss Reflection */}
          <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-b from-white/35 to-transparent pointer-events-none" />
          
          {/* Mini External Indicator Badge */}
          <div className="absolute -top-1 -right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-amber-400 text-blue-950 flex items-center justify-center shadow-xs">
            <ExternalLink className="w-2 h-2 sm:w-2.5 sm:h-2.5 stroke-[3]" />
          </div>
        </motion.a>
      ) : (
        <motion.button
          ref={ref}
          onClick={onClick}
          style={{ width, height: width }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileTap={{ scale: 0.86 }}
          className={`relative flex items-center justify-center rounded-xl sm:rounded-2xl shadow-md cursor-pointer transition-shadow hover:shadow-lg ${item.gradient} p-2 sm:p-2.5 text-white select-none active:scale-90`}
          title={item.title}
        >
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 stroke-[2.4] drop-shadow flex-shrink-0" />
          
          {/* Subtle iOS App Gloss Reflection */}
          <div className="absolute inset-x-0 top-0 h-1/2 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-b from-white/35 to-transparent pointer-events-none" />
        </motion.button>
      )}

      {/* iOS Active Running Dot */}
      <div className="h-1.5 flex items-center justify-center mt-1">
        {isActive && (
          <motion.div
            layoutId="ios-dock-dot"
            className="w-1.5 h-1.5 rounded-full bg-slate-800 dark:bg-white shadow-xs"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        )}
      </div>
    </div>
  );
}

export default function FloatingDock({ onNavigate, onOpenVirtualTour }) {
  const mouseX = useMotionValue(Infinity);
  const [activeTab, setActiveTab] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const DOCK_ITEMS = [
    {
      id: "home",
      title: "Home",
      icon: Home,
      gradient: "bg-gradient-to-b from-blue-500 to-indigo-600",
      action: () => {
        setActiveTab("home");
        onNavigate?.("home");
      }
    },
    {
      id: "academics",
      title: "Academics",
      icon: GraduationCap,
      gradient: "bg-gradient-to-b from-emerald-500 to-teal-600",
      action: () => {
        setActiveTab("academics");
        onNavigate?.("academics");
      }
    },
    {
      id: "campus",
      title: "Campus Life",
      icon: Trophy,
      gradient: "bg-gradient-to-b from-violet-500 to-purple-600",
      action: () => {
        setActiveTab("campus");
        onNavigate?.("campus-life");
      }
    },
    {
      id: "tour",
      title: "360° Tour",
      icon: Compass,
      gradient: "bg-gradient-to-b from-sky-500 to-blue-600",
      action: () => {
        setActiveTab("tour");
        onOpenVirtualTour?.();
      }
    },
    {
      id: "contact",
      title: "Contact",
      icon: PhoneCall,
      gradient: "bg-gradient-to-b from-rose-500 to-pink-600",
      action: () => {
        setActiveTab("contact");
        onNavigate?.("location-and-tour");
      }
    },
    {
      id: "login",
      title: "Portal Access",
      icon: LogIn,
      gradient: "bg-gradient-to-b from-amber-400 to-orange-500",
      isExternal: true,
      href: schoolConfig.portalLoginUrl
    }
  ];

  return (
    <div className="fixed bottom-3 sm:bottom-6 inset-x-0 z-40 flex justify-center items-center pointer-events-none px-2 sm:px-4 pb-[env(safe-area-inset-bottom,0px)]">
      {/* Soft Ambient Blur Glow below dock */}
      <div className="absolute w-72 sm:w-96 h-10 sm:h-12 bg-blue-500/20 dark:bg-blue-400/15 rounded-full blur-2xl pointer-events-none -bottom-1" />

      {/* Main Authentic iPhone Dock Glass Tray */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 26 }}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto relative flex items-end gap-1.5 sm:gap-2.5 md:gap-3 px-2.5 sm:px-4 pt-2 sm:pt-3 pb-1 sm:pb-1.5 rounded-[22px] sm:rounded-[30px] border border-white/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-900/85 backdrop-blur-2xl shadow-[0_16px_40px_rgba(0,0,0,0.18)] ring-1 ring-black/5 max-w-[calc(100vw-16px)] sm:max-w-fit"
      >
        {/* Top Edge Specular Reflection */}
        <div className="absolute inset-x-3 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/80 dark:via-white/20 to-transparent" />

        {DOCK_ITEMS.map((item) => (
          <DockItem
            key={item.id}
            mouseX={mouseX}
            item={item}
            isActive={activeTab === item.id}
            onClick={item.action}
            isMobile={isMobile}
          />
        ))}
      </motion.div>
    </div>
  );
}
