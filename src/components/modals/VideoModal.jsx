import React from 'react';
import { X, Play, Volume2, Maximize2 } from 'lucide-react';

export default function VideoModal({ isOpen, onClose, schoolName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3">
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs" 
      />

      <div className="relative w-full max-w-2xl bg-black rounded-3xl shadow-2xl overflow-hidden z-10 animate-scaleUp">
        {/* Header */}
        <div className="p-3 bg-slate-900/90 text-white flex items-center justify-between border-b border-white/10">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="font-bold text-xs">{schoolName} — Campus Showcase 2026</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video simulation player */}
        <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&controls=1"
            title="School Virtual Showcase Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Caption */}
        <div className="p-3.5 bg-slate-900 text-slate-300 text-[11px] flex items-center justify-between">
          <p>
            Experience dynamic student life, state-of-the-art sports complex, smart classes & labs.
          </p>
          <span className="text-blue-400 font-semibold text-[10px]">HD 1080p</span>
        </div>
      </div>
    </div>
  );
}
