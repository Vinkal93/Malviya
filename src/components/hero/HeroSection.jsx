import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSection({ onOpenEnquire, onOpenVideo }) {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 3;

  const nextSlide = () => {
    setActiveSlide(prev => prev < totalSlides ? prev + 1 : 1);
  };

  const prevSlide = () => {
    setActiveSlide(prev => prev > 1 ? prev - 1 : totalSlides);
  };

  return (
    <section className="px-2.5 sm:px-6 pt-2 sm:pt-4 pb-4 sm:pb-6 max-w-7xl mx-auto w-full">
      
      {/* Main Hero Card with Photographic Background & Overlaid Text */}
      <div className="relative rounded-[26px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden min-h-[480px] sm:min-h-[540px] lg:min-h-[620px] shadow-lg border border-slate-200/60 dark:border-slate-800 flex flex-col justify-between p-4 sm:p-8 lg:p-12">
        
        {/* Full Background Photographic Campus Image */}
        <img
          src="/hero-campus.jpg"
          alt="Malviya Public School Campus and Students"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />

        {/* Soft Left & Bottom Gradient Overlays for 100% text readability across all screen sizes */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/20 dark:from-slate-950/95 dark:via-slate-950/85 dark:to-slate-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent sm:hidden pointer-events-none"></div>

        {/* Top Badges Row */}
        <div className="relative z-10 flex items-start justify-between w-full gap-2">
          
          {/* Left Pill: CBSE Affiliated */}
          <div className="inline-flex items-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-xs border border-white/60 dark:border-slate-800 text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-100 flex-shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 fill-emerald-100 dark:fill-emerald-950" />
            <span className="text-emerald-700 dark:text-emerald-400 font-extrabold">CBSE Affiliated</span>
            <span className="text-slate-300 dark:text-slate-600 hidden sm:inline">|</span>
            <span className="font-semibold text-slate-600 dark:text-slate-300 hidden sm:inline">Nurturing Future Leaders</span>
          </div>

          {/* Right: "Better Students Brighter India" Calligraphy Badge */}
          <div className="flex flex-col items-center select-none rotate-1 sm:rotate-2 flex-shrink-0">
            <span className="font-['Caveat'] text-sm sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white tracking-wide text-center leading-tight drop-shadow-xs">
              Better Students <br />
              Brighter India
            </span>
            <svg viewBox="0 0 60 8" fill="none" className="w-10 sm:w-14 mt-0.5">
              <path d="M2 3C18 7 42 1 58 5" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M2 5C18 9 42 3 58 7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

        </div>

        {/* Overlaid Headline, Subtext & CTA Buttons */}
        <div className="relative z-10 max-w-lg lg:max-w-xl text-left space-y-3.5 sm:space-y-5 my-auto py-4 sm:py-6">
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-black text-[#0f2444] dark:text-white tracking-tight leading-[1.12]">
            A Brighter <br />
            Tomorrow <br />
            <span className="text-blue-600 dark:text-blue-400">Begins Here</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-medium max-w-md">
            Quality education, strong values and a supportive environment for every child to grow and succeed.
          </p>

          {/* Action Buttons - Fully Optimized for Touch on Phones */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3.5 pt-2 w-full sm:w-auto">
            <button
              onClick={onOpenEnquire}
              className="inline-flex items-center justify-center space-x-2 px-5 sm:px-6 py-3 rounded-full bg-[#1652d9] hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-700/25 transition cursor-pointer w-full sm:w-auto"
            >
              <span>Explore Our School</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenVideo}
              className="inline-flex items-center justify-center space-x-2 px-4 sm:px-5 py-3 rounded-full bg-white/95 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 active:scale-95 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-bold border border-slate-200/80 dark:border-slate-700 shadow-sm transition cursor-pointer backdrop-blur-xs w-full sm:w-auto"
            >
              <div className="w-5 h-5 rounded-full bg-[#1652d9] flex items-center justify-center text-white">
                <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
              </div>
              <span>Watch Video</span>
            </button>
          </div>

        </div>

        {/* Bottom Slide Counter: ‹ 1/3 › */}
        <div className="relative z-10 flex justify-end items-center pt-2">
          <div className="inline-flex items-center space-x-2 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/60 dark:border-slate-800 shadow-md text-xs font-bold text-slate-800 dark:text-slate-100 select-none">
            <button
              onClick={prevSlide}
              className="p-1 hover:text-blue-600 transition cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>
            <span className="tracking-widest text-[11px] font-black">
              {activeSlide} / {totalSlides}
            </span>
            <button
              onClick={nextSlide}
              className="p-1 hover:text-blue-600 transition cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
