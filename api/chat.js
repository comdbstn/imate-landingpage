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

    // OpenAI API 호출
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // 사용하려는 모델
      messages: [{ role: "user", content: userMessage }],
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