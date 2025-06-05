import React, { useState, useEffect, useRef } from 'react';

const InteractiveAgentSection = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const initialMessage = {
    id: Date.now(),
    text: '안녕하세요! iMate AI Agent입니다. 무엇을 도와드릴까요? 아래 예시 질문을 클릭하시거나 직접 질문을 입력해주세요.',
    sender: 'ai'
  };

  useEffect(() => {
    setMessages([initialMessage]);
  }, []);

  const handleSendMessage = (text) => {
    const userMessage = text.trim();
    if (!userMessage) return;

    setMessages(prev => [...prev, { id: Date.now(), text: userMessage, sender: 'user' }]);
    setInputValue('');
    setIsLoading(true);

    setTimeout(() => {
      let aiResponseText = '죄송합니다. 지금은 OpenAI API와 연결되어 있지 않아 실제 답변을 드릴 수 없습니다. 데모 버전입니다.';
      if (userMessage.includes('이메일 자동응답')) {
        aiResponseText = '이메일 자동응답 기능은 고객 문의 시 AI가 즉시 분석하여, 최적의 답변을 자동으로 발송하는 시스템입니다. 예를 들어, "제품 가격 문의" 시 관련 정보와 링크를 포함한 답변을 60초 내에 보낼 수 있습니다. 더 자세한 상담을 원하시면 [이 기능 도입 상담하기] 버튼을 눌러주세요!';
      } else if (userMessage.includes('온보딩 메시지')) {
        aiResponseText = '고객 온보딩 자동화는 신규 고객에게 맞춤형 환영 메시지, 사용 가이드, 중요 일정 등을 단계별로 자동 발송합니다. 예시: 1일차 - 환영 및 기본 가이드, 3일차 - 핵심 기능 안내, 7일차 - 고급 활용팁 및 Q&A 세션 초대. 도입 상담을 통해 귀사 맞춤 시나리오를 설계해 보세요.';
      }
      setMessages(prev => [...prev, { id: Date.now() + 1, text: aiResponseText, sender: 'ai' }]);
      setIsLoading(false);
    }, 1500);
  };

  const exampleQuestions = [
    '이메일 자동응답은 어떻게 작동해요?',
    '온보딩 메시지 예시 보여주세요',
    'CRM 팔로우업은 어떤 기능인가요?',
    '콜드메일 응답률을 어떻게 높이나요?',
  ];

  return (
    <section id="interactive-gpt" className="py-16 md:py-24 bg-slate-100 text-slate-800">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          iMate <span className="text-orange-500">GPT 체험 및 도입 상담</span>
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          아래 버튼을 클릭하거나, 궁금한 점을 직접 물어보세요.<br />GPT 기반 AI Agent가 당신의 질문에 응답합니다. (현재 데모 버전)<br />이 기능 도입을 원하시면 하단의 '이 기능 상담 도입하기' 버튼을 눌러 카카오 채널로 문의해주세요.
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
          {/* Chat Messages */}
          <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-grow" style={{ maxHeight: 'calc(600px - 160px)' }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'ai' ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`max-w-[80%] sm:max-w-[70%] px-4 py-3 rounded-2xl shadow-sm ${msg.sender === 'ai' ? 'bg-orange-500 text-white rounded-bl-none' : 'bg-slate-200 text-slate-800 rounded-br-none'}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
                <div className="flex justify-start">
                    <div className="px-4 py-3 rounded-2xl shadow-sm bg-orange-500 text-white rounded-bl-none">
                        <span className="animate-pulse">AI가 응답을 생성 중입니다...</span>
                    </div>
                </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Example Questions Buttons & Input Area */}
          <div className="p-4 border-t border-slate-200 bg-white">
            <p className="text-sm text-slate-500 mb-3 text-center">예시 질문:</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {exampleQuestions.map((q, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(q)}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm py-2 px-3 rounded-lg transition-colors shadow-sm"
                >
                  {q}
                </button>
              ))}
            </div>
          
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(inputValue); }} className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="AI에게 질문해보세요..."
                className="flex-grow p-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none text-slate-900 placeholder-slate-400"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-5 rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                전송
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a
            href="https://pf.kakao.com/_BLxmxjG"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform"
          >
            이 기능 도입 상담하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAgentSection; 