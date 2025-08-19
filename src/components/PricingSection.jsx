import React from "react";
import { useLanguage } from '../contexts/LanguageContext';

const PricingSection = () => {
  const { t } = useLanguage();
  
  const plans = [
    {
      name: t('pricing.standard.name'),
      price: t('pricing.standard.price'),
      priceDescription: t('pricing.standard.description'),
      features: t('pricing.standard.features'),
      cta: t('pricing.standard.cta'),
      bgColor: "bg-white",
      textColor: "text-slate-800",
      buttonClass: "bg-slate-200 hover:bg-slate-300 text-slate-800",
      popular: false,
      kakaoLink: "http://pf.kakao.com/_DcvJn/chat",
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      priceDescription: t('pricing.enterprise.description'),
      features: t('pricing.enterprise.features'),
      cta: t('pricing.enterprise.cta'),
      bgColor: "bg-orange-50",
      textColor: "text-slate-900",
      buttonClass: "bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white",
      popular: true,
      badgeText: t('pricing.enterprise.badge'),
      kakaoLink: "http://pf.kakao.com/_DcvJn/chat",
    },
    {
      name: t('pricing.development.name'),
      price: t('pricing.development.price'),
      priceDescription: t('pricing.development.description'),
      features: t('pricing.development.features'),
      cta: t('pricing.development.cta'),
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      textColor: "text-slate-900",
      buttonClass: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white",
      popular: false,
      special: true,
      kakaoLink: "http://pf.kakao.com/_DcvJn/chat",
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          {t('pricing.title')}
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          {t('pricing.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
            {t('pricing.note')} <br />
            <a
              href="http://pf.kakao.com/_DcvJn/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-600 font-semibold transition-colors duration-200"
            >
              {t('pricing.kakaoInquiry')}
            </a>
            {t('pricing.consultationText')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
