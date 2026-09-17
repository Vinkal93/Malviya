import React from 'react';
import { Users, Presentation, BookOpen, Star } from 'lucide-react';
import NumberTicker from '../common/NumberTicker';

export default function StatsCard() {
  const stats = [
    {
      id: 1,
      isNumeric: true,
      numericValue: 1000,
      suffix: "+",
      label: "Happy Students",
      icon: Users,
    },
    {
      id: 2,
      isNumeric: true,
      numericValue: 50,
      suffix: "+",
      label: "Expert Faculty",
      icon: Presentation,
    },
    {
      id: 3,
      isNumeric: true,
      numericValue: 100,
      suffix: "%",
      label: "CBSE Curriculum",
      icon: BookOpen,
    },
    {
      id: 4,
      isNumeric: true,
      numericValue: 25,
      suffix: "+",
      label: "Co-Curricular Programs",
      icon: Star,
    },
  ];

  return (
    <section className="px-2.5 sm:px-6 py-2 sm:py-3 max-w-7xl mx-auto w-full">
      <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 p-4 sm:p-7 text-white shadow-xl shadow-blue-950/15 border border-blue-800/40">
        
        {/* Subtle background building watermark */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="flex flex-col items-center justify-center p-1.5 sm:p-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 text-blue-300 flex items-center justify-center mb-1.5 shadow-2xs border border-white/10">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
                </div>
                <span className="text-lg sm:text-2xl lg:text-3xl font-black tracking-tight leading-tight">
                  <NumberTicker
                    value={item.numericValue}
                    suffix={item.suffix}
                    duration={1800}
                  />
                </span>
                <span className="text-[10px] sm:text-xs text-blue-200/90 font-medium mt-0.5 sm:mt-1 leading-tight">
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
