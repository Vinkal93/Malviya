import React from 'react';
import { Play, ArrowRight, Eye } from 'lucide-react';

export default function VirtualTourSection({ onOpenVirtualTour }) {
  return (
    <div className="h-full flex flex-col justify-between" id="virtual-tour">
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <Eye className="w-4 h-4 text-blue-600" />
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Virtual Campus Tour
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mb-6">
          Take a look inside our campus classrooms, science labs, and sports grounds.
        </p>

        {/* Campus preview photo */}
        <div
          onClick={onOpenVirtualTour}
          className="relative h-64 sm:h-72 rounded-3xl overflow-hidden cursor-pointer group bg-slate-900 shadow-md border border-slate-200/80"
        >
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80"
            alt="School Campus Building Exterior"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

          {/* Center Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/95 text-blue-900 flex items-center justify-center shadow-xl group-hover:scale-110 transition">
              <Play className="w-6 h-6 fill-blue-900 ml-1" />
            </div>
          </div>

          <div className="absolute bottom-4 left-5 text-white">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">360° Walkthrough</span>
            <h4 className="text-lg font-bold">Main Campus & Administrative Wing</h4>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-4">
        <button
          onClick={onOpenVirtualTour}
          className="w-full py-3.5 px-6 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition flex items-center justify-center space-x-2 shadow-sm cursor-pointer"
        >
          <span>Explore 360° Virtual Campus Tour</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
