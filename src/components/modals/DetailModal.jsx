import React from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';

export default function DetailModal({ isOpen, onClose, detailData, onActionClick }) {
  if (!isOpen || !detailData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3">
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-950/65 backdrop-blur-xs" 
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10 animate-scaleUp">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-center justify-between">
          <h3 className="font-extrabold text-sm">{detailData.title}</h3>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Image if present */}
        {detailData.image && (
          <div className="h-44 w-full overflow-hidden bg-slate-100">
            <img
              src={detailData.image}
              alt={detailData.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Body Content */}
        <div className="p-5 space-y-3">
          {detailData.tag && (
            <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px] border border-blue-100">
              {detailData.tag}
            </span>
          )}

          <p className="text-xs text-slate-600 leading-relaxed">
            {detailData.description}
          </p>

          {detailData.features && (
            <div className="space-y-1.5 pt-2">
              {detailData.features.map((f, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          )}

          {detailData.actionText && (
            <button
              onClick={() => {
                onClose();
                if (onActionClick) onActionClick();
              }}
              className="w-full py-2.5 mt-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md shadow-blue-700/20 active:scale-95 transition flex items-center justify-center space-x-1.5 cursor-pointer"
            >
              <span>{detailData.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
