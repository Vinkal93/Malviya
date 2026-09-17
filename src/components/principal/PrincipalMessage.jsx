import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { schoolConfig } from '../../data/schoolData';

export default function PrincipalMessage({ onOpenReadMore, schoolName }) {
  const { principal } = schoolConfig;

  return (
    <section className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 py-4 sm:py-8">
      <div className="rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-2xs grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* Principal Photo Column */}
        <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[280px] sm:min-h-[340px] bg-slate-100 overflow-hidden">
          <img
            src={principal.image}
            alt={principal.name}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
          
          <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-900 border border-white/60 shadow-2xs flex items-center gap-1.5">
            <Quote className="w-3 h-3 text-blue-600 fill-blue-600" />
            <span>Leadership Desk</span>
          </div>
        </div>

        {/* Message Content Column */}
        <div className="lg:col-span-7 p-5 sm:p-8 lg:p-10 space-y-3 sm:space-y-4">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-700">
            From the Principal's Desk
          </div>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0f2444] tracking-tight">
            Nurturing Young Minds Towards Tomorrow
          </h3>
          
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic border-l-3 border-blue-600 pl-3">
            "{principal.quote.replace('SBCI International School', schoolName)}"
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-3 border-t border-slate-100 gap-3">
            <div>
              <span className="text-sm sm:text-base font-extrabold text-slate-900 block">
                — {principal.name}
              </span>
              <span className="text-xs text-slate-500 font-medium block">
                {principal.title} • {principal.qualifications}
              </span>
            </div>

            <button
              onClick={onOpenReadMore}
              className="inline-flex items-center space-x-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition cursor-pointer"
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
