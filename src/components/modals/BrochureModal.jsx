import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, BookOpen } from 'lucide-react';

export default function BrochureModal({ isOpen, onClose, schoolName }) {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      // Trigger a virtual download
      const element = document.createElement("a");
      const file = new Blob([
        `=======================================================\n` +
        `${schoolName}\n` +
        `OFFICIAL SCHOOL PROSPECTUS & ADMISSIONS BROCHURE 2026-27\n` +
        `Affiliated with CBSE (Central Board of Secondary Education)\n` +
        `=======================================================\n\n` +
        `1. MISSION & VISION\n` +
        `To nurture creative, ethical, and forward-thinking leaders equipped with modern skills and global perspective.\n\n` +
        `2. ACADEMIC HIGHLIGHTS\n` +
        `- 100% CBSE Board pass rate\n` +
        `- State of the art STEM & Robotics laboratories\n` +
        `- Student-to-teacher ratio: 20:1\n` +
        `- Smart digital interactive touchscreens in all classes\n\n` +
        `3. ADMISSIONS CRITERIA\n` +
        `Admissions open from Nursery to Class 11 (Science, Commerce, Humanities).\n` +
        `For enquiry: admissions@sbcischool.edu.in | +91 98765 43210\n`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${schoolName.replace(/\s+/g, '_')}_Brochure_2026-27.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3">
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-950/65 backdrop-blur-xs" 
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10 animate-scaleUp">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-amber-300" />
            <h3 className="font-extrabold text-sm">Official School Prospectus</h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 text-center space-y-4">
          <div className="w-20 h-28 mx-auto bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl border-2 border-dashed border-blue-300 flex flex-col items-center justify-center p-2 shadow-inner">
            <FileText className="w-8 h-8 text-blue-600 mb-1" />
            <span className="text-[10px] font-bold text-blue-900">PDF Prospectus</span>
            <span className="text-[9px] text-blue-600 font-medium">Session 2026-27</span>
          </div>

          <div>
            <h4 className="font-bold text-base text-slate-900">{schoolName} Brochure</h4>
            <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
              Includes comprehensive curriculum guidelines, fee schedule, bus routes, faculty profiles, and scholarship details.
            </p>
          </div>

          {downloaded ? (
            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-semibold flex items-center justify-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Brochure downloaded successfully!</span>
            </div>
          ) : (
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="w-full py-3 rounded-full bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md shadow-blue-700/20 active:scale-95 transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>{downloading ? 'Preparing Brochure...' : 'Download Official Prospectus'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
