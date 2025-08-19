import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from '../contexts/LanguageContext';

// Icons for metrics cards - changed to orange for light theme
const RobotIcon = () => (
  <span className="text-4xl md:text-5xl text-orange-500">🤖</span>
);
const TrendingUpIcon = () => (
  <span className="text-4xl md:text-5xl text-orange-500">📈</span>
);
const UsersIcon = () => (
  <span className="text-4xl md:text-5xl text-orange-500">👥</span>
);

// Original icons for "핵심 AI Agent" section
const EmailIcon = () => <span className="text-2xl text-orange-500">📧</span>;
const OnboardingIcon = () => (
  <span className="text-2xl text-orange-500">🚀</span>
);
const CrmIcon = () => <span className="text-2xl text-orange-500">📊</span>;
const ColdMailIcon = () => <span className="text-2xl text-orange-500">📫</span>;

const AboutSection = () => {
  const { t } = useLanguage();
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
      { threshold: 0.05 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current && observer)
        observer.unobserve(sectionRef.current);
    };
  }, []);

  const metricsData = [
    {
      icon: <RobotIcon />,
      value: t('about.metrics.timeReduction.value'),
      title: t('about.metrics.timeReduction.title'),
      description: t('about.metrics.timeReduction.description'),
      bgColor: "bg-amber-50", // Light theme background for metric cards
      textColor: "text-amber-600",
      valueColor: "text-amber-500",
      delay: "delay-[100ms]",
    },
    {
      icon: <TrendingUpIcon />,
      value: t('about.metrics.satisfaction.value'),
      title: t('about.metrics.satisfaction.title'),
      description: t('about.metrics.satisfaction.description'),
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      valueColor: "text-orange-500",
      delay: "delay-[200ms]",
    },
    {
      icon: <UsersIcon />,
      value: t('about.metrics.conversion.value'),
      title: t('about.metrics.conversion.title'),
      description: t('about.metrics.conversion.description'),
      bgColor: "bg-red-50", // Using a slightly different shade for variety if desired
      textColor: "text-red-600",
      valueColor: "text-red-500",
      delay: "delay-[300ms]",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white text-slate-800 overflow-hidden" // Changed to white background
    >
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="mb-16 md:mb-24">
          <p
            className={`text-sm md:text-base font-semibold text-orange-500 uppercase tracking-wider mb-3 md:mb-4 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {t('about.subtitle')}
          </p>
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {t('about.title').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {index === 0 ? line : (
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">
                    {line}
                  </span>
                )}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p
            className={`text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {t('about.description').split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index === 0 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {metricsData.map((metric, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl shadow-xl text-left flex flex-col items-start ${metric.bgColor} transform transition-all ease-out duration-300 hover:scale-105 ${metric.delay} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <div
                  className={`mb-5 p-3 ${metric.bgColor === "bg-red-50" ? "bg-red-100" : metric.bgColor === "bg-orange-50" ? "bg-orange-100" : "bg-amber-100"} rounded-lg`}
                >
                  {" "}
                  {/* Icon background slightly darker shade */}
                  {metric.icon}
                </div>
                <span
                  className={`text-6xl md:text-7xl font-extrabold ${metric.valueColor} mb-3`}
                >
                  {metric.value}
                </span>
                <h3
                  className={`text-xl md:text-2xl font-semibold ${metric.textColor} mb-2`}
                >
                  {metric.title}
                </h3>
                <p
                  className="text-sm text-slate-500 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: metric.description }}
                ></p>
              </div>
            ))}
          </div>
          <p
            className={`text-sm text-slate-400 mt-10 transition-all duration-700 ease-out delay-[400ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            {t('about.note')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
