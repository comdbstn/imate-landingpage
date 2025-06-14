import React, { useState, useEffect, useRef } from "react";

const InteractiveAgentSection = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const chatEndRef = useRef(null);

  const initialMessage = {
    id: Date.now(),
    text: '안녕하세요! iMate의 AI 상담 에이전트 지유입니다. 🤖\niMate 서비스에 대해 궁금한 점이 있으신가요? 무엇이든 물어보세요! 아래 예시 질문을 클릭하거나 직접 질문을 입력해 iMate의 기능을 체험해보세요. \n\n도입 문의나 요금제 등 상세한 상담은 하단의 "이 기능 도입 상담하기" 버튼을 통해 전문가에게 문의하시면 가장 빠르고 정확합니다! ✨',
    sender: "ai",
  };

  useEffect(() => {
    setMessages([initialMessage]);
  }, []);

  // 새로운 메시지가 추가될 때마다 채팅창을 맨 아래로 스크롤
  /*
  useEffect(() => {
    // 채팅이 시작된 이후에만 스크롤
    if (chatStarted) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, chatStarted]);
  */

  const handleSendMessage = async (text) => {
    if (!chatStarted) setChatStarted(true);
    const userMessageText = text.trim();
    if (!userMessageText) return;

    const newUserMessage = {
      id: Date.now(),
      text: userMessageText,
      sender: "user",
    };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");

    const purchaseKeywords = [
      "구매",
      "결제",
      "도입",
      "가격",
      "요금",
      "플랜",
      "견적",
    ];
    const isPurchaseInquiry = purchaseKeywords.some((keyword) =>
      userMessageText.includes(keyword),
    );

    if (isPurchaseInquiry) {
      const purchaseResponseMessage = {
        id: Date.now() + 1,
        text: "iMate 도입 및 요금제에 관심을 가져주셔서 감사합니다! 😊\n정확한 견적 및 상세 도입 절차는 전문가 상담을 통해 맞춤으로 안내해드리고 있어요.\n\n아래 ✨이 기능 도입 상담하기✨ 버튼을 눌러 문의를 남겨주시면, 담당 매니저가 신속하게 연락드리겠습니다!",
        sender: "ai",
      };
      setMessages((prev) => [...prev, purchaseResponseMessage]);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessageText }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error?.message || `API 요청 실패: ${response.status}`,
        );
      }

      const data = await response.json();
      const aiResponseText = data.result;

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: aiResponseText, sender: "ai" },
      ]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: `오류가 발생했습니다: ${error.message}`,
          sender: "ai",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const exampleQuestions = [
    "iMate는 어떤 서비스야?",
    "이메일 자동 분류 기능 보여줘",
    "CRM 연동은 어떻게 해?",
    "고객 온보딩 자동화 시나리오 예시",
  ];

  return (
    <section
      id="interactive-gpt"
      className="py-16 md:py-24 bg-slate-100 text-slate-800"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          iMate <span className="text-orange-500">GPT 체험 및 도입 상담</span>
        </h2>
        <p className="text-lg text-slate-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          아래 버튼을 클릭하거나, 궁금한 점을 직접 물어보세요.
          <br />
          GPT 기반 AI Agent가 당신의 질문에 응답합니다.
          <br />이 기능 도입을 원하시면 하단의 '이 기능 도입 상담하기' 버튼을
          눌러 카카오 채널로 문의해주세요.
        </p>

        <div
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
          style={{
            height: "auto",
            minHeight: "600px",
            maxHeight: "80vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Chat Messages */}
          <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-grow">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "ai" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] sm:max-w-[70%] px-4 py-3 rounded-2xl shadow-sm ${msg.sender === "ai" ? "bg-orange-500 text-white rounded-bl-none" : "bg-slate-200 text-slate-800 rounded-br-none"}`}
                  style={{ whiteSpace: "pre-wrap" }}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-2xl shadow-sm bg-orange-500 text-white rounded-bl-none">
                  <span className="animate-pulse">
                    AI가 응답을 생성 중입니다...
                  </span>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Example Questions Buttons & Input Area */}
          <div className="p-4 border-t border-slate-200 bg-white">
            {!chatStarted && (
              <>
                <p className="text-sm text-slate-500 mb-3 text-center">
                  예시 질문:
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {exampleQuestions.map((q, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(q)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm py-2 px-3 rounded-lg transition-colors duration-200 shadow-sm"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="flex items-center space-x-2"
            >
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
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-5 rounded-lg transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
              >
                전송
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-16">
          <a
            href="http://pf.kakao.com/_DcvJn/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out text-lg"
          >
            이 기능 도입 상담하기
          </a>
        </div>
      </div>
    </section>
  );
};

export default InteractiveAgentSection;
