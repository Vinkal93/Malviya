import React, { useState } from 'react';
import { Quote, Star, MessageSquare } from 'lucide-react';
import { testimonials } from '../../data/schoolData';

export default function TestimonialsCarousel({ schoolName }) {
  return (
    <section className="py-16 bg-slate-50/50" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Community Feedback</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Parent Testimonials
          </h3>
          <p className="text-sm sm:text-base text-slate-500">
            Hear from our happy parents about their children's growth and journey with us.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Quote icon */}
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-blue-600 fill-blue-600" />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{item.quote.replace('SBCI International School', schoolName)}"
                </p>
              </div>

              {/* Parent Details */}
              <div className="flex items-center space-x-3.5 pt-4 border-t border-slate-100">
                <img
                  src={item.image}
                  alt={item.parentName}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-600/30 shadow-xs"
                />
                <div>
                  <h5 className="text-sm font-bold text-slate-900 leading-tight">
                    — {item.parentName}
                  </h5>
                  <span className="text-xs text-slate-500 font-semibold block mt-0.5">
                    {item.relation}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
