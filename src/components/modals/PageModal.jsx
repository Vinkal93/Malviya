import React from 'react';
import { 
  X, Landmark, BookOpen, Users, Trophy, Image, 
  Calendar, Phone, CheckCircle, MapPin, Download, ArrowRight, Clock
} from 'lucide-react';
import { academicStages, campusLifeItems, newsAnnouncements, schoolConfig } from '../../data/schoolData';

export default function PageModal({ pageId, onClose, onOpenAdmission, onOpenEnquire, onOpenVirtualTour }) {
  if (!pageId) return null;

  const renderContent = () => {
    switch (pageId) {
      case 'about':
        return (
          <div className="space-y-6">
            {/* Campus Image Header */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xs h-44 sm:h-56 bg-slate-100">
              <img
                src="/hero-banner-main.png"
                alt="Malviya Public School Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-amber-300">Campus & Excellence</span>
                <h4 className="text-base sm:text-lg font-black leading-tight text-white drop-shadow-sm">Malviya Public School</h4>
                <p className="text-xs text-white/80 font-medium">{schoolConfig.address}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">About Malviya Public School</h4>
                <p className="text-xs text-slate-500">Established {schoolConfig.establishedYear} • Affiliated with CBSE New Delhi</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Malviya Public School is a premier educational institution committed to academic brilliance, moral integrity, sportsmanship and leadership. For more than two decades, we have been nurturing bright young minds equipped for the challenges of tomorrow.
              </p>
              <h5 className="font-bold text-slate-900 text-sm pt-2">Our Vision & Core Values</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h6 className="font-bold text-blue-900 text-xs mb-1">Academic Rigor</h6>
                  <p className="text-xs text-slate-500">Inquiry-based CBSE curriculum with hands-on STEM and digital classrooms.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h6 className="font-bold text-blue-900 text-xs mb-1">Character & Values</h6>
                  <p className="text-xs text-slate-500">Instilling empathy, discipline, cultural pride and community responsibility.</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-900 block">Principal Mrs. Neha Sharma</span>
                <span className="text-[11px] text-slate-500">M.A., M.Ed., Ph.D. in Child Psychology</span>
              </div>
              <button
                onClick={() => { onClose(); onOpenEnquire(); }}
                className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs cursor-pointer"
              >
                Contact Principal's Desk
              </button>
            </div>
          </div>
        );

      case 'academics':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">CBSE Curriculum & Academic Wings</h4>
                <p className="text-xs text-slate-500">Comprehensive educational stages from Pre-Primary to Grade 12</p>
              </div>
            </div>

            <div className="space-y-4">
              {academicStages.map((stage) => (
                <div key={stage.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row gap-4 items-start">
                  <img src={stage.image} alt={stage.title} className="w-full sm:w-28 h-28 object-cover rounded-xl flex-shrink-0" />
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <h5 className="font-black text-sm text-slate-900">{stage.title}</h5>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">{stage.grades}</span>
                    </div>
                    <p className="text-xs text-blue-700 font-semibold">{stage.subtitle}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => { onClose(); onOpenAdmission(); }}
              className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition cursor-pointer"
            >
              Apply for Admission in 2026–27
            </button>
          </div>
        );

      case 'admissions':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-emerald-50 border border-emerald-100">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">Admissions Guidelines & Process</h4>
                <p className="text-xs text-slate-500">Registrations Open for Academic Session 2026–27</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <h5 className="font-bold text-slate-900 text-sm">Step-by-Step Admission Procedure:</h5>
              <div className="space-y-2">
                <div className="flex items-start space-x-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0">1</span>
                  <p><strong className="text-slate-800">Online Application:</strong> Submit the student registration form online or collect from school office.</p>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0">2</span>
                  <p><strong className="text-slate-800">Campus Interaction:</strong> Friendly counseling and age-appropriate assessment interaction.</p>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0">3</span>
                  <p><strong className="text-slate-800">Document Verification:</strong> Birth Certificate, Transfer Certificate (TC) & Previous Report Card.</p>
                </div>
                <div className="flex items-start space-x-2.5">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0">4</span>
                  <p><strong className="text-slate-800">Seat Confirmation:</strong> Fee payment and allotment of House, uniform, and bus route.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => { onClose(); onOpenAdmission(); }}
                className="flex-1 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition cursor-pointer"
              >
                Register Online Now
              </button>
              <button
                onClick={() => { onClose(); onOpenEnquire(); }}
                className="flex-1 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition cursor-pointer"
              >
                Request Fee Details
              </button>
            </div>
          </div>
        );

      case 'campus-life':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-amber-50 border border-amber-100">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">Campus Life & Co-Curriculars</h4>
                <p className="text-xs text-slate-500">Sports, Performing Arts, Robotics & Leadership</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {campusLifeItems.map((item) => (
                <div key={item.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <img src={item.image} alt={item.title} className="w-full h-32 object-cover rounded-xl" />
                  <h5 className="font-bold text-sm text-slate-900">{item.title}</h5>
                  <p className="text-xs text-slate-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'gallery':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-teal-50 border border-teal-100">
              <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <Image className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">Campus Photo Gallery</h4>
                <p className="text-xs text-slate-500">Glimpses of life, classrooms, laboratories & achievements</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { title: "Main Academic Building", url: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
                { title: "Smart Interactive Class", url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80" },
                { title: "Science & Robotics Lab", url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" },
                { title: "Sports Complex", url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80" },
                { title: "Knowledge Library", url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80" },
                { title: "Cultural Performances", url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80" },
              ].map((g, i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden bg-slate-100 h-32">
                  <img src={g.url} alt={g.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[10px] font-bold text-white truncate">{g.title}</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => { onClose(); onOpenVirtualTour(); }}
              className="w-full py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs transition cursor-pointer"
            >
              Open Interactive 360° Campus Tour
            </button>
          </div>
        );

      case 'news':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">News, Circulars & Announcements</h4>
                <p className="text-xs text-slate-500">Official updates from the Academic Board</p>
              </div>
            </div>

            <div className="space-y-3">
              {newsAnnouncements.map((news) => (
                <div key={news.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start space-x-3.5">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-900 flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-sm font-black">{news.day}</span>
                    <span className="text-[10px] font-bold uppercase">{news.month}</span>
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold">{news.tag}</span>
                    <h5 className="font-bold text-xs sm:text-sm text-slate-900 mt-1">{news.title}</h5>
                    <p className="text-xs text-slate-500 mt-1">{news.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 rounded-2xl bg-blue-50 border border-blue-100">
              <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">Campus Contact & Directions</h4>
                <p className="text-xs text-slate-500">Reach our reception, admissions helpline or visit campus</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>{schoolConfig.address}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>{schoolConfig.phone} / {schoolConfig.altPhone}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>Office Visiting Hours: {schoolConfig.workingHours}</span>
              </div>
            </div>

            <button
              onClick={() => { onClose(); onOpenEnquire(); }}
              className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition cursor-pointer"
            >
              Submit an Inquiry Message
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      <div onClick={onClose} className="absolute inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity" />

      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[88vh] flex flex-col animate-scaleUp">
        {/* Header */}
        <div className="px-5 py-4 bg-white border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-extrabold text-base text-slate-900 capitalize">{pageId.replace('-', ' ')}</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition cursor-pointer"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain modal-scroll p-5 sm:p-6">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
