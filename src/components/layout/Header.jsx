import React from 'react';
import { Menu, Phone, BookOpen, GraduationCap } from 'lucide-react';
import { schoolConfig } from '../../data/schoolData';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export default function Header({ 
  schoolName, 
  onOpenDrawer,
  onOpenAdmission,
  onNavigate
}) {
  const marqueeNews = [
    "Admissions Open for Session 2026–27 (Nursery to Class 11)",
    "CBSE Board Exam Results 2025: 100% Pass Rate with 42+ Students scoring above 95%",
    "Annual Inter-School Sports Meet 2025 scheduled for next month",
    "New Robotics & AI Innovation Lab inaugurated on campus"
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-100 shadow-2xs">
      
      {/* 1. Subtle Desktop-Only Ticker Strip */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-1.5 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center space-x-2 flex-1 min-w-0 overflow-hidden">
            <span className="px-2 py-0.5 rounded bg-blue-600 text-white font-bold text-[10px] tracking-wider uppercase flex-shrink-0">
              Notice
            </span>
            <div className="flex-1 overflow-hidden relative select-none whitespace-nowrap">
              <div className="inline-block animate-marquee hover:pause-animation text-xs font-medium text-slate-300">
                {marqueeNews.map((news, idx) => (
                  <span key={idx} className="mx-6 inline-flex items-center gap-1.5">
                    <span>{news}</span>
                    <span className="text-slate-600">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4 text-xs flex-shrink-0 text-slate-300">
            <div className="flex items-center space-x-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{schoolConfig.phone}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Clean White Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 h-15 sm:h-18 flex items-center justify-between">
        
        {/* Left: School Crest + Name + Affiliation */}
        <div className="flex items-center min-w-0">
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer select-none group min-w-0"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-blue-600/30 flex items-center justify-center p-1 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-2xs group-hover:scale-105 transition flex-shrink-0">
              <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6 sm:w-7 sm:h-7 text-blue-900">
                <path
                  d="M24 4L8 10V22C8 32 15 40 24 44C33 40 40 32 40 22V10L24 4Z"
                  stroke="#1e3a8a"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                  fill="#ffffff"
                />
                <path
                  d="M16 28C19 26 22 26 24 28C26 26 29 26 32 28V19C29 17 26 17 24 19C22 17 19 17 16 19V28Z"
                  fill="#2563eb"
                />
                <path
                  d="M24 13V26M22 14L24 12L26 14"
                  stroke="#d97706"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <h1 className="text-sm sm:text-base font-extrabold text-[#0f2444] tracking-tight leading-tight truncate">
                {schoolName}
              </h1>
              <p className="text-[10px] sm:text-xs font-semibold text-blue-600 tracking-wide uppercase leading-none mt-0.5">
                CBSE Affiliated
              </p>
            </div>
          </div>
        </div>

        {/* Center: Desktop Navigation Links with Dropdowns */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              
              <NavigationMenuItem>
                <button
                  onClick={() => onNavigate('home')}
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[460px] lg:w-[540px] lg:grid-cols-[.85fr_1fr]">
                    <div className="row-span-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-5 text-white flex flex-col justify-between shadow-xs">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider mb-2">
                          <GraduationCap className="w-3.5 h-3.5" />
                          <span>CBSE Affiliated</span>
                        </div>
                        <h4 className="text-base font-extrabold leading-tight">Academic Excellence</h4>
                        <p className="text-xs text-blue-100 mt-2 leading-relaxed">
                          Conceptual learning, experiential STEM pedagogy, and strong moral values.
                        </p>
                      </div>
                      <button
                        onClick={() => onNavigate('academics')}
                        className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-white transition cursor-pointer"
                      >
                        Explore Curriculum →
                      </button>
                    </div>

                    <ul className="grid gap-1">
                      <li>
                        <button
                          onClick={() => onNavigate('academics')}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition group cursor-pointer"
                        >
                          <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600">
                            Primary Wing (Grades 1–5)
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            Activity-based foundational curriculum
                          </p>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => onNavigate('academics')}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition group cursor-pointer"
                        >
                          <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600">
                            Middle Wing (Grades 6–8)
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            Inquiry-based STEM and computer labs
                          </p>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => onNavigate('academics')}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-50 transition group cursor-pointer"
                        >
                          <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600">
                            Senior Secondary (Grades 9–12)
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
                            Science, Commerce & Humanities streams
                          </p>
                        </button>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[380px] gap-2 p-4 md:w-[460px] md:grid-cols-2">
                    <li>
                      <button
                        onClick={() => onNavigate('admissions')}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition group cursor-pointer"
                      >
                        <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600">
                          Session 2026–27
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                          Step-by-step admission guidelines.
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate('admissions')}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition group cursor-pointer"
                      >
                        <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600">
                          Fee Structure
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                          Transparent quarterly fee breakdown.
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate('admissions')}
                        className="w-full text-left p-2.5 rounded-lg hover:bg-slate-50 transition group cursor-pointer"
                      >
                        <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600">
                          Eligibility Criteria
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-2">
                          Age criteria and required documents.
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={onOpenAdmission}
                        className="w-full text-left p-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 transition group cursor-pointer border border-blue-200/80"
                      >
                        <div className="text-xs font-bold text-blue-600 flex items-center gap-1">
                          <span>Apply Online Now</span>
                          <span>→</span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-0.5 line-clamp-2">
                          Online registration form.
                        </p>
                      </button>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  onClick={() => onNavigate('campus-life')}
                  className={navigationMenuTriggerStyle()}
                >
                  Campus Life
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  onClick={() => onNavigate('news')}
                  className={navigationMenuTriggerStyle()}
                >
                  News
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  onClick={() => onNavigate('location-and-tour')}
                  className={navigationMenuTriggerStyle()}
                >
                  Virtual Tour
                </button>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Apply Button + Hamburger Menu Button */}
        <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
          <button
            onClick={onOpenAdmission}
            className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-xs transition cursor-pointer flex items-center space-x-1.5"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Apply</span>
          </button>

          {/* Hamburger Menu on Right Side */}
          <button
            onClick={onOpenDrawer}
            aria-label="Open navigation menu"
            className="p-1.5 sm:p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-lg sm:rounded-xl transition active:scale-95 cursor-pointer border border-slate-200/80 sm:border-0"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
          </button>
        </div>

      </div>
    </header>
  );
}
