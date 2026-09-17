import React from 'react';
import { ArrowRight, Download, Sparkles, CheckCircle } from 'lucide-react';

export default function AdmissionsBanner({ onOpenAdmission, onOpenBrochure }) {
  return (
    <section className="py-10 bg-white" id="admissions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 p-8 sm:p-12 text-white shadow-2xl shadow-blue-950/20">
          
          {/* Subtle Background Elements */}
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Sparkles className="w-48 h-48 text-white" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold text-blue-200 backdrop-blur-xs border border-white/10">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>Session 2026–27 Registration Live</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Admissions Open for 2026–27
              </h3>

              <p className="text-sm sm:text-base text-blue-100/90 max-w-2xl leading-relaxed">
                Give your child the right start for a brighter future. Apply online today to secure admission in Nursery to Class 11 (Science, Commerce & Humanities).
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-blue-200">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Transparent Merit-based Process</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Scholarships for Meritorious Students</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center lg:items-end">
              <button
                onClick={onOpenAdmission}
                className="inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full bg-white text-blue-950 text-sm font-bold hover:bg-blue-50 active:scale-95 shadow-lg transition-all cursor-pointer w-full sm:w-auto lg:w-full"
              >
                <span>Apply Online Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white/25 active:scale-95 border border-white/25 text-white text-sm font-semibold backdrop-blur-xs transition-all cursor-pointer w-full sm:w-auto lg:w-full"
              >
                <Download className="w-4 h-4" />
                <span>Download Prospectus</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
