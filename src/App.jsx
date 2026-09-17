import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingDock from './components/layout/FloatingDock';
import NavigationDrawer from './components/layout/NavigationDrawer';

import HeroSection from './components/hero/HeroSection';
import QuickActionGrid from './components/quickActions/QuickActionGrid';
import WhyChooseUs from './components/whyChooseUs/WhyChooseUs';
import PrincipalMessage from './components/principal/PrincipalMessage';
import AcademicsCarousel from './components/academics/AcademicsCarousel';
import AdmissionsBanner from './components/admissions/AdmissionsBanner';
import CampusLifeSection from './components/campusLife/CampusLifeSection';
import NewsSection from './components/news/NewsSection';
import VideoBannerSection from './components/videoBanner/VideoBannerSection';
import TestimonialsCarousel from './components/testimonials/TestimonialsCarousel';
import VirtualTourSection from './components/virtualTour/VirtualTourSection';
import LocationSection from './components/location/LocationSection';
import NewsletterSection from './components/newsletter/NewsletterSection';

import EnquireModal from './components/modals/EnquireModal';
import AdmissionModal from './components/modals/AdmissionModal';
import VideoModal from './components/modals/VideoModal';
import VirtualTourModal from './components/modals/VirtualTourModal';
import SearchModal from './components/modals/SearchModal';
import BrochureModal from './components/modals/BrochureModal';
import PrincipalModal from './components/modals/PrincipalModal';
import DetailModal from './components/modals/DetailModal';
import PageModal from './components/modals/PageModal';

import { schoolConfig } from './data/schoolData';

export default function App() {
  const activeSchoolName = schoolConfig.name; // Malviya Public School

  // Dark / Light Theme state
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // Dedicated Page Modal for Sidebar Options (About, Academics, Admissions, Campus Life, Gallery, News, Contact)
  const [activePageId, setActivePageId] = useState(null);

  // Modal Visibility States
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVirtualTourOpen, setIsVirtualTourOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isPrincipalOpen, setIsPrincipalOpen] = useState(false);

  // Detail Modal for quick action clicks
  const [detailModalData, setDetailModalData] = useState(null);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (target) => {
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'admissions') {
      setIsAdmissionOpen(true);
    } else if (target === 'about') {
      setActivePageId('about');
    } else if (target === 'academics') {
      setActivePageId('academics');
    } else if (target === 'campus-life') {
      setActivePageId('campus-life');
    } else if (target === 'news') {
      setActivePageId('news');
    } else {
      scrollToSection(target);
    }
  };

  const handleQuickAction = (actionId) => {
    switch (actionId) {
      case 'academics':
        setActivePageId('academics');
        break;
      case 'admissions':
        setIsAdmissionOpen(true);
        break;
      case 'student-life':
        setActivePageId('campus-life');
        break;
      case 'safety':
        setDetailModalData({
          title: 'Campus Safety & Transport',
          tag: 'Safety Measures',
          description: 'A 100% secure campus monitored 24x7 with high-definition CCTV surveillance, security checkpoints, female attendants in all school buses with GPS tracking, and an on-campus medical infirmary.',
          features: [
            '24/7 CCTV surveillance throughout campus',
            'GPS-tracked school buses with emergency panic buttons',
            'Trained security personnel & mandatory visitor verification',
            'First aid medical room with qualified resident nursing staff'
          ],
          actionText: 'Contact Safety Desk'
        });
        break;
      case 'gallery':
        setActivePageId('gallery');
        break;
      case 'events':
      case 'news':
        setActivePageId('news');
        break;
      case 'contact':
        setActivePageId('contact');
        break;
      default:
        break;
    }
  };

  const handleSelectAcademicStage = (stage) => {
    setDetailModalData({
      title: `${stage.title} (${stage.grades})`,
      tag: stage.subtitle,
      image: stage.image,
      description: stage.description,
      features: [
        'CBSE Curriculum framework aligned with NEP 2020',
        'Holistic skill-based assessments & experiential projects',
        'Interactive smart classrooms with multimedia content'
      ],
      actionText: 'Apply for Admission'
    });
  };

  const handleSelectCampusActivity = (item) => {
    setDetailModalData({
      title: item.title,
      tag: item.tag,
      image: item.image,
      description: item.description,
      features: [
        'Dedicated qualified coaches and trainers',
        'Annual competitions and inter-school tournaments',
        'State-of-the-art equipment & safe infrastructure'
      ],
      actionText: 'Explore More'
    });
  };

  const handleSelectNews = (news) => {
    setDetailModalData({
      title: news.title,
      tag: `${news.day} ${news.month} ${news.year} • ${news.tag}`,
      description: news.description,
      features: [
        'Published by the Principal & Academic Committee',
        'Open to parents, students, and prospective applicants'
      ],
      actionText: 'Close & Return'
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex flex-col antialiased selection:bg-blue-600 selection:text-white transition-colors">
      
      {/* Header with Marquee, Apply Now, and Theme Switcher */}
      <Header
        schoolName={activeSchoolName}
        tagline={schoolConfig.tagline}
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onOpenEnquire={() => setIsEnquireOpen(true)}
        onOpenAdmission={() => setIsAdmissionOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full pb-20">
        
        {/* 1. Hero Section with Exact Phone Reference Look */}
        <HeroSection
          onOpenEnquire={() => setIsEnquireOpen(true)}
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        {/* 2. 8 Quick Action Tiles Grid */}
        <QuickActionGrid onActionClick={handleQuickAction} />

        {/* 3. Why Choose Us? 4 Pillars */}
        <WhyChooseUs />

        {/* 4. Message from the Principal */}
        <PrincipalMessage
          schoolName={activeSchoolName}
          onOpenReadMore={() => setIsPrincipalOpen(true)}
        />

        {/* 5. Academics Levels Grid */}
        <AcademicsCarousel onSelectStage={handleSelectAcademicStage} />

        {/* 6. Admissions Open Banner */}
        <AdmissionsBanner
          onOpenAdmission={() => setIsAdmissionOpen(true)}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* 7. Campus Life */}
        <CampusLifeSection
          onExploreStudentLife={() => setActivePageId('campus-life')}
          onSelectActivity={handleSelectCampusActivity}
        />

        {/* 8. Combined Section: News & Announcements + Video Showcase Banner */}
        <section className="py-12 sm:py-16 bg-slate-50/70 dark:bg-slate-950/40 border-y border-slate-100 dark:border-slate-800" id="news-and-video">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-6">
                <NewsSection
                  onSelectNews={handleSelectNews}
                  onViewAllNews={() => setActivePageId('news')}
                />
              </div>
              <div className="lg:col-span-6">
                <VideoBannerSection onOpenVideo={() => setIsVideoOpen(true)} />
              </div>
            </div>
          </div>
        </section>

        {/* 9. Parent Testimonials */}
        <TestimonialsCarousel schoolName={activeSchoolName} />

        {/* 10. Virtual Campus Tour + Our Location */}
        <section className="py-12 sm:py-16 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800" id="location-and-tour">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-6">
                <VirtualTourSection onOpenVirtualTour={() => setIsVirtualTourOpen(true)} />
              </div>
              <div className="lg:col-span-6">
                <LocationSection schoolName={activeSchoolName} />
              </div>
            </div>
          </div>
        </section>

        {/* 11. Stay Connected Newsletter */}
        <NewsletterSection />
      </main>

      {/* 12. Footer (Clean Light Mode with social links) */}
      <Footer schoolName={activeSchoolName} onNavigate={handleNavigate} />

      {/* 13. FLOATING DOCKER */}
      <FloatingDock
        onNavigate={handleNavigate}
        onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
      />

      {/* 14. Slide Navigation Drawer (Left-Side with default closed accordions, pages & portal login) */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        schoolName={activeSchoolName}
        darkMode={darkMode}
        onToggleTheme={toggleTheme}
        onNavigate={(target) => {
          setIsDrawerOpen(false);
          handleNavigate(target);
        }}
        onOpenEnquire={() => setIsEnquireOpen(true)}
        onOpenAdmission={() => setIsAdmissionOpen(true)}
        onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
        onOpenPage={(pageId) => setActivePageId(pageId)}
      />

      {/* 15. Dedicated Page View Modal for Sidebar Options */}
      <PageModal
        pageId={activePageId}
        onClose={() => setActivePageId(null)}
        onOpenAdmission={() => setIsAdmissionOpen(true)}
        onOpenEnquire={() => setIsEnquireOpen(true)}
        onOpenVirtualTour={() => setIsVirtualTourOpen(true)}
      />

      {/* Interactive Modals */}
      <EnquireModal
        isOpen={isEnquireOpen}
        onClose={() => setIsEnquireOpen(false)}
        schoolName={activeSchoolName}
      />

      <AdmissionModal
        isOpen={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
        schoolName={activeSchoolName}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        schoolName={activeSchoolName}
      />

      <VirtualTourModal
        isOpen={isVirtualTourOpen}
        onClose={() => setIsVirtualTourOpen(false)}
        schoolName={activeSchoolName}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateToSection={(target) => {
          setIsSearchOpen(false);
          handleNavigate(target);
        }}
      />

      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        schoolName={activeSchoolName}
      />

      <PrincipalModal
        isOpen={isPrincipalOpen}
        onClose={() => setIsPrincipalOpen(false)}
        schoolName={activeSchoolName}
      />

      <DetailModal
        isOpen={Boolean(detailModalData)}
        onClose={() => setDetailModalData(null)}
        detailData={detailModalData}
        onActionClick={() => {
          if (detailModalData?.actionText?.includes('Admission') || detailModalData?.actionText?.includes('Apply')) {
            setIsAdmissionOpen(true);
          } else if (detailModalData?.actionText?.includes('Contact')) {
            setActivePageId('contact');
          }
        }}
      />
    </div>
  );
}
