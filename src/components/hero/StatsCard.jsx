import React from 'react';
import { Users, GraduationCap, BookOpen, Trophy } from 'lucide-react';
import NumberTicker from '../common/NumberTicker';

export default function StatsCard() {
  const stats = [
    {
      id: 1,
      numericValue: 1000,
      suffix: "+",
      label: "Students Enrolled",
      icon: Users,
    },
    {
      id: 2,
      numericValue: 50,
      suffix: "+",
      label: "Dedicated Teachers",
      icon: GraduationCap,
    },
    {
      id: 3,
      numericValue: 100,
      suffix: "%",
      label: "CBSE Board Pass Rate",
      icon: BookOpen,
    },
    {
      id: 4,
      numericValue: 25,
      suffix: "+",
      label: "Sports & Club Programs",
      icon: Trophy,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 py-2 sm:py-3">
      <div className="rounded-2xl bg-[#0f2444] p-5 sm:p-7 text-white shadow-xs border border-slate-800">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex flex-col items-center justify-center p-1 sm:p-2">
                <span className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  <NumberTicker
                    value={item.numericValue}
                    suffix={item.suffix}
                    duration={1600}
                  />
                </span>
                <span className="text-xs sm:text-sm text-blue-200 font-medium mt-1 leading-snug">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
