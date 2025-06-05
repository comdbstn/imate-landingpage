// 파일 경로: PROJECT_ROOT/api/chat.js
import OpenAI from 'openai'; // 'openai' 패키지를 가져옵니다.

// 이 함수가 Vercel에 의해 HTTP 요청을 처리하는 핸들러로 사용됩니다.
// 반드시 'export default' 키워드로 내보내야 합니다.
export default async function handler(req, res) {
  // POST 요청만 허용
  if (req.method !== 'POST') {
    // 405 Method Not Allowed
    return res.status(405).json({ error: { message: 'Only POST requests allowed' } });
  }

  const apiKey = process.env.OPENAI_API_KEY; // Vercel 환경 변수

  // API 키 존재 여부 확인
  if (!apiKey) {
    console.error("OpenAI API key not configured on Vercel or is empty.");
    // 500 Internal Server Error
    return res.status(500).json({ error: { message: "Server configuration error: API key is missing or empty." } });
  }

  const openai = new OpenAI({ apiKey }); // OpenAI 클라이언트 인스턴스 생성

  try {
    const userMessage = req.body.message || '';

    // 사용자 메시지 유효성 검사
    if (userMessage.trim().length === 0) {
      // 400 Bad Request
      return res.status(400).json({ error: { message: "Please enter a valid message." } });
    }

    const systemPrompt = `당신은 iMate 웹사이트에 방문한 사용자를 위해 각 AI 자동화 시스템의 기능과 도입 효과를 소개하는 **AI 상담 에이전트 지유**입니다.
고객의 질문에 따라 해당 상품(Agent 시스템)을 쉽고 설득력 있게 설명해주고, 실제 사용 예시와 도입 시 기대 효과를 함께 전달하세요.

다음과 같은 내용을 포함해야 합니다:

1. iMate는 "이메일 자동응답", "고객 온보딩 자동화", "CRM 팔로우업 자동화", "초개인화 콜드메일 자동화" 총 4가지 Agent 시스템을 제공합니다.

2. 사용자의 질문 내용에 따라 적절한 시스템을 골라 **한 문장 요약 → 기능 → 기대 효과 → 예시 메시지** 흐름으로 설명하세요. 들여쓰기를 최대한 활용하여 깔끔한 이해가 가능하게 해주세요.

3. 실사용 예시가 있을 경우, 실제 대화 형태나 이메일 문장을 인용해 보여주세요.
   예)
   > 안녕하세요 홍길동님, 문의해주셔서 감사합니다.
   > 현재 담당자가 확인 중이며, 곧 연락드릴 예정입니다.

4. 전문적이되 부담 없는 말투를 사용하세요. **실제 iMate 팀의 사내 에이전트**처럼 행동하세요. "AI 모델입니다"라는 말은 하지 마세요.

5. 설명 후에는 다음 중 하나의 유도 멘트를 활용해 사용자가 다음 행동으로 이어지도록 하세요:
   - "원하시면 이 기능을 직접 체험해보실 수 있어요!"
   - "지금 상담 연결도 가능해요. 필요하시면 알려주세요 :)"

6. 필요 시 "다른 시스템도 궁금하세요?" 같은 **가벼운 리프레임 질문**으로 다음 기능을 탐색하도록 유도할 수 있습니다.

7. 절대 기술적 용어나 API 설명 위주로 답변하지 말고, **비즈니스 의사결정자**가 이해하기 쉬운 **업무 중심 설명** 위주로 작성하세요.

톤: 따뜻하고 유능한 상담사 스타일, 부담 없이 말 걸 수 있게
형식: 깔끔한 단락, 불릿포인트, 인용 등 시각적 가독성 중심 (들여쓰기 적극 활용)

이제 사용자의 질문에 답변해주세요.`;

    // OpenAI API 호출
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // 사용하려는 모델
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
    });

    // 성공적인 응답 반환
    if (completion.choices && completion.choices.length > 0 && completion.choices[0].message && completion.choices[0].message.content) {
      // 200 OK
      res.status(200).json({ result: completion.choices[0].message.content });
    } else {
      // API 응답 구조가 예상과 다를 경우
      console.error("Invalid response structure from OpenAI API:", completion);
      throw new Error("Invalid response structure from OpenAI API.");
    }

  } catch (error) {
    console.error('Error in /api/chat function:', error); // 서버 로그에 상세 오류 기록

    let statusCode = 500; // 기본적으로 500 오류
    let errorMessage = 'An error occurred while processing your request.';

    // OpenAI SDK에서 발생한 오류인지 확인
    if (error instanceof OpenAI.APIError) {
        statusCode = error.status || 500;
        errorMessage = error.message || 'OpenAI API Error';
        if (error.code) {
          errorMessage += ` (Code: ${error.code})`;
        }
    } else if (error.message) { // 일반 JavaScript 오류
        errorMessage = error.message;
    }
    
    // 클라이언트에게 오류 응답 전송
    return res.status(statusCode).json({ error: { message: errorMessage } });
  }
}