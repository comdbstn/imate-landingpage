import React, { useState, useEffect, useRef } from 'react';

// Icons - ensure they are visible on light backgrounds
const EmailIcon = () => <span className="text-3xl md:text-4xl text-orange-500">📧</span>;
const OnboardingIcon = () => <span className="text-3xl md:text-4xl text-orange-500">🚀</span>;
const CrmIcon = () => <span className="text-3xl md:text-4xl text-orange-500">📊</span>;
const ColdMailIcon = () => <span className="text-3xl md:text-4xl text-orange-500">📫</span>;

// Helper for modal list items
const ListItem = ({ children }) => (
  <li className="flex items-start py-1">
    <svg className="w-5 h-5 mr-2.5 text-orange-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
    <span className="text-slate-700">{children}</span>
  </li>
);

const servicesData = [
  {
    id: 'email-autoresponder',
    name: '이메일 자동응답',
    Icon: EmailIcon,
    summary: '문의 즉시 AI가 자동 응답하여 고객 경험을 혁신합니다.',
    recommendedIndustries: '온라인 쇼핑몰, SaaS 기업, 고객 지원센터, 교육 기관',
    details: {
      problem: '느리고 반복적인 이메일 응대로 인한 잠재 고객 이탈, 낮은 전환율, 높은 운영 비용, 직원 번아웃',
      feature: 'GPT 기반 AI가 고객 문의 의도를 정확히 파악하여, 24시간 365일 개인화된 답변을 60초 내 자동 전송합니다.',
      effect: '응답 속도 60초 이내로 혁신, 이메일 처리 시간 90% 절감, 고객 만족도 25% 향상, 전환율 최대 396% 증가, 운영 비용 50% 절감',
      sample: '예시: "안녕하세요, [고객명]님. 문의주신 [문의내용 요약]에 대해 AI가 신속히 답변드립니다. 관련하여 자주 묻는 질문은 [FAQ 링크]에서 확인 가능하며, 담당자 연결은 평일 오전 9시부터 오후 6시까지 지원됩니다."',
      imageSrc: '/images/services/email-autoresponder.png',
      extendedDescription: `**[ 문제 상황 ]**
느리고 일관성 없는 이메일 응대는 고객 만족도를 떨어뜨리고, 잠재 고객을 놓치게 만드는 주요 원인입니다. 특히, 업무 시간 외 또는 휴일에 접수되는 문의는 다음 날 처리되어 판매 기회를 상실하거나 부정적인 고객 경험을 초래할 수 있습니다. 반복적인 문의에 상담원이 직접 응대하는 것은 시간 낭비일 뿐 아니라, 중요한 업무에 집중할 역량을 분산시켜 전체적인 업무 효율성을 저해합니다.

**[ iMate 이메일 자동응답 Agent 솔루션 ]**
iMate의 이메일 자동응답 Agent는 최첨단 자연어 처리(NLP) 기술과 GPT 기반의 강력한 언어 모델을 활용하여, 마치 숙련된 상담원처럼 고객 문의의 핵심 의도와 감정까지 파악합니다. 이를 바탕으로 24시간 365일, 개인의 상황과 문의 유형에 최적화된 답변을 평균 60초 이내에 자동으로 생성하고 발송합니다. 단순 문의 자동화를 넘어, 고객과의 첫 접점에서부터 긍정적이고 전문적인 브랜드 이미지를 구축합니다.

**[ 주요 기능 및 특징 ]**
- **지능형 문의 분석 및 분류**: 문의 내용, 발신자 정보, 첨부 파일 등을 종합적으로 분석하여 문의 유형(예: 제품 정보, 기술 지원, 배송, 결제, 불만 접수 등)을 자동으로 분류하고, 사전에 정의된 워크플로우에 따라 처리합니다.
- **AI 기반 답변 생성 및 추천**: 방대한 지식 베이스와 고객사의 FAQ, 제품 정보 등을 학습한 AI가 상황에 맞는 최적의 답변을 실시간으로 생성합니다. 또는 상담원에게 여러 답변 옵션을 추천하여 신속한 의사결정을 지원합니다.
- **다국어 지원 및 자동 번역**: 영어, 일본어, 중국어 등 다양한 언어로 접수되는 문의에 대해 실시간 자동 번역 및 해당 언어로 답변 생성이 가능하여 글로벌 비즈니스를 지원합니다.
- **CRM 및 외부 시스템 연동**: Salesforce, HubSpot, Zendesk 등 주요 CRM 및 헬프데스크 솔루션과 완벽하게 연동됩니다. 고객의 기존 구매 내역, 상담 이력 등을 참조하여 더욱 개인화되고 맥락에 맞는 응대가 가능합니다.
- **지속적인 학습 및 성능 최적화**: 실제 운영 중 발생하는 문의와 답변 데이터를 기반으로 AI 모델이 스스로 학습하고 성능을 지속적으로 개선하여, 시간이 지날수록 더욱 스마트해집니다.
- **상세 리포팅 및 성과 분석 대시보드**: 문의 처리 현황, AI 응답률, 평균 처리 시간, 고객 만족도 변화 추이 등 다양한 핵심 성과 지표(KPI)를 시각화된 대시보드를 통해 실시간으로 제공하여, 서비스 개선 및 운영 전략 수립에 필요한 인사이트를 제공합니다.

**[ 도입 효과 및 성공 지표 ]**
- **응답 시간 혁신**: 평균 이메일 응답 시간 기존 24시간 → **60초 이내로 단축**
- **업무 효율 극대화**: 이메일 확인 및 수동 응대 시간 **최대 90% 절감**
- **운영 비용 절감**: 단순 반복 문의 자동 처리로 상담 인력 운영 비용 **최대 50% 절감**
- **고객 만족도 향상**: 신속하고 정확한 응대로 고객 만족도 평균 **25% 이상 향상** 및 고객 이탈률 감소
- **전환율 증대**: 잠재 고객 문의에 대한 즉각적인 대응으로 구매 전환율 **최대 396% 증가** 달성 (실제 고객사례 기반)
- **상담원 생산성 향상**: 상담원은 복잡하고 고부가가치 업무에 집중하여 1인당 생산성 **최대 3배 증가**

**[ 도입 프로세스 ]**
1. **무료 컨설팅 및 요구사항 분석**: 전문 컨설턴트가 고객사의 현재 이메일 처리 현황, 주요 문제점, 자동화 목표 등을 심층적으로 분석합니다.
2. **AI 모델 학습 및 맞춤 설정**: 고객사 제공 데이터(FAQ, 제품 정보, 기존 상담 내역 등)를 기반으로 AI 모델을 학습시키고, 자동응답 시나리오 및 워크플로우를 맞춤 설정합니다.
3. **시스템 연동 및 테스트**: 기존 CRM, 이메일 시스템 등과 안전하게 연동하고, 실제와 유사한 환경에서 파일럿 테스트를 진행하여 안정성과 정확도를 검증합니다.
4. **정식 오픈 및 교육 지원**: 성공적인 시스템 오픈과 함께 담당자 교육을 지원하고, 초기 운영 안정화를 위한 밀착 지원을 제공합니다.
5. **지속적인 모니터링 및 최적화**: AI 성능, 자동화 효과 등을 지속적으로 모니터링하고, 정기적인 리포트와 함께 최적화 방안을 제안하여 서비스 가치를 극대화합니다.`,
      cta: '이메일 자동응답 데모 신청',
      link: 'http://pf.kakao.com/_CYGdn/chat' // All modal CTAs will point to Kakao chat for detailed inquiry
    }
  },
  {
    id: 'onboarding-automation',
    name: '고객 온보딩 자동화',
    Icon: OnboardingIcon,
    summary: '신규 고객에게 필요한 정보와 자료를 자동으로 안내합니다.',
    recommendedIndustries: 'SaaS, 온라인 교육, 멤버십 서비스, 금융 상품',
    details: {
      problem: '높은 초기 이탈률, 일관성 없는 온보딩 경험, 반복적인 안내 업무 부담, 낮은 서비스/제품 활성화 비율',
      feature: '고객 여정 단계별 맞춤형 환영 메시지, 사용 가이드, 튜토리얼, 주요 기능 안내, 성공 팁 등을 자동으로 제공합니다.',
      effect: '온보딩 완료율 40% 증가, 초기 이탈률 30% 감소, 고객의 첫 성공 경험 달성 시간 50% 단축, 지원 문의 60% 감소',
      sample: '시나리오: 가입 직후 - 환영 이메일 + 핵심 기능 튜토리얼 영상 발송. 3일차 - 첫 번째 목표 달성 축하 및 고급 기능 소개. 7일차 - 활용 사례 웨비나 초대 및 Q&A 세션 안내.',
      imageSrc: '/images/services/onboarding-automation.png',
      extendedDescription: `**[ 문제 상황 ]**
새로운 서비스나 제품을 처음 사용하는 고객은 복잡한 기능과 사용법에 어려움을 느껴 쉽게 이탈하곤 합니다. 수동으로 진행되는 온보딩 과정은 담당자마다 내용의 편차가 발생할 수 있고, 모든 신규 고객에게 일관되고 체계적인 정보를 적시에 제공하기 어렵습니다. 이는 결국 낮은 제품/서비스 활성화율과 높은 고객 지원 비용으로 이어집니다.

**[ iMate 고객 온보딩 자동화 Agent 솔루션 ]**
iMate의 고객 온보딩 자동화 Agent는 신규 고객이 서비스 가치를 빠르게 인지하고 성공적으로 안착할 수 있도록, 개인화된 맞춤형 온보딩 여정을 설계하고 자동화합니다. 고객의 가입 시점, 행동 데이터, 설정 정보 등을 기반으로 가장 필요한 정보와 리소스를 최적의 타이밍에 이메일, 인앱 메시지, SMS 등 다양한 채널을 통해 자동으로 제공합니다.

**[ 주요 기능 및 특징 ]**
- **다채널 온보딩 시나리오 설계**: 고객의 유형, 유입 경로, 서비스 플랜 등에 따라 맞춤형 온보딩 시나리오를 유연하게 설계하고 자동 실행합니다. (예: 이메일 시퀀스, 인앱 가이드 투어, 튜토리얼 팝업 등)
- **개인화된 콘텐츠 자동 발송**: 고객의 이름, 회사명, 관심사 등의 정보를 활용하여 개인화된 환영 메시지, 사용 가이드, 튜토리얼 영상, 성공 사례 등을 자동으로 발송합니다.
- **고객 행동 기반 조건부 메시징**: 고객의 특정 행동(예: 특정 기능 사용, 특정 페이지 방문, 미션 완료 등)을 트리거로 하여 관련 팁, 다음 단계 안내, 격려 메시지 등을 자동으로 제공합니다.
- **핵심 기능 안내 및 사용 유도**: 서비스의 핵심 기능을 단계별로 안내하고, 사용을 유도하는 인터랙티브한 튜토리얼 및 체크리스트를 제공하여 고객의 학습 곡선을 완만하게 합니다.
- **진행 상황 추적 및 리포팅**: 고객별 온보딩 진행 상황, 주요 마일스톤 달성 여부, 콘텐츠 참여율 등을 실시간으로 추적하고, 개선을 위한 인사이트를 담은 리포트를 제공합니다.
- **A/B 테스트 지원**: 다양한 온보딩 메시지, 콘텐츠, 시나리오 등을 A/B 테스트하여 가장 효과적인 온보딩 전략을 도출하고 최적화합니다.

**[ 도입 효과 및 성공 지표 ]**
- **온보딩 완료율 향상**: 체계적이고 매력적인 온보딩 경험 제공으로 평균 온보딩 완료율 **40% 이상 증가**
- **초기 이탈률 감소**: 고객이 서비스 가치를 빠르게 느끼도록 도와 첫 30일 내 이탈률 **30% 이상 감소**
- **Time-to-Value 단축**: 고객이 첫 번째 성공(Aha! Moment)을 경험하기까지 걸리는 시간 **50% 단축**
- **고객 지원 부담 완화**: 선제적인 정보 제공으로 단순 반복 문의 **60% 이상 감소**
- **제품/서비스 활성화 증대**: 주요 기능 사용률 및 전반적인 고객 참여도 향상
- **장기 고객 유지율(Retention) 증가**: 긍정적인 첫인상과 성공적인 온보딩 경험은 장기적인 고객 충성도로 이어짐

**[ 도입 프로세스 ]**
1. **온보딩 목표 및 KPI 정의**: 고객사의 비즈니스 목표와 연계된 온보딩 성공 지표(예: 활성화율, 리텐션)를 함께 정의합니다.
2. **고객 여정 분석 및 시나리오 설계**: 타겟 고객 페르소나 정의, 주요 터치포인트 분석을 통해 최적의 온보딩 여정 맵을 설계하고 자동화 시나리오를 구성합니다.
3. **콘텐츠 제작 및 시스템 설정**: 온보딩에 필요한 콘텐츠(이메일 템플릿, 가이드 문서, 영상 등)를 준비하고, iMate Agent 시스템에 시나리오를 설정합니다.
4. **파일럿 운영 및 최적화**: 일부 고객 그룹을 대상으로 파일럿 프로그램을 운영하고, 수집된 데이터를 기반으로 온보딩 메시지, 타이밍, 콘텐츠 등을 지속적으로 최적화합니다.
5. **전체 확대 적용 및 성과 모니터링**: 검증된 온보딩 프로그램을 전체 신규 고객에게 확대 적용하고, 설정된 KPI를 중심으로 성과를 지속적으로 모니터링 및 개선합니다.`,
      cta: '온보딩 자동화 상담 신청',
      link: 'http://pf.kakao.com/_CYGdn/chat'
    }
  },
  {
    id: 'crm-followup',
    name: 'CRM 팔로우업 자동화',
    Icon: CrmIcon,
    summary: '잠재 고객과의 관계를 지속하며 자연스럽게 다음 단계로 유도합니다.',
    recommendedIndustries: 'B2B 영업팀, 부동산 중개, 고가 컨설팅 서비스, 금융 투자 유치',
    details: {
      problem: '영업 담당자의 바쁜 일정으로 인한 리드 관리 소홀, 잠재 고객과의 관계 단절, 낮은 미팅 전환율, 수동 팔로우업의 비효율',
      feature: 'CRM 데이터와 연동하여 고객의 행동 및 상태 변화에 따라 AI가 개인화된 후속 메시지, 정보, 제안을 적시에 자동 발송합니다.',
      effect: '팔로우업 업무 80% 자동화, 리드 응답률 2배 증가, 미팅 성사율 50% 향상, 영업 주기 평균 15% 단축',
      sample: '예시: "지난주 보내드린 제안서는 검토해보셨을까요? 혹시 궁금한 점 있으시면 내일 오전 10시 또는 편하신 시간에 잠시 통화 가능할까요?" (고객이 제안서 확인 후 3일간 반응 없을 시 자동 발송)',
      imageSrc: '/images/services/crm-followup.png',
      extendedDescription: `**[ 문제 상황 ]**
영업 담당자는 수많은 잠재 고객을 관리해야 하지만, 바쁜 일정과 수동적인 업무 방식으로 인해 모든 리드에게 시기적절하고 꾸준한 팔로우업을 제공하기 어렵습니다. 이는 가치 있는 리드를 놓치거나, 고객과의 관계가 소원해져 경쟁사에게 기회를 빼앗기는 결과로 이어질 수 있습니다. CRM 시스템이 도입되어 있어도, 실제 팔로우업 실행은 여전히 많은 시간과 노력을 필요로 합니다.

**[ iMate CRM 팔로우업 자동화 Agent 솔루션 ]**
iMate의 CRM 팔로우업 자동화 Agent는 영업 담당자의 가장 믿음직한 조수 역할을 합니다. 기존에 사용 중인 CRM 시스템(예: Salesforce, HubSpot, Pipedrive 등)과 실시간으로 연동되어, 잠재 고객의 행동 변화(예: 웹사이트 방문, 이메일 오픈, 제안서 확인 등)나 특정 조건(예: 마지막 접촉 후 일정 기간 경과, 특정 단계에 머무름 등)에 따라, AI가 미리 설정된 시나리오에 맞춰 개인화된 후속 메시지를 자동으로 발송합니다. 이를 통해 끊임없는 고객 관계를 유지하고, 자연스럽게 다음 영업 단계로 유도합니다.

**[ 주요 기능 및 특징 ]**
- **실시간 CRM 데이터 연동 및 동기화**: 고객 정보, 거래 단계, 활동 이력 등 CRM 데이터를 실시간으로 동기화하여 최신 정보를 기반으로 팔로우업을 실행합니다.
- **고객 행동 기반 트리거 설정**: 이메일 오픈/클릭, 웹사이트 특정 페이지 방문, 콘텐츠 다운로드, 웨비나 참석 등 고객의 다양한 디지털 행동을 트리거로 팔로우업 시나리오를 자동 실행합니다.
- **개인화된 메시지 자동 생성 및 발송**: 고객의 이름, 회사, 직책, 관심사, 이전 대화 내용 등을 반영하여 마치 영업 담당자가 직접 작성한 듯한 고품질의 콜드메일을 대량으로 발송할 수 있습니다.
- **최적의 발송 타이밍 제안**: 고객의 활동 패턴, 표준 시간대, 과거 응답률 등을 분석하여 메시지 오픈율과 응답률을 극대화할 수 있는 최적의 발송 시간을 제안하거나 자동으로 실행합니다.
- **영업 단계별 맞춤 시나리오**: '리드 발굴 - 관심 유도 - 니즈 분석 - 제안 - 협상 - 계약' 등 각 영업 단계의 특성에 맞는 팔로우업 콘텐츠와 시퀀스를 설정하여 고객 여정을 체계적으로 관리합니다.
- **A/B 테스트 및 성과 분석**: 다양한 메시지 문구, 발송 채널, 타이밍 등을 A/B 테스트하여 가장 효과적인 팔로우업 전략을 도출하고, 대시보드를 통해 성과를 직관적으로 파악할 수 있도록 지원합니다.

**[ 도입 효과 및 성공 지표 ]**
- **팔로우업 업무 부담 대폭 감소**: 수동 팔로우업에 소요되는 시간과 노력 **80% 이상 자동화**
- **리드 응답률 및 전환율 향상**: 시의적절하고 개인화된 접근으로 리드 응답률 평균 **2배 이상 증가**, 미팅 성사율 **50% 향상**
- **영업 주기 단축**: 꾸준한 소통과 정보 제공으로 고객의 의사결정 시간을 단축시켜 평균 영업 주기 **15% 이상 단축**
- **잠재 고객 이탈 방지**: 놓치기 쉬운 리드까지 꼼꼼하게 관리하여 고객 이탈률 최소화
- **영업팀 생산성 증대**: 영업 담당자는 고부가가치 활동(상담, 제안, 계약 등)에 더욱 집중 가능
- **CRM 활용도 극대화**: CRM에 축적된 데이터를 실제 영업 활동으로 연결하여 CRM 투자 가치 증대

**[ 도입 프로세스 ]**
1. **영업 프로세스 및 CRM 현황 진단**: 현재 영업 파이프라인, 리드 관리 방식, CRM 활용 수준을 분석하고 자동화 기회를 발굴합니다.
2. **팔로우업 전략 및 시나리오 공동 설계**: 타겟 고객, 주요 전환 목표, 핵심 메시지 등을 정의하고, 영업 단계별 자동화 시나리오 및 콘텐츠를 구체적으로 설계합니다.
3. **CRM 연동 및 Agent 시스템 설정**: 기존 CRM 시스템과 iMate Agent를 안전하게 연동하고, 설계된 시나리오와 메시지 템플릿을 시스템에 설정합니다.
4. **소규모 테스트 및 검증**: 특정 영업팀 또는 리드 그룹을 대상으로 파일럿 운영을 통해 자동화 로직의 정확성과 효과를 검증하고, 필요한 조정을 진행합니다.
5. **전사 확대 적용 및 지속적 개선**: 성공적인 파일럿 결과를 바탕으로 전사적으로 확대 적용하고, 운영 성과 데이터를 분석하여 팔로우업 전략을 지속적으로 개선하고 고도화합니다.`,
      cta: 'CRM 팔로우업 전략 컨설팅',
      link: 'http://pf.kakao.com/_CYGdn/chat'
    }
  },
  {
    id: 'coldmail-automation',
    name: '초개인화 콜드메일',
    Icon: ColdMailIcon,
    summary: '타겟 고객에게 맞춤형 콜드메일을 발송하여 응답률을 극대화합니다.',
    recommendedIndustries: '스타트업 (투자 유치, 파트너십), B2B 기업 (신규 시장 개척), 마케팅/PR 대행사, 헤드헌팅',
    details: {
      problem: '낮은 콜드메일 오픈율과 응답률, 스팸으로 간주될 위험, 타겟 고객 분석 및 메시지 작성에 소요되는 많은 시간',
      feature: '타겟 고객의 최신 정보(뉴스, SNS, 회사 발표 등)를 AI가 실시간으로 분석하여, 1:1 맞춤형 콜드메일 초안을 자동으로 생성하고 발송 스케줄링까지 지원합니다.',
      effect: '콜드메일 작성 시간 90% 절감, 오픈율 평균 40% 이상 달성, 응답률 업계 평균 대비 3~5배 증가, 미팅 전환율 10% 이상 확보',
      sample: '예시: "[수신자명]님, 최근 [수신자 회사]의 [최신 성과/뉴스] 관련 기사를 인상 깊게 읽었습니다. 특히 [특정 내용] 부분은 저희 iMate가 제공하는 [솔루션]과 좋은 시너지를 낼 수 있다고 생각합니다. 잠시 시간 내주시어 간략히 소개해드릴 기회를 주시면 감사하겠습니다."',
      imageSrc: '/images/services/coldmail-automation.png',
      extendedDescription: `**[ 문제 상황 ]**
일반적인 템플릿 기반의 콜드메일은 더 이상 잠재 고객의 주목을 끌기 어렵습니다. 대부분의 콜드메일은 읽히지 않거나 스팸으로 처리되어, 귀중한 시간과 노력만 낭비하는 결과를 초래합니다. 성공적인 콜드메일을 작성하기 위해서는 타겟 고객과 그들의 비즈니스에 대한 깊이 있는 이해를 바탕으로, 각 수신자에게 맞춤화된 메시지를 전달해야 하지만, 이는 엄청난 리서치와 작성 시간을 필요로 합니다.

**[ iMate 초개인화 콜드메일 Agent 솔루션 ]**
iMate의 초개인화 콜드메일 Agent는 AI 기술을 활용하여 콜드메일의 패러다임을 바꿉니다. 타겟 고객의 회사 웹사이트, LinkedIn 프로필, 최근 뉴스 기사, SNS 활동, 업계 동향 등 공개된 데이터를 실시간으로 수집하고 분석합니다. 이 분석 결과를 바탕으로, 각 수신자의 현재 상황, 관심사, 니즈와 관련된 매우 구체적이고 설득력 있는 콜드메일 초안을 AI가 자동으로 생성해줍니다. 영업 담당자는 이 초안을 약간만 수정하거나 그대로 사용하여, 마치 1:1로 직접 작성한 듯한 고품질의 콜드메일을 대량으로 발송할 수 있습니다.

**[ 주요 기능 및 특징 ]**
- **타겟 고객 자동 프로파일링**: 타겟 리스트(이메일, 회사명 등)를 업로드하면, AI가 웹 크롤링 및 데이터 분석을 통해 각 잠재 고객의 상세 정보(산업, 직책, 관심사, 최신 활동, 기업 정보 등)를 자동으로 수집하고 프로파일링합니다.
- **AI 기반 초개인화 메시지 생성**: 분석된 고객 프로필과 사전에 정의된 핵심 제안 가치를 결합하여, 각 수신자에게 고유하고 매력적인 콜드메일 본문, 제목, 첫 문장 등을 AI가 자동으로 생성합니다. (다양한 어투와 스타일 선택 가능)
- **실시간 정보 반영 및 시의성 확보**: 타겟 고객의 최신 뉴스, 회사 발표, 업계 트렌드 등을 실시간으로 반영하여 메시지의 시의성과 관련성을 극대화합니다.
- **다양한 변수 활용 및 템플릿 고도화**: 이름, 회사명, 직책 외에도 수십 가지의 개인화 변수를 활용할 수 있으며, 성공적인 콜드메일 템플릿을 지속적으로 학습하고 개선합니다.
- **발송 스케줄링 및 시퀀스 자동화**: 최적의 발송 시간(요일, 시간대)을 추천하거나 자동으로 설정하고, 여러 단계의 팔로우업 메일 시퀀스를 미리 예약하여 자동으로 발송합니다.
- **오픈율/응답률 추적 및 성과 분석**: 콜드메일 캠페인별 오픈율, 클릭률, 응답률, 미팅 전환율 등을 상세하게 추적하고 분석하여, 어떤 메시지와 전략이 효과적인지 인사이트를 제공합니다.

**[ 도입 효과 및 성공 지표 ]**
- **콜드메일 작성 시간 혁신적 단축**: 수동 리서치 및 작성 대비 **최대 90% 시간 절감**
- **오픈율 대폭 향상**: 개인화되고 시의성 있는 메시지로 평균 콜드메일 오픈율 **40% 이상 달성**
- **응답률 극대화**: 업계 평균(1~2%) 대비 **3~5배 높은 응답률** 확보 가능
- **미팅 전환율 증가**: 진정성 있는 접근으로 유의미한 미팅 또는 데모 요청 **10% 이상 확보**
- **브랜드 인지도 및 신뢰도 제고**: 스팸성 메일이 아닌, 가치 있는 정보를 제공하는 전문가로서의 첫인상 구축
- **새로운 사업 기회 발굴**: 이전에는 접근하기 어려웠던 잠재 고객 및 시장에 효과적으로 도달

**[ 도입 프로세스 ]**
1. **타겟 고객 정의 및 목표 설정**: 어떤 유형의 잠재 고객에게 도달하고 싶은지, 콜드메일을 통해 얻고 싶은 구체적인 목표(예: 미팅 약속, 데모 신청, 파트너십 제안)를 명확히 합니다.
2. **핵심 가치 제안 및 메시지 프레임워크 수립**: 자사 제품/서비스가 타겟 고객에게 제공할 수 있는 핵심 가치와 차별점을 정의하고, 이를 효과적으로 전달할 수 있는 메시지 프레임워크를 설정합니다.
3. **AI Agent 설정 및 학습 데이터 연동**: iMate Agent에 타겟 고객 프로파일링 기준, 메시지 생성 가이드라인 등을 설정하고, 필요한 경우 추가적인 학습 데이터를 연동합니다.
4. **캠페인 생성 및 테스트 발송**: 소규모 그룹을 대상으로 테스트 캠페인을 실행하여 AI가 생성한 메시지의 품질, 개인화 수준, 응답률 등을 점검하고 개선합니다.
5. **본격적인 캠페인 실행 및 최적화**: 검증된 설정을 바탕으로 본격적인 콜드메일 캠페인을 실행하고, 실시간 성과 데이터를 모니터링하며 지속적으로 메시지, 타겟팅, 발송 전략 등을 최적화합니다.`,
      cta: '초개인화 콜드메일 시연 요청',
      link: 'http://pf.kakao.com/_CYGdn/chat'
    }
  }
];

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    onClose(); 
    if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    } else {
      setTimeout(() => {
        const element = document.getElementById(link.substring(1));
        if (element) {
          const navbarHeight = document.querySelector('nav')?.offsetHeight || 70;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 0);
    }
  };

  const renderExtendedDescription = (description) => {
    if (!description) return null;
    return description.split('\n\n').map((paragraph, index) => {
      if (paragraph.startsWith('**[') && paragraph.endsWith(']**')) {
        return <h4 key={index} className="text-xl font-semibold text-slate-800 mt-6 mb-3">{paragraph.replace(/\*\*\s*\[\s*|\s*\]\s*\*\*/g, '')}</h4>;
      }
      if (paragraph.startsWith('- ')) {
        const items = paragraph.split('\n- ').map(item => item.replace(/^- /, ''));
        return (
          <ul key={index} className="space-y-1 mb-3">
            {items.map((item, i) => <ListItem key={i}>{item}</ListItem>)}
          </ul>
        );
      }
      return <p key={index} className="text-slate-700 mb-3 leading-relaxed whitespace-pre-line">{paragraph}</p>;
    });
  };


  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out">
      <div className="bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 md:p-8 rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto text-slate-800 scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200">
        <div className="flex justify-between items-start mb-6 sticky top-0 bg-gradient-to-br from-white via-slate-50 to-slate-100 py-4 -mx-6 md:-mx-8 px-6 md:px-8 z-10 border-b border-slate-200">
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg mr-4">
              <service.Icon />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-orange-600">{service.name}</h3>
          </div>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-orange-500 text-4xl font-light leading-none p-1 -mt-1 transition-colors duration-200"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>

        {service.details.imageSrc && (
          <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={service.details.imageSrc} 
              alt={`${service.name} 서비스 시각화`} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        
        <div className="space-y-3 text-slate-700 leading-relaxed text-base px-1">
          
          <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
            <h4 className="text-lg font-semibold text-slate-800 mb-2">겪고 있는 어려움 (Problem)</h4>
            <p className="text-slate-600">{service.details.problem}</p>
          </div>

          <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
            <h4 className="text-lg font-semibold text-slate-800 mb-2">iMate의 핵심 제안 (Feature)</h4>
            <p className="text-slate-600">{service.details.feature}</p>
          </div>
          
          <div className="p-4 bg-orange-50 rounded-lg shadow-sm border border-orange-200">
            <h4 className="text-lg font-semibold text-orange-700 mb-2">기대 효과 (Effect)</h4>
            <p className="text-orange-600 font-medium">{service.details.effect}</p>
          </div>

          {service.details.sample && (
            <div className="p-4 bg-white rounded-lg shadow-sm border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-800 mb-2">활용 예시 (Sample)</h4>
              <p className="text-slate-600 italic bg-slate-100 p-3 rounded-md">{service.details.sample}</p>
            </div>
          )}

          {/* Render Extended Description */}
          <div className="mt-6 pt-6 border-t border-slate-300">
            {renderExtendedDescription(service.details.extendedDescription)}
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-300">
            <h4 className="text-xl font-semibold text-slate-800 mb-3">추천 업종 및 활용 분야</h4>
            <div className="flex flex-wrap gap-2">
              {service.recommendedIndustries.split(', ').map(industry => (
                <span key={industry} className="bg-orange-100 text-orange-700 text-sm font-medium px-3 py-1 rounded-full">{industry}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-300 text-center sticky bottom-0 bg-gradient-to-tr from-white via-slate-50 to-slate-100 py-4 -mx-6 md:-mx-8 px-6 md:px-8 z-10">
          <a
            href={service.details.link || 'http://pf.kakao.com/_CYGdn/chat'}
            onClick={(e) => handleLinkClick(e, service.details.link || 'http://pf.kakao.com/_CYGdn/chat')}
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3.5 px-10 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75"
          >
            {service.details.cta || 'AI Agent 도입 문의하기'}
          </a>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
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

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden'; 
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto'; 
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-white text-slate-800 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          iMate <span className="text-orange-500">AI Agent</span> 4종 소개
        </h2>
        <p 
          className={`text-lg text-slate-600 text-center mb-12 md:mb-16 max-w-2xl mx-auto transition-all duration-700 ease-out delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          당신의 비즈니스 성장을 가속화할 4가지 핵심 AI 자동화 에이전트를 소개합니다. 
          각 서비스의 상세 내용을 확인하고, 직접 체험해보세요.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-slate-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:scale-[1.03] overflow-hidden transform transition-all ease-out duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${isVisible ? 300 + index * 100 : 0}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img src={service.details.imageSrc} alt={`${service.name} 이미지`} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-slate-600 mb-3 text-sm leading-relaxed flex-grow min-h-[60px]">{service.summary}</p>
                <p className="text-xs text-slate-500 mb-4">
                  <strong className="text-slate-700">추천 업종:</strong> {service.recommendedIndustries}
                </p>
                <div className="mt-auto space-y-3">
                  <button
                    onClick={() => openModal(service)}
                    className="w-full bg-white hover:bg-orange-500 border-2 border-orange-500 text-orange-500 hover:text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 text-sm"
                  >
                    자세히 보기
                  </button>
                  <a
                    href="http://pf.kakao.com/_CYGdn/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 px-4 rounded-md transition-colors duration-300 text-sm"
                  >
                    💬 문의하기
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`text-center mt-12 md:mt-16 pt-10 border-t border-slate-200 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <p className="text-xl text-slate-700 font-semibold mb-6 max-w-xl mx-auto">
            그 외에도 원하시는 맞춤 AI 자동화 툴을<br className="sm:hidden" /> 만들어드릴게요.
          </p>
          <a
            href="http://pf.kakao.com/_CYGdn/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold py-3.5 px-10 rounded-lg text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            💬 맞춤 AI 문의하기
          </a>
        </div>

      </div>
      {selectedService && <ServiceModal service={selectedService} onClose={closeModal} />}
    </section>
  );
};

export default ServicesSection; 