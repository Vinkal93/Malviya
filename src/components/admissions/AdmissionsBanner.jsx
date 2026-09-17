import React from 'react';
import { ArrowRight, Download, Calendar } from 'lucide-react';

export default function AdmissionsBanner({ onOpenAdmission, onOpenBrochure }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 py-2.5 sm:py-3.5" id="admissions">
      <div className="rounded-2xl bg-blue-50/70 border border-blue-100 p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        {/* Left: Info */}
        <div className="space-y-1">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-700">
            <Calendar className="w-3.5 h-3.5" />
            <span>Academic Session 2026–27</span>
          </div>
          <h3 className="text-base sm:text-xl font-extrabold text-[#0f2444] tracking-tight">
            Admissions Open from Nursery to Grade 11
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
            Give your child a holistic learning foundation backed by CBSE academic excellence and modern facilities.
          </p>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <button
            onClick={onOpenAdmission}
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-semibold shadow-xs transition cursor-pointer flex items-center space-x-1.5"
          >
            <span>Apply Online</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenBrochure}
            className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-200 shadow-2xs transition cursor-pointer flex items-center space-x-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Prospectus</span>
          </button>
        </div>

      </div>
    </section>
  );
}
