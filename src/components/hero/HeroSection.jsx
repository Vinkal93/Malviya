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
    <section className="px-3 sm:px-6 pt-3 pb-6 max-w-7xl mx-auto">
      
      {/* Main Hero Card with Photographic Background & Overlaid Text */}
      <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] shadow-lg border border-slate-200/60 dark:border-slate-800 flex flex-col justify-between p-5 sm:p-8 lg:p-12">
        
        {/* Full Background Photographic Campus Image */}
        <img
          src="/hero-campus.jpg"
          alt="Malviya Public School Campus and Students"
          className="absolute inset-0 w-full h-full object-cover object-center select-none"
        />

        {/* Soft Left Light Gradient Overlay to make text 100% crisp and readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/10 dark:from-slate-950/95 dark:via-slate-950/80 dark:to-slate-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>

        {/* Top Badges Row */}
        <div className="relative z-10 flex items-start justify-between w-full">
          
          {/* Left Pill: CBSE Affiliated | Nurturing Future Leaders */}
          <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xs border border-white/60 dark:border-slate-800 text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-100">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 fill-emerald-100 dark:fill-emerald-950" />
            <span className="text-emerald-700 dark:text-emerald-400 font-extrabold">CBSE Affiliated</span>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <span className="font-semibold text-slate-600 dark:text-slate-300 hidden sm:inline">Nurturing Future Leaders</span>
            <span className="font-semibold text-slate-600 dark:text-slate-300 sm:hidden">Future Leaders</span>
          </div>

          {/* Right: "Better Students Brighter India" Badge */}
          <div className="flex flex-col items-center select-none rotate-1 sm:rotate-2">
            <span className="font-['Caveat'] text-base sm:text-xl font-bold text-slate-900 dark:text-white tracking-wide text-center leading-tight drop-shadow-xs">
              Better <br />
              Students <br />
              Brighter <br />
              India
            </span>
            <svg viewBox="0 0 60 8" fill="none" className="w-12 sm:w-16 mt-0.5">
              <path d="M2 3C18 7 42 1 58 5" stroke="#f97316" strokeWidth="2.2" strokeLinecap="round" />
              <path d="M2 5C18 9 42 3 58 7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

        </div>

        {/* Overlaid Headline, Subtext & CTA Buttons */}
        <div className="relative z-10 max-w-lg lg:max-w-xl text-left space-y-4 sm:space-y-5 my-auto py-6">
          
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

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenEnquire}
              className="inline-flex items-center justify-center space-x-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#1652d9] hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-700/25 transition cursor-pointer"
            >
              <span>Explore Our School</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              onClick={onOpenVideo}
              className="inline-flex items-center justify-center space-x-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/95 dark:bg-slate-900/90 hover:bg-white dark:hover:bg-slate-900 active:scale-95 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-bold border border-slate-200/80 dark:border-slate-700 shadow-sm transition cursor-pointer backdrop-blur-xs"
            >
              <div className="w-5 h-5 rounded-full bg-[#1652d9] flex items-center justify-center text-white">
                <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
              </div>
              <span>Watch Video</span>
            </button>
          </div>

        </div>

        {/* Bottom Slide Counter: ‹ 1/3 › */}
        <div className="relative z-10 flex justify-end items-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
            <button onClick={prevSlide} className="hover:text-blue-300 transition cursor-pointer p-0.5" aria-label="Previous slide">
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono tracking-wider">{activeSlide}/{totalSlides}</span>
            <button onClick={nextSlide} className="hover:text-blue-300 transition cursor-pointer p-0.5" aria-label="Next slide">
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
}
