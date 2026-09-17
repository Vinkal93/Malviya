import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { FlipWords } from '../ui/flip-words';

export default function HeroSection({ onOpenEnquire, onOpenVideo }) {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 3;

  const slides = [
    {
      badge: "CBSE Affiliated • Nursery to Grade 12",
      headline: "A Brighter Tomorrow",
      highlight: "Begins Here",
      flipWords: ["Begins Here", "Starts Today", "Shapes Leaders", "Inspires Excellence", "Nurtures Values"],
      description: "Quality education, strong values and a supportive environment for every child to grow and succeed.",
      image: "/hero-banner-1.png"
    },
    {
      badge: "Good Students • Good Humans • Brighter Tomorrow",
      headline: "Nurturing Curious Minds",
      highlight: "For Future Leaders",
      flipWords: ["For Future Leaders", "Through STEM & AI", "With Moral Values", "For Global Success"],
      description: "Building character, discipline, knowledge, and success in a modern, safe campus environment.",
      image: "/hero-banner-2.png"
    },
    {
      badge: "Admissions Open 2026–27",
      headline: "Empowering Students",
      highlight: "With Values & Skills",
      flipWords: ["With Values & Skills", "For Tomorrow's World", "With Strong Roots", "To Lead & Succeed"],
      description: "A nurturing campus community dedicated to 100% academic excellence and character building.",
      image: "/hero-banner-main.png"
    }
  ];

  // Auto-slide every 3 seconds with smooth crossfade
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev % totalSlides) + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const current = slides[activeSlide - 1];

  return (
    <section className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 pt-3 sm:pt-4 pb-4 sm:pb-6">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[54vh] sm:h-[62vh] min-h-[400px] sm:min-h-[460px] max-h-[560px] border border-slate-200/80 shadow-sm flex flex-col justify-between p-5 sm:p-8 lg:p-12">
        
        {/* Photographic Campus Background with Smooth Fade-in + Fade-out & Mobile Panorama */}
        <AnimatePresence mode="sync">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
            className="absolute inset-0 overflow-hidden bg-slate-900"
          >
            <img
              src={current.image}
              alt="Malviya Public School Campus"
              className="hero-banner-img select-none"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gentle Readability Overlay (Left light gradient) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10 sm:to-transparent pointer-events-none max-w-xl z-[2]" />

        {/* Top: Minimal Subtle Affiliation Pill */}
        <div className="relative z-10">
          <span className="inline-flex items-center text-[11px] sm:text-xs font-semibold text-blue-800 bg-white/95 border border-slate-200/70 px-3 py-1 rounded-full shadow-2xs">
            {current.badge}
          </span>
        </div>

        {/* Center: Editorial Heading & Supporting Copy with Smooth Fade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative z-10 max-w-md sm:max-w-lg space-y-2.5 sm:space-y-3.5 my-auto"
          >
            <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-black text-[#0f2444] tracking-tight leading-[1.16]">
              {current.headline} <br />
              <span className="text-blue-600 inline-block">
                <FlipWords 
                  key={`flip-${activeSlide}`}
                  words={current.flipWords || [current.highlight]} 
                  duration={2500}
                  className="text-blue-600 font-black px-0 inline-block"
                />
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium line-clamp-2">
              {current.description}
            </p>

            {/* Compact Elegant Action Buttons */}
            <div className="flex items-center gap-2.5 pt-1.5">
              <button
                onClick={onOpenEnquire}
                className="inline-flex items-center space-x-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-semibold shadow-xs transition cursor-pointer"
              >
                <span>Explore Our School</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenVideo}
                className="inline-flex items-center space-x-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white/90 hover:bg-white active:scale-95 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-200 shadow-2xs transition cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                <span>Watch Video</span>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom: Minimal Pagination Dots & Active Counter Synchronized */}
        <div className="relative z-10 flex items-center pt-2">
          <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/70 shadow-2xs">
            {slides.map((_, idx) => {
              const slideNum = idx + 1;
              const isActive = activeSlide === slideNum;
              return (
                <button
                  key={slideNum}
                  onClick={() => setActiveSlide(slideNum)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive ? "w-6 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to slide ${slideNum}`}
                />
              );
            })}
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-600 pl-1 border-l border-slate-200 ml-1 select-none">
              0{activeSlide} <span className="text-slate-400 font-normal">/ 0{totalSlides}</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
