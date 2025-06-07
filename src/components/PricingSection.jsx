import React from "react";

const PricingSection = () => {
  const plans = [
    {
      name: "Standard",
      price: "월 30만원",
      priceDescription: "최초 1회 개발비 50만원 별도",
      features: [
        "AI 자동화 기능 1개 선택",
        "월 1,000건 처리",
        "기본 연동 지원",
        "이메일 및 채팅 지원",
      ],
      cta: "상담 문의하기",
      bgColor: "bg-white",
      textColor: "text-slate-800",
      buttonClass: "bg-slate-200 hover:bg-slate-300 text-slate-800",
      popular: false,
      kakaoLink: "http://pf.kakao.com/_DcvJn/chat",
    },
    {
      name: "엔터프라이즈",
      price: "견적 문의",
      priceDescription: "비즈니스에 최적화된 솔루션",
      features: [
        "맞춤형 AI 제작",
        "처리 건수 무제한 협의",
        "전용 인프라 구축",
        "전담 매니저 및 최우선 기술 지원",
      ],
      cta: "도입 문의하기",
      bgColor: "bg-orange-50", // Emphasize with a light orange background
      textColor: "text-slate-900",
      buttonClass:
        "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white", // Gradient button
      popular: true,
      badgeText: "맞춤형 솔루션",
      kakaoLink: "http://pf.kakao.com/_DcvJn/chat",
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          iMate <span className="text-orange-500">프로그램</span> 요금제
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          귀사의 비즈니스 규모와 필요에 맞는 합리적인 플랜을 선택하세요. 두 플랜
          모두 전문가의 상담을 통해 상세 내용을 조율할 수 있습니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 flex flex-col h-full transition-all duration-200 ease-out transform hover:scale-[1.03] ${plan.popular ? "bg-orange-50 border-2 border-orange-500 shadow-2xl" : "bg-white shadow-lg"}`}
            >
              {plan.popular && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {plan.badgeText}
                  </span>
                </div>
              )}
              <h3
                className={`text-2xl font-bold mb-1 text-center ${plan.textColor}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-4xl font-extrabold text-center mb-1 ${plan.popular ? "text-orange-600" : plan.textColor}`}
              >
                {plan.price}
              </p>
              {plan.priceDescription && (
                <p className="text-sm text-slate-500 text-center mb-6">
                  {plan.priceDescription}
                </p>
              )}
              {!plan.priceDescription && (
                <p className="text-sm text-slate-500 text-center mb-6 h-5"></p>
              )}{" "}
              {/* Placeholder for consistent height */}
              <ul className="space-y-3 text-slate-600 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <svg
                      className={`w-5 h-5 mr-2 ${plan.popular ? "text-orange-500" : "text-green-500"} flex-shrink-0`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <a
                  href={plan.kakaoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-bold py-3 px-6 rounded-lg transition-all duration-200 ease-in-out ${plan.popular ? "bg-orange-500 text-white hover:bg-orange-600" : "bg-slate-200 text-slate-800 hover:bg-slate-300"}`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-slate-600">
            위 플랜은 시작 가격이며, 사용량과 요구사항에 따라 맞춤 설정이
            가능합니다. <br />두 플랜 모두{" "}
            <a
              href="http://pf.kakao.com/_DcvJn/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200"
            >
              카카오 채널 문의
            </a>
            를 통해 세부 사항을 조율하고 맞춤 견적을 받아보실 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
