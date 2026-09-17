import React from 'react';
import { Users, GraduationCap, Award, ShieldCheck } from 'lucide-react';
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
      icon: GraduationCap,
    },
    {
      id: 3,
      isNumeric: false,
      textValue: "CBSE",
      label: "Affiliated School",
      icon: Award,
    },
    {
      id: 4,
      isNumeric: true,
      numericValue: 25,
      suffix: "+",
      label: "Years of Trust",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200/70 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] px-4 py-4 sm:px-6 sm:py-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className={`flex items-center space-x-3.5 ${
                index > 0 ? 'pt-3 sm:pt-0 sm:pl-6' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50/80 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 stroke-[2]" />
              </div>
              <div className="min-w-0">
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight leading-none">
                  {item.isNumeric ? (
                    <NumberTicker
                      value={item.numericValue}
                      suffix={item.suffix}
                      duration={1800}
                    />
                  ) : (
                    item.textValue
                  )}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-1 truncate">
                  {item.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
