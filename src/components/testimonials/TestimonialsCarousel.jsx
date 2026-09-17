import React from 'react';
import { Quote, Star, MessageSquare } from 'lucide-react';
import { testimonials } from '../../data/schoolData';

export default function TestimonialsCarousel({ schoolName }) {
  return (
    <section className="py-10 sm:py-16 bg-slate-50/70 dark:bg-slate-950 transition-colors" id="testimonials">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Title */}
        <div className="text-center space-y-2 mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Community Feedback</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Parent Testimonials
          </h3>
          <p className="text-xs sm:text-base text-slate-500 dark:text-slate-400">
            Hear from our happy parents about their children's growth and journey with us.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-7 border border-slate-200/70 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Quote icon */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 flex items-center justify-center">
                    <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 fill-blue-600 dark:fill-blue-400" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic mb-5 sm:mb-6">
                  "{item.quote.replace('SBCI International School', schoolName)}"
                </p>
              </div>

              {/* Parent Details */}
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <img
                  src={item.image}
                  alt={item.parentName}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-blue-600/30 shadow-xs"
                />
                <div>
                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    — {item.parentName}
                  </h5>
                  <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
