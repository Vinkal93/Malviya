import React from 'react';
import { GraduationCap, Users, ShieldCheck, Trophy } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      id: 1,
      title: "Academic Excellence",
      subtitle: "CBSE curriculum with concept-first pedagogy",
      icon: GraduationCap,
    },
    {
      id: 2,
      title: "Holistic Development",
      subtitle: "Arts, public speaking, ethics & leadership",
      icon: Users,
    },
    {
      id: 3,
      title: "Safe Campus Environment",
      subtitle: "CCTV surveillance & GPS bus monitoring",
      icon: ShieldCheck,
    },
    {
      id: 4,
      title: "Sports & Co-Curriculars",
      subtitle: "Cricket, athletics, music, dance & robotics",
      icon: Trophy,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-3.5 sm:px-6 py-3 sm:py-5" id="about">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {pillars.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/70 shadow-2xs hover:shadow-xs transition flex flex-col text-left justify-between"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Icon className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-[#0f2444] leading-snug">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-1 leading-snug hidden sm:block">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
