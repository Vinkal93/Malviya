import React from 'react';
import { Play } from 'lucide-react';

export default function VideoBannerSection({ onOpenVideo }) {
  return (
    <div
      onClick={onOpenVideo}
      className="relative h-full min-h-[320px] rounded-3xl overflow-hidden shadow-lg cursor-pointer group border border-slate-200/80 bg-slate-900 flex flex-col justify-end p-8"
    >
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1200&q=80"
        alt="Students learning together"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.85]"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

      {/* Play Button Center Floating */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-blue-900 shadow-2xl group-hover:scale-110 group-active:scale-95 transition-all">
          <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-blue-900 ml-1" />
        </div>
      </div>

      {/* Content at Bottom */}
      <div className="relative z-10 text-white space-y-2">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider">
          Life at School
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight drop-shadow-md">
          “Small Steps Today, <br />
          Brighter Tomorrows”
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md">
          Watch our documentary on experiential learning, science exhibitions, and athletic triumphs.
        </p>
      </div>
    </div>
  );
}
