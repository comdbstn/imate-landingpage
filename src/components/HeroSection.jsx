import React, { useState, useEffect, useRef } from 'react';

// Placeholder icons (these might not be needed anymore if the section is removed)
// const EmailIcon = () => <span className="text-3xl text-orange-500">📧</span>;
// const OnboardingIcon = () => <span className="text-3xl text-orange-500">🚀</span>;
// const CrmIcon = () => <span className="text-3xl text-orange-500">📊</span>;
// const ColdMailIcon = () => <span className="text-3xl text-orange-500">📫</span>;

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current && observer) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-white text-slate-800 pt-20 md:pt-0 overflow-hidden"
    >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="md:text-left text-center">
            <h1 
              className={`text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">
                우리팀에 신입이<br />들어왔어요!
              </span>
            </h1>
            <p 
              className={`text-lg md:text-xl text-slate-600 mb-10 max-w-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-700 ease-out delay-150 md:mx-0 mx-auto`}
            >
              이메일 응대, 고객 온보딩, 리드 관리, 콜드메일까지<br />
              당신의 업무를 대신하는 4가지 AI Agent를 지금 만나보세요.
            </p>
            <div 
              className={`flex flex-col sm:flex-row ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-700 ease-out delay-300 md:justify-start justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12`}
            >
              <a
                href="http://pf.kakao.com/_CYGdn/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-auto"
              >
                📩 AI 기능 체험하기
              </a>
              <a
                href="http://pf.kakao.com/_CYGdn/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-orange-500 border-2 border-orange-500 text-orange-500 hover:text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out w-full sm:w-auto"
              >
                📞 무료 상담받기
              </a>
            </div>
          </div>

          {/* Right Column: Character Image */}
          <div 
            className={`hidden md:flex justify-center items-center transition-all duration-1000 ease-out delay-[450ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
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