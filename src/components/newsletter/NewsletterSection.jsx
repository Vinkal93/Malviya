import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="py-8 sm:py-12 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-6 sm:p-14 text-center text-white shadow-2xl shadow-blue-950/20 relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Mail Icon and Header */}
            <div className="inline-flex items-center justify-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-blue-200 mb-3 sm:mb-4">
              <Mail className="w-4 h-4" />
              <span>Newsletter & Updates</span>
            </div>

            <h3 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight mb-2 sm:mb-3">
              Stay Connected With Our Campus
            </h3>

            <p className="text-xs sm:text-base text-blue-200/80 mb-6 sm:mb-8 max-w-xl mx-auto leading-relaxed">
              Subscribe to get latest circulars, examination results, upcoming events, and admission alerts directly in your inbox.
            </p>

            {submitted ? (
              <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-2xl py-3 px-5 text-emerald-200 text-xs sm:text-sm font-semibold flex items-center justify-center space-x-2 animate-fadeIn max-w-md mx-auto">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Thank you for subscribing! We'll keep you updated.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full h-12 sm:h-14 pl-5 pr-14 sm:pr-16 rounded-full bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-4 focus:ring-blue-400/40 shadow-xl"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter subscription"
                  className="absolute right-1.5 top-1.5 sm:right-2 sm:top-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-700 hover:bg-blue-800 active:scale-95 text-white flex items-center justify-center transition shadow-md cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 -rotate-12 translate-x-[1px]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
