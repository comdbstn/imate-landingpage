import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from '../contexts/LanguageContext';

const CodeIcon = () => (
  <span className="text-3xl md:text-4xl text-blue-500">💻</span>
);

const MobileIcon = () => (
  <span className="text-3xl md:text-4xl text-green-500">📱</span>
);

const ShoppingIcon = () => (
  <span className="text-3xl md:text-4xl text-purple-500">🛒</span>
);

const LiveIcon = () => (
  <span className="text-2xl text-red-500">🔴</span>
);

const CheckIcon = () => (
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

const DevelopmentSection = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

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

  const developmentServices = [
    {
      id: "landing",
      name: t('development.landing.name'),
      Icon: CodeIcon,
      description: t('development.landing.description'),
      features: t('development.landing.features'),
      price: t('development.landing.price'),
      duration: t('development.landing.duration'),
      gradient: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
    },
    {
      id: "webapp",
      name: t('development.webapp.name'),
      Icon: MobileIcon,
      description: t('development.webapp.description'),
      features: t('development.webapp.features'),
      price: t('development.webapp.price'),
      duration: t('development.webapp.duration'),
      gradient: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
    },
    {
      id: "ecommerce",
      name: t('development.ecommerce.name'),
      Icon: ShoppingIcon,
      description: t('development.ecommerce.description'),
      features: t('development.ecommerce.features'),
      price: t('development.ecommerce.price'),
      duration: t('development.ecommerce.duration'),
      gradient: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
    },
  ];

  const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    const handleInquiry = () => {
      window.open("http://pf.kakao.com/_DcvJn/chat", "_blank", "noopener,noreferrer");
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] flex flex-col">
          <div className="flex justify-between items-start p-6 border-b border-slate-200">
            <div className="flex items-center">
              <div className={`p-3 ${service.bgColor} rounded-lg mr-4`}>
                <service.Icon />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                {service.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-red-500 text-4xl font-light leading-none p-1 -mt-2 -mr-2"
            >
              &times;
            </button>
          </div>

          <div className="overflow-y-auto p-6">
            <p className="text-lg text-slate-600 mb-6">{service.description}</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className={`p-4 ${service.bgColor} rounded-lg`}>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{t('common.price')}</h4>
                <p className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}>
                  {service.price}
                </p>
              </div>
              <div className={`p-4 ${service.bgColor} rounded-lg`}>
                <h4 className="text-lg font-semibold text-slate-800 mb-2">{t('common.duration')}</h4>
                <p className="text-xl font-semibold text-slate-700">{service.duration}</p>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-slate-800 mb-3">{t('common.features')}</h4>
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`p-4 ${service.bgColor} rounded-lg mb-6`}>
              <div className="flex items-center mb-2">
                <LiveIcon />
                <span className="ml-2 font-semibold text-slate-800">라이브 코딩 진행</span>
              </div>
              <p className="text-sm text-slate-600">
                실시간으로 개발 과정을 모니터링하고 즉시 피드백을 제공할 수 있습니다.
              </p>
            </div>
          </div>

          <div className="p-6 border-t border-slate-200 text-center">
            <button
              onClick={handleInquiry}
              className={`bg-gradient-to-r ${service.gradient} hover:shadow-lg text-white font-semibold py-3 px-8 rounded-lg text-lg transform hover:scale-105 transition-all duration-300`}
            >
              {t('development.startProject')}
            </button>
          </div>
        </div>
      </div>
    );
  };

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
      id="development"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50 text-slate-800"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 text-slate-900 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {t('development.title')}
          </h2>
          <p
            className={`text-lg text-slate-600 max-w-3xl mx-auto transition-all duration-700 ease-out delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {t('development.subtitle')}
          </p>
        </div>

        {/* Live Coding Features */}
        <div
          className={`bg-white rounded-2xl shadow-lg p-8 mb-16 transition-all duration-700 ease-out delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">
            {t('development.liveFeatures.title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "👁️", title: t('development.liveFeatures.realtime') },
              { icon: "🔍", title: t('development.liveFeatures.transparent') },
              { icon: "💬", title: t('development.liveFeatures.communication') },
              { icon: "✨", title: t('development.liveFeatures.quality') },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <p className="text-sm font-medium text-slate-700">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developmentServices.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                transitionDelay: `${isVisible ? 450 + index * 150 : 0}ms`,
              }}
              onClick={() => openModal(service)}
            >
              <div className={`${service.bgColor} p-6 text-center`}>
                <service.Icon />
                <h3 className="text-xl font-bold text-slate-800 mt-4 mb-2">
                  {service.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`text-lg font-bold bg-gradient-to-r ${service.gradient} text-transparent bg-clip-text`}>
                    {service.price}
                  </span>
                  <span className="text-sm text-slate-500">{service.duration}</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-slate-600">
                      <CheckIcon />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className={`w-full text-center font-semibold py-2 px-4 rounded-md bg-gradient-to-r ${service.gradient} text-white hover:shadow-lg transition-all duration-300`}>
                  {t('common.learnMore')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold mb-4 text-slate-800">
            프로젝트를 시작할 준비가 되셨나요?
          </h3>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            라이브 코딩으로 투명하고 빠른 개발 서비스를 경험해보세요.
            실시간으로 진행 상황을 확인하며 원하는 결과를 얻을 수 있습니다.
          </p>
          <a
            href="http://pf.kakao.com/_DcvJn/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-10 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            🚀 프로젝트 상담 시작하기
          </a>
        </div>
      </div>

      {selectedService && (
        <ServiceModal service={selectedService} onClose={closeModal} />
      )}
    </section>
  );
};

export default DevelopmentSection;