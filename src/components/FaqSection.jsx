import React, { useState, useEffect, useRef } from "react";

const FaqSection = () => {
  const faqData = [
    {
      question: "iMate AI Agent는 어떤 종류의 업무를 자동화할 수 있나요?",
      answer:
        "iMate는 이메일 자동 응답 및 분류, 고객 문의 초기 대응, 반복적인 정보 안내, CRM 데이터 자동 업데이트, 잠재고객 온보딩 메시지 발송, 콜드메일 개인화 및 발송 등 다양한 고객 커뮤니케이션 및 관리 업무를 자동화할 수 있습니다. 귀사의 특정 요구에 맞춰 기능을 커스터마이징할 수 있습니다.",
    },
    {
      question: "기존에 사용하던 CRM이나 다른 업무 도구와 연동이 가능한가요?",
      answer:
        "네, 가능합니다. iMate는 주요 CRM 시스템(예: Salesforce, HubSpot, Zapier 등) 및 다양한 업무 도구와의 유연한 연동을 지원합니다. API를 통한 맞춤 연동 개발도 가능하여, 기존 워크플로우에 자연스럽게 통합될 수 있습니다.",
    },
    {
      question: "AI Agent 도입 비용과 예상 ROI는 어떻게 되나요?",
      answer:
        "도입 비용은 선택하시는 플랜과 필요한 AI Agent의 수, 커스터마이징 범위에 따라 달라집니다. 일반적으로 iMate 도입 후 인건비 절감, 업무 효율성 증대, 리드 전환율 향상 등을 통해 수개월 내에 ROI를 경험하실 수 있습니다. 자세한 내용은 요금제 섹션을 참고하시거나, 맞춤 상담을 통해 예상 ROI를 확인해보세요.",
    },
    {
      question: "AI가 생성하는 답변의 품질은 어떻게 보장되나요?",
      answer:
        "iMate의 AI Agent는 GPT-4 등 최신 언어 모델을 기반으로 하며, 귀사의 데이터를 학습하여 답변의 정확성과 관련성을 높입니다. 초기 설정 시 충분한 테스트와 검토 과정을 거치며, 지속적인 모니터링과 피드백을 통해 답변 품질을 개선해나갑니다.",
    },
    {
      question: "데이터 보안 및 개인정보보호는 어떻게 관리되나요?",
      answer:
        "iMate는 고객 데이터를 최우선으로 생각하며, 강력한 보안 프로토콜과 암호화 기술을 적용하여 데이터를 안전하게 보호합니다. GDPR, CCPA 등 주요 개인정보보호 규정을 준수하며, 고객사와의 계약을 통해 데이터 처리 및 보안에 대한 책임을 명확히 합니다.",
    },
    {
      question: "iMate 사용을 위한 교육이나 기술 지원이 제공되나요?",
      answer:
        "네, 제공됩니다. 초기 도입 시 담당자분들을 위한 상세한 사용 교육을 진행하며, 이해하기 쉬운 매뉴얼과 가이드 자료를 제공합니다. 또한, 운영 중 발생하는 문제나 궁금증에 대해 신속하게 대응할 수 있도록 이메일, 전화, 원격 지원 등 다양한 기술 지원 채널을 운영하고 있습니다.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);
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

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 70;
      const elementPosition =
        contactSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="faq-cta"
      ref={sectionRef}
      className="py-16 md:py-24 bg-slate-100 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2
          className={`text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-slate-900 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
        >
          자주 묻는 <span className="text-orange-500">질문 (FAQ)</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform transition-all ease-out duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{
                transitionDelay: `${isVisible ? 150 + index * 100 : 0}ms`,
              }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center p-5 md:p-6 text-left text-slate-800 hover:bg-slate-50 focus:outline-none transition-colors duration-200"
              >
                <span className="text-lg font-semibold">{faq.question}</span>
                <span
                  className={`transform transition-transform duration-200 ${openAccordion === index ? "rotate-180" : "rotate-0"}`}
                >
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </span>
              </button>
              {openAccordion === index && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-slate-200">
                  <p className="text-slate-700 mt-3 md:mt-4 text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          className={`text-center bg-white p-8 md:p-12 rounded-xl shadow-xl max-w-3xl mx-auto hover:shadow-2xl transition-shadow duration-300 transform transition-all ease-out duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{
            transitionDelay: `${isVisible ? 150 + faqData.length * 100 + 100 : 0}ms`,
          }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            이제, iMate와 함께 비즈니스 혁신을 시작하세요!
          </h3>
          <p className="text-slate-700 text-lg md:text-xl mb-8 max-w-xl mx-auto">
            단순 반복 업무는 AI에게 맡기고, 당신은 더 가치 있는 일에 집중하세요.
            <br />
            iMate가 성공적인 비즈니스 자동화 파트너가 되어드리겠습니다.
          </p>
          <a
            href="http://pf.kakao.com/_DcvJn/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-lg text-lg md:text-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-block"
          >
            1:1 무료 전문가 상담 신청
          </a>
        </div>

        <div className="mt-8 text-center">
          <p className="text-lg text-slate-600">
            찾으시는 답변이 없나요?{" "}
            <a
              href="http://pf.kakao.com/_DcvJn/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200"
            >
              문의하기
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
