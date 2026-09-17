import React from 'react';
import { MapPin, Navigation, ArrowRight, Clock, Phone } from 'lucide-react';
import { schoolConfig } from '../../data/schoolData';

export default function LocationSection({ schoolName }) {
  const address = schoolConfig.address;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${schoolName}, ${address}`
  )}`;

  return (
    <div className="h-full flex flex-col justify-between" id="location">
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <h3 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Our Location & Contact
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 sm:mb-6">
          Find us easily or plan your visit to the school campus.
        </p>

        {/* Visual Map Mockup */}
        <div className="relative h-56 sm:h-72 rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-800 shadow-md">
          {/* Vector Map */}
          <svg className="absolute inset-0 w-full h-full opacity-65 dark:opacity-40" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="#f8fafc" />
            <path d="M-50 120 Q 250 80, 550 140 T 1100 100" stroke="#cbd5e1" strokeWidth="18" fill="none" />
            <path d="M220 -50 L 260 400" stroke="#f1f5f9" strokeWidth="26" fill="none" />
            <path d="M220 -50 L 260 400" stroke="#e2e8f0" strokeWidth="12" fill="none" />
            <path d="M-20 220 L 800 180" stroke="#fef08a" strokeWidth="10" fill="none" />
            <path d="M480 -50 L 460 400" stroke="#cbd5e1" strokeWidth="10" fill="none" />
            <rect x="50" y="30" width="120" height="70" rx="12" fill="#dcfce7" />
            <rect x="520" y="130" width="160" height="100" rx="14" fill="#dbeafe" />
          </svg>

          {/* Location Marker */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="relative">
              <span className="absolute -inset-2 rounded-full bg-red-400 animate-ping opacity-75"></span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl border-4 border-white dark:border-slate-900 relative z-10">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="mt-2 px-3 py-1 bg-white/95 dark:bg-slate-900/90 backdrop-blur-md rounded-xl shadow-md text-xs font-bold text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 whitespace-nowrap">
              {schoolName} Campus
            </div>
          </div>
        </div>
      </div>

      {/* Info Card & Directions */}
      <div className="mt-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1 text-left w-full">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white">
            {schoolName}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {address}
          </p>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-bold transition flex-shrink-0 cursor-pointer"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Directions</span>
        </a>
      </div>
    </div>
  );
}
