import React from 'react';
import { Quote } from 'lucide-react';

export default function KalamQuoteCard() {
  return (
    <section className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 py-2.5 sm:py-4">
      <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/80 shadow-2xs flex items-center justify-between gap-4">
        
        {/* Quote Content */}
        <div className="flex items-start space-x-3 sm:space-x-4 max-w-2xl">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Quote className="w-4 h-4 fill-blue-600" />
          </div>

          <div className="space-y-1">
            <p className="text-xs sm:text-sm md:text-base text-slate-800 font-medium italic leading-relaxed">
              “Education is the most powerful weapon which you can use to change the world.”
            </p>
            <p className="text-[11px] sm:text-xs font-semibold text-slate-500">
              — Dr. A.P.J. Abdul Kalam
            </p>
          </div>
        </div>

        {/* Portrait */}
        <div className="flex-shrink-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/480px-A._P._J._Abdul_Kalam.jpg"
            alt="Dr. A.P.J. Abdul Kalam"
            className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover object-top border border-blue-600/20 shadow-2xs"
          />
        </div>

      </div>
    </section>
  );
}
