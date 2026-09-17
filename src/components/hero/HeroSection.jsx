import React from 'react';
import { ArrowRight, Play, Users, GraduationCap, Award, Star } from 'lucide-react';
import NumberTicker from '../common/NumberTicker';

export default function HeroSection({ onOpenEnquire, onOpenVideo }) {
  return (
    <section className="px-3 sm:px-6 pt-3 pb-8 max-w-7xl mx-auto">
      
      {/* 1. Main Rounded Hero Card (Exact replica of mobile reference) */}
      <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-gradient-to-b from-[#dbeafe] via-[#eff6ff] to-[#f8fafc] border border-blue-100/60 shadow-sm pt-6 sm:pt-10 px-5 sm:px-10 pb-48 sm:pb-64 md:pb-72">
        
        {/* Top Right "Better Students Brighter India" Ribbon */}
        <div className="absolute top-5 sm:top-8 right-4 sm:right-8 z-20">
          <div className="flex flex-col items-center select-none rotate-2">
            <span className="font-['Caveat'] text-lg sm:text-2xl font-bold text-slate-800 tracking-wide text-center leading-tight">
              Better <br />
              Students <br />
              Brighter <br />
              India
            </span>
            {/* Tricolor wave underline */}
            <svg viewBox="0 0 60 8" fill="none" className="w-14 sm:w-16 mt-0.5">
              <path d="M2 3C18 7 42 1 58 5" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
              <path d="M2 5C18 9 42 3 58 7" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Hero Content (Headline, Subtext & Action Buttons) */}
        <div className="relative z-20 max-w-md lg:max-w-xl text-left space-y-3.5 sm:space-y-5">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-black text-[#0f2444] tracking-tight leading-[1.12]">
            Shaping <br />
            Bright Minds <br />
            for a <span className="text-blue-600">Better<br />Tomorrow</span>
          </h1>

          {/* Subtext */}
          <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal max-w-sm sm:max-w-md">
            A CBSE affiliated school committed to academic excellence, strong values and holistic development.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {/* Primary Enquire Button */}
            <button
              onClick={onOpenEnquire}
              className="inline-flex items-center justify-center space-x-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#1652d9] hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-700/25 transition cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            {/* Watch Video Button */}
            <button
              onClick={onOpenVideo}
              className="inline-flex items-center justify-center space-x-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white hover:bg-slate-50 active:scale-95 text-slate-800 text-xs sm:text-sm font-bold border border-slate-200/80 shadow-2xs transition cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-[#1652d9] flex items-center justify-center text-white">
                <Play className="w-2.5 h-2.5 fill-white ml-0.5" />
              </div>
              <span>Watch Video</span>
            </button>
          </div>
        </div>

        {/* Integrated Background School Building & Smiling Students */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center items-end pointer-events-none">
          <img
            src="/hero-students.png"
            alt="Malviya Public School Campus & Students"
            className="w-full max-w-2xl lg:max-w-4xl h-auto object-contain object-bottom select-none drop-shadow-md"
            style={{
              maxHeight: '400px',
            }}
          />
        </div>

      </div>

      {/* 2. Floating Stats Bar (Overlapping underneath the hero card) */}
      <div className="relative -mt-10 sm:-mt-12 z-30 px-2 sm:px-6">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_12px_35px_-8px_rgba(0,0,0,0.1)] border border-slate-100 p-3 sm:p-5">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            
            {/* Metric 1 */}
            <div className="flex flex-col items-center justify-center p-1 sm:p-2">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-1 sm:mb-2 shadow-2xs">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
              <span className="text-sm sm:text-xl lg:text-2xl font-black text-slate-900 leading-tight">
                <NumberTicker value={1000} suffix="+" duration={1800} />
              </span>
              <span className="text-[9px] sm:text-xs text-slate-500 font-semibold mt-0.5 leading-tight">
                Happy Students
              </span>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col items-center justify-center p-1 sm:p-2">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-1 sm:mb-2 shadow-2xs">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
              <span className="text-sm sm:text-xl lg:text-2xl font-black text-slate-900 leading-tight">
                <NumberTicker value={50} suffix="+" duration={1800} />
              </span>
              <span className="text-[9px] sm:text-xs text-slate-500 font-semibold mt-0.5 leading-tight">
                Expert Faculty
              </span>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col items-center justify-center p-1 sm:p-2">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1 sm:mb-2 shadow-2xs">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
              <span className="text-sm sm:text-xl lg:text-2xl font-black text-slate-900 leading-tight">
                CBSE
              </span>
              <span className="text-[9px] sm:text-xs text-slate-500 font-semibold mt-0.5 leading-tight">
                Affiliated
              </span>
            </div>

            {/* Metric 4 */}
            <div className="flex flex-col items-center justify-center p-1 sm:p-2">
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-1 sm:mb-2 shadow-2xs">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
              </div>
              <span className="text-sm sm:text-xl lg:text-2xl font-black text-slate-900 leading-tight">
                <NumberTicker value={25} suffix="+" duration={1800} />
              </span>
              <span className="text-[9px] sm:text-xs text-slate-500 font-semibold mt-0.5 leading-tight">
                Years of Trust
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
