import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ServicesSection from './components/ServicesSection';
import LiveCodingDemo from './components/LiveCodingDemo';
import CompetitiveAdvantage from './components/CompetitiveAdvantage';
import PortfolioSection from './components/PortfolioSection';
import InteractiveAgentSection from './components/InteractiveAgentSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import LanguageSelector from './components/LanguageSelector';

const AppContent = () => {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { name: t('nav.home'), id: 'hero' },
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.services'), id: 'services' },
    { name: t('nav.portfolio'), id: 'portfolio' },
    { name: t('nav.interactive'), id: 'interactive-gpt' },
    { name: t('nav.pricing'), id: 'pricing' },
    { name: t('nav.team'), id: 'team' },
    { name: t('nav.testimonials'), id: 'testimonials' },
    { name: t('nav.faq'), id: 'faq' },
  ];

  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Adjust for fixed navbar height if necessary
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 70; // Estimate or get dynamically
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu on navigation
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans">
      <Analytics />
      {/* Navigation Bar */}
      <nav className="bg-white text-slate-700 p-4 fixed w-full z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="text-2xl font-bold text-orange-500"
          >
            iMate
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <LanguageSelector />
            </li>
            <li>
              <a
                href="http://pf.kakao.com/_DcvJn/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
              >
                {t('nav.consultation')}
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg> // Close icon
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg> // Hamburger icon
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 bg-white shadow-lg rounded-md">
            <ul className="flex flex-col items-center py-2">
              {navItems.map((item) => (
                <li key={item.id} className="w-full text-center">
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="block py-3 px-4 hover:bg-orange-500 hover:text-white transition-colors duration-200 w-full"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="w-full mt-2 px-4">
                <LanguageSelector />
              </li>
              <li className="w-full mt-2 px-4 pb-2">
                <a
                  href="http://pf.kakao.com/_DcvJn/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                >
                  {t('nav.consultation')}
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <ServicesSection />
        <PortfolioSection />
        <LiveCodingDemo />
        <CompetitiveAdvantage />
        <InteractiveAgentSection />
        <PricingSection />
        <TestimonialsSection />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
