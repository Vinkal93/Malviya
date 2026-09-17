import React, { useState } from 'react';
import { X, Search, ChevronRight, FileText, Calendar, BookOpen, HelpCircle } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onNavigateToSection }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const searchableItems = [
    { title: 'Admissions 2026-27 Criteria & Forms', category: 'Admissions', target: 'admissions', icon: FileText },
    { title: 'CBSE Syllabus & Academic Curriculum (Pre-Primary to 12)', category: 'Academics', target: 'academics', icon: BookOpen },
    { title: 'Annual Sports Meet & Athletic Events', category: 'Events', target: 'campus-life', icon: Calendar },
    { title: 'School Bus Transport & Safety Routes', category: 'Facilities', target: 'safety', icon: HelpCircle },
    { title: 'Message from Principal Mrs. Neha Sharma', category: 'About', target: 'about', icon: BookOpen },
    { title: 'Campus Virtual Tour & Smart Classes', category: 'Campus', target: 'virtual-tour', icon: FileText },
    { title: 'School Location & Contact Helpline', category: 'Contact', target: 'location', icon: HelpCircle },
    { title: 'Parent Feedback & Testimonials', category: 'Reviews', target: 'testimonials', icon: FileText },
  ];

  const filtered = query.trim()
    ? searchableItems.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchableItems;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-3 pt-12 sm:pt-20">
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-slate-950/65 backdrop-blur-xs" 
      />

      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden z-10 animate-scaleUp">
        {/* Search input bar */}
        <div className="p-3 border-b border-slate-100 flex items-center space-x-2">
          <Search className="w-5 h-5 text-slate-400 ml-2" />
          <input
            type="text"
            autoFocus
            placeholder="Search classes, fees, dates, events..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-2 max-h-[360px] overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-slate-400 text-xs">
              No results found for "{query}".
            </div>
          ) : (
            filtered.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => {
                    onClose();
                    onNavigateToSection(item.target);
                  }}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-blue-50 text-left transition group"
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <h4 className="text-xs font-semibold text-slate-800 group-hover:text-blue-700 truncate">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 flex-shrink-0 ml-2" />
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
