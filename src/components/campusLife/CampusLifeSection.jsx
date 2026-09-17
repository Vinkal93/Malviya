import React from 'react';
import { Trophy, ArrowRight, Sparkles } from 'lucide-react';
import { campusLifeItems } from '../../data/schoolData';

export default function CampusLifeSection({ onExploreStudentLife, onSelectActivity }) {
  return (
    <section className="py-16 bg-white" id="campus-life">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beyond Classrooms</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Campus Life
          </h3>
          <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
            A vibrant, holistic learning experience where passions are ignited and lifelong friendships form.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {campusLifeItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectActivity(item)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col group"
            >
              <div className="h-52 w-full relative overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-800">
                  {item.tag}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nurturing Talent Highlight Card */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50/60 to-amber-50/40 rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-xs flex-shrink-0">
              <Trophy className="w-8 h-8 stroke-[2.2]" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                Nurturing Talent, Creating Future Leaders
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mt-1.5">
                From sports to performing arts, from science clubs to community service — we provide endless opportunities for every child to discover their passion.
              </p>
            </div>
          </div>

          <button
            onClick={onExploreStudentLife}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-700/20 active:scale-95 transition cursor-pointer flex-shrink-0"
          >
            <span>Explore Student Life</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
