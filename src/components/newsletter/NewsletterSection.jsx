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
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-8 sm:p-14 text-center text-white shadow-2xl shadow-blue-950/20 relative overflow-hidden">
          
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Mail Icon and Header */}
            <div className="inline-flex items-center justify-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-blue-200 mb-4">
              <Mail className="w-4 h-4" />
              <span>Newsletter & Updates</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
              Stay Connected With Our Campus
            </h3>

            <p className="text-sm sm:text-base text-blue-200/80 mb-8 max-w-xl mx-auto leading-relaxed">
              Subscribe to get the latest circulars, examination results, upcoming events, and admission alerts directly in your inbox.
            </p>

            {submitted ? (
              <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-2xl py-4 px-6 text-emerald-200 text-sm font-semibold flex items-center justify-center space-x-2 animate-fadeIn max-w-md mx-auto">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
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
                  className="w-full h-14 pl-6 pr-16 rounded-full bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-4 focus:ring-blue-400/40 shadow-xl"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter subscription"
                  className="absolute right-2 top-2 w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 active:scale-95 text-white flex items-center justify-center transition shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4 -rotate-12 translate-x-[1px]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
