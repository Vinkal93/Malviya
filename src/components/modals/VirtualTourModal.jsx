import React, { useState } from 'react';
import { X, MapPin, Eye, Compass, ChevronRight } from 'lucide-react';
import { virtualTourSpots } from '../../data/schoolData';

export default function VirtualTourModal({ isOpen, onClose, schoolName }) {
  const [activeSpot, setActiveSpot] = useState(virtualTourSpots[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3">
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-950/75 backdrop-blur-xs" 
      />

      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-scaleUp">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-blue-950 to-indigo-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Compass className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
            <div>
              <h3 className="font-extrabold text-sm">360° Virtual Campus Tour</h3>
              <p className="text-[10px] text-blue-200">{schoolName} • Digital Walkthrough</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Viewport */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
          <img
            src={activeSpot.image}
            alt={activeSpot.name}
            className="w-full h-full object-cover transition-all duration-700 filter brightness-[0.92]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

          {/* 360 Badge */}
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-white border border-white/20 flex items-center space-x-1">
            <Eye className="w-3 h-3 text-emerald-400" />
            <span>Interactive View</span>
          </div>

          {/* Active spot info banner */}
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <div className="flex items-center space-x-1.5 text-[10px] text-amber-300 font-semibold mb-1">
              <MapPin className="w-3 h-3" />
              <span>Campus Spot</span>
            </div>
            <h4 className="text-base font-bold leading-tight drop-shadow-sm">
              {activeSpot.name}
            </h4>
            <p className="text-xs text-slate-200 mt-1 line-clamp-2">
              {activeSpot.description}
            </p>
          </div>
        </div>

        {/* Spot Selector Bar */}
        <div className="p-3 bg-slate-50 border-t border-slate-100">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            Select Campus Zone:
          </p>
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {virtualTourSpots.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setActiveSpot(spot)}
                className={`flex-shrink-0 flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                  activeSpot.id === spot.id
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span>{spot.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
