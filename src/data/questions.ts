export type Trait = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface Option {
  text: string;
  trait: Trait;
}

export interface Question {
  id: number;
  text: string;
  options: [Option, Option];
}

export const questions: Question[] = [
  // E vs I
  {
    id: 1,
    text: "응원할 클럽을 고를 때, 어떤 점이 더 끌리나요?",
    options: [
      { text: "수백만 명의 팬을 보유한 세계적으로 유명한 메가 클럽.", trait: "E" },
      { text: "끈끈하고 충성도 높은 팬덤을 가진 지역 밀착형 클럽.", trait: "I" }
    ]
  },
  {
    id: 2,
    text: "중요한 경기를 볼 때 선호하는 방식은?",
    options: [
      { text: "수많은 사람들과 함께 펍이나 팬 파크에서 응원가를 부르며 본다.", trait: "E" },
      { text: "집에서 친한 친구들 몇 명과 함께 조용히 분석하며 본다.", trait: "I" }
    ]
  },
  {
    id: 3,
    text: "어떤 경기장 분위기를 좋아하나요?",
    options: [
      { text: "전 세계가 지켜보는 8만 석 규모의 거대한 경기장.", trait: "E" },
      { text: "팬들과 피치가 맞닿아 있는 역사적이고 아담한 경기장.", trait: "I" }
    ]
  },
  // S vs N
  {
    id: 4,
    text: "선호하는 플레이 스타일은?",
    options: [
      { text: "단단한 수비와 선 굵은 '킥 앤 러시' 역습 축구.", trait: "S" },
      { text: "정교한 패스 네트워크와 창의적인 '토털 사커'.", trait: "N" }
    ]
  },
  {
    id: 5,
    text: "가장 존경하는 선수 유형은?",
    options: [
      { text: "모든 태클을 이겨내는 헌신적이고 터프한 수비형 미드필더.", trait: "S" },
      { text: "남들이 보지 못하는 패스 길을 보는 시야 넓은 플레이메이커.", trait: "N" }
    ]
  },
  {
    id: 6,
    text: "축구 전술을 어떻게 바라보나요?",
    options: [
      { text: "기본에 충실하고, 피지컬 싸움에서 이기며, 상대의 실수를 노려야 한다.", trait: "S" },
      { text: "폴스 나인, 인버티드 풀백 등 끊임없이 혁신하고 유동적인 포메이션을 써야 한다.", trait: "N" }
    ]
  },
  // T vs F
  {
    id: 7,
    text: "시즌이 끝났을 때 가장 중요한 것은?",
    options: [
      { text: "냉혹한 승리와 효율성. 결국 남는 건 트로피뿐이다.", trait: "T" },
      { text: "클럽의 낭만적인 스토리, 열정, 그리고 '올바른 방식'으로 플레이했는가.", trait: "F" }
    ]
  },
  {
    id: 8,
    text: "클럽은 어떻게 운영되어야 할까요?",
    options: [
      { text: "데이터, 분석, 투자 대비 효율을 중시하는 잘 돌아가는 기업처럼.", trait: "T" },
      { text: "충성심, 역사, 유스 아카데미를 우선시하는 하나의 가족처럼.", trait: "F" }
    ]
  },
  {
    id: 9,
    text: "80분, 1-0으로 지고 있을 때 원하는 모습은?",
    options: [
      { text: "상대의 약점을 공략하기 위한 계산된 전술적 교체.", trait: "T" },
      { text: "관중의 에너지를 받아 모든 걸 쏟아붓는 순수한 열정과 투지.", trait: "F" }
    ]
  },
  // J vs P
  {
    id: 10,
    text: "이상적인 팀 구조는?",
    options: [
      { text: "모두가 자신의 역할을 정확히 아는 체계적이고 조직적인 압박 기계.", trait: "J" },
      { text: "개인의 번뜩이는 재치와 즉흥성에 의존하는 자유로운 플레이.", trait: "P" }
    ]
  },
  {
    id: 11,
    text: "감독은 어떤 스타일이어야 할까요?",
    options: [
      { text: "매 경기 치밀한 마스터플랜을 짜는 엄격한 규율주의자.", trait: "J" },
      { text: "스타 선수들이 자유롭게 기량을 펼칠 수 있게 해주는 덕장(Man-manager).", trait: "P" }
    ]
  },
  {
    id: 12,
    text: "이적 시장에서의 최고의 전략은?",
    options: [
      { text: "감독의 특정 시스템에 완벽히 맞는 선수를 일찍 영입한다.", trait: "J" },
      { text: "기회를 엿보다가 가장 재능 있는 선수를 영입하고, 시스템은 나중에 맞춘다.", trait: "P" }
    ]
  }
];
