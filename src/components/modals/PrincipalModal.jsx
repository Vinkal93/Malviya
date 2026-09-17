import React from 'react';
import { X, Quote, Award, BookOpen } from 'lucide-react';
import { schoolConfig } from '../../data/schoolData';

export default function PrincipalModal({ isOpen, onClose, schoolName }) {
  if (!isOpen) return null;
  const { principal } = schoolConfig;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3">
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-950/65 backdrop-blur-xs" 
      />

      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col animate-scaleUp">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Quote className="w-5 h-5 text-amber-400" />
            <h3 className="font-extrabold text-sm">Principal's Desk</h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 overflow-y-auto overscroll-contain modal-scroll space-y-4">
          <div className="flex items-center space-x-3.5 pb-3 border-b border-slate-100">
            <img
              src={principal.image}
              alt={principal.name}
              className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-600/30"
            />
            <div>
              <h4 className="font-bold text-base text-slate-900">{principal.name}</h4>
              <p className="text-xs text-blue-700 font-medium">{principal.title} • {schoolName}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{principal.qualifications}</p>
            </div>
          </div>

          <div className="text-xs text-slate-700 leading-relaxed space-y-3 whitespace-pre-line">
            {principal.fullMessage.replace(/SBCI International School/g, schoolName)}
          </div>
        </div>
      </div>
    </div>
  );
}
