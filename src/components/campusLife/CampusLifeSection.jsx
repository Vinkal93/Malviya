import React from 'react';
import { Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { campusLifeItems } from '../../data/schoolData';

export default function CampusLifeSection({ onExploreStudentLife, onSelectActivity }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 py-6 sm:py-10" id="campus-life">
      {/* Title */}
      <div className="mb-6 sm:mb-8 space-y-1">
        <div className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-blue-700">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Beyond Classrooms</span>
        </div>
        <h3 className="text-xl sm:text-3xl font-black text-[#0f2444] tracking-tight">
          Campus Life & Co-Curriculars
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 max-w-lg">
          Opportunities for every child to explore passions in athletics, arts, science, and leadership.
        </p>
      </div>

      {/* 4 Cards Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-6 sm:mb-8">
        {campusLifeItems.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectActivity(item)}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-2xs hover:shadow-xs transition cursor-pointer flex flex-col group"
          >
            <div className="h-40 sm:h-48 w-full relative overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-bold text-slate-800">
                {item.tag}
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-sm sm:text-base font-extrabold text-[#0f2444] group-hover:text-blue-600 transition leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                  {item.description}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Clean Callout Card */}
      <div className="rounded-2xl bg-[#0f2444] p-5 sm:p-7 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="text-base sm:text-lg font-bold">Discover our vibrant student life</h4>
          <p className="text-xs sm:text-sm text-blue-200">Explore clubs, labs, athletic facilities, and upcoming competitions.</p>
        </div>
        <button
          onClick={onExploreStudentLife}
          className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition cursor-pointer self-start sm:self-auto flex-shrink-0"
        >
          Explore All Activities →
        </button>
      </div>
    </section>
  );
}
