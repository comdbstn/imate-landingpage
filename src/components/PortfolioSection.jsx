import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PortfolioSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const portfolioProjects = [
    {
      id: 1,
      title: "스마트 헬스케어 랜딩",
      category: "랜딩페이지",
      description: "의료 AI 서비스 런칭을 위한 고전환율 랜딩페이지",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      tags: ["React", "Tailwind", "의료"],
      stats: { conversion: "42%", loading: "1.2초", mobile: "98점" },
      price: "5만원",
      duration: "3일"
    },
    {
      id: 2,
      title: "이커머스 쇼핑몰",
      category: "웹앱",
      description: "패션 브랜드를 위한 완전한 온라인 쇼핑몰 플랫폼",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Node.js", "결제연동"],
      stats: { users: "10K+", orders: "2K+", rating: "4.8/5" },
      price: "40만원",
      duration: "3주"
    },
    {
      id: 3,
      title: "핀테크 대시보드",
      category: "웹앱",
      description: "금융 데이터 분석을 위한 실시간 대시보드 시스템",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["React", "Chart.js", "실시간"],
      stats: { performance: "95점", uptime: "99.9%", users: "5K+" },
      price: "25만원",
      duration: "2주"
    },
    {
      id: 4,
      title: "부동산 플랫폼",
      category: "웹앱",
      description: "매물 검색과 중개 서비스를 통합한 부동산 플랫폼",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      tags: ["Next.js", "지도API", "검색"],
      stats: { listings: "50K+", matches: "85%", satisfaction: "4.7/5" },
      price: "35만원",
      duration: "4주"
    },
    {
      id: 5,
      title: "교육 서비스 랜딩",
      category: "랜딩페이지",
      description: "온라인 강의 플랫폼 홍보를 위한 인터랙티브 랜딩페이지",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      tags: ["React", "애니메이션", "교육"],
      stats: { conversion: "38%", engagement: "6분", signups: "2K+" },
      price: "7만원",
      duration: "4일"
    },
    {
      id: 6,
      title: "레스토랑 예약 시스템",
      category: "웹앱",
      description: "실시간 예약과 메뉴 관리가 가능한 레스토랑 시스템",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      tags: ["React", "예약시스템", "POS"],
      stats: { restaurants: "200+", bookings: "15K+", efficiency: "+40%" },
      price: "30만원",
      duration: "3주"
    }
  ];

  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
          </div>
          
          <div className="p-6 flex-1 overflow-y-auto">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">{project.title}</h3>
            <p className="text-slate-600 mb-4">{project.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">프로젝트 정보</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-600">가격:</span>
                    <span className="font-semibold text-blue-600">{project.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">개발 기간:</span>
                    <span className="font-semibold">{project.duration}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-800 mb-3">주요 성과</h4>
                <div className="space-y-2">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-slate-600 capitalize">{key}:</span>
                      <span className="font-semibold text-green-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-slate-800 mb-3">사용 기술</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-slate-200">
            <button
              onClick={() => {
                window.open("http://pf.kakao.com/_DcvJn/chat", "_blank");
                onClose();
              }}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              🚀 비슷한 프로젝트 문의하기
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-white"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 text-slate-900 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              {t('portfolio.title')}
            </span>
          </h2>
          <p
            className={`text-lg text-slate-600 max-w-3xl mx-auto transition-all duration-700 ease-out delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                transitionDelay: `${isVisible ? index * 150 : 0}ms`,
              }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white bg-opacity-90 text-slate-800 px-2 py-1 rounded text-sm font-semibold">
                    {project.price}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">{project.duration}</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors">
                    {t('portfolio.learnMore')}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-8">
            {t('portfolio.inquireMore')}
          </p>
          <a
            href="http://pf.kakao.com/_DcvJn/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <span>💼</span>
            <span>{t('portfolio.contactPortfolio').replace('💼 ', '')}</span>
          </a>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default PortfolioSection;