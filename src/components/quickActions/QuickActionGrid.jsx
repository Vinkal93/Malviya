import React from 'react';
import { 
  Landmark, BookOpen, FileText, CreditCard, 
  Calendar, Megaphone, Image, PhoneCall, ArrowRight 
} from 'lucide-react';

export default function QuickActionGrid({ onActionClick }) {
  const actions = [
    { id: 'about', label: 'About Us', icon: Landmark, color: 'text-rose-600', bg: 'bg-rose-50 dark:bg-rose-950/40' },
    { id: 'academics', label: 'Academics', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/40' },
    { id: 'admissions', label: 'Admissions', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-950/40' },
    { id: 'fees', label: 'Fees', icon: CreditCard, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/40' },
    { id: 'events', label: 'Events', icon: Calendar, color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-950/40' },
    { id: 'news', label: 'News & Circulars', icon: Megaphone, color: 'text-sky-600', bg: 'bg-sky-50 dark:bg-sky-950/40' },
    { id: 'gallery', label: 'Gallery', icon: Image, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/40' },
    { id: 'contact', label: 'Contact Us', icon: PhoneCall, color: 'text-blue-700', bg: 'bg-blue-50 dark:bg-blue-950/40' },
  ];

  return (
    <section className="px-3 sm:px-6 py-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
          Quick Access
        </h3>
        <button
          onClick={() => onActionClick('about')}
          className="inline-flex items-center space-x-1 text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 8 Cards Grid */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-4">
        {actions.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onActionClick(item.id)}
              className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xs hover:shadow-md active:scale-95 transition-all cursor-pointer group"
            >
              <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform`}>
                <Icon className={`w-5 h-5 ${item.color} stroke-[2.2]`} />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 dark:text-slate-200 text-center leading-tight">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
