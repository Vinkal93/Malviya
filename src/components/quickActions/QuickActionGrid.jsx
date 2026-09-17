import React from 'react';
import { 
  Landmark, BookOpen, FileText, CreditCard, 
  Calendar, Megaphone, Image, PhoneCall, ArrowRight 
} from 'lucide-react';

export default function QuickActionGrid({ onActionClick }) {
  const actions = [
    { id: 'about', label: 'About Us', icon: Landmark },
    { id: 'academics', label: 'Academics', icon: BookOpen },
    { id: 'admissions', label: 'Admissions', icon: FileText },
    { id: 'fees', label: 'Fee Structure', icon: CreditCard },
    { id: 'events', label: 'Calendar', icon: Calendar },
    { id: 'news', label: 'Circulars', icon: Megaphone },
    { id: 'gallery', label: 'Photo Gallery', icon: Image },
    { id: 'contact', label: 'Contact Us', icon: PhoneCall },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 py-3 sm:py-5">
      <div className="flex items-center justify-between mb-3 px-0.5">
        <h3 className="text-sm sm:text-base font-extrabold text-[#0f2444] tracking-tight">
          Quick Access
        </h3>
        <button
          onClick={() => onActionClick('about')}
          className="inline-flex items-center space-x-1 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
        >
          <span>View All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
        {actions.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onActionClick(item.id)}
              className="flex flex-col items-center justify-center p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/70 shadow-2xs hover:border-blue-200 hover:shadow-xs active:scale-95 transition cursor-pointer group"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 group-hover:bg-blue-50 text-slate-700 group-hover:text-blue-600 flex items-center justify-center mb-1.5 transition flex-shrink-0">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-slate-800 text-center leading-tight truncate w-full">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
