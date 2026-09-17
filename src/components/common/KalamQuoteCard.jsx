import React from 'react';
import { Quote } from 'lucide-react';

export default function KalamQuoteCard() {
  return (
    <section className="px-3 sm:px-6 py-4 max-w-7xl mx-auto">
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-5 transition-colors">
        
        {/* Quote Content */}
        <div className="flex items-start space-x-4 max-w-2xl">
          <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Quote className="w-5 h-5 fill-blue-600" />
          </div>

          <div className="space-y-1.5">
            <p className="text-xs sm:text-sm md:text-base text-slate-800 dark:text-slate-100 font-medium italic leading-relaxed">
              “Education is the most powerful weapon which you can use to change the world.”
            </p>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400">
              — Dr. A.P.J. Abdul Kalam
            </p>
          </div>
        </div>

        {/* Dr. Kalam Portrait Photo */}
        <div className="flex-shrink-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/A._P._J._Abdul_Kalam.jpg/480px-A._P._J._Abdul_Kalam.jpg"
            alt="Dr. A.P.J. Abdul Kalam"
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-top border-2 border-blue-600/30 shadow-md"
          />
        </div>

      </div>
    </section>
  );
}
