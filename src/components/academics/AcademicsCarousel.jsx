import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { academicStages } from '../../data/schoolData';

export default function AcademicsCarousel({ onSelectStage }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 py-6 sm:py-10" id="academics">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
        <div>
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum & Learning</span>
          </div>
          <h3 className="text-xl sm:text-3xl font-black text-[#0f2444] tracking-tight">
            Academic Wings
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mt-0.5">
            A comprehensive CBSE curriculum focused on conceptual clarity, skill building, and character.
          </p>
        </div>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {academicStages.map((stage) => (
          <div
            key={stage.id}
            onClick={() => onSelectStage(stage)}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-xs transition cursor-pointer flex flex-col group"
          >
            <div className="h-40 sm:h-48 w-full relative overflow-hidden bg-slate-100">
              <img
                src={stage.image}
                alt={stage.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 right-2.5 bg-slate-900/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white">
                {stage.grades}
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-[#0f2444] group-hover:text-blue-600 transition leading-tight">
                  {stage.title}
                </h4>
                <p className="text-xs font-semibold text-blue-700 mt-0.5">
                  {stage.subtitle}
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed line-clamp-2">
                  {stage.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                <span>View Curriculum</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
