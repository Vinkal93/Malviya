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
            <Bell className="w-4 h-4 text-blue-600" />
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              News & Announcements
            </h3>
          </div>
          <button
            onClick={onViewAllNews}
            className="inline-flex items-center space-x-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition cursor-pointer"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-500 mb-6">
          Stay updated with the latest happenings, academic results, and celebrations.
        </p>

        {/* Announcements List */}
        <div className="space-y-3.5">
          {newsAnnouncements.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectNews(item)}
              className="flex items-center space-x-4 p-4 bg-white rounded-2xl border border-slate-200/70 shadow-xs hover:shadow-md hover:border-blue-200 transition active:scale-[0.99] cursor-pointer group"
            >
              {/* Date Badge */}
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-center text-blue-900 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition">
                <span className="text-lg font-black leading-none">
                  {item.day}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider mt-0.5 opacity-80">
                  {item.month}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-bold">
                    {item.tag}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Chevron Right */}
              <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition flex-shrink-0">
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
