import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { schoolConfig } from '../../data/schoolData';

export default function PrincipalMessage({ onOpenReadMore, schoolName }) {
  const { principal } = schoolConfig;

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* Principal Photo Column */}
          <div className="lg:col-span-5 relative h-80 sm:h-96 lg:h-full min-h-[380px] bg-slate-100 overflow-hidden">
            <img
              src={principal.image}
              alt={principal.name}
              className="w-full h-full object-cover object-top filter brightness-[0.98]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-900 border border-white/40 shadow-sm flex items-center gap-1.5">
              <Quote className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
              <span>Leadership Desk</span>
            </div>
          </div>

          {/* Message Content Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider">
              From the Principal's Desk
            </div>

            <h4 className="text-2xl sm:text-3xl font-black text-blue-950 tracking-tight">
              Message from the Principal
            </h4>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed italic border-l-4 border-blue-600 pl-4">
              "{principal.quote.replace('SBCI International School', schoolName)}"
            </p>

            <div className="flex flex-wrap items-center justify-between pt-4 border-t border-slate-100 gap-4">
              <div>
                <span className="text-base font-extrabold text-slate-900 block">
                  — {principal.name}
                </span>
                <span className="text-xs text-slate-500 font-semibold block mt-0.5">
                  {principal.title} • {principal.qualifications}
                </span>
              </div>

              <button
                onClick={onOpenReadMore}
                className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs sm:text-sm font-bold transition cursor-pointer"
              >
                <span>Read Full Message</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
