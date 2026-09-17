import React from 'react';
import { ArrowRight, Download, Megaphone } from 'lucide-react';

export default function AdmissionsBanner({ onOpenAdmission, onOpenBrochure }) {
  return (
    <section className="px-2.5 sm:px-6 py-2.5 sm:py-3 max-w-7xl mx-auto w-full" id="admissions">
      <div className="rounded-2xl sm:rounded-3xl bg-blue-50/80 dark:bg-slate-900 border border-blue-100/90 dark:border-slate-800 p-3.5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3.5 sm:gap-4 transition-colors">
        
        {/* Left: Megaphone & Headline */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-400 text-slate-900 flex items-center justify-center flex-shrink-0 shadow-xs">
            <Megaphone className="w-5 h-5 sm:w-6 sm:h-6 fill-slate-900" />
          </div>

          <div>
            <h3 className="text-sm sm:text-xl font-black text-slate-900 dark:text-white leading-tight">
              Admissions Open for 2026–27
            </h3>
            <p className="text-[11px] sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              Give your child the right start for a brighter future.
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
          <button
            onClick={onOpenAdmission}
            className="w-full sm:w-auto px-5 sm:px-6 py-2.5 rounded-full bg-[#1652d9] hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-700/20 transition cursor-pointer flex items-center justify-center space-x-1.5"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenBrochure}
            className="w-full sm:w-auto px-4 py-2.5 rounded-full text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 text-xs sm:text-sm font-semibold transition cursor-pointer flex items-center justify-center space-x-1 border border-slate-200/80 dark:border-slate-800 sm:border-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Brochure</span>
          </button>
        </div>

      </div>
    </section>
  );
}
