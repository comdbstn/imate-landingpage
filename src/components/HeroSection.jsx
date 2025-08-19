import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from '../contexts/LanguageContext';

// Placeholder icons (these might not be needed anymore if the section is removed)
// const EmailIcon = () => <span className="text-3xl text-orange-500">📧</span>;
// const OnboardingIcon = () => <span className="text-3xl text-orange-500">🚀</span>;
// const CrmIcon = () => <span className="text-3xl text-orange-500">📊</span>;
// const ColdMailIcon = () => <span className="text-3xl text-orange-500">📫</span>;

const HeroSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current && observer)
        observer.unobserve(sectionRef.current);
    };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 70;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="h-screen flex items-center justify-center text-slate-800 pt-16 md:pt-[72px] bg-gradient-to-br from-orange-50 via-amber-50 to-white overflow-hidden relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="md:text-left text-center">
            <h1
              className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">
                {t('hero.title').split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index === 0 && <br />}
                  </React.Fragment>
                ))}
              </span>
            </h1>
            <p
              className={`text-lg md:text-xl text-slate-600 mb-10 max-w-xl ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} transition-all duration-500 ease-out delay-100 md:mx-0 mx-auto`}
            >
              {t('hero.subtitle').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index === 0 && <br />}
                </React.Fragment>
              ))}
            </p>
            <div
              className={`flex flex-col sm:flex-row ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"} transition-all duration-500 ease-out delay-200 md:justify-start justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12`}
            >
              <a
                href="#interactive-gpt"
                onClick={(e) => scrollToSection(e, "interactive-gpt")}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out w-full sm:w-auto"
              >
                {t('hero.tryAi')}
              </a>
              <a
                href="http://pf.kakao.com/_DcvJn/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-orange-500 border-2 border-orange-500 text-orange-500 hover:text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out w-full sm:w-auto"
              >
                {t('hero.getConsultation')}
              </a>
            </div>
          </div>

          {/* Right Column: Character Image */}
          <div
            className={`hidden md:flex justify-center items-center transition-all duration-700 ease-out delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <img
              src="/images/imate-character.png"
              alt="iMate Character"
              className="max-w-md lg:max-w-lg xl:max-w-xl h-auto"
            />
          </div>
        </div>

        {/* Visuals - Agent Icons - This entire div block will be removed */}
        {/* 
        <div 
          className={`mt-16 md:mt-20 transition-all duration-700 ease-out delay-[600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <h3 
            className={`text-2xl font-semibold text-center mb-6 text-slate-700 transition-all duration-700 ease-out delay-[600ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            이런 업무들을 대신할 수 있어요!
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {[ 
              { Icon: EmailIcon, name: '이메일' },
              { Icon: OnboardingIcon, name: '온보딩' },
              { Icon: CrmIcon, name: 'CRM' },
              { Icon: ColdMailIcon, name: '콜드메일' },
            ].map((agent) => (
              <div 
                key={agent.name} 
                className={`flex flex-col items-center p-4 bg-slate-100 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-out w-32 md:w-36`}
              >
                <agent.Icon />
                <span className="mt-2 text-sm text-slate-700 font-medium">{agent.name}</span>
              </div>
            ))}
          </div>
        </div> 
        */}
      </div>
    </section>
  );
};

export default HeroSection;
