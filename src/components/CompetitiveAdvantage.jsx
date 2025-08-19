import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CompetitiveAdvantage = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % advantages.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const advantages = [
    {
      icon: '🚀',
      title: t('competitive.advantages.instant.title'),
      subtitle: t('competitive.advantages.instant.subtitle'),
      description: t('competitive.advantages.instant.description'),
      stats: t('competitive.advantages.instant.stats'),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: '🔴',
      title: t('competitive.advantages.live.title'),
      subtitle: t('competitive.advantages.live.subtitle'),
      description: t('competitive.advantages.live.description'),
      stats: t('competitive.advantages.live.stats'),
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: '⚡',
      title: t('competitive.advantages.fast.title'),
      subtitle: t('competitive.advantages.fast.subtitle'),
      description: t('competitive.advantages.fast.description'),
      stats: t('competitive.advantages.fast.stats'),
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
    },
    {
      icon: '🎯',
      title: t('competitive.advantages.accurate.title'),
      subtitle: t('competitive.advantages.accurate.subtitle'),
      description: t('competitive.advantages.accurate.description'),
      stats: t('competitive.advantages.accurate.stats'),
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
    },
    {
      icon: '💎',
      title: t('competitive.advantages.quality.title'),
      subtitle: t('competitive.advantages.quality.subtitle'),
      description: t('competitive.advantages.quality.description'),
      stats: t('competitive.advantages.quality.stats'),
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: '🔒',
      title: t('competitive.advantages.secure.title'),
      subtitle: t('competitive.advantages.secure.subtitle'),
      description: t('competitive.advantages.secure.description'),
      stats: t('competitive.advantages.secure.stats'),
      color: 'from-slate-600 to-slate-800',
      bgColor: 'bg-slate-50',
    },
  ];

  const competitionComparison = [
    {
      feature: t('competitive.comparison.features.start'),
      us: t('competitive.comparison.usValues.start'),
      others: t('competitive.comparison.othersValues.start'),
      advantage: true,
    },
    {
      feature: t('competitive.comparison.features.progress'),
      us: t('competitive.comparison.usValues.progress'),
      others: t('competitive.comparison.othersValues.progress'),
      advantage: true,
    },
    {
      feature: t('competitive.comparison.features.modification'),
      us: t('competitive.comparison.usValues.modification'),
      others: t('competitive.comparison.othersValues.modification'),
      advantage: true,
    },
    {
      feature: t('competitive.comparison.features.communication'),
      us: t('competitive.comparison.usValues.communication'),
      others: t('competitive.comparison.othersValues.communication'),
      advantage: true,
    },
    {
      feature: t('competitive.comparison.features.completion'),
      us: t('competitive.comparison.usValues.completion'),
      others: t('competitive.comparison.othersValues.completion'),
      advantage: true,
    },
    {
      feature: t('competitive.comparison.features.pricing'),
      us: t('competitive.comparison.usValues.pricing'),
      others: t('competitive.comparison.othersValues.pricing'),
      advantage: true,
    },
  ];

  return (
    <section
      id="advantage"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
              {t('competitive.title')}
            </span>
          </h2>
          <p
            className={`text-lg text-slate-300 max-w-3xl mx-auto transition-all duration-700 ease-out delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {t('competitive.subtitle')}
          </p>
        </div>

        {/* 주요 장점들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${
                activeFeature === index ? "scale-105 z-10" : "scale-100"
              }`}
              style={{
                transitionDelay: `${isVisible ? index * 100 : 0}ms`,
              }}
            >
              <div className={`${advantage.bgColor} bg-white rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                activeFeature === index ? 'border-purple-400 shadow-purple-400/25' : 'border-transparent'
              }`}>
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">{advantage.icon}</div>
                  <h3 className={`text-xl font-bold text-slate-800 mb-1`}>
                    {advantage.title}
                  </h3>
                  <p className={`text-sm bg-gradient-to-r ${advantage.color} text-transparent bg-clip-text font-semibold`}>
                    {advantage.subtitle}
                  </p>
                </div>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {advantage.description}
                </p>
                <div className={`text-center p-3 bg-gradient-to-r ${advantage.color} rounded-lg`}>
                  <span className="text-white font-bold text-sm">
                    {advantage.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 경쟁사 비교 테이블 */}
        <div
          className={`transition-all duration-700 ease-out delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
              {t('competitive.comparison.title')}
            </span>
          </h3>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="text-left py-4 px-4 text-slate-300 font-medium">{t('competitive.comparison.tableHeaders.feature')}</th>
                    <th className="text-center py-4 px-4">
                      <span className="bg-gradient-to-r from-orange-400 to-pink-400 text-transparent bg-clip-text font-bold text-lg">
                        {t('competitive.comparison.tableHeaders.us')}
                      </span>
                    </th>
                    <th className="text-center py-4 px-4 text-slate-400 font-medium">{t('competitive.comparison.tableHeaders.others')}</th>
                  </tr>
                </thead>
                <tbody>
                  {competitionComparison.map((item, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-4 text-slate-300 font-medium">{item.feature}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text font-bold">
                          {item.us}
                        </span>
                        <span className="ml-2 text-green-400">✓</span>
                      </td>
                      <td className="py-4 px-4 text-center text-slate-400">
                        {item.others}
                        <span className="ml-2 text-red-400">✗</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-300 mb-8">
            지금 바로 차별화된 개발 서비스를 경험해보세요
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="http://pf.kakao.com/_DcvJn/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🚀 무료 상담 받기
            </a>
            <a
              href="#development"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('development')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-4 px-8 rounded-full text-lg backdrop-blur-sm transition-all duration-300"
            >
              📋 서비스 자세히 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantage;