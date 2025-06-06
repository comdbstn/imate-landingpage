import React, { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.05 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current && observer) observer.unobserve(sectionRef.current); };
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 70;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer 
      ref={sectionRef}
      className="bg-slate-800 text-slate-300 pt-12 pb-8 md:pt-16 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Column 1: Brand and Slogan */}
          <div 
            className={`md:col-span-1 lg:col-span-2 transform transition-all ease-out duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${isVisible ? 100 : 0}ms` }}
          >
            <h3 className="text-2xl font-bold text-white mb-3">
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 text-transparent bg-clip-text">iMate</span>
            </h3>
            <p className="text-slate-400 mb-4 max-w-sm">
              AI 기반 업무 자동화 솔루션. 당신의 비즈니스에 스마트한 날개를 달아드립니다.
            </p>
            {/* Optional: Social Media Icons */}
            {/* <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-orange-400"><FaFacebookF size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-orange-400"><FaTwitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-orange-400"><FaLinkedinIn size={20} /></a>
            </div> */}
          </div>

          {/* Column 2: Quick Links */}
          <div 
            className={`transform transition-all ease-out duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${isVisible ? 250 : 0}ms` }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">바로가기</h4>
            <ul className="space-y-2">
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-orange-400 transition-colors">iMate 소개</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-orange-400 transition-colors">AI Agent 소개</a></li>
              <li><a href="#interactive-gpt" onClick={(e) => scrollToSection(e, 'interactive-gpt')} className="hover:text-orange-400 transition-colors">AI Agent 체험</a></li>
              <li><a href="#pricing" onClick={(e) => scrollToSection(e, 'pricing')} className="hover:text-orange-400 transition-colors">요금제</a></li>
              <li><a href="#faq-cta" onClick={(e) => scrollToSection(e, 'faq-cta')} className="hover:text-orange-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info (Simplified) */}
          <div 
            className={`transform transition-all ease-out duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${isVisible ? 400 : 0}ms` }}
          >
            <h4 className="text-lg font-semibold text-white mb-4">문의하기</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Email: <a href="mailto:contact@imate.ai" className="text-slate-300 hover:text-orange-400 transition-colors">contact@imate.ai</a></li>
              <li>
                {/* Kakao Channel Link */}
                <div className="flex justify-center items-center gap-4 bg-orange-100 p-4 rounded-lg">
                  <img src="/images/kakao-icon.png" alt="Kakao" className="h-8 w-8"/>
                  <a 
                    href="http://pf.kakao.com/_DcvJn/chat" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-semibold text-orange-800 hover:text-orange-600 transition-colors"
                  >
                    전문가 상담 신청
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div 
          className={`border-t border-slate-700 pt-8 text-center md:text-left transform transition-all ease-out duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: `${isVisible ? 550 : 0}ms` }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500 mb-2 md:mb-0">
              &copy; {currentYear} iMate. All rights reserved. 
            </p>
            <p className="text-sm text-slate-500">
              Designed with <span className="text-orange-400">&hearts;</span> by iMate Team
            </p>
          </div>
          <div className="mt-4 text-sm text-slate-500 space-y-1">
            <p>사업자 등록번호: 405-06-65006</p>
            <p>위치: 서울 구로구 디지털로31길 53 이앤씨벤처드림타워5차 1012호</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 