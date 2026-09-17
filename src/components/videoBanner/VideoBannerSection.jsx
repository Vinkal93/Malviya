import React from 'react';
import { Play } from 'lucide-react';

export default function VideoBannerSection({ onOpenVideo }) {
  return (
    <div
      onClick={onOpenVideo}
      className="relative h-full min-h-[280px] sm:min-h-[340px] rounded-3xl overflow-hidden shadow-lg cursor-pointer group border border-slate-200/80 dark:border-slate-800 bg-slate-900 flex flex-col justify-end p-5 sm:p-8 transition-all"
    >
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
        alt="Students learning together"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.85]"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>

      {/* Play Button Center Floating */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-blue-900 shadow-2xl group-hover:scale-110 group-active:scale-95 transition-all">
          <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-blue-900 ml-1" />
        </div>
      </div>

      {/* Content at Bottom */}
      <div className="relative z-10 text-white space-y-1.5 sm:space-y-2">
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
          Life at School
        </span>
        <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight drop-shadow-md leading-tight">
          “Small Steps Today, <br />
          Brighter Tomorrows”
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md line-clamp-2 sm:line-clamp-none">
          Watch our documentary on experiential learning, science exhibitions, and athletic triumphs.
        </p>
      </div>
    </div>
  );
}
