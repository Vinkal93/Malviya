import React from 'react';
import { Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { campusLifeItems } from '../../data/schoolData';

export default function CampusLifeSection({ onExploreStudentLife, onSelectActivity }) {
  return (
    <section className="py-10 sm:py-16 bg-white dark:bg-slate-900 transition-colors" id="campus-life">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Title */}
        <div className="text-center space-y-2 mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beyond Classrooms</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Campus Life
          </h3>
          <p className="text-xs sm:text-base text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
            A vibrant, holistic learning experience where passions are ignited and lifelong friendships form.
          </p>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
          {campusLifeItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectActivity(item)}
              className="bg-white dark:bg-slate-800/80 rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col group"
            >
              <div className="h-44 sm:h-52 w-full relative overflow-hidden bg-slate-100 dark:bg-slate-700">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-800 dark:text-slate-200">
                  {item.tag}
                </div>
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3.5 mt-3 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs font-bold text-blue-600 dark:text-blue-400">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Card */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold">Interested in exploring our campus activities?</h4>
            <p className="text-xs sm:text-sm text-blue-200">Discover clubs, athletics, robotics labs, and creative arts.</p>
          </div>
          <button
            onClick={onExploreStudentLife}
            className="px-6 py-3 rounded-full bg-white text-blue-950 font-bold text-xs sm:text-sm hover:bg-blue-50 active:scale-95 transition cursor-pointer w-full sm:w-auto shadow-md"
          >
            Explore Student Life →
          </button>
        </div>

      </div>
    </section>
  );
}
