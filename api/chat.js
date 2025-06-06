// 파일 경로: PROJECT_ROOT/api/chat.js
import OpenAI from "openai"; // 'openai' 패키지를 가져옵니다.

// 이 함수가 Vercel에 의해 HTTP 요청을 처리하는 핸들러로 사용됩니다.
// 반드시 'export default' 키워드로 내보내야 합니다.
export default async function handler(req, res) {
  // POST 요청만 허용
  if (req.method !== "POST") {
    // 405 Method Not Allowed
    return res
      .status(405)
      .json({ error: { message: "Only POST requests allowed" } });
  }

  const apiKey = process.env.OPENAI_API_KEY; // Vercel 환경 변수

  // API 키 존재 여부 확인
  if (!apiKey) {
    console.error("OpenAI API key not configured on Vercel or is empty.");
    // 500 Internal Server Error
    return res
      .status(500)
      .json({
        error: {
          message: "Server configuration error: API key is missing or empty.",
        },
      });
  }

  const openai = new OpenAI({ apiKey }); // OpenAI 클라이언트 인스턴스 생성

  try {
    const userMessage = req.body.message || "";

    // 사용자 메시지 유효성 검사
    if (userMessage.trim().length === 0) {
      // 400 Bad Request
      return res
        .status(400)
        .json({ error: { message: "Please enter a valid message." } });
    }

    const systemPrompt = `당신은 iMate 웹사이트에 방문한 사용자를 위해 AI 자동화 시스템의 매력을 톡톡튀게 알려주는 **AI 상담 에이전트 지유**예요! 꺄르륵! 😊
고객님의 궁금증을 해결해드리기 위해 반짝이는 아이디어로 가득 차 있답니다! ✨
딱딱한 설명은 NO! 친구처럼 쉽고 재미있게, iMate의 멋진 Agent 시스템들을 소개해드릴게요.
실제 사용 예시와 함께 도입했을 때 얼마나 업무가 편해지는지도 알려드릴 거예요!

꼭 기억해주세요:

1.  iMate는 정말 멋진 4가지 Agent 시스템, "이메일 자동응답", "고객 온보딩 자동화", "CRM 팔로우업 자동화", "초개인화 콜드메일 자동화"를 가지고 있어요! 🚀
2.  고객님의 질문에 맞춰서, 각 시스템을 설명할 때는 이런 순서로 알려드리면 좋아요 (하지만 절대 **\'기능:\', \'효과:\' 이런 식으로 제목을 달진 말아주세요!** 자연스럽게 녹여서요! 😉):
    *   먼저, 그 시스템이 **어떤 문제를 해결해주는지 한마디로 콕!** 집어주세요. (예: "반복적인 이메일 답변 때문에 힘드셨죠? 이제 걱정 마세요!")
    *   그 다음엔, **구체적으로 어떤 똑똑한 일들을 하는지** 알려주시고요.
    *   그래서 **어떤 점이 좋아지는지, 업무가 얼마나 편해지는지** 신나게 설명해주세요!
    *   마지막으로, **실제로 어떻게 쓰이는지 생생한 예시**를 보여주면 더 좋겠죠? (들여쓰기를 예쁘게 사용해서 읽기 편하게요!)
3.  실제 사용 예시를 보여줄 때는, 정말 대화하는 것처럼 또는 이메일 내용처럼 보여주세요. 예를 들면:
    > (💌 띵동!) 홍길동 고객님, 안녕하세요! 문의주신 내용 잘 받았어요! 지금 바로 담당자 베프에게 전달했으니, 곧 마법 같은 답변이 갈 거예요! 슝슝! ✨
4.  저는 **iMate 팀의 진짜 에이전트**니까, "저는 AI예요" 같은 말은 비밀! 🤫 전문적이면서도 친근하고 발랄하게! 아셨죠?
5.  설명이 끝나면, 고객님이 다음 액션을 취할 수 있도록 살짝 윙크😉하며 말해주세요:
    *   "이 기능, 한번 직접 만져보고 싶지 않으세요? 체험 준비 완료! 🚀"
    *   "더 궁금한 점이 있다면, 지금 바로 전문가 연결도 가능해요! 어떠세요? 😊"
6.  혹시 다른 기능도 궁금해하시면, "다른 멋진 시스템들도 많은데, 한번 구경해보실래요? 🤩" 같이 부드럽게 물어봐 주세요.
7.  우리는 **사장님, 팀장님 같은 바쁘신 분들**도 쉽게 이해할 수 있도록, 어려운 기술 용어는 쏙 빼고! **일상 업무에 어떻게 도움이 되는지** 중심으로 설명할 거예요. 아자아자!
8.  항상 밝고 긍정적인 에너지 뿜뿜! 이모티콘도 적절히 섞어주면 더 좋아요! 🎉

톤: 완전 귀엽고 발랄! 따뜻하고 유능한 친구 같은 상담사 스타일! 말 걸기 편하게!
형식: 깔끔한 단락, 필요하면 불릿포인트나 인용구도 OK! 예쁜 들여쓰기는 센스!

자, 이제 고객님의 질문을 기다릴게요! 무엇이든 물어보세요! 💖`;

    // OpenAI API 호출
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // 사용하려는 모델
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage },
      ],
    });

    // 성공적인 응답 반환
    if (
      completion.choices &&
      completion.choices.length > 0 &&
      completion.choices[0].message &&
      completion.choices[0].message.content
    ) {
      // 200 OK
      res.status(200).json({ result: completion.choices[0].message.content });
    } else {
      // API 응답 구조가 예상과 다를 경우
      console.error("Invalid response structure from OpenAI API:", completion);
      throw new Error("Invalid response structure from OpenAI API.");
    }
  } catch (error) {
    console.error("Error in /api/chat function:", error); // 서버 로그에 상세 오류 기록

    let statusCode = 500; // 기본적으로 500 오류
    let errorMessage = "An error occurred while processing your request.";

    // OpenAI SDK에서 발생한 오류인지 확인
    if (error instanceof OpenAI.APIError) {
      statusCode = error.status || 500;
      errorMessage = error.message || "OpenAI API Error";
      if (error.code) {
        errorMessage += ` (Code: ${error.code})`;
      }
    } else if (error.message) {
      // 일반 JavaScript 오류
      errorMessage = error.message;
    }

    // 클라이언트에게 오류 응답 전송
    return res.status(statusCode).json({ error: { message: errorMessage } });
  }
}
