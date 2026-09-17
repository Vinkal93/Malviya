import React from 'react';
import { ArrowRight, Quote, Sparkles, GraduationCap, Award } from 'lucide-react';
import { schoolConfig } from '../../data/schoolData';

export default function PrincipalMessage({ onOpenReadMore, schoolName }) {
  const { principal } = schoolConfig;

  return (
    <section className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 py-4 sm:py-8">
      <div className="rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-2xs grid grid-cols-1 lg:grid-cols-12 items-stretch">
        
        {/* Principal Photo Column */}
        <div className="lg:col-span-5 relative h-72 sm:h-96 lg:h-auto min-h-[300px] sm:min-h-[380px] bg-slate-100 overflow-hidden">
          <img
            src={principal.image}
            alt={principal.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
          
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-900 border border-white/60 shadow-2xs flex items-center gap-1.5">
            <Quote className="w-3 h-3 text-blue-600 fill-blue-600" />
            <span>Leadership Desk</span>
          </div>

          <div className="hidden lg:block absolute bottom-4 left-4 right-4 bg-slate-950/75 backdrop-blur-md rounded-2xl p-3 border border-white/10 text-white">
            <span className="text-[10px] uppercase font-bold tracking-wider text-blue-400 block">Leadership Profile</span>
            <span className="text-xs font-bold block">{principal.name}</span>
            <span className="text-[10px] text-white/70 block">{principal.qualifications}</span>
          </div>
        </div>

        {/* Message Content Column */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
              <Award className="w-3.5 h-3.5 text-blue-600" />
              <span>From the Principal's Desk</span>
            </div>

            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0f2444] tracking-tight">
              Nurturing Young Minds Towards Tomorrow
            </h3>
            
            {/* Styled Quote Box */}
            <div className="relative p-4 rounded-2xl bg-gradient-to-r from-blue-50/70 via-slate-50 to-indigo-50/40 border border-blue-100/80">
              <Quote className="w-6 h-6 text-blue-300 absolute top-3 right-3 opacity-50" />
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic pr-6 font-medium">
                "{principal.quote.replace('SBCI International School', schoolName)}"
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              At {schoolName}, we are dedicated to providing an intellectually vibrant and empathetic sanctuary where every child's innate potential is discovered, nurtured, and celebrated.
            </p>

            {/* Key Leadership Pillars to Fill Desktop Width Elegantly */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100/80">
                <div className="flex items-center space-x-2 text-blue-900 font-bold text-xs mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>Values & Character</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Fostering moral discipline, cultural empathy, and civic responsibility in every learner.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <div className="flex items-center space-x-2 text-slate-900 font-bold text-xs mb-1">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                  <span>Academic Rigor</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  Inquiry-based CBSE pedagogy, modern STEM labs, and personalized student mentoring.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action & Signature */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-slate-100 gap-3">
            <div>
              <span className="text-sm sm:text-base font-extrabold text-slate-900 block">
                — {principal.name}
              </span>
              <span className="text-xs text-slate-500 font-medium block">
                {principal.title} • {schoolName}
              </span>
            </div>

            <button
              onClick={onOpenReadMore}
              className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-semibold shadow-xs transition cursor-pointer self-start sm:self-auto"
            >
              <span>Read Full Message</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
