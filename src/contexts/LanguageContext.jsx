import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  ko: {
    nav: {
      home: '홈',
      about: 'iMate 소개',
      services: 'AI 서비스',
      development: '개발 외주',
      interactive: 'AI 체험',
      pricing: '요금제',
      team: '팀 소개',
      portfolio: '포트폴리오',
      testimonials: '고객 후기',
      faq: 'FAQ',
      consultation: '무료 상담',
    },
    hero: {
      title: '우리팀에 신입이\n들어왔어요!',
      subtitle: '이메일 응대, 고객 온보딩, 리드 관리, 콜드메일부터\n개발 외주까지 당신의 업무를 대신하는 AI를 만나보세요.',
      tryAi: '📩 AI 기능 체험하기',
      getConsultation: '📞 무료 상담받기',
    },
    about: {
      subtitle: 'About iMate',
      title: 'iMate는\n어떤 서비스인가요?',
      description: '기술과 경험을 바탕으로, 반복적인 비즈니스 업무를 대신하는\nAI 기반의 실전 자동화 시스템 파트너입니다.',
      metrics: {
        timeReduction: {
          value: '70%',
          title: '업무 시간 절감',
          description: 'AI 기반 자동화 시스템으로<br/>업무 효율성 대폭 향상'
        },
        satisfaction: {
          value: '95%',
          title: '고객 만족도 달성',
          description: 'AI와 자동화를 활용한<br/>신속한 고객 응대'
        },
        conversion: {
          value: '3배',
          title: '리드 전환율 증가',
          description: '타겟 고객 맞춤 전략으로<br/>합리적인 비용 제공'
        }
      },
      note: '*SaaS, 온라인 교육, 컨설팅 등 다양한 분야에 적용 가능'
    },
    services: {
      title: 'iMate AI Agent 4종 소개',
      subtitle: '당신의 비즈니스 성장을 가속화할 4가지 핵심 AI 자동화 에이전트를 소개합니다.',
      email: {
        name: '이메일 처리 자동화',
        description: '반복적인 이메일 분류, 응대, 전달을 자동화하여 시간을 절약합니다.',
      },
      onboarding: {
        name: '고객 온보딩',
        description: '신규 고객에게 제품 사용법 안내, 환영 메시지 발송 등을 자동화합니다.',
      },
      crm: {
        name: '리드 관리',
        description: '영업 기회를 자동으로 포착하여 CRM에 기록하고 담당자에게 알립니다.',
      },
      coldmail: {
        name: '콜드메일 발송',
        description: '타겟 고객 목록을 기반으로 개인화된 콜드메일을 자동으로 발송합니다.',
      },
      otherQuestion: 'AI로 해결하고 싶은\n다른 업무가 있으신가요?',
      customSolution: 'iMate는 특정 업무에 국한되지 않습니다. 여러분의 팀이 겪는 모든 비효율을 AI로 해결할 수 있도록 맞춤 솔루션을 제공합니다.',
      inquireCustom: '💡 맞춤 AI 에이전트 문의하기',
    },
    development: {
      title: 'AI 라이브 코딩 개발 외주',
      subtitle: '실시간으로 개발 과정을 확인할 수 있는 투명한 외주 서비스',
      landing: {
        name: '랜딩페이지 개발',
        description: '반응형 디자인과 SEO 최적화를 포함한 고품질 랜딩페이지를 빠르게 제작합니다.',
        features: ['반응형 웹 디자인', 'SEO 최적화', '빠른 로딩 속도', '모바일 최적화'],
        price: '5만원부터',
        duration: '3-5일',
      },
      webapp: {
        name: '웹앱 개발',
        description: 'React, Vue.js 등 최신 기술로 사용자 친화적인 웹 애플리케이션을 개발합니다.',
        features: ['최신 프레임워크', 'API 연동', '데이터베이스 설계', '관리자 패널'],
        price: '20만원부터',
        duration: '1-3주',
      },
      ecommerce: {
        name: 'E-커머스 사이트',
        description: '결제 시스템, 재고 관리, 주문 처리까지 포함한 완전한 온라인 쇼핑몰을 구축합니다.',
        features: ['결제 시스템 연동', '재고 관리', '주문 처리', '고객 관리'],
        price: '40만원부터',
        duration: '2-4주',
      },
      liveFeatures: {
        title: '라이브 코딩의 특장점',
        realtime: '실시간 진행 상황 확인',
        transparent: '투명한 개발 과정',
        communication: '즉시 피드백 및 수정',
        quality: '높은 코드 품질 보장',
      },
      startProject: '프로젝트 시작하기',
    },
    pricing: {
      title: 'iMate 프로그램 요금제',
      subtitle: '귀사의 비즈니스 규모와 필요에 맞는 합리적인 플랜을 선택하세요.',
      standard: {
        name: 'Standard',
        price: '월 30만원',
        description: '최초 1회 개발비 50만원 별도',
        features: [
          'AI 자동화 기능 1개 선택',
          '월 1,000건 처리',
          '기본 연동 지원',
          '이메일 및 채팅 지원',
        ],
        cta: '상담 문의하기',
      },
      enterprise: {
        name: '엔터프라이즈',
        price: '견적 문의',
        description: '비즈니스에 최적화된 솔루션',
        features: [
          '맞춤형 AI 제작',
          '처리 건수 무제한 협의',
          '전용 인프라 구축',
          '전담 매니저 및 최우선 기술 지원',
        ],
        cta: '도입 문의하기',
        badge: '맞춤형 솔루션',
      },
      development: {
        name: '개발 외주',
        price: '프로젝트별',
        description: '라이브 코딩으로 투명한 개발',
        features: [
          '실시간 개발 과정 확인',
          '즉시 피드백 및 수정',
          '고품질 코드 보장',
          '애프터 서비스 포함',
        ],
        cta: '개발 문의하기',
      },
      note: '위 플랜은 시작 가격이며, 사용량과 요구사항에 따라 맞춤 설정이 가능합니다.',
      kakaoInquiry: '카카오 채널 문의',
      consultationText: '를 통해 세부 사항을 조율하고 맞춤 견적을 받아보실 수 있습니다.',
    },
    team: {
      title: '대한민국 최고 수준의 역량을 보유한 최고의 전문가들이 함께합니다',
      heading: '우리는 누구인가요?',
      director: {
        title: 'Director',
        description: '30개 이상의 사업을 경험\n마케팅 자동화 5년차 시니어\n풀스택 엔지니어\n프로젝트 관리 총괄'
      },
      techlead: {
        title: 'Tech Lead',
        description: '서울대학교 지구환경과학부 21\n풀스텍 엔지니어\n자동화 툴 전문가\n시스템 아키텍처 설계\n개발 & 기술 스택 총괄'
      },
      pm: {
        title: 'PM',
        description: '서울대학교 정치외교학부 18\n스타트업 6년차 PM\n해외 대기업 재직\n외부 에이전시 PM 경력\n프로젝트 기획 및 디자인, CS'
      }
    },
    portfolio: {
      title: '포트폴리오',
      subtitle: '실제 프로젝트 사례를 통해 iMate의 개발 실력과 완성도를 확인해보세요',
      learnMore: '자세히 보기 →',
      inquireMore: '더 많은 포트폴리오가 궁금하거나 비슷한 프로젝트를 원하시나요?',
      contactPortfolio: '💼 포트폴리오 문의하기'
    },
    liveCoding: {
      title: '🔴 Live 코딩 데모',
      subtitle: '실제 개발 과정을 실시간으로 확인해보세요. 투명하고 신뢰할 수 있는 개발 프로세스를 경험할 수 있습니다.',
      step1: '프로젝트 설정',
      step2: '컴포넌트 구조 생성', 
      step3: '반응형 디자인 구현',
      step4: '인터랙션 추가',
      step5: '최종 배포',
      advantages: '🎯 라이브 코딩의 장점',
      advantage1: '실시간 진행 상황 모니터링',
      advantage2: '즉시 피드백 및 요구사항 반영',
      advantage3: '투명한 개발 프로세스',
      advantage4: '높은 코드 품질 보장',
      advantage5: '예상치 못한 이슈 즉시 해결',
      finalText: '실제 프로젝트에서 이런 방식으로 개발이 진행됩니다',
      startProject: '🔴 라이브 코딩 프로젝트 시작하기',
      pause: '일시정지',
      play: '재생',
      currentStep: '현재 진행 단계',
      stepProgress: '단계별 진행'
    },
    competitive: {
      title: '왜 iMate를 선택해야 할까요?',
      subtitle: '기존 외주 업체와 확실히 다른 차별화된 서비스를 제공합니다',
      advantages: {
        instant: {
          title: '24시간 즉시 시작',
          subtitle: '기획부터 배포까지',
          description: '상담 후 즉시 개발 시작. 복잡한 계약 절차 없이 바로 프로젝트를 진행할 수 있습니다.',
          stats: '평균 24시간 내 작업 시작'
        },
        live: {
          title: '실시간 라이브 개발',
          subtitle: '투명한 개발 과정',
          description: '개발 과정을 실시간으로 확인하며 즉시 피드백을 제공할 수 있어 완성도가 높습니다.',
          stats: '99% 고객 만족도'
        },
        fast: {
          title: '초고속 개발',
          subtitle: 'AI 어시스턴트 활용',
          description: '최신 AI 도구와 자동화 기술을 활용하여 기존 대비 3-5배 빠른 개발 속도를 실현합니다.',
          stats: '평균 50% 시간 단축'
        },
        accurate: {
          title: '정확한 요구사항 반영',
          subtitle: '즉시 소통 & 수정',
          description: '라이브 코딩 중 실시간 피드백으로 요구사항을 정확히 반영하여 재작업을 최소화합니다.',
          stats: '95% 일회 완성률'
        },
        quality: {
          title: '프리미엄 품질',
          subtitle: '최신 기술 스택',
          description: '업계 최신 기술과 베스트 프랙티스를 적용하여 확장성과 유지보수성이 뛰어난 코드를 제공합니다.',
          stats: '100% 코드 품질 보장'
        },
        secure: {
          title: '안전한 개발 환경',
          subtitle: '보안 & 백업',
          description: '모든 개발 과정이 안전한 환경에서 진행되며 자동 백업으로 데이터 손실 위험이 없습니다.',
          stats: '100% 데이터 보안'
        }
      },
      comparison: {
        title: '기존 외주 업체와의 비교',
        tableHeaders: {
          feature: '구분',
          us: 'iMate',
          others: '일반 외주업체'
        },
        features: {
          start: '개발 시작',
          progress: '진행 상황 확인',
          modification: '수정 반영',
          communication: '커뮤니케이션',
          completion: '완성도',
          pricing: '가격 투명성'
        },
        usValues: {
          start: '24시간 내',
          progress: '실시간 라이브',
          modification: '즉시 반영',
          communication: '라이브 채팅',
          completion: '95% 일회 완성',
          pricing: '고정 가격'
        },
        othersValues: {
          start: '1-2주',
          progress: '주간/월간 보고',
          modification: '다음 단계에서',
          communication: '이메일/미팅',
          completion: '여러 차례 수정',
          pricing: '변동 가능'
        }
      }
    },
    common: {
      learnMore: '자세히 보기',
      contact: '문의하기',
      features: '주요 기능',
      price: '가격',
      duration: '기간',
      inquire: '문의하기',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About iMate',
      services: 'AI Services',
      development: 'Development',
      interactive: 'Try AI',
      pricing: 'Pricing',
      team: 'Team',
      portfolio: 'Portfolio',
      testimonials: 'Testimonials',
      faq: 'FAQ',
      consultation: 'Free Consultation',
    },
    hero: {
      title: 'Meet Your New\nTeam Member!',
      subtitle: 'From email handling, customer onboarding, lead management, cold emailing\nto development outsourcing - meet the AI that handles your work.',
      tryAi: '📩 Try AI Features',
      getConsultation: '📞 Get Free Consultation',
    },
    about: {
      subtitle: 'About iMate',
      title: 'What is\niMate Service?',
      description: 'Based on technology and experience, we are your AI-driven practical automation system partner\nthat handles repetitive business tasks.',
      metrics: {
        timeReduction: {
          value: '70%',
          title: 'Work Time Reduction',
          description: 'Dramatically improved efficiency<br/>with AI-based automation system'
        },
        satisfaction: {
          value: '95%',
          title: 'Customer Satisfaction',
          description: 'Rapid customer response<br/>using AI and automation'
        },
        conversion: {
          value: '3x',
          title: 'Lead Conversion Increase',
          description: 'Cost-effective solutions<br/>with targeted customer strategies'
        }
      },
      note: '*Applicable to various fields including SaaS, online education, consulting, etc.'
    },
    services: {
      title: 'iMate AI Agent Services',
      subtitle: 'Discover 4 core AI automation agents that accelerate your business growth.',
      email: {
        name: 'Email Automation',
        description: 'Automate repetitive email classification, response, and forwarding to save time.',
      },
      onboarding: {
        name: 'Customer Onboarding',
        description: 'Automate product guidance and welcome messages for new customers.',
      },
      crm: {
        name: 'Lead Management',
        description: 'Automatically capture sales opportunities, record in CRM, and notify team members.',
      },
      coldmail: {
        name: 'Cold Email Campaigns',
        description: 'Automatically send personalized cold emails based on target customer lists.',
      },
      otherQuestion: 'Have Other Tasks\nto Solve with AI?',
      customSolution: 'iMate is not limited to specific tasks. We provide custom solutions to solve all inefficiencies your team faces with AI.',
      inquireCustom: '💡 Inquire Custom AI Agent',
    },
    development: {
      title: 'AI Live Coding Development',
      subtitle: 'Transparent outsourcing service where you can monitor development progress in real-time',
      landing: {
        name: 'Landing Page Development',
        description: 'Quickly create high-quality landing pages with responsive design and SEO optimization.',
        features: ['Responsive Web Design', 'SEO Optimization', 'Fast Loading Speed', 'Mobile Optimization'],
        price: 'From $350',
        duration: '3-5 days',
      },
      webapp: {
        name: 'Web App Development',
        description: 'Develop user-friendly web applications using latest technologies like React, Vue.js.',
        features: ['Latest Frameworks', 'API Integration', 'Database Design', 'Admin Panel'],
        price: 'From $1,400',
        duration: '1-3 weeks',
      },
      ecommerce: {
        name: 'E-commerce Site',
        description: 'Build complete online shopping platforms with payment systems, inventory management, and order processing.',
        features: ['Payment System Integration', 'Inventory Management', 'Order Processing', 'Customer Management'],
        price: 'From $2,800',
        duration: '2-4 weeks',
      },
      liveFeatures: {
        title: 'Live Coding Advantages',
        realtime: 'Real-time Progress Monitoring',
        transparent: 'Transparent Development Process',
        communication: 'Instant Feedback & Modifications',
        quality: 'High Code Quality Assurance',
      },
      startProject: 'Start Project',
    },
    pricing: {
      title: 'iMate Program Pricing',
      subtitle: 'Choose a reasonable plan that fits your business scale and needs.',
      standard: {
        name: 'Standard',
        price: '$2,100/month',
        description: 'One-time setup fee $350 separate',
        features: [
          'Choose 1 AI automation feature',
          '1,000 processes per month',
          'Basic integration support',
          'Email and chat support',
        ],
        cta: 'Consultation Inquiry',
      },
      enterprise: {
        name: 'Enterprise',
        price: 'Custom Quote',
        description: 'Business-optimized solution',
        features: [
          'Custom AI creation',
          'Unlimited processing (negotiable)',
          'Dedicated infrastructure',
          'Dedicated manager & priority support',
        ],
        cta: 'Enterprise Inquiry',
        badge: 'Custom Solution',
      },
      development: {
        name: 'Development',
        price: 'Per Project',
        description: 'Transparent development with live coding',
        features: [
          'Real-time development monitoring',
          'Instant feedback & modifications',
          'High-quality code guarantee',
          'After-service included',
        ],
        cta: 'Development Inquiry',
      },
      note: 'Above plans are starting prices and can be customized based on usage and requirements.',
      kakaoInquiry: 'KakaoTalk Inquiry',
      consultationText: ' to coordinate details and get custom quotes.',
    },
    team: {
      title: 'Korea\'s Top-Level Experts Working Together',
      heading: 'Who Are We?',
      director: {
        title: 'Director',
        description: 'Experienced in 30+ businesses\n5 years senior in marketing automation\nFull-stack engineer\nProject management lead'
      },
      techlead: {
        title: 'Tech Lead',
        description: 'Seoul National University Earth Science \'21\nFull-stack engineer\nAutomation tool specialist\nSystem architecture design\nDevelopment & tech stack lead'
      },
      pm: {
        title: 'PM',
        description: 'Seoul National University Political Science \'18\n6 years startup PM\nWorked at overseas corporations\nExternal agency PM experience\nProject planning, design & CS'
      }
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Check iMate\'s development skills and quality through real project examples',
      learnMore: 'Learn More →',
      inquireMore: 'Curious about more portfolios or want similar projects?',
      contactPortfolio: '💼 Portfolio Inquiry'
    },
    liveCoding: {
      title: '🔴 Live Coding Demo',
      subtitle: 'See the actual development process in real-time. Experience transparent and reliable development process.',
      step1: 'Project Setup',
      step2: 'Component Structure Creation',
      step3: 'Responsive Design Implementation',
      step4: 'Adding Interactions',
      step5: 'Final Deployment',
      advantages: '🎯 Live Coding Advantages',
      advantage1: 'Real-time progress monitoring',
      advantage2: 'Instant feedback & requirement reflection',
      advantage3: 'Transparent development process',
      advantage4: 'High code quality assurance',
      advantage5: 'Immediate resolution of unexpected issues',
      finalText: 'This is how development proceeds in actual projects',
      startProject: '🔴 Start Live Coding Project',
      pause: 'Pause',
      play: 'Play',
      currentStep: 'Current Step',
      stepProgress: 'Step Progress'
    },
    competitive: {
      title: 'Why Choose iMate?',
      subtitle: 'We provide differentiated services that are clearly different from existing outsourcing companies',
      advantages: {
        instant: {
          title: '24-Hour Instant Start',
          subtitle: 'From Planning to Deployment',
          description: 'Start development immediately after consultation. Begin projects right away without complex contract procedures.',
          stats: 'Average work starts within 24 hours'
        },
        live: {
          title: 'Real-time Live Development',
          subtitle: 'Transparent Development Process',
          description: 'Monitor development process in real-time and provide immediate feedback for higher completion quality.',
          stats: '99% Customer Satisfaction'
        },
        fast: {
          title: 'Ultra-fast Development',
          subtitle: 'AI Assistant Utilization',
          description: 'Achieve 3-5x faster development speed using latest AI tools and automation technology.',
          stats: 'Average 50% Time Reduction'
        },
        accurate: {
          title: 'Accurate Requirement Reflection',
          subtitle: 'Instant Communication & Modification',
          description: 'Minimize rework by accurately reflecting requirements through real-time feedback during live coding.',
          stats: '95% One-time Completion Rate'
        },
        quality: {
          title: 'Premium Quality',
          subtitle: 'Latest Technology Stack',
          description: 'Provide code with excellent scalability and maintainability using industry-latest technology and best practices.',
          stats: '100% Code Quality Guarantee'
        },
        secure: {
          title: 'Secure Development Environment',
          subtitle: 'Security & Backup',
          description: 'All development proceeds in a secure environment with automatic backup, eliminating data loss risk.',
          stats: '100% Data Security'
        }
      },
      comparison: {
        title: 'Comparison with Existing Outsourcing Companies',
        tableHeaders: {
          feature: 'Category',
          us: 'iMate',
          others: 'General Outsourcing'
        },
        features: {
          start: 'Development Start',
          progress: 'Progress Monitoring',
          modification: 'Modification Reflection',
          communication: 'Communication',
          completion: 'Completion Quality',
          pricing: 'Price Transparency'
        },
        usValues: {
          start: 'Within 24 hours',
          progress: 'Real-time Live',
          modification: 'Immediate Reflection',
          communication: 'Live Chat',
          completion: '95% One-time Completion',
          pricing: 'Fixed Price'
        },
        othersValues: {
          start: '1-2 weeks',
          progress: 'Weekly/Monthly Reports',
          modification: 'Next Phase',
          communication: 'Email/Meetings',
          completion: 'Multiple Revisions',
          pricing: 'Variable'
        }
      }
    },
    common: {
      learnMore: 'Learn More',
      contact: 'Contact',
      features: 'Key Features',
      price: 'Price',
      duration: 'Duration',
      inquire: 'Inquire',
    },
  },
  ja: {
    nav: {
      home: 'ホーム',
      about: 'iMateについて',
      services: 'AIサービス',
      development: '開発委託',
      interactive: 'AI体験',
      pricing: '料金プラン',
      team: 'チーム紹介',
      portfolio: 'ポートフォリオ',
      testimonials: 'お客様の声',
      faq: 'FAQ',
      consultation: '無料相談',
    },
    hero: {
      title: '私たちのチームに\n新人が入りました！',
      subtitle: 'メール対応、顧客オンボーディング、リード管理、コールドメール配信から\n開発委託まで、あなたの業務を代行するAIをご紹介します。',
      tryAi: '📩 AI機能を体験',
      getConsultation: '📞 無料相談を受ける',
    },
    about: {
      subtitle: 'iMateについて',
      title: 'iMateとは\nどのようなサービスですか？',
      description: '技術と経験に基づき、反復的なビジネス業務を代行する\nAI基盤の実戦自動化システムパートナーです。',
      metrics: {
        timeReduction: {
          value: '70%',
          title: '業務時間短縮',
          description: 'AI基盤自動化システムで<br/>業務効率性大幅向上'
        },
        satisfaction: {
          value: '95%',
          title: '顧客満足度達成',
          description: 'AIと自動化を活用した<br/>迅速な顧客対応'
        },
        conversion: {
          value: '3倍',
          title: 'リード転換率増加',
          description: 'ターゲット顧客カスタム戦略で<br/>合理的なコスト提供'
        }
      },
      note: '*SaaS、オンライン教育、コンサルティングなど様々な分野に適用可能'
    },
    services: {
      title: 'iMate AIエージェント サービス',
      subtitle: 'ビジネス成長を加速させる4つのコアAI自動化エージェントをご紹介します。',
      email: {
        name: 'メール処理自動化',
        description: '繰り返しのメール分類、応答、転送を自動化して時間を節約します。',
      },
      onboarding: {
        name: '顧客オンボーディング',
        description: '新規顧客への製品使用方法案内、ウェルカムメッセージ送信などを自動化します。',
      },
      crm: {
        name: 'リード管理',
        description: 'セールス機会を自動的に捕捉し、CRMに記録して担当者に通知します。',
      },
      coldmail: {
        name: 'コールドメール配信',
        description: 'ターゲット顧客リストに基づいてパーソナライズされたコールドメールを自動送信します。',
      },
      otherQuestion: 'AIで解決したい\n他の業務はありますか？',
      customSolution: 'iMateは特定の業務に限定されません。チームが抱えるすべての非効率をAIで解決するカスタムソリューションを提供します。',
      inquireCustom: '💡 カスタムAIエージェントのお問い合わせ',
    },
    development: {
      title: 'AIライブコーディング開発委託',
      subtitle: 'リアルタイムで開発過程を確認できる透明な委託サービス',
      landing: {
        name: 'ランディングページ開発',
        description: 'レスポンシブデザインとSEO最適化を含む高品質ランディングページを迅速に制作します。',
        features: ['レスポンシブWebデザイン', 'SEO最適化', '高速ローディング', 'モバイル最適化'],
        price: '5万円から',
        duration: '3-5日',
      },
      webapp: {
        name: 'Webアプリ開発',
        description: 'React、Vue.jsなどの最新技術でユーザーフレンドリーなWebアプリケーションを開発します。',
        features: ['最新フレームワーク', 'API連携', 'データベース設計', '管理者パネル'],
        price: '20万円から',
        duration: '1-3週間',
      },
      ecommerce: {
        name: 'Eコマースサイト',
        description: '決済システム、在庫管理、注文処理まで含む完全なオンラインショッピングモールを構築します。',
        features: ['決済システム連携', '在庫管理', '注文処理', '顧客管理'],
        price: '40万円から',
        duration: '2-4週間',
      },
      liveFeatures: {
        title: 'ライブコーディングの特徴',
        realtime: 'リアルタイム進捗確認',
        transparent: '透明な開発プロセス',
        communication: '即座のフィードバック・修正',
        quality: '高いコード品質保証',
      },
      startProject: 'プロジェクト開始',
    },
    pricing: {
      title: 'iMateプログラム料金プラン',
      subtitle: 'お客様のビジネス規模とニーズに合った合理的なプランをお選びください。',
      standard: {
        name: 'スタンダード',
        price: '月額30万円',
        description: '初回開発費50万円別途',
        features: [
          'AI自動化機能1つ選択',
          '月1,000件処理',
          '基本連携サポート',
          'メール・チャットサポート',
        ],
        cta: '相談お問い合わせ',
      },
      enterprise: {
        name: 'エンタープライズ',
        price: '見積もりお問い合わせ',
        description: 'ビジネス最適化ソリューション',
        features: [
          'カスタムAI制作',
          '処理件数無制限（要相談）',
          '専用インフラ構築',
          '専任マネージャー・最優先技術サポート',
        ],
        cta: '導入お問い合わせ',
        badge: 'カスタムソリューション',
      },
      development: {
        name: '開発委託',
        price: 'プロジェクト別',
        description: 'ライブコーディングによる透明な開発',
        features: [
          'リアルタイム開発過程確認',
          '即座のフィードバック・修正',
          '高品質コード保証',
          'アフターサービス含む',
        ],
        cta: '開発お問い合わせ',
      },
      note: '上記プランは開始価格であり、使用量と要件に応じてカスタム設定が可能です。',
      kakaoInquiry: 'KakaoTalkお問い合わせ',
      consultationText: 'を通じて詳細を調整し、カスタム見積もりを受け取ることができます。',
    },
    team: {
      title: '韓国最高レベルの能力を保有する最高の専門家たちが協力します',
      heading: '私たちは誰ですか？',
      director: {
        title: 'ディレクター',
        description: '30以上の事業を経験\nマーケティング自動化5年目シニア\nフルスタックエンジニア\nプロジェクト管理統括'
      },
      techlead: {
        title: 'テックリード',
        description: 'ソウル大学地球環境科学部21年卒\nフルスタックエンジニア\n自動化ツール専門家\nシステムアーキテクチャ設計\n開発・技術スタック統括'
      },
      pm: {
        title: 'PM',
        description: 'ソウル大学政治外交学部18年卒\nスタートアップ6年目PM\n海外大企業勤務\n外部エージェンシーPM経歴\nプロジェクト企画・デザイン・CS'
      }
    },
    portfolio: {
      title: 'ポートフォリオ',
      subtitle: '実際のプロジェクト事例を通じてiMateの開発実力と完成度を確認してください',
      learnMore: '詳細を見る →',
      inquireMore: 'より多くのポートフォリオが気になる、または似たようなプロジェクトをお望みですか？',
      contactPortfolio: '💼 ポートフォリオお問い合わせ'
    },
    liveCoding: {
      title: '🔴 ライブコーディングデモ',
      subtitle: '実際の開発過程をリアルタイムで確認してください。透明で信頼できる開発プロセスを体験できます。',
      step1: 'プロジェクト設定',
      step2: 'コンポーネント構造生成',
      step3: 'レスポンシブデザイン実装',
      step4: 'インタラクション追加',
      step5: '最終デプロイ',
      advantages: '🎯 ライブコーディングの利点',
      advantage1: 'リアルタイム進捗モニタリング',
      advantage2: '即座のフィードバック・要件反映',
      advantage3: '透明な開発プロセス',
      advantage4: '高いコード品質保証',
      advantage5: '予期しない問題の即座解決',
      finalText: '実際のプロジェクトでこのような方式で開発が進行されます',
      startProject: '🔴 ライブコーディングプロジェクト開始',
      pause: '一時停止',
      play: '再生',
      currentStep: '現在の進行段階',
      stepProgress: '段階別進行'
    },
    competitive: {
      title: 'なぜiMateを選ぶべきでしょうか？',
      subtitle: '既存の外注業者とは確実に異なる差別化されたサービスを提供します',
      advantages: {
        instant: {
          title: '24時間即座開始',
          subtitle: '企画からデプロイまで',
          description: '相談後即座に開発開始。複雑な契約手続きなしですぐにプロジェクトを進行できます。',
          stats: '平均24時間以内に作業開始'
        },
        live: {
          title: 'リアルタイムライブ開発',
          subtitle: '透明な開発過程',
          description: '開発過程をリアルタイムで確認し、即座にフィードバックを提供できるため完成度が高いです。',
          stats: '99% 顧客満足度'
        },
        fast: {
          title: '超高速開発',
          subtitle: 'AIアシスタント活用',
          description: '最新のAIツールと自動化技術を活用して既存比3-5倍速い開発速度を実現します。',
          stats: '平均50% 時間短縮'
        },
        accurate: {
          title: '正確な要求事項反映',
          subtitle: '即座疎通＆修正',
          description: 'ライブコーディング中のリアルタイムフィードバックで要求事項を正確に反映し、再作業を最小化します。',
          stats: '95% 一回完成率'
        },
        quality: {
          title: 'プレミアム品質',
          subtitle: '最新技術スタック',
          description: '業界最新技術とベストプラクティスを適用して拡張性と保守性に優れたコードを提供します。',
          stats: '100% コード品質保証'
        },
        secure: {
          title: '安全な開発環境',
          subtitle: 'セキュリティ＆バックアップ',
          description: 'すべての開発過程が安全な環境で進行され、自動バックアップでデータ損失リスクがありません。',
          stats: '100% データセキュリティ'
        }
      },
      comparison: {
        title: '既存外注業者との比較',
        tableHeaders: {
          feature: '区分',
          us: 'iMate',
          others: '一般外注業者'
        },
        features: {
          start: '開発開始',
          progress: '進行状況確認',
          modification: '修正反映',
          communication: 'コミュニケーション',
          completion: '完成度',
          pricing: '価格透明性'
        },
        usValues: {
          start: '24時間以内',
          progress: 'リアルタイムライブ',
          modification: '即座反映',
          communication: 'ライブチャット',
          completion: '95% 一回完成',
          pricing: '固定価格'
        },
        othersValues: {
          start: '1-2週間',
          progress: '週間/月間報告',
          modification: '次段階で',
          communication: 'メール/ミーティング',
          completion: '数回修正',
          pricing: '変動可能'
        }
      }
    },
    common: {
      learnMore: '詳細を見る',
      contact: 'お問い合わせ',
      features: '主要機能',
      price: '価格',
      duration: '期間',
      inquire: 'お問い合わせ',
    },
  },
};

const detectLanguage = () => {
  // 지역별 언어 감지
  const userLang = navigator.language || navigator.userLanguage || 'ko';
  const country = userLang.toLowerCase();
  
  if (country.includes('en') || country.includes('us')) return 'en';
  if (country.includes('ja') || country.includes('jp')) return 'ja';
  return 'ko'; // 기본값
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // localStorage에서 저장된 언어 설정을 확인, 없으면 자동 감지
    const saved = localStorage.getItem('iMate_language');
    return saved || detectLanguage();
  });

  useEffect(() => {
    localStorage.setItem('iMate_language', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // fallback to key if translation not found
      }
    }
    
    return value || key;
  };

  const changeLanguage = (newLang) => {
    if (translations[newLang]) {
      setLanguage(newLang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};