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
          <MapPin className="w-4 h-4 text-blue-600" />
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Our Location & Contact
          </h3>
        </div>
        <p className="text-xs sm:text-sm text-slate-500 mb-6">
          Find us easily or plan your visit to the campus.
        </p>

        {/* Visual Map Mockup */}
        <div className="relative h-64 sm:h-72 rounded-3xl overflow-hidden bg-amber-50/50 border border-slate-200/80 shadow-md">
          {/* Vector Map */}
          <svg className="absolute inset-0 w-full h-full opacity-65" xmlns="http://www.w3.org/2000/svg">
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
              <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl border-4 border-white relative z-10">
                <MapPin className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-2 px-3 py-1 bg-white/95 backdrop-blur-md rounded-xl shadow-md text-xs font-bold text-slate-900 border border-slate-200">
              {schoolName} Campus
            </div>
          </div>
        </div>
      </div>

      {/* Info Card & Directions */}
      <div className="mt-4 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-left w-full">
          <h4 className="text-sm font-bold text-slate-900">
            {schoolName}
          </h4>
          <p className="text-xs text-slate-500">
            {address}
          </p>
          <div className="flex items-center space-x-4 pt-1 text-[11px] text-slate-600 font-medium">
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-600" /> 8:00 AM - 3:30 PM</span>
            <span className="flex items-center gap-1"><Phone className="w-3.5 h-3.5 text-blue-600" /> +91 98765 43210</span>
          </div>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 active:scale-95 text-white text-xs sm:text-sm font-bold transition flex items-center justify-center space-x-2 shadow-xs flex-shrink-0"
        >
          <span>Get Directions</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
