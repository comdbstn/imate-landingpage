import React, { useState, useEffect, useRef } from 'react';

const InteractiveAgentSection = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  const initialMessage = {
    id: Date.now(),
    text: '꺄아! 안녕하세요! 👋\niMate의 AI 상담 에이전트, 지유예요! ✨\n무엇이든 궁금한 점이 있다면 망설이지 말고 저에게 물어봐 주세요! 콕콕! 👇\n아래 예시 질문을 눌러보거나, 직접 질문을 입력해도 좋아요! 😊',
    sender: 'ai'
  };

  useEffect(() => {
    setMessages([initialMessage]);
  }, []);

  // 새로운 메시지가 추가될 때마다 채팅창을 맨 아래로 스크롤
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (text) => {
    const userMessageText = text.trim();
    if (!userMessageText) return;

    const newUserMessage = { id: Date.now(), text: userMessageText, sender: 'user' };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessageText }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `API 요청 실패: ${response.status}`);
      }

      const data = await response.json();
      const aiResponseText = data.result;

      setMessages(prev => [...prev, { id: Date.now() + 1, text: aiResponseText, sender: 'ai' }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setMessages(prev => [...prev, { id: Date.now() + 1, text: `오류가 발생했습니다: ${error.message}`, sender: 'ai' }]);
    } finally {
      setIsLoading(false);
    }
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
          아래 버튼을 클릭하거나, 궁금한 점을 직접 물어보세요.<br />GPT 기반 AI Agent가 당신의 질문에 응답합니다.<br />이 기능 도입을 원하시면 하단의 '이 기능 상담 도입하기' 버튼을 눌러 카카오 채널로 문의해주세요.
        </p>

        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden" style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
          {/* Chat Messages */}
          <div className="p-4 sm:p-6 space-y-4 overflow-y-auto flex-grow" style={{ maxHeight: 'calc(600px - 160px)' }}>
            {messages.map((msg) => (
              <div key={msg.id} className={`