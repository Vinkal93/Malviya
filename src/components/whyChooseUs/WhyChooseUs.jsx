import React from 'react';
import { GraduationCap, Users, ShieldCheck, Lightbulb } from 'lucide-react';
import { whyChooseUsFeatures } from '../../data/schoolData';

const iconMap = {
  GraduationCap: GraduationCap,
  Users: Users,
  ShieldCheck: ShieldCheck,
  Lightbulb: Lightbulb
};

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-slate-50/50" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title with decorative accent */}
        <div className="text-center space-y-2 mb-12">
          <div className="inline-block relative">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-blue-950 tracking-tight">
              Why Choose Us?
            </h3>
            {/* Curved underline */}
            <svg
              viewBox="0 0 140 14"
              fill="none"
              className="w-32 sm:w-40 mx-auto mt-1 text-blue-600"
            >
              <path
                d="M3 10C40 2 100 2 137 10"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
            A nurturing environment where every child learns, explores and grows beyond limits.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUsFeatures.map((item) => {
            const Icon = iconMap[item.icon] || GraduationCap;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center mb-5 shadow-2xs`}>
                    <Icon className={`w-7 h-7 ${item.color} stroke-[2.2]`} />
                  </div>
                  <h4 className="text-lg font-black text-slate-900 leading-snug mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
