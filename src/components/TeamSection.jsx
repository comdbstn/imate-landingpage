import React, { useState, useEffect, useRef } from 'react';

const teamMembers = [
  {
    role: 'Director',
    image: '/images/imate-character.png', // Assuming the logo is here
    details: [
      '30개 이상의 사업을 경험',
      '마케팅 자동화 5년차 시니어',
      '풀스택 엔지니어',
    ],
    summary: '프로젝트 관리 총괄',
  },
  {
    role: 'Tech Lead',
    image: '/images/imate-character.png',
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
    image: '/images/imate-character.png',
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
      className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          Why Trust Us?
        </h2>
        <p className={`text-lg text-slate-400 mb-12 md:mb-16 max-w-2xl mx-auto transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          대한민국 최고 수준의 개발 역량을 보유한 최고의 전문가들이 함께합니다
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`bg-slate-800 rounded-xl shadow-lg p-8 flex flex-col items-center transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${isVisible ? 150 + index * 150 : 0}ms` }}
            >
              <img src={member.image} alt={`${member.role} logo`} className="w-24 h-24 mb-6 rounded-full bg-white p-2" />
              <h3 className="text-xl font-bold text-orange-400 mb-4">{member.role}</h3>
              <ul className="text-slate-300 space-y-2 text-center flex-grow mb-6">
                {member.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <p className="text-orange-300 font-semibold border-t border-slate-700 pt-4 w-full">
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