import React from 'react';
import { Search, Menu, Phone, Mail, BookOpen, Sun, Moon, Bell, Sparkles, GraduationCap, Compass, Trophy, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { schoolConfig } from '../../data/schoolData';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';


export default function Header({ 
  schoolName, 
  tagline, 
  darkMode,
  onToggleTheme,
  onOpenSearch, 
  onOpenDrawer,
  onOpenEnquire,
  onOpenAdmission,
  onNavigate
}) {
  const marqueeNews = [
    "📢 Admissions Open for Session 2026–27 (Nursery to Class 11)",
    "🏆 CBSE Board Exam Results 2025: 100% Pass Rate with 42+ Students scoring above 95%",
    "⚽ Annual Inter-School Sports Meet 2025 scheduled for next month",
    "🔬 New Robotics & AI Innovation Lab inaugurated on campus",
    "🚍 GPS-enabled school transport available on all major district routes"
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-xs transition-colors">
      {/* 1. PC Mode Top Info Section with Animated News Marquee */}
      <div className="bg-slate-900 dark:bg-slate-950 text-slate-200 text-xs py-2 px-4 sm:px-6 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Marquee Badge & Live Ticker */}
          <div className="flex items-center space-x-2 flex-1 min-w-0 overflow-hidden">
            <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-blue-600 text-white font-bold text-[10px] tracking-wider uppercase flex-shrink-0 shadow-2xs">
              <Bell className="w-3 h-3 animate-bounce" />
              <span>Latest News</span>
            </div>

            {/* Scrolling Marquee Container */}
            <div className="flex-1 overflow-hidden relative select-none whitespace-nowrap">
              <div className="inline-block animate-marquee hover:pause-animation text-xs font-medium text-slate-300">
                {marqueeNews.map((news, idx) => (
                  <span key={idx} className="mx-6 inline-flex items-center gap-1.5 hover:text-amber-300 transition cursor-pointer">
                    <span>{news}</span>
                    <span className="text-slate-600">•</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Direct Helpline & Quick Action */}
          <div className="hidden lg:flex items-center space-x-5 flex-shrink-0 text-xs">
            <div className="flex items-center space-x-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{schoolConfig.phone}</span>
            </div>
            <button
              onClick={onOpenEnquire}
              className="text-xs text-blue-300 hover:text-white font-semibold cursor-pointer transition"
            >
              Enquire Now
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between">
        
        {/* Left: Hamburger Menu (Drawer Trigger) & Crest Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3.5">
          {/* Menu Button - Opens Sidebar Drawer */}
          <button
            onClick={onOpenDrawer}
            aria-label="Open menu drawer"
            className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition cursor-pointer"
          >
            <Menu className="w-6 h-6 stroke-[2.2]" />
          </button>

          {/* School Logo & Title */}
          <div 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2.5 sm:space-x-3 cursor-pointer group"
          >
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-blue-600/30 flex items-center justify-center p-1 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 shadow-2xs group-hover:scale-105 transition flex-shrink-0">
              <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 text-blue-900 dark:text-blue-400">
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

            <div>
              <h1 className="text-sm sm:text-base md:text-lg font-black text-blue-950 dark:text-white tracking-tight leading-tight">
                {schoolName}
              </h1>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 tracking-wider flex items-center gap-1.5">
                <span>{tagline}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                <span className="text-[9px] sm:text-[11px] text-blue-600 font-bold uppercase">CBSE Affiliated</span>
              </p>
            </div>
          </div>
        </div>

        {/* Center: Desktop Navigation Menu with Radix Dropdowns */}
        <div className="hidden lg:flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              
              {/* Home */}
              <NavigationMenuItem>
                <button
                  onClick={() => onNavigate('home')}
                  className={navigationMenuTriggerStyle()}
                >
                  Home
                </button>
              </NavigationMenuItem>

              {/* Academics Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 md:w-[460px] lg:w-[560px] lg:grid-cols-[.85fr_1fr]">
                    <div className="row-span-3 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-5 text-white flex flex-col justify-between shadow-md">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold uppercase tracking-wider mb-2">
                          <GraduationCap className="w-3.5 h-3.5" />
                          <span>CBSE Affiliated</span>
                        </div>
                        <h4 className="text-base font-extrabold leading-tight">Academic Excellence</h4>
                        <p className="text-xs text-blue-100 mt-2 leading-relaxed">
                          Holistic education focusing on critical thinking, ethical leadership, and continuous innovation.
                        </p>
                      </div>
                      <button
                        onClick={() => onNavigate('academics')}
                        className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-amber-300 hover:text-white transition cursor-pointer"
                      >
                        Explore Curriculum →
                      </button>
                    </div>

                    <ul className="grid gap-1.5">
                      <li>
                        <button
                          onClick={() => onNavigate('academics')}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition group cursor-pointer"
                        >
                          <div className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            Primary Wing (Grades 1–5)
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                            Activity-based foundational curriculum and values
                          </p>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => onNavigate('academics')}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition group cursor-pointer"
                        >
                          <div className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            Middle Wing (Grades 6–8)
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                            Experiential STEM labs, coding, and inquiry methods
                          </p>
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => onNavigate('academics')}
                          className="w-full text-left p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition group cursor-pointer"
                        >
                          <div className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                            Senior Secondary (Grades 9–12)
                          </div>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                            Science, Commerce & Humanities streams with CBSE
                          </p>
                        </button>
                      </li>
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Admissions Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Admissions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[380px] gap-2 p-4 md:w-[480px] md:grid-cols-2">
                    <li>
                      <button
                        onClick={() => onNavigate('admissions')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group cursor-pointer"
                      >
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          Session 2026–27
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                          Step-by-step admission guidelines and important dates.
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate('admissions')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group cursor-pointer"
                      >
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          Fee Structure
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                          Transparent quarterly fee breakdown and scholarships.
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate('admissions')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group cursor-pointer"
                      >
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          Eligibility Criteria
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                          Age criteria and documents required for registration.
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={onOpenAdmission}
                        className="w-full text-left p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/50 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition group cursor-pointer border border-blue-200 dark:border-blue-800/80"
                      >
                        <div className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                          <span>Apply Online Now</span>
                          <span>→</span>
                        </div>
                        <p className="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 line-clamp-2">
                          Direct online admission registration portal.
                        </p>
                      </button>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Campus Life Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Campus Life</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[360px] gap-2 p-4 md:w-[440px] md:grid-cols-2">
                    <li>
                      <button
                        onClick={() => onNavigate('campus-life')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group cursor-pointer"
                      >
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600">
                          Sports & Athletics
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Cricket, basketball, badminton, yoga and athletics.
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate('campus-life')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group cursor-pointer"
                      >
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600">
                          Robotics & STEM
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Hands-on AI, robotics, and high-tech computer labs.
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate('location-and-tour')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group cursor-pointer"
                      >
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600">
                          360° Campus Tour
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Interactive virtual walk through classes and labs.
                        </p>
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => onNavigate('about')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition group cursor-pointer"
                      >
                        <div className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600">
                          Safe Environment
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          CCTV surveillance, GPS bus tracking & infirmary.
                        </p>
                      </button>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* News & Notices */}
              <NavigationMenuItem>
                <button
                  onClick={() => onNavigate('news')}
                  className={navigationMenuTriggerStyle()}
                >
                  News & Events
                </button>
              </NavigationMenuItem>

              {/* Virtual Tour */}
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


        {/* Right Actions: Theme Toggle, Search & APPLY NOW (on Main Page as requested) */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* Dark / Light Mode Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark / light mode"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-slate-700 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer shadow-2xs"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 transition-transform hover:rotate-90 duration-300" />
            ) : (
              <Moon className="w-5 h-5 transition-transform hover:-rotate-12 duration-300" />
            )}
          </button>

          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            aria-label="Search school website"
            className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-slate-700 dark:text-slate-200 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* MAIN PAGE APPLY BUTTON (Shown on both Mobile and PC!) */}
          <button
            onClick={onOpenAdmission}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-600/20 transition cursor-pointer flex items-center space-x-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Apply Now</span>
          </button>

        </div>

      </div>
    </header>
  );
}
