import React from 'react';
import { ArrowUp, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SocialIcon } from 'react-social-icons';
import { schoolConfig } from '../../data/schoolData';

export default function Footer({ schoolName, onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 pt-10 sm:pt-14 pb-28 sm:pb-20 border-t border-slate-200/90 dark:border-slate-800 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-slate-200 dark:border-slate-800">
          
          {/* Col 1: School Branding & Social Links */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl border border-blue-600/30 flex items-center justify-center p-1 bg-white dark:bg-slate-900 shadow-2xs">
                <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8 text-blue-900 dark:text-blue-400">
                  <path
                    d="M24 4L8 10V22C8 32 15 40 24 44C33 40 40 32 40 22V10L24 4Z"
                    stroke="#1e3a8a"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <path
                    d="M16 28C19 26 22 26 24 28C26 26 29 26 32 28V19C29 17 26 17 24 19C22 17 19 17 16 19V28Z"
                    fill="#2563eb"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white leading-tight">
                  {schoolName}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {schoolConfig.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              Committed to holistic child development, academic excellence, moral integrity and technological innovation. Affiliated with the Central Board of Secondary Education (CBSE), New Delhi.
            </p>

            {/* Social Media Icons via react-social-icons */}
            <div className="pt-2">
              <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-2.5 uppercase tracking-wider">
                Follow Our Channels
              </p>
              <div className="flex items-center space-x-2.5">
                <SocialIcon url="https://facebook.com" style={{ height: 34, width: 34 }} className="hover:scale-110 transition-transform shadow-2xs" />
                <SocialIcon url="https://instagram.com" style={{ height: 34, width: 34 }} className="hover:scale-110 transition-transform shadow-2xs" />
                <SocialIcon url="https://youtube.com" style={{ height: 34, width: 34 }} className="hover:scale-110 transition-transform shadow-2xs" />
                <SocialIcon url="https://linkedin.com" style={{ height: 34, width: 34 }} className="hover:scale-110 transition-transform shadow-2xs" />
                <SocialIcon url="https://twitter.com" style={{ height: 34, width: 34 }} className="hover:scale-110 transition-transform shadow-2xs" />
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs">
              <li><button onClick={() => onNavigate('home')} className="hover:text-blue-600 transition cursor-pointer">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-blue-600 transition cursor-pointer">About School</button></li>
              <li><button onClick={() => onNavigate('academics')} className="hover:text-blue-600 transition cursor-pointer">Academics</button></li>
              <li><button onClick={() => onNavigate('admissions')} className="hover:text-blue-600 transition cursor-pointer">Admissions 2026-27</button></li>
              <li><button onClick={() => onNavigate('campus-life')} className="hover:text-blue-600 transition cursor-pointer">Campus Life</button></li>
              <li><button onClick={() => onNavigate('news')} className="hover:text-blue-600 transition cursor-pointer">News & Events</button></li>
            </ul>
          </div>

          {/* Col 3: Academic Wings */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Academic Wings
            </h5>
            <ul className="space-y-2 text-xs">
              <li><span className="font-semibold text-slate-700 dark:text-slate-300">Pre-Primary:</span> Nursery & Kindergarten</li>
              <li><span className="font-semibold text-slate-700 dark:text-slate-300">Primary Wing:</span> Grades 1 to 5</li>
              <li><span className="font-semibold text-slate-700 dark:text-slate-300">Middle School:</span> Grades 6 to 8</li>
              <li><span className="font-semibold text-slate-700 dark:text-slate-300">Secondary:</span> Grades 9 & 10 (CBSE)</li>
              <li><span className="font-semibold text-slate-700 dark:text-slate-300">Senior Secondary:</span> Science, Commerce & Arts</li>
            </ul>
          </div>

          {/* Col 4: Campus Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Campus Contact
            </h5>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{schoolConfig.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{schoolConfig.phone}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{schoolConfig.email}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>{schoolConfig.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 {schoolName}. All rights reserved.</p>

          <div className="flex items-center space-x-3 text-slate-400">
            <span>CBSE Affiliated</span>
            <span>•</span>
            <a href="#" className="hover:text-blue-600 transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-blue-600 transition">Terms of Service</a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-9 h-9 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 flex items-center justify-center transition shadow-2xs cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
