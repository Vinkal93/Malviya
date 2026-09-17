import React from 'react';
import { GraduationCap, Users, ShieldCheck, Trophy } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      id: 1,
      title: "Academic Excellence",
      icon: GraduationCap,
      color: "text-blue-600 bg-blue-50/80 dark:bg-blue-950/60",
    },
    {
      id: 2,
      title: "Holistic Development",
      icon: Users,
      color: "text-emerald-600 bg-emerald-50/80 dark:bg-emerald-950/60",
    },
    {
      id: 3,
      title: "Safe & Caring Environment",
      icon: ShieldCheck,
      color: "text-sky-600 bg-sky-50/80 dark:bg-sky-950/60",
    },
    {
      id: 4,
      title: "Co-Curricular Opportunities",
      icon: Trophy,
      color: "text-amber-500 bg-amber-50/80 dark:bg-amber-950/60",
    },
  ];

  return (
    <section className="px-3 sm:px-6 py-4 max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {pillars.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-slate-100 dark:border-slate-800 shadow-2xs hover:shadow-md transition-all flex flex-col items-center text-center justify-center cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center mb-3 group-hover:scale-105 transition-transform shadow-2xs`}>
                <Icon className="w-6 h-6 stroke-[2.2]" />
              </div>
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-800 dark:text-slate-100 leading-snug">
                {item.title}
              </h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
