import React from 'react';
import { Search, Menu, Phone, Mail, BookOpen, Sun, Moon, Bell, Sparkles } from 'lucide-react';
import { schoolConfig } from '../../data/schoolData';

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

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition cursor-pointer">
            Home
          </button>
          <button onClick={() => onNavigate('about')} className="hover:text-blue-600 transition cursor-pointer">
            About Us
          </button>
          <button onClick={() => onNavigate('academics')} className="hover:text-blue-600 transition cursor-pointer">
            Academics
          </button>
          <button onClick={() => onNavigate('admissions')} className="hover:text-blue-600 transition cursor-pointer">
            Admissions
          </button>
          <button onClick={() => onNavigate('campus-life')} className="hover:text-blue-600 transition cursor-pointer">
            Campus Life
          </button>
          <button onClick={() => onNavigate('news')} className="hover:text-blue-600 transition cursor-pointer">
            News & Events
          </button>
          <button onClick={() => onNavigate('location-and-tour')} className="hover:text-blue-600 transition cursor-pointer">
            Virtual Tour
          </button>
        </nav>

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
