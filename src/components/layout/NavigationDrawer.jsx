import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { 
  X, ChevronRight, ChevronDown, Phone, Mail, Search,
  Home, Landmark, BookOpen, FileText, Users, Calendar, 
  Image, PlayCircle, PhoneCall, Megaphone,
  Sprout, LogIn, ExternalLink, GraduationCap, Award, Sun, Moon
} from 'lucide-react';
import { schoolConfig } from '../../data/schoolData';

export default function NavigationDrawer({ 
  isOpen, 
  onClose, 
  schoolName, 
  darkMode,
  onToggleTheme,
  onNavigate,
  onOpenEnquire,
  onOpenAdmission,
  onOpenVirtualTour,
  onOpenPage
}) {
  if (!isOpen) return null;

  const [searchQuery, setSearchQuery] = useState('');
  // DEFAULT IS NULL: No accordion forced open by default!
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionId) => {
    setExpandedSection(prev => prev === sectionId ? null : sectionId);
  };

  const academicSubmenu = [
    { title: 'Overview', icon: BookOpen, page: 'academics' },
    { title: 'Pre-Primary', icon: FileText, page: 'academics' },
    { title: 'Primary (Grades 1–5)', icon: GraduationCap, page: 'academics' },
    { title: 'Middle School (Grades 6–8)', icon: Calendar, page: 'academics' },
    { title: 'Senior Secondary (Grades 9–12)', icon: Award, page: 'academics' },
    { title: 'CBSE Curriculum', icon: FileText, page: 'academics' },
    { title: 'Academic Calendar', icon: Calendar, page: 'news' },
  ];

  const aboutSubmenu = [
    { title: 'About Malviya Public School', page: 'about' },
    { title: 'Principal’s Desk', page: 'about' },
    { title: 'Vision, Mission & Values', page: 'about' },
    { title: 'Faculty & Mentors', page: 'about' },
  ];

  const admissionsSubmenu = [
    { title: 'Admission Procedure', action: onOpenAdmission },
    { title: 'Eligibility & Guidelines', page: 'admissions' },
    { title: 'Fee Structure & Transport', action: onOpenEnquire },
    { title: 'Download Prospectus', action: onOpenEnquire },
  ];

  const campusSubmenu = [
    { title: 'Sports & Athletics', page: 'campus-life' },
    { title: 'Performing Arts & Music', page: 'campus-life' },
    { title: 'Science & Robotics Club', page: 'campus-life' },
    { title: 'Safety & Infirmary', page: 'campus-life' },
  ];

  const socialLinks = [
    { name: "Facebook", label: "f", href: "#", bg: "bg-blue-600 text-white" },
    { name: "Instagram", label: "IG", href: "#", bg: "bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600 text-white" },
    { name: "YouTube", label: "YT", href: "#", bg: "bg-red-600 text-white" },
    { name: "LinkedIn", label: "in", href: "#", bg: "bg-sky-700 text-white" },
    { name: "X", label: "𝕏", href: "#", bg: "bg-slate-900 text-white" },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop with blur */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity duration-300" 
      />

      {/* Slide Drawer from RIGHT SIDE (matching right hamburger menu) */}
      <div className="absolute inset-y-0 right-0 max-w-[340px] sm:max-w-[370px] w-full bg-white dark:bg-slate-900 shadow-2xl flex flex-col z-10 animate-slideInRight transition-colors">
        
        {/* 1. Header with Logo, Theme Toggle & Close button */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-white dark:bg-slate-900">
          <div className="flex items-center space-x-2.5">
            <div className="w-10 h-10 rounded-full border border-blue-600/30 flex items-center justify-center p-1 bg-blue-50/70 dark:bg-slate-800 shadow-2xs">
              <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7 text-blue-900 dark:text-blue-400">
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
              </svg>
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white leading-tight">{schoolName}</h3>
              <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-tight">
                Learn • Grow • Lead • <span className="text-blue-600 font-bold">CBSE</span>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={onToggleTheme}
              aria-label="Toggle dark mode"
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 flex items-center justify-center transition cursor-pointer"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition cursor-pointer"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* 2. Search Bar */}
        <div className="p-3 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search pages..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-100/90 dark:bg-slate-800 text-xs rounded-xl text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
          </div>
        </div>

        {/* 3. Navigation List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          
          {/* HOME */}
          <button
            onClick={() => {
              onClose();
              onNavigate('home');
            }}
            className="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-bold text-xs sm:text-sm text-left transition cursor-pointer"
          >
            <Home className="w-4 h-4 stroke-[2.4]" />
            <span>Home</span>
          </button>

          {/* ABOUT US (Accordion, default closed) */}
          <div>
            <button
              onClick={() => toggleSection('about')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 font-semibold text-xs sm:text-sm text-left transition cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <Landmark className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span>About Us</span>
              </div>
              {expandedSection === 'about' ? (
                <ChevronDown className="w-4 h-4 text-blue-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            {expandedSection === 'about' && (
              <div className="pl-9 pr-2 py-1 space-y-1 bg-slate-50/60 dark:bg-slate-800/40 rounded-xl mb-1">
                {aboutSubmenu.map((sub, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onClose();
                      onOpenPage(sub.page);
                    }}
                    className="w-full text-left py-1.5 px-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition"
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ACADEMICS (Accordion, default closed) */}
          <div>
            <button
              onClick={() => toggleSection('academics')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-left transition cursor-pointer ${
                expandedSection === 'academics' ? 'bg-blue-50/50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center space-x-3">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="font-bold">Academics</span>
              </div>
              {expandedSection === 'academics' ? (
                <ChevronDown className="w-4 h-4 text-blue-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            {expandedSection === 'academics' && (
              <div className="pl-6 pr-2 py-1.5 space-y-1 bg-slate-50/80 dark:bg-slate-800/60 rounded-xl my-1 border border-slate-100 dark:border-slate-800 animate-fadeIn">
                {academicSubmenu.map((item, idx) => {
                  const ItemIcon = item.icon;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        onClose();
                        onOpenPage(item.page);
                      }}
                      className="w-full flex items-center space-x-2.5 py-1.5 px-2.5 rounded-lg text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-blue-700 hover:bg-white dark:hover:bg-slate-800 transition cursor-pointer"
                    >
                      <ItemIcon className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.title}</span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ADMISSIONS (Accordion, default closed) */}
          <div>
            <button
              onClick={() => toggleSection('admissions')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 font-semibold text-xs sm:text-sm text-left transition cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <FileText className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span>Admissions</span>
              </div>
              {expandedSection === 'admissions' ? (
                <ChevronDown className="w-4 h-4 text-blue-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            {expandedSection === 'admissions' && (
              <div className="pl-9 pr-2 py-1 space-y-1 bg-slate-50/60 dark:bg-slate-800/40 rounded-xl mb-1">
                {admissionsSubmenu.map((sub, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onClose();
                      if (sub.action) sub.action();
                      else onOpenPage(sub.page);
                    }}
                    className="w-full text-left py-1.5 px-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition"
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CAMPUS LIFE (Accordion, default closed) */}
          <div>
            <button
              onClick={() => toggleSection('campus')}
              className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 font-semibold text-xs sm:text-sm text-left transition cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <Users className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                <span>Campus Life</span>
              </div>
              {expandedSection === 'campus' ? (
                <ChevronDown className="w-4 h-4 text-blue-600" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            {expandedSection === 'campus' && (
              <div className="pl-9 pr-2 py-1 space-y-1 bg-slate-50/60 dark:bg-slate-800/40 rounded-xl mb-1">
                {campusSubmenu.map((sub, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      onClose();
                      onOpenPage(sub.page);
                    }}
                    className="w-full text-left py-1.5 px-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-800 rounded-lg transition"
                  >
                    {sub.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* NEWS & EVENTS */}
          <button
            onClick={() => {
              onClose();
              onOpenPage('news');
            }}
            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 font-semibold text-xs sm:text-sm text-left transition cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <Calendar className="w-4 h-4 text-slate-600 dark:text-slate-400" />
              <span>News & Events</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>

          {/* GALLERY */}
          <button
            onClick={() => {
              onClose();
              onOpenPage('gallery');
            }}
            className="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 font-semibold text-xs sm:text-sm text-left transition cursor-pointer"
          >
            <Image className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <span>Photo Gallery</span>
          </button>

          {/* VIRTUAL TOUR */}
          <button
            onClick={() => {
              onClose();
              onOpenVirtualTour();
            }}
            className="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 font-semibold text-xs sm:text-sm text-left transition cursor-pointer"
          >
            <PlayCircle className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <span>Virtual Tour 360°</span>
          </button>

          {/* CONTACT US */}
          <button
            onClick={() => {
              onClose();
              onOpenPage('contact');
            }}
            className="w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 font-semibold text-xs sm:text-sm text-left transition cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-slate-600 dark:text-slate-400" />
            <span>Contact Us</span>
          </button>

          {/* PORTAL ACCESS LOGIN BUTTON (Exclusive to Sidebar as requested) */}
          <div className="pt-2">
            <a
              href={schoolConfig.portalLoginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 font-bold text-xs py-3 px-3.5 rounded-xl flex items-center justify-between transition shadow-2xs cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <LogIn className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Portal Access | School Study</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-blue-500" />
            </a>
          </div>

          {/* ADMISSIONS OPEN CARD BANNER */}
          <div 
            onClick={() => {
              onClose();
              onOpenAdmission();
            }}
            className="mt-3 p-3.5 rounded-2xl bg-blue-50/90 dark:bg-slate-800/90 border border-blue-100/90 dark:border-slate-700 flex items-center justify-between cursor-pointer hover:bg-blue-100/70 transition"
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-amber-400 text-slate-900 flex items-center justify-center flex-shrink-0 shadow-2xs">
                <Megaphone className="w-5 h-5 fill-slate-900" />
              </div>
              <div>
                <h4 className="text-xs font-black text-blue-950 dark:text-white leading-tight">
                  Admissions Open for 2026–27
                </h4>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
                  Give your child the right start for a brighter future.
                </p>
              </div>
            </div>
            <div className="w-7 h-7 rounded-full bg-white dark:bg-slate-700 shadow-2xs flex items-center justify-center text-blue-700 dark:text-blue-300 flex-shrink-0 ml-2">
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>

        </div>

        {/* 4. Footer: Social Icons (pointing to #), Contact Details & Sprout Tagline */}
        <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 space-y-3">
          {/* Social Icons Row using react-social-icons */}
          <div className="flex items-center justify-center space-x-2">
            <SocialIcon url="https://facebook.com" style={{ height: 30, width: 30 }} className="hover:scale-110 transition-transform shadow-2xs" />
            <SocialIcon url="https://instagram.com" style={{ height: 30, width: 30 }} className="hover:scale-110 transition-transform shadow-2xs" />
            <SocialIcon url="https://youtube.com" style={{ height: 30, width: 30 }} className="hover:scale-110 transition-transform shadow-2xs" />
            <SocialIcon url="https://linkedin.com" style={{ height: 30, width: 30 }} className="hover:scale-110 transition-transform shadow-2xs" />
            <SocialIcon url="https://twitter.com" style={{ height: 30, width: 30 }} className="hover:scale-110 transition-transform shadow-2xs" />
          </div>

          {/* Contact Details */}
          <div className="text-center space-y-1 text-[11px] text-slate-600 dark:text-slate-400">
            <div className="flex items-center justify-center space-x-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{schoolConfig.phone}</span>
            </div>
            <div className="flex items-center justify-center space-x-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span className="truncate">{schoolConfig.email}</span>
            </div>
          </div>

          {/* Sprout Slogan */}
          <div className="flex items-center justify-center space-x-1.5 pt-1 text-slate-700 dark:text-slate-300">
            <Sprout className="w-4 h-4 text-emerald-600" />
            <span className="font-['Caveat'] text-sm font-bold">
              Education Today for a Brighter Tomorrow
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
