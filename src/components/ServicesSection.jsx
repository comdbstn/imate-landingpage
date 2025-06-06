import React, { useState, useEffect, useRef } from 'react';

// Icons - ensure they are visible on light backgrounds
const EmailIcon = () => <span className="text-3xl md:text-4xl text-orange-500">📧</span>;
const OnboardingIcon = () => <span className="text-3xl md:text-4xl text-orange-500">🚀</span>;
const CrmIcon = () => <span className="text-3xl md:text-4xl text-orange-500">📊</span>;
const ColdMailIcon = () => <span className="text-3xl md:text-4xl text-orange-500">📫</span>;

// Helper for modal list items
const ListItem = ({ children }) => (
  <li className="flex items-start py-1">
    <svg className="w-5 h-5 mr-2.5 text-orange-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
    <span className="text-slate-700">{children}</span>
  </li>
);

const servicesData = [
  {
    id: 'email',
    name: '이메일 처리 자동화',
    Icon: EmailIcon,
    description: '반복적인 이메일 분류, 응대, 전달을 자동화하여 시간을 절약합니다.',
    details: {
      image: '/images/agent-email.png',
      title: 'AI 이메일 비서',
      text: '수신 이메일을 내용에 따라 분석하여 담당자에게 자동 전달하거나, 자주 묻는 질문에 대한 답변을 생성합니다. 스팸 필터링, 중요 메일 알림 등 맞춤 설정이 가능합니다.',
      link: 'http://pf.kakao.com/_DcvJn/chat' // All modal CTAs will point to Kakao chat for detailed inquiry
    }
  },
  {
    id: 'onboarding',
    name: '고객 온보딩',
    Icon: OnboardingIcon,
    description: '신규 고객에게 제품 사용법 안내, 환영 메시지 발송 등을 자동화합니다.',
    details: {
      image: '/images/agent-onboarding.png',
      title: 'AI 온보딩 전문가',
      text: '고객의 서비스 가입 즉시, 단계별 맞춤 안내 메시지를 자동으로 발송하여 고객의 초기 이탈을 방지하고 제품 활성화를 돕습니다. 고객 데이터를 기반으로 개인화된 온보딩 경험을 제공할 수 있습니다.',
      link: 'http://pf.kakao.com/_DcvJn/chat'
    }
  },
  {
    id: 'crm',
    name: '리드 관리',
    Icon: CrmIcon,
    description: '영업 기회를 자동으로 포착하여 CRM에 기록하고 담당자에게 알립니다.',
    details: {
      image: '/images/agent-crm.png',
      title: 'AI 리드 관리 매니저',
      text: '웹사이트, 소셜 미디어 등 다양한 채널에서 발생하는 잠재 고객 정보를 실시간으로 수집하고, 정해진 기준에 따라 분류하여 CRM에 자동으로 저장합니다. 영업팀은 고가치 리드에만 집중할 수 있습니다.',
      link: 'http://pf.kakao.com/_DcvJn/chat'
    }
  },
  {
    id: 'coldmail',
    name: '콜드메일 발송',
    Icon: ColdMailIcon,
    description: '타겟 고객 목록을 기반으로 개인화된 콜드메일을 자동으로 발송합니다.',
    details: {
      image: '/images/agent-coldmail.png',
      title: 'AI 콜드메일 전문가',
      text: '타겟 고객의 특성과 니즈를 분석하여 맞춤형 콜드메일 콘텐츠를 대량 생성하고, 최적의 시간에 발송하여 오픈율과 응답률을 극대화합니다. A/B 테스트를 통해 가장 효과적인 메시지를 찾아냅니다.',
      link: 'http://pf.kakao.com/_DcvJn/chat'
    }
  }
];

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    onClose(); 
    if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      setTimeout(() => {
        const element = document.getElementById(link.substring(1));
        if (element) {
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 70;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 0);
    }
  };

  const renderExtendedDescription = (description) => {
    if (!description) return null;
    return description.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('**[') && paragraph.endsWith(']**')) {
        return <h4 key={index} className="text-xl font-semibold text-slate-800 mt-6 mb-3">{paragraph.replace(/\*\*\s*\[\s*|\s*\]\s*\*\*/g, '')}</h4>;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n- ').map(item => item.replace(/^- /, ''));
        return (
          <ul key={index} className="space-y-1 mb-3">
            {items.map((item, i) => <ListItem key={i}>{item}</ListItem>)}
          </ul>
        );
      }
      return <p key={index} className="text-slate-700 mb-3 leading-relaxed whitespace-pre-line">{paragraph}</p>;
    });
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out">
      <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col text-slate-800">
        <div className="flex justify-between items-start p-6 border-b border-slate-200 flex-shrink-0">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg mr-4">
              <service.Icon />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-orange-600">{service.name}</h3>
          </div>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-orange-500 text-4xl font-light leading-none p-1 -mt-2 -mr-2 transition-colors duration-200"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        <div className="overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200">
          {service.details.image && (
            <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={service.details.image} 
                alt={`${service.name} 서비스 시각화`} 
                className="w-full h-auto object-cover"
              />
            </div>
          )}
          
          <div className="space-y-3 text-slate-700 leading-relaxed text-base px-1">
            
            <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-800 mb-2">{service.details.title}</h4>
              <p className="text-slate-600">{service.details.text}</p>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-300">
              {renderExtendedDescription(service.details.extendedDescription)}
            </div>
            
            {service.recommendedIndustries &&
              <div className="mt-6 pt-6 border-t border-slate-300">
                <h4 className="text-xl font-semibold text-slate-800 mb-3">추천 업종 및 활용 분야</h4>
                <div className="flex flex-wrap gap-2">
                  {service.recommendedIndustries.split(', ').map(industry => (
                    <span key={industry} className="bg-orange-100 text-orange-700 text-sm font-medium px-3 py-1 rounded-full">{industry}</span>
                  ))}
                </div>
              </div>
            }
          </div>
        </div>

        <div className="p-6 border-t border-slate-200 text-center flex-shrink-0">
          <a
            href={service.details.link || 'http://pf.kakao.com/_DcvJn/chat'}
            onClick={(e) => handleLinkClick(e, service.details.link || 'http://pf.kakao.com/_DcvJn/chat')}
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
          >
            {service.details.title ? `${service.details.title} 도입 문의` : 'AI Agent 도입 문의하기'}
          </a>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
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

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto'; 
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white text-slate-800 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          iMate <span className="text-orange-500">AI Agent</span> 4종 소개
        </h2>
        <p 
          className={`text-lg text-slate-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          당신의 비즈니스 성장을 가속화할 4가지 핵심 AI 자동화 에이전트를 소개합니다. 
          각 서비스의 상세 내용을 확인하고, 직접 체험해보세요.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              onClick={() => openModal(service)}
              className={`bg-slate-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:scale-[1.03] overflow-hidden transform transition-all ease-out duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${isVisible ? 300 + index * 100 : 0}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={service.details.image} alt={`${service.name} 이미지`} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-slate-600 mb-3 text-sm leading-relaxed flex-grow min-h-[60px]">{service.description}</p>
                <div className="mt-auto">
                  <div
                    className="w-full bg-white hover:bg-orange-500 border-2 border-orange-500 text-orange-500 hover:text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 text-sm text-center"
                  >
                    자세히 보기
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">AI로 해결하고 싶은<br/>다른 업무가 있으신가요?</h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            iMate는 특정 업무에 국한되지 않습니다. 여러분의 팀이 겪는 모든 비효율을 AI로 해결할 수 있도록 맞춤 솔루션을 제공합니다.
          </p>
          <a 
            href="http://pf.kakao.com/_DcvJn/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-orange-50 text-orange-500 font-bold py-4 px-10 rounded-full text-xl border-2 border-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            💡 맞춤 AI 에이전트 문의하기
          </a>
        </div>

        {/* Testimonial Section within Services */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-10">이미 많은 팀이 iMate와 함께합니다</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Testimonial Card 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <p className="text-slate-600 mb-6">"단순 반복적인 이메일 응대 업무가 확 줄어서 핵심 업무에 더 집중할 수 있게 되었어요. 특히 CS팀의 만족도가 높습니다."</p>
              <div className="font-semibold text-slate-800">박서준</div>
              <div className="text-sm text-slate-500">스타트업 '오늘의 집' CS팀장</div>
            </div>
            {/* Testimonial Card 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-100">
              <p className="text-slate-600 mb-6">"영업 파이프라인 관리가 이렇게 편해질 줄 몰랐습니다. 리드 정보가 CRM에 자동으로 정리되니 정말 편리해요."</p>
              <div className="font-semibold text-slate-800">김민지</div>
              <div className="text-sm text-slate-500">IT 솔루션 기업 '데이터링크' 영업대표</div>
            </div>
          </div>
          <div className="text-center mt-12">
            <a 
              href="http://pf.kakao.com/_DcvJn/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              내부 도입 후기 더보기
            </a>
          </div>
        </div>
      </div>
      {selectedService && <ServiceModal service={selectedService} onClose={closeModal} />}
    </section>
  );
};

export default ServicesSection; 