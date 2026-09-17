import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { academicStages } from '../../data/schoolData';

export default function AcademicsCarousel({ onSelectStage }) {
  return (
    <section className="py-16 bg-slate-50/70" id="academics">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Curriculum & Learning</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Academics
            </h3>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed mt-1 max-w-xl">
              A well-structured CBSE curriculum designed for conceptual learning, critical thinking, and real-world skills.
            </p>
          </div>
        </div>

        {/* 4 Cards Desktop Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {academicStages.map((stage) => (
            <div
              key={stage.id}
              onClick={() => onSelectStage(stage)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col group"
            >
              {/* Image */}
              <div className="h-48 sm:h-52 w-full relative overflow-hidden bg-slate-100">
                <img
                  src={stage.image}
                  alt={stage.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-white">
                  {stage.grades}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-black text-slate-900 leading-tight group-hover:text-blue-600 transition">
                    {stage.title}
                  </h4>
                  <p className="text-xs font-semibold text-blue-700 mt-1">
                    {stage.subtitle}
                  </p>
                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed line-clamp-3">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-800">
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
