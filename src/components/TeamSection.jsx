import React, { useState, useEffect, useRef } from 'react';

const DirectorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
  </svg>
);

const TechLeadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const PMIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const teamMembers = [
  {
    role: 'Director',
    Icon: DirectorIcon,
    details: [
      '30개 이상의 사업을 경험',
      '마케팅 자동화 5년차 시니어',
      '풀스택 엔지니어',
    ],
    summary: '프로젝트 관리 총괄',
  },
  {
    role: 'Tech Lead',
    Icon: TechLeadIcon,
    details: [
      '서울대학교 지구환경과학부 21',
      '풀스텍 엔지니어',
      '자동화 툴 전문가',
      '시스템 아키텍처 설계',
    ],
    summary: '개발 & 기술 스택 총괄',
  },
  {
    role: 'PM',
    Icon: PMIcon,
    details: [
      '서울대학교 정치외교학부 18',
      '스타트업 6년차 PM',
      '해외 대기업 재직',
      '외부 에이전시 PM 경력',
    ],
    summary: '프로젝트 기획 및 디자인, CS',
  },
];

const TeamSection = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current && observer) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white text-slate-800 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out text-slate-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          우리는 누구인가요?
        </h2>
        <p className={`text-lg text-slate-500 mb-12 md:mb-16 max-w-2xl mx-auto transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          대한민국 최고 수준의 역량을 보유한 최고의 전문가들이 함께합니다
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-slate-50 rounded-xl shadow-lg p-8 flex flex-col items-center transition-all duration-500 ease-out hover:shadow-orange-500/20 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${isVisible ? 150 + index * 150 : 0}ms` }}
            >
              <div className="w-24 h-24 mb-6 flex items-center justify-center bg-orange-100 rounded-full">
                <member.Icon />
              </div>
              <div className="bg-orange-500 text-white text-sm font-semibold rounded-full px-4 py-1 mb-4">
                {member.role}
              </div>
              <ul className="text-slate-600 space-y-2 text-center flex-grow mb-6">
                {member.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <p className="text-orange-600 font-bold border-t border-slate-200 pt-4 w-full">
                {member.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection; 