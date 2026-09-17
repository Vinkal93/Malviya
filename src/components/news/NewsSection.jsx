import React from 'react';
import { ArrowRight, ChevronRight, Bell } from 'lucide-react';
import { newsAnnouncements } from '../../data/schoolData';

export default function NewsSection({ onSelectNews, onViewAllNews }) {
  return (
    <div className="h-full flex flex-col justify-between" id="news">
      <div>
        {/* Header with View All link */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Bell className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <h3 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              News & Circulars
            </h3>
          </div>
          <button
            onClick={onViewAllNews}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4 sm:mb-6">
          Stay updated with latest happenings, academic circulars, and celebrations.
        </p>

        {/* Announcements List */}
        <div className="space-y-3">
          {newsAnnouncements.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectNews(item)}
              className="flex items-center space-x-3.5 p-3 sm:p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/70 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700 transition active:scale-[0.99] cursor-pointer group"
            >
              {/* Date Badge */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 flex flex-col items-center justify-center text-blue-900 dark:text-blue-300 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition">
                <span className="text-base sm:text-lg font-black leading-none">
                  {item.day}
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mt-0.5 opacity-80">
                  {item.month}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[10px] font-bold">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-0.5 sm:mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
