import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import NavigationDrawer from './components/layout/NavigationDrawer';

import HeroSection from './components/hero/HeroSection';
import WhyChooseUs from './components/whyChooseUs/WhyChooseUs';
import StatsCard from './components/hero/StatsCard';
import AdmissionsBanner from './components/admissions/AdmissionsBanner';
import QuickActionGrid from './components/quickActions/QuickActionGrid';
import KalamQuoteCard from './components/common/KalamQuoteCard';

import PrincipalMessage from './components/principal/PrincipalMessage';
import AcademicsCarousel from './components/academics/AcademicsCarousel';
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
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.removeAttribute('data-theme');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  // Dedicated Page Modal for Sidebar Options
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

  // Prevent background page from scrolling when any modal, popup or drawer is open on mobile/desktop
  useEffect(() => {
    const isAnyModalOpen = Boolean(
      isDrawerOpen ||
      activePageId ||
      isSearchOpen ||
      isEnquireOpen ||
      isAdmissionOpen ||
      isVideoOpen ||
      isVirtualTourOpen ||
      isBrochureOpen ||
      isPrincipalOpen ||
      detailModalData
    );

    if (isAnyModalOpen) {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalTop = document.body.style.top;
      const originalWidth = document.body.style.width;

      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        const top = document.body.style.top;
        document.body.style.position = originalPosition;
        document.body.style.top = originalTop;
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = originalWidth;
        document.body.style.overflow = originalOverflow;
        if (top) {
          const restoreY = Math.abs(parseInt(top, 10)) || 0;
          window.scrollTo(0, restoreY);
        }
      };
    }
  }, [
    isDrawerOpen,
    activePageId,
    isSearchOpen,
    isEnquireOpen,
    isAdmissionOpen,
    isVideoOpen,
    isVirtualTourOpen,
    isBrochureOpen,
    isPrincipalOpen,
    detailModalData
  ]);

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
      case 'about':
        setActivePageId('about');
        break;
      case 'academics':
        setActivePageId('academics');
        break;
      case 'admissions':
        setIsAdmissionOpen(true);
        break;
      case 'fees':
        setIsEnquireOpen(true);
        break;
      case 'student-life':
      case 'campus-life':
        setActivePageId('campus-life');
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
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col antialiased selection:bg-blue-600 selection:text-white transition-colors duration-300">
      
      {/* 1. Header with News Marquee, Apply Now & Dark Mode Switcher */}
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

      {/* Main Content Flow */}
      <main className="flex-1 w-full overflow-x-hidden">
        
        {/* 2. Hero Section with Background Photo & Overlaid Content */}
        <HeroSection
          onOpenEnquire={() => setIsEnquireOpen(true)}
          onOpenVideo={() => setIsVideoOpen(true)}
        />

        {/* 3. 4 Core Pillars Grid (Academic Excellence, Holistic, Safe, Co-Curricular) */}
        <WhyChooseUs />

        {/* 4. Deep Royal Blue Stats Banner (1000+, 50+, 100%, 25+) */}
        <StatsCard />

        {/* 5. Admissions Open 2026–27 Banner */}
        <AdmissionsBanner
          onOpenAdmission={() => setIsAdmissionOpen(true)}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* 6. Quick Access 8-Tile Grid with View All */}
        <QuickActionGrid onActionClick={handleQuickAction} />

        {/* 7. Dr. A.P.J. Abdul Kalam Inspirational Quote Card */}
        <KalamQuoteCard />

        {/* 8. Message from the Principal */}
        <PrincipalMessage
          schoolName={activeSchoolName}
          onOpenReadMore={() => setIsPrincipalOpen(true)}
        />

        {/* 9. Academics Levels (Pre-Primary to 12) */}
        <AcademicsCarousel onSelectStage={handleSelectAcademicStage} />

        {/* 10. Campus Life & Activities */}
        <CampusLifeSection
          onExploreStudentLife={() => setActivePageId('campus-life')}
          onSelectActivity={handleSelectCampusActivity}
        />

        {/* 11. News & Announcements + Video Showcase Banner */}
        <section className="py-12 sm:py-16 bg-slate-50/70 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800" id="news-and-video">
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

        {/* 12. Parent Testimonials */}
        <TestimonialsCarousel schoolName={activeSchoolName} />

        {/* 13. Virtual Campus Tour & Location Directions */}
        <section className="py-12 sm:py-16 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-800" id="location-and-tour">
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

        {/* 14. Stay Connected Newsletter */}
        <NewsletterSection />
      </main>

      {/* 15. Light Mode Footer with Social Links */}
      <Footer schoolName={activeSchoolName} onNavigate={handleNavigate} />

      {/* 16. Navigation Drawer (Left-Side) */}
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

      {/* 18. Dedicated Page View Modal for Sidebar Items */}
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
