import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LiveCodingDemo = () => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef(null);
  
  const codingSteps = [
    {
      title: t('liveCoding.step1'),
      code: `// 새 React 프로젝트 생성
npx create-react-app landing-page
cd landing-page

// 필요한 패키지 설치
npm install tailwindcss @headlessui/react`,
      explanation: "프로젝트 초기 설정 및 필요한 라이브러리 설치"
    },
    {
      title: t('liveCoding.step2'),
      code: `// src/components/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-white mb-6">
          혁신적인 솔루션
        </h1>
        <p className="text-xl text-white/80 mb-8">
          당신의 비즈니스를 성장시킬 완벽한 파트너
        </p>
      </div>
    </section>
  );
};`,
      explanation: "메인 히어로 섹션 컴포넌트 생성"
    },
    {
      title: t('liveCoding.step3'),
      code: `// 모바일 최적화 및 반응형 레이아웃
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  <div className="space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold">
      모바일 친화적 디자인
    </h2>
    <p className="text-lg text-gray-600">
      모든 디바이스에서 완벽하게 작동합니다
    </p>
  </div>
  <div className="flex justify-center">
    <img src="/hero-image.jpg" alt="Hero" 
         className="w-full max-w-md rounded-lg shadow-xl" />
  </div>
</div>`,
      explanation: "다양한 화면 크기에 대응하는 반응형 레이아웃 구현"
    },
    {
      title: t('liveCoding.step4'),
      code: `// 스크롤 애니메이션 및 호버 효과
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    { threshold: 0.1 }
  );
  
  if (ref.current) observer.observe(ref.current);
}, []);

return (
  <div className={\`transition-all duration-700 \${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  }\`}>`,
      explanation: "사용자 경험을 향상시키는 스크롤 애니메이션 구현"
    },
    {
      title: t('liveCoding.step5'),
      code: `// 프로덕션 빌드 및 배포
npm run build

// Vercel 배포
npm install -g vercel
vercel --prod

// 배포 완료!
✅ 사이트가 성공적으로 배포되었습니다.
🌐 https://your-site.vercel.app`,
      explanation: "최적화된 빌드 생성 및 실제 서버에 배포"
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            setCurrentStep(step => (step + 1) % codingSteps.length);
            return 0;
          }
          return prev + 2;
        });
      }, 100);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, codingSteps.length]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleStepChange = (stepIndex) => {
    setCurrentStep(stepIndex);
    setProgress(0);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('liveCoding.title')}
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            {t('liveCoding.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 코드 에디터 모킹 */}
            <div className="bg-slate-800 rounded-lg overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-4 bg-slate-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-slate-300">VSCode</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-red-400">LIVE</span>
                  </div>
                </div>
                <button
                  onClick={handlePlayPause}
                  className="flex items-center space-x-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors"
                >
                  {isPlaying ? (
                    <>
                      <span>⏸️</span>
                      <span>{t('liveCoding.pause')}</span>
                    </>
                  ) : (
                    <>
                      <span>▶️</span>
                      <span>{t('liveCoding.play')}</span>
                    </>
                  )}
                </button>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-blue-400">
                      {codingSteps[currentStep].title}
                    </h3>
                    <div className="text-sm text-slate-400">
                      {currentStep + 1} / {codingSteps.length}
                    </div>
                  </div>
                  <div className="w-full bg-slate-600 rounded-full h-2 mb-4">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-100"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                <pre className="text-sm text-green-400 font-mono leading-relaxed overflow-x-auto">
                  <code>{codingSteps[currentStep].code}</code>
                </pre>
              </div>
            </div>

            {/* 설명 및 컨트롤 패널 */}
            <div className="space-y-6">
              <div className="bg-slate-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  {t('liveCoding.currentStep')}
                </h3>
                <p className="text-slate-300 mb-6">
                  {codingSteps[currentStep].explanation}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-medium text-slate-200">{t('liveCoding.stepProgress')}</h4>
                  {codingSteps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => handleStepChange(index)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        index === currentStep
                          ? 'bg-blue-600 text-white'
                          : index < currentStep
                          ? 'bg-green-600/20 text-green-400'
                          : 'bg-slate-700 text-slate-400 hover:bg-slate-600'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          index === currentStep
                            ? 'bg-white text-blue-600'
                            : index < currentStep
                            ? 'bg-green-500 text-white'
                            : 'bg-slate-600 text-slate-400'
                        }`}>
                          {index < currentStep ? '✓' : index + 1}
                        </div>
                        <span className="font-medium">{step.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">🎯 라이브 코딩의 장점</h3>
                <ul className="space-y-3">
                  {[
                    '실시간 진행 상황 모니터링',
                    '즉시 피드백 및 요구사항 반영',
                    '투명한 개발 프로세스',
                    '높은 코드 품질 보장',
                    '예상치 못한 이슈 즉시 해결'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-300 mb-6">
              실제 프로젝트에서 이런 방식으로 개발이 진행됩니다
            </p>
            <a
              href="http://pf.kakao.com/_DcvJn/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span>🔴</span>
              <span>라이브 코딩 프로젝트 시작하기</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveCodingDemo;