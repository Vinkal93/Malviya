import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { academicStages } from '../../data/schoolData';

export default function AcademicsCarousel({ onSelectStage }) {
  return (
    <section className="py-10 sm:py-16 bg-slate-50/70 dark:bg-slate-950 transition-colors" id="academics">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-3 py-1 rounded-full mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Curriculum & Learning</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Academics
            </h3>
            <p className="text-xs sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed mt-1 max-w-xl">
              A well-structured CBSE curriculum designed for conceptual learning, critical thinking, and real-world skills.
            </p>
          </div>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {academicStages.map((stage) => (
            <div
              key={stage.id}
              onClick={() => onSelectStage(stage)}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col group"
            >
              {/* Image */}
              <div className="h-44 sm:h-52 w-full relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-slate-900/75 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-white">
                  {stage.grades}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {stage.title}
                  </h4>
                  <p className="text-xs font-semibold text-blue-700 dark:text-blue-400 mt-1">
                    {stage.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed line-clamp-3">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-3.5 mt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-800 dark:group-hover:text-blue-300">
                  <span>Explore Syllabus</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
