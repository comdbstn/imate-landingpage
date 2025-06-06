import React, { useState, useEffect, useRef } from "react";

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
      value: "70%",
      title: "업무 시간 절감",
      description: "AI 기반 자동화 시스템으로<br/>업무 효율성 대폭 향상",
      bgColor: "bg-amber-50", // Light theme background for metric cards
      textColor: "text-amber-600",
      valueColor: "text-amber-500",
      delay: "delay-[100ms]",
    },
    {
      icon: <TrendingUpIcon />,
      value: "95%",
      title: "고객 만족도 달성",
      description: "AI와 자동화를 활용한<br/>신속한 고객 응대",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      valueColor: "text-orange-500",
      delay: "delay-[200ms]",
    },
    {
      icon: <UsersIcon />,
      value: "3배",
      title: "리드 전환율 증가",
      description: "타겟 고객 맞춤 전략으로<br/>합리적인 비용 제공",
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
            About iMate
          </p>
          <h2
            className={`text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-8 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            iMate는
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 text-transparent bg-clip-text">
              어떤 서비스인가요?
            </span>
          </h2>
          <p
            className={`text-lg md:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            기술과 경험을 바탕으로, 반복적인 비즈니스 업무를 대신하는
            <br />
            AI 기반의 실전 자동화 시스템 파트너입니다.
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
            *SaaS, 온라인 교육, 컨설팅 등 다양한 분야에 적용 가능
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <h3
            className={`text-2xl md:text-3xl font-semibold mb-8 text-slate-900 transition-all duration-700 ease-out delay-[500ms] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            iMate의 핵심 AI Agent
          </h3>
          <div className="flex justify-center items-center flex-wrap gap-4 md:gap-6">
            {[
              {
                Icon: EmailIcon,
                name: "이메일 자동응답",
                delay: "delay-[600ms]",
              },
              {
                Icon: OnboardingIcon,
                name: "고객 온보딩 자동화",
                delay: "delay-[700ms]",
              },
              { Icon: CrmIcon, name: "CRM 팔로우업", delay: "delay-[800ms]" },
              {
                Icon: ColdMailIcon,
                name: "콜드메일 자동화",
                delay: "delay-[900ms]",
              },
            ].map((agent, index) => (
              <div
                key={agent.name}
                className={`flex flex-col items-center p-4 sm:p-6 bg-slate-50 rounded-lg shadow-lg hover:shadow-orange-500/20 hover:scale-105 transition-all duration-200 ease-out w-36 h-36 sm:w-40 sm:h-40 justify-center ${agent.delay} ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
              >
                <agent.Icon />
                <span className="mt-2 text-sm sm:text-base text-center text-slate-700 font-medium">
                  {agent.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
