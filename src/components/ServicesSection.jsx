import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from '../contexts/LanguageContext';

// Icons - General
const CheckCircleIcon = () => (
  <svg
    className="w-5 h-5 mr-2.5 text-green-500 flex-shrink-0 mt-0.5"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

// Icons for structured content
const ProblemIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const SolutionIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const FeatureIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l-3 3m5.657 5.657l-3-3M4.343 15.657l3 3m-5.657-5.657l3 3"
    />
  </svg>
);
const EffectIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

// Main Service Icons
const EmailIcon = () => (
  <span className="text-3xl md:text-4xl text-orange-500">📧</span>
);
const OnboardingIcon = () => (
  <span className="text-3xl md:text-4xl text-orange-500">🚀</span>
);
const CrmIcon = () => (
  <span className="text-3xl md:text-4xl text-orange-500">📊</span>
);
const ColdMailIcon = () => (
  <span className="text-3xl md:text-4xl text-orange-500">📫</span>
);
const WebIcon = () => (
  <span className="text-3xl md:text-4xl text-blue-500">🌐</span>
);
const CrawlerIcon = () => (
  <span className="text-3xl md:text-4xl text-green-500">🕷️</span>
);
const AppIcon = () => (
  <span className="text-3xl md:text-4xl text-purple-500">📱</span>
);

const servicesData = [
  {
    id: "email",
    name: "이메일 처리 자동화",
    Icon: EmailIcon,
    description: "반복적인 이메일 분류, 응대, 전달을 자동화하여 시간을 절약합니다.",
    details: {
      image: "/images/services/email-autoresponder.png",
      title: "AI 이메일 비서",
      text: "수신 이메일을 내용에 따라 분석하여 담당자에게 자동 전달하거나, 자주 묻는 질문에 대한 답변을 생성합니다. 스팸 필터링, 중요 메일 알림 등 맞춤 설정이 가능합니다.",
      link: "http://pf.kakao.com/_DcvJn/chat",
      recommendedIndustries:
        "온라인 쇼핑몰, SaaS 기업, 고객 지원센터, 교육 기관",
      structuredContent: {
        problem: {
          title: "문제 상황",
          description:
            "느리고 반복적인 이메일 응대로 인한 잠재 고객 이탈, 낮은 전환율, 높은 운영 비용, 직원 번아웃",
        },
        solution: {
          title: "iMate 솔루션",
          description:
            "GPT 기반 AI가 고객 문의 의도를 정확히 파악하여, 24시간 365일 개인화된 답변을 60초 내 자동 전송합니다.",
        },
        features: {
          title: "주요 기능 및 특징",
          items: [
            "지능형 문의 분석 및 분류",
            "AI 기반 답변 생성 및 추천",
            "다국어 지원 및 자동 번역",
            "CRM 및 외부 시스템 연동",
            "지속적인 학습 및 성능 최적화",
            "상세 리포팅 및 성과 분석 대시보드",
          ],
        },
        effects: {
          title: "도입 효과",
          items: [
            "응답 속도 60초 이내로 혁신",
            "이메일 처리 시간 90% 절감",
            "고객 만족도 25% 향상",
            "운영 비용 50% 절감",
          ],
        },
      },
    },
  },
  {
    id: "onboarding",
    name: "고객 온보딩",
    Icon: OnboardingIcon,
    description: "신규 고객에게 제품 사용법 안내, 환영 메시지 발송 등을 자동화합니다.",
    details: {
      image: "/images/services/onboarding-automation.png",
      title: "AI 온보딩 전문가",
      text: "고객의 서비스 가입 즉시, 단계별 맞춤 안내 메시지를 자동으로 발송하여 고객의 초기 이탈을 방지하고 제품 활성화를 돕습니다.",
      link: "http://pf.kakao.com/_DcvJn/chat",
      recommendedIndustries: "SaaS, 온라인 교육, 멤버십 서비스, 금융 상품",
      structuredContent: {
        problem: {
          title: "문제 상황",
          description:
            "높은 초기 이탈률, 일관성 없는 온보딩 경험, 반복적인 안내 업무 부담, 낮은 서비스/제품 활성화 비율",
        },
        solution: {
          title: "iMate 솔루션",
          description:
            "고객 여정 단계별 맞춤형 환영 메시지, 사용 가이드, 튜토리얼, 주요 기능 안내, 성공 팁 등을 자동으로 제공합니다.",
        },
        features: {
          title: "주요 기능 및 특징",
          items: [
            "다채널 온보딩 시나리오 설계",
            "개인화된 콘텐츠 자동 발송",
            "고객 행동 기반 조건부 메시징",
            "핵심 기능 안내 및 사용 유도",
            "진행 상황 추적 및 리포팅",
          ],
        },
        effects: {
          title: "도입 효과",
          items: [
            "온보딩 완료율 40% 증가",
            "초기 이탈률 30% 감소",
            "지원 문의 60% 감소",
            "장기 고객 유지율(Retention) 증가",
          ],
        },
      },
    },
  },
  {
    id: "crm",
    name: "리드 관리",
    Icon: CrmIcon,
    description: "영업 기회를 자동으로 포착하여 CRM에 기록하고 담당자에게 알립니다.",
    details: {
      image: "/images/services/crm-followup.png",
      title: "AI 리드 관리 매니저",
      text: "웹사이트, 소셜 미디어 등 다양한 채널에서 발생하는 잠재 고객 정보를 실시간으로 수집하고, 정해진 기준에 따라 분류하여 CRM에 자동으로 저장합니다.",
      link: "http://pf.kakao.com/_DcvJn/chat",
      recommendedIndustries:
        "B2B 영업팀, 부동산 중개, 고가 컨설팅 서비스, 금융 투자 유치",
      structuredContent: {
        problem: {
          title: "문제 상황",
          description:
            "영업 담당자의 바쁜 일정으로 인한 리드 관리 소홀, 잠재 고객과의 관계 단절, 낮은 미팅 전환율, 수동 팔로우업의 비효율",
        },
        solution: {
          title: "iMate 솔루션",
          description:
            "CRM 데이터와 연동하여 고객의 행동 및 상태 변화에 따라 AI가 개인화된 후속 메시지, 정보, 제안을 적시에 자동 발송합니다.",
        },
        features: {
          title: "주요 기능 및 특징",
          items: [
            "실시간 CRM 데이터 연동 및 동기화",
            "고객 행동 기반 트리거 설정",
            "개인화된 메시지 자동 생성 및 발송",
            "영업 단계별 맞춤 시나리오",
            "A/B 테스트 및 성과 분석",
          ],
        },
        effects: {
          title: "도입 효과",
          items: [
            "팔로우업 업무 80% 자동화",
            "리드 응답률 2배 증가",
            "미팅 성사율 50% 향상",
            "영업 주기 평균 15% 단축",
          ],
        },
      },
    },
  },
  {
    id: "coldmail",
    name: "콜드메일 발송",
    Icon: ColdMailIcon,
    description: "타겟 고객 목록을 기반으로 개인화된 콜드메일을 자동으로 발송합니다.",
    details: {
      image: "/images/services/coldmail-automation.png",
      title: "AI 콜드메일 전문가",
      text: "타겟 고객의 특성과 니즈를 분석하여 맞춤형 콜드메일 콘텐츠를 대량 생성하고, 최적의 시간에 발송하여 오픈율과 응답률을 극대화합니다.",
      link: "http://pf.kakao.com/_DcvJn/chat",
      recommendedIndustries: "스타트업, B2B 기업, 마케팅/PR 대행사, 헤드헌팅",
      structuredContent: {
        problem: {
          title: "문제 상황",
          description:
            "낮은 콜드메일 오픈율과 응답률, 스팸으로 간주될 위험, 타겟 고객 분석 및 메시지 작성에 소요되는 많은 시간",
        },
        solution: {
          title: "iMate 솔루션",
          description:
            "타겟 고객의 최신 정보를 AI가 실시간으로 분석하여, 1:1 맞춤형 콜드메일 초안을 자동으로 생성하고 발송 스케줄링까지 지원합니다.",
        },
        features: {
          title: "주요 기능 및 특징",
          items: [
            "타겟 고객 자동 프로파일링",
            "AI 기반 초개인화 메시지 생성",
            "실시간 정보 반영 및 시의성 확보",
            "발송 스케줄링 및 시퀀스 자동화",
            "오픈율/응답률 추적 및 성과 분석",
          ],
        },
        effects: {
          title: "도입 효과",
          items: [
            "콜드메일 작성 시간 90% 절감",
            "오픈율 평균 40% 이상 달성",
            "응답률 업계 평균 대비 3~5배 증가",
            "미팅 전환율 10% 이상 확보",
          ],
        },
      },
    },
  },
  {
    id: "webcrawling",
    name: "웹사이트 크롤링",
    Icon: CrawlerIcon,
    description: "웹사이트에서 자동으로 데이터를 수집하고 분석하여 비즈니스 인사이트를 제공합니다.",
    details: {
      image: "/images/services/web-crawling.png",
      title: "AI 웹 크롤링 전문가",
      text: "경쟁사 가격 모니터링, 시장 동향 분석, 리드 발굴 등을 위한 맞춤형 크롤링 솔루션을 제공합니다.",
      link: "http://pf.kakao.com/_DcvJn/chat",
      recommendedIndustries: "이커머스, 부동산, 마케팅 에이전시, 리서치 기업",
      structuredContent: {
        problem: {
          title: "문제 상황",
          description: "수동 데이터 수집의 비효율성, 실시간 시장 모니터링의 어려움, 대량 데이터 처리 한계"
        },
        solution: {
          title: "iMate 솔루션",
          description: "AI 기반 스마트 크롤링으로 필요한 데이터를 자동 수집하고 실시간 분석 리포트를 제공합니다."
        },
        features: {
          title: "주요 기능 및 특징",
          items: [
            "지능형 데이터 수집 및 정제",
            "실시간 모니터링 및 알림",
            "다양한 웹사이트 대응",
            "API 연동 및 데이터베이스 저장",
            "맞춤형 분석 리포트 생성"
          ]
        },
        effects: {
          title: "도입 효과",
          items: [
            "데이터 수집 시간 95% 절감",
            "실시간 시장 모니터링",
            "정확도 99% 이상 보장",
            "월 수백만 데이터 처리 가능"
          ]
        }
      }
    }
  },
  {
    id: "webapp",
    name: "웹앱 개발",
    Icon: AppIcon,
    description: "사용자 친화적인 웹 애플리케이션을 최신 기술로 빠르게 개발합니다.",
    details: {
      image: "/images/services/webapp-development.png",
      title: "웹앱 개발 전문가",
      text: "React, Vue.js 등 최신 프레임워크를 활용하여 반응형이고 성능 최적화된 웹앱을 제작합니다.",
      link: "http://pf.kakao.com/_DcvJn/chat",
      recommendedIndustries: "스타트업, SaaS 기업, 온라인 서비스, 교육 플랫폼",
      structuredContent: {
        problem: {
          title: "문제 상황",
          description: "복잡한 개발 과정, 높은 개발 비용, 긴 개발 기간, 유지보수의 어려움"
        },
        solution: {
          title: "iMate 솔루션",
          description: "AI 도구와 자동화를 활용하여 빠르고 효율적인 웹앱 개발을 진행합니다."
        },
        features: {
          title: "주요 기능 및 특징",
          items: [
            "최신 프레임워크 활용",
            "반응형 디자인",
            "API 연동 및 데이터베이스",
            "사용자 인증 시스템",
            "실시간 기능 구현"
          ]
        },
        effects: {
          title: "도입 효과",
          items: [
            "개발 기간 50% 단축",
            "비용 절감 40%",
            "높은 사용자 경험",
            "확장성 보장"
          ]
        }
      }
    }
  },
  {
    id: "landing",
    name: "랜딩페이지 제작",
    Icon: WebIcon,
    description: "전환율 최적화된 고품질 랜딩페이지를 빠르게 제작합니다.",
    details: {
      image: "/images/services/landing-page.png",
      title: "랜딩페이지 제작 전문가",
      text: "마케팅 목표에 맞춘 고전환율 랜딩페이지를 디자인부터 개발까지 원스톱으로 제작합니다.",
      link: "http://pf.kakao.com/_DcvJn/chat",
      recommendedIndustries: "마케팅 에이전시, 스타트업, 온라인 쇼핑몰, 서비스 기업",
      structuredContent: {
        problem: {
          title: "문제 상황",
          description: "낮은 전환율, 느린 로딩 속도, 모바일 최적화 부족, 높은 제작 비용"
        },
        solution: {
          title: "iMate 솔루션",
          description: "전환율 최적화와 성능을 고려한 맞춤형 랜딩페이지를 저렴한 비용으로 빠르게 제작합니다."
        },
        features: {
          title: "주요 기능 및 특징",
          items: [
            "전환율 최적화 디자인",
            "빠른 로딩 속도",
            "모바일 퍼스트 설계",
            "SEO 최적화",
            "분석 도구 연동"
          ]
        },
        effects: {
          title: "도입 효과",
          items: [
            "전환율 평균 40% 향상",
            "로딩 속도 3초 이내",
            "모바일 사용자 경험 최적화",
            "제작 기간 1주일 내 완성"
          ]
        }
      }
    }
  }
];

const SectionCard = ({ icon, title, children }) => (
  <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
    <div className="flex items-center text-slate-800 mb-3">
      <div className="mr-2 text-orange-500">{icon}</div>
      <h4 className="text-lg font-semibold">{title}</h4>
    </div>
    <div className="text-slate-600">{children}</div>
  </div>
);

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    onClose();
    if (link.startsWith("http")) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      setTimeout(() => {
        const element = document.getElementById(link.substring(1));
        if (element) {
          const navbarHeight =
            document.querySelector("nav")?.offsetHeight || 70;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 0);
    }
  };

  const { structuredContent: content } = service.details;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out">
      <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col text-slate-800">
        <div className="flex justify-between items-start p-6 border-b border-slate-200 flex-shrink-0">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg mr-4">
              <service.Icon />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-orange-600">
              {service.name}
            </h3>
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

          <div className="space-y-4">
            <SectionCard icon={<ProblemIcon />} title={content.problem.title}>
              <p>{content.problem.description}</p>
            </SectionCard>

            <SectionCard icon={<SolutionIcon />} title={content.solution.title}>
              <p>{content.solution.description}</p>
            </SectionCard>

            <SectionCard icon={<FeatureIcon />} title={content.features.title}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-2">
                {content.features.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircleIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>

            <SectionCard icon={<EffectIcon />} title={content.effects.title}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-3">
                {content.effects.items.map((item) => {
                  const [value, ...labelParts] = item.split(" ");
                  const label = labelParts.join(" ");
                  return (
                    <div key={item} className="p-2 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">
                        {value}
                      </div>
                      <div className="text-sm text-slate-600">{label}</div>
                    </div>
                  );
                })}
              </div>
            </SectionCard>

            {service.details.recommendedIndustries && (
              <div className="mt-6 pt-4 border-t border-slate-200">
                <h4 className="text-xl font-semibold text-slate-800 mb-3">
                  추천 업종
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.details.recommendedIndustries
                    .split(",")
                    .map((industry) => (
                      <span
                        key={industry}
                        className="bg-orange-100 text-orange-700 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {industry.trim()}
                      </span>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t border-slate-200 text-center flex-shrink-0 bg-white/50">
          <a
            href={service.details.link || "#"}
            onClick={(e) => handleLinkClick(e, service.details.link || "#")}
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
          >
            {service.details.title
              ? `${service.details.title} 도입 문의`
              : "AI Agent 도입 문의하기"}
          </a>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState(null);
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

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white text-slate-800 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          iMate <span className="text-orange-500">AI Agent</span> & <span className="text-blue-500">개발 서비스</span>
        </h2>
        <p
          className={`text-lg text-slate-600 text-center mb-12 md:mb-16 max-w-3xl mx-auto transition-all duration-700 ease-out delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          AI 자동화 에이전트부터 웹 개발까지, 비즈니스 성장을 위한 모든 디지털 솔루션을 제공합니다.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-2 overflow-hidden transform cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                transitionDelay: `${isVisible ? 150 + index * 100 : 0}ms`,
              }}
              onClick={() => openModal(service)}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={service.details.image}
                  alt={`${service.name} 이미지`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-slate-600 mb-3 text-sm leading-relaxed flex-grow min-h-[60px]">
                  {service.description}
                </p>
                <div className="mt-auto pt-4">
                  <div className="w-full text-center font-semibold py-2 px-4 rounded-md text-orange-600 bg-orange-100 hover:bg-orange-500 hover:text-white transition-all duration-300">
                    자세히 보기
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4">
            {t('services.otherQuestion').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            {t('services.customSolution')}
          </p>
          <a
            href="http://pf.kakao.com/_DcvJn/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-orange-50 text-orange-500 font-bold py-4 px-10 rounded-full text-xl border-2 border-orange-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('services.inquireCustom')}
          </a>
        </div>
      </div>
      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </section>
  );
};

export default ServicesSection;
