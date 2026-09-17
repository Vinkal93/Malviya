import React from 'react';
import { 
  BookOpen, Users, Trophy, ShieldCheck, 
  Image, Calendar, Megaphone, PhoneCall 
} from 'lucide-react';

export default function QuickActionGrid({ onActionClick }) {
  const actions = [
    {
      id: 'academics',
      label: 'Academics',
      icon: BookOpen,
      iconColor: 'text-blue-600',
      bgColor: 'bg-blue-50/80 hover:bg-blue-100',
      borderColor: 'border-blue-100'
    },
    {
      id: 'admissions',
      label: 'Admissions',
      icon: Users,
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50/80 hover:bg-emerald-100',
      borderColor: 'border-emerald-100'
    },
    {
      id: 'student-life',
      label: 'Student Life',
      icon: Trophy,
      iconColor: 'text-amber-500',
      bgColor: 'bg-amber-50/80 hover:bg-amber-100',
      borderColor: 'border-amber-100'
    },
    {
      id: 'safety',
      label: 'Safety',
      icon: ShieldCheck,
      iconColor: 'text-sky-600',
      bgColor: 'bg-sky-50/80 hover:bg-sky-100',
      borderColor: 'border-sky-100'
    },
    {
      id: 'gallery',
      label: 'Gallery',
      icon: Image,
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-50/80 hover:bg-teal-100',
      borderColor: 'border-teal-100'
    },
    {
      id: 'events',
      label: 'Events',
      icon: Calendar,
      iconColor: 'text-rose-500',
      bgColor: 'bg-rose-50/80 hover:bg-rose-100',
      borderColor: 'border-rose-100'
    },
    {
      id: 'news',
      label: 'News',
      icon: Megaphone,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50/80 hover:bg-indigo-100',
      borderColor: 'border-indigo-100'
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: PhoneCall,
      iconColor: 'text-blue-700',
      bgColor: 'bg-blue-50/80 hover:bg-blue-100',
      borderColor: 'border-blue-100'
    },
  ];

  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {actions.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onActionClick(item.id)}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border ${item.bgColor} ${item.borderColor} shadow-xs hover:shadow-lg hover:-translate-y-1 active:scale-95 transition-all duration-200 cursor-pointer`}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 bg-white/70 shadow-2xs">
                  <Icon className={`w-6 h-6 ${item.iconColor} stroke-[2.2]`} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 text-center leading-tight">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
