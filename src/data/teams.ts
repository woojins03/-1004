export interface Team {
  mbti: string;
  name: string;
  nickname: string;
  description: string;
  playstyle: string;
  vibe: string;
  manager: string;
  logoColor: string;
  logoUrl: string;
}

export const teams: Record<string, Team> = {
  ENTJ: {
    mbti: 'ENTJ',
    name: 'Bayern Munich',
    nickname: '바이에른 머신',
    description: '압도적이고 체계적이며 완벽주의자입니다. 오직 최고만을 추구하며 성공을 향한 끊임없는 원동력을 가지고 있습니다.',
    playstyle: '끊임없는 공격과 압박',
    vibe: '무자비한 효율성',
    manager: '유프 하인케스 / 펩 과르디올라',
    logoColor: '#DC052D',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg'
  },
  ENFP: {
    mbti: 'ENFP',
    name: 'Liverpool',
    nickname: '헤비메탈 로커',
    description: '열정적이고 감성적이며 커뮤니티와 깊게 연결되어 있습니다. 넘치는 에너지와 극적인 역전승에 열광합니다.',
    playstyle: '헤비메탈 축구 (게겐프레싱)',
    vibe: '순수한 열정과 감동',
    manager: '위르겐 클롭',
    logoColor: '#C8102E',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg'
  },
  INTJ: {
    mbti: 'INTJ',
    name: 'Manchester City',
    nickname: '전술적 천재',
    description: '전술적이고 혁신적이며 과정을 중시합니다. 복잡한 시스템을 사랑하고 계획을 완벽하게 실행하는 것을 즐깁니다.',
    playstyle: '포지셔널 플레이 & 통제',
    vibe: '계산된 천재성',
    manager: '펩 과르디올라',
    logoColor: '#6CABDD',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg'
  },
  ISFP: {
    mbti: 'ISFP',
    name: 'Real Madrid',
    nickname: '갈락티코',
    description: '스타 플레이어가 즐비하고 우아하며 개인의 번뜩이는 재치에 의존합니다. 가장 중요한 순간, 가장 큰 무대에서 가장 빛납니다.',
    playstyle: '유려한 공격 & 클러치 능력',
    vibe: '왕실의 우아함과 마법',
    manager: '카를로 안첼로티 / 지네딘 지단',
    logoColor: '#FEBE10',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg'
  },
  ISTJ: {
    mbti: 'ISTJ',
    name: 'Atletico Madrid',
    nickname: '투지 넘치는 전사',
    description: '규율이 잡혀 있고 수비적이며 엄청나게 헌신적입니다. 승리를 위해 고통을 감내하며 절대 포기하지 않습니다.',
    playstyle: '두 줄 수비 & 치명적인 역습',
    vibe: '세상에 맞서는 우리',
    manager: '디에고 시메오네',
    logoColor: '#CB3524',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f4/Atletico_Madrid_2017_logo.svg'
  },
  INFJ: {
    mbti: 'INFJ',
    name: 'Arsenal',
    nickname: '비전을 가진 예술가',
    description: '아름다운 축구와 장기적인 프로젝트에 헌신합니다. 일이 어떻게 진행되어야 하는지에 대한 확고한 이상을 가지고 있습니다.',
    playstyle: '유려한 패스 & 연계 플레이',
    vibe: '과정을 믿어라 (Trust The Process)',
    manager: '아르센 벵거 / 미켈 아르테타',
    logoColor: '#EF0107',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg'
  },
  ESTJ: {
    mbti: 'ESTJ',
    name: 'Chelsea',
    nickname: '실용주의적 승부사',
    description: '실용적이고 체계적이며 수단과 방법을 가리지 않고 승리하는 데 집중합니다. 미학보다는 결과를 중시하고 살아남기 위해 적응합니다.',
    playstyle: '실용주의 & 단단함',
    vibe: '어떻게든 이긴다',
    manager: '조세 무리뉴',
    logoColor: '#034694',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg'
  },
  ESFJ: {
    mbti: 'ESFJ',
    name: 'Borussia Dortmund',
    nickname: '노란 벽 (Yellow Wall)',
    description: '커뮤니티 중심적이고 열정적이며 체계적입니다. 함께하는 경험을 소중히 여기며 동료들과 끊을 수 없는 유대감을 가집니다.',
    playstyle: '빠른 템포의 공격',
    vibe: '전율이 흐르는 분위기',
    manager: '위르겐 클롭',
    logoColor: '#FDE100',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg'
  },
  ENFJ: {
    mbti: 'ENFJ',
    name: 'AC Milan',
    nickname: '카리스마 넘치는 리더',
    description: '역사적이고 열정적이며 카리스마가 넘칩니다. 풍부한 유산을 바탕으로 웅장함과 스타일로 다른 사람들에게 영감을 줍니다.',
    playstyle: '전술적 & 우아함',
    vibe: '유럽의 귀족',
    manager: '카를로 안첼로티 / 아리고 사키',
    logoColor: '#FB090B',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg'
  },
  ESTP: {
    mbti: 'ESTP',
    name: 'Manchester United',
    nickname: '블록버스터',
    description: '쇼맨십, 역사적인 역전승, 그리고 블록버스터급 엔터테인먼트. 스포트라이트를 사랑하고 드라마틱한 상황에서 진가를 발휘합니다.',
    playstyle: '직선적인 공격 & 윙 플레이',
    vibe: '꿈의 극장 (Theatre of Dreams)',
    manager: '알렉스 퍼거슨 경',
    logoColor: '#DA291C',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg'
  },
  ESFP: {
    mbti: 'ESFP',
    name: 'Barcelona',
    nickname: '엔터테이너',
    description: '재미있고 화려하며 자신의 스타일에 대해 깊은 철학을 가지고 있습니다. 이기고 싶어 하지만, 반드시 아름답게 이겨야 합니다.',
    playstyle: '티키타카',
    vibe: '클럽 그 이상의 클럽',
    manager: '요한 크루이프 / 펩 과르디올라',
    logoColor: '#A50044',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg'
  },
  INTP: {
    mbti: 'INTP',
    name: 'Ajax',
    nickname: '전술적 개척자',
    description: '철학적이고 유소년 중심적이며 혁신적입니다. 문제를 해결하는 새로운 방법을 발명하고 원석을 다듬는 것을 사랑합니다.',
    playstyle: '토털 사커',
    vibe: '젊은 혁신',
    manager: '리누스 미헬스 / 에릭 텐 하흐',
    logoColor: '#D2122E',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg'
  },
  INFP: {
    mbti: 'INFP',
    name: 'Tottenham Hotspur',
    nickname: '낭만적인 몽상가',
    description: '낭만적이고 감성적이며 항상 영광을 꿈꿉니다. 비록 마음의 상처를 입더라도 그 여정과 스타일을 소중히 여깁니다.',
    playstyle: '도전하는 것이 곧 실천이다 (공격 축구)',
    vibe: '희망과 좌절',
    manager: '마우리시오 포체티노',
    logoColor: '#132257',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Tottenham_Hotspur.svg'
  },
  ISFJ: {
    mbti: 'ISFJ',
    name: 'Inter Milan',
    nickname: '전통주의자',
    description: '단단하고 전통적이며 맹렬히 충성스럽습니다. 강력한 기반을 구축하고 자신이 가진 모든 것을 바쳐 지켜냅니다.',
    playstyle: '카테나치오 & 전술적 견고함',
    vibe: '미친 인테르 (Pazza Inter)',
    manager: '엘레니오 에레라 / 조세 무리뉴',
    logoColor: '#010E80',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/05/FC_Internazionale_Milano_2021.svg'
  },
  ISTP: {
    mbti: 'ISTP',
    name: 'Napoli',
    nickname: '예측 불가능한 이단아',
    description: '예측할 수 없고 열정적이며 개인의 번뜩이는 재치에 의존합니다. 기존의 질서를 뒤흔드는 것을 좋아하는 반항아입니다.',
    playstyle: '고옥탄가 공격 축구',
    vibe: '맹렬한 남부의 자존심',
    manager: '디에고 마라도나 (정신적 지주) / 루치아노 스팔레티',
    logoColor: '#12A0D7',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/28/S.S.C._Napoli_logo.svg'
  },
  ENTP: {
    mbti: 'ENTP',
    name: 'Bayer Leverkusen',
    nickname: '파괴자 (Disruptor)',
    description: '혁신적이고 파괴적이며 흥미진진합니다. 현상 유지에 도전하고 화려한 플레이로 의심하는 사람들의 틀을 깨는 것을 좋아합니다.',
    playstyle: '무적의 유동적 공격',
    vibe: '더 이상 네버쿠젠이 아니다',
    manager: '사비 알론소',
    logoColor: '#E32221',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/5/59/Bayer_04_Leverkusen_logo.svg'
  }
};
