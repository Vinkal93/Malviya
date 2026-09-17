import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, User, BookOpen, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnquireModal({ isOpen, onClose, schoolName }) {
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    studentName: '',
    grade: 'Class 1',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity" 
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10 animate-scaleUp">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-base">Quick Admission Enquiry</h3>
            <p className="text-xs text-blue-200 mt-0.5">{schoolName} • Session 2026–27</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-lg font-bold text-slate-900">Enquiry Received!</h4>
            <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
              Thank you for reaching out to <strong>{schoolName}</strong>. Our admissions counselor will call you within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-3">
            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Parent / Guardian Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Mobile Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Student Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Aarav Sharma"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-slate-700 block mb-1">
                  Seeking Grade *
                </label>
                <select
                  value={formData.grade}
                  onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  className="w-full px-2 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option>Nursery / Playgroup</option>
                  <option>LKG / UKG</option>
                  <option>Class 1 - 5 (Primary)</option>
                  <option>Class 6 - 8 (Middle)</option>
                  <option>Class 9 - 10 (Secondary)</option>
                  <option>Class 11 - 12 (Science)</option>
                  <option>Class 11 - 12 (Commerce)</option>
                  <option>Class 11 - 12 (Humanities)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 block mb-1">
                Any Query or Message
              </label>
              <textarea
                rows={2}
                placeholder="Ask about school bus transport, fee structure, hostel, etc."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 mt-2 rounded-full bg-blue-700 hover:bg-blue-800 active:scale-95 text-white text-xs font-bold shadow-md shadow-blue-700/20 transition flex items-center justify-center space-x-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Enquiry Now</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
