import React, { useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function HeroSection({ onOpenEnquire, onOpenVideo }) {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 3;

  const slides = [
    {
      badge: "CBSE Affiliated • Nursery to Grade 12",
      headline: "A Brighter Tomorrow",
      highlight: "Begins Here",
      description: "Quality education, strong values and a supportive environment for every child to grow and succeed.",
      image: "/hero-campus.jpg"
    },
    {
      badge: "Modern Infrastructure • Smart Learning",
      headline: "Nurturing Curious Minds",
      highlight: "For Future Leaders",
      description: "Advanced STEM innovation labs, robotics, comprehensive athletics, and holistic cultural development.",
      image: "/hero-campus.jpg"
    },
    {
      badge: "Admissions Open 2026–27",
      headline: "Empowering Students",
      highlight: "With Values & Skills",
      description: "A nurturing campus community dedicated to 100% academic excellence and character building.",
      image: "/hero-campus.jpg"
    }
  ];

  const current = slides[activeSlide - 1];

  return (
    <section className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 pt-3 sm:pt-4 pb-4 sm:pb-6">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden h-[54vh] sm:h-[62vh] min-h-[400px] sm:min-h-[460px] max-h-[560px] border border-slate-200/80 shadow-sm flex flex-col justify-between p-5 sm:p-8 lg:p-12">
        
        {/* Photographic Campus Background */}
        <img
          src={current.image}
          alt="Malviya Public School Campus"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />

        {/* Gentle Readability Overlay (Left light gradient) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/20 sm:to-transparent pointer-events-none" />

        {/* Top: Minimal Subtle Affiliation Pill */}
        <div className="relative z-10">
          <span className="inline-flex items-center text-[11px] sm:text-xs font-semibold text-blue-800 bg-white/95 border border-slate-200/70 px-3 py-1 rounded-full shadow-2xs">
            {current.badge}
          </span>
        </div>

        {/* Center: Editorial Heading & Supporting Copy */}
        <div className="relative z-10 max-w-md sm:max-w-lg space-y-2.5 sm:space-y-3.5 my-auto">
          <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-black text-[#0f2444] tracking-tight leading-[1.16]">
            {current.headline} <br />
            <span className="text-blue-600">{current.highlight}</span>
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
        </div>

        {/* Bottom: Minimal Pagination Dots */}
        <div className="relative z-10 flex items-center space-x-1.5 pt-2">
          {slides.map((_, idx) => {
            const slideNum = idx + 1;
            const isActive = activeSlide === slideNum;
            return (
              <button
                key={slideNum}
                onClick={() => setActiveSlide(slideNum)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${slideNum}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
