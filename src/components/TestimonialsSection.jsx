import React, { useState, useEffect, useRef } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "iMate 도입 후, 반복적인 고객 문의 응대 시간이 80%나 줄었어요. 덕분에 저희 팀은 더 중요한 기획 업무에 집중할 수 있게 되었습니다. 특히 야간이나 주말에도 AI가 고객 요청을 처리해주니 정말 든든합니다.",
      name: '김철수 대표',
      company: 'ABC커머스',
      avatar: `https://ui-avatars.com/api/?name=김철수&background=FF7F50&color=fff`
    },
    {
      quote: "신규 고객 온보딩 과정이 훨씬 체계적으로 자동화되어 만족도가 크게 향상되었습니다. 이전에는 담당자별로 안내 내용에 차이가 있었는데, iMate를 통해 일관된 고품질 정보를 제공할 수 있게 되었어요.",
      name: '이영희 마케팅 팀장',
      company: '주식회사 성장솔루션',
      avatar: `https://ui-avatars.com/api/?name=이영희&background=4682B4&color=fff`
    },
    {
      quote: "단순 문의는 AI가 처리하고, 복잡한 상담만 담당자에게 연결되니 업무 효율이 극대화되었습니다. 잠재 고객 발굴부터 계약 전환까지, iMate의 CRM 연동 기능이 큰 도움이 되고 있습니다.",
      name: '박지성 영업이사',
      company: '글로벌 B2B 파트너스',
      avatar: `https://ui-avatars.com/api/?name=박지성&background=32CD32&color=fff`
    },
  ];

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current && observer) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white overflow-hidden" // Removed opacity, added overflow-hidden
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          고객 <span className="text-orange-500">성공 스토리</span>
        </h2>
        <p 
          className={`text-lg text-slate-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          iMate를 통해 비즈니스 혁신을 경험한 고객들의 생생한 후기를 확인해보세요.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`bg-slate-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-200 flex flex-col transform ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${isVisible ? 150 + index * 100 : 0}ms` }}
            >
              <svg className="w-10 h-10 text-orange-400 mb-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 5C6 3.34315 4.65685 2 3 2C1.34315 2 0 3.34315 0 5C0 6.65685 1.34315 8 3 8C4.65685 8 6 6.65685 6 5ZM16 5C16 3.34315 14.6568 2 13 2C11.3431 2 10 3.34315 10 5C10 6.65685 11.3431 8 13 8C14.6568 8 16 6.65685 16 5ZM3 10C1.34315 10 0 11.3431 0 13C0 14.6569 1.34315 16 3 16C4.65685 16 6 14.6569 6 13C6 11.3431 4.65685 10 3 10ZM13 10C11.3431 10 10 11.3431 10 13C10 14.6569 11.3431 16 13 16C14.6568 16 16 14.6569 16 13C16 11.3431 14.6568 10 13 10Z"></path>
              </svg>
              <p className="text-slate-700 italic text-base md:text-lg mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center mt-auto pt-6 border-t border-slate-200">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 border-2 border-orange-200"
                />
                <div>
                  <p className="font-semibold text-slate-800 text-md">{testimonial.name}</p>
                  <p className="text-slate-600 text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;