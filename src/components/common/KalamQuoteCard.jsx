import React from 'react';
import { Quote } from 'lucide-react';

export default function KalamQuoteCard() {
  return (
    <section className="px-2.5 sm:px-6 py-3 sm:py-4 max-w-7xl mx-auto w-full">
      <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-row items-center justify-between gap-3.5 sm:gap-6 transition-colors">
        
        {/* Quote Content */}
        <div className="flex items-start space-x-3 sm:space-x-4 max-w-2xl">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Quote className="w-4 h-4 sm:w-5 sm:h-5 fill-blue-600 dark:fill-blue-400" />
          </div>

          <div className="space-y-1">
            <p className="text-xs sm:text-sm md:text-base text-slate-800 dark:text-slate-100 font-medium italic leading-relaxed">
              “Education is the most powerful weapon which you can use to change the world.”
            </p>
            <p className="text-[11px] sm:text-xs font-bold text-slate-500 dark:text-slate-400">
              — Dr. A.P.J. Abdul Kalam
            </p>
          </div>
        </div>

        {/* Dr. Kalam Portrait Photo */}
        <div className="flex-shrink-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/480px-A._P._J._Abdul_Kalam.jpg"
            alt="Dr. A.P.J. Abdul Kalam"
            className="w-14 h-14 sm:w-20 sm:h-20 rounded-full object-cover object-top border-2 border-blue-600/30 shadow-md"
          />
        </div>

      </div>
    </section>
  );
}
