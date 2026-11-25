// 사이트에 들어가는 글과 자료는 이 파일에서만 고칩니다.
//
// [대괄호]   아직 정해지지 않은 내용입니다. 실제 내용으로 바꿉니다.
// null       아직 없는 주소나 파일입니다. 준비되면 채웁니다.
// 파일 경로  public 폴더를 기준으로 적습니다.
//            public/assets/img/ritual-hook.webp 는 'assets/img/ritual-hook.webp' 로 적습니다.

export const profile = {
  heading: '박세준 Level Design Portfolio', // 브라우저 탭 제목
  mark: ['Level Design Portfolio', '박세준'], // 왼쪽 위에 두 줄로 보이는 글자
  copyright: '© 2026 박세준',
  email: 'rabibel4454@naver.com',
  // PR 문서(PDF)입니다. 소개 화면에 링크로 나옵니다. 주소(https://...)를 적어도 됩니다.
  pr: 'assets/docs/pr.pdf',
};

// 홈에서 훅 이미지 한 장이 보이는 시간(초)입니다.
export const hookSeconds = 4.5;

export const works = [
  {
    id: 'ritual',
    nav: '의식의 밤',
    title: '의식의 밤',
    meta: 'Unreal Engine 5.8, 시간 전환 퍼즐, 약 3주',
    body: ['절벽 마을을 꼭대기의 위커맨까지 오르며 의식의 밤과 폐허를 오간다.'],
    points: ['현재에서 한 일이 미래에 남아 길이 된다.', '위커맨은 처음부터 보이는 목표이자 마지막 길이다.'],
    // 홈에 나오는 훅 장면 이미지입니다. 16:9로 준비합니다.
    hook: 'assets/img/ritual-hook.jpg',
    // 레벨 기획서(PDF)입니다. 왼쪽 설명의 버튼으로 새 탭에 열립니다. 주소(https://...)를 적어도 됩니다.
    doc: 'assets/docs/ritual-night.pdf',
    // 작업을 열었을 때 나오는 영상입니다. 긴 영상은 youtubeId, 짧은 파일은 video에 적습니다.
    youtubeId: 'R-gQ8o8CT28', // 영상 주소의 v= 뒤나 youtu.be/ 뒤에 있는 값 (LD_RitualNight)
    video: null, // 예: 'assets/video/ritual-night.mp4'
    poster: null, // 예: 'assets/img/ritual-night.webp'
  },
  {
    id: 'chase',
    nav: '코쿤시티',
    title: '코쿤시티',
    meta: 'Unreal Engine 5.8, 액션 어드벤처, 약 3주',
    body: ['배신당해 버려진 주인공이 소총 한 자루로 복수하러 간다.'],
    points: ['탄이 모자라, 길을 막는 감염체만 쏘며 도망친다.', '걸어온 길에 남긴 기름 줄이 그대로 도화선이 된다.'],
    hook: 'assets/img/chase-hook.jpg',
    doc: 'assets/docs/cocoon-city.pdf',
    youtubeId: 'HG2KQ-4RPgc', // LD_CocoonCity
    video: null,
    poster: null,
  },
  {
    id: 'whiteout',
    nav: '화이트아웃',
    title: '화이트아웃',
    meta: 'Unreal Engine 5.8, 서바이벌 호러, 약 2주',
    body: ["남극 설산을 내려와, '그것'을 피해 얼음에 박힌 쇄빙선으로 탈출한다."],
    points: ['스노모빌 구간은 막지 않고, 지나치는 사건으로 긴장을 준다.', "'그것'은 싸우기 전에 유리 너머에서 먼저 보여 준다."],
    hook: 'assets/img/whiteout-hook.jpg',
    doc: 'assets/docs/whiteout.pdf',
    youtubeId: 'Id818v2xyIc', // LD_WhiteOut
    video: null,
    poster: null,
  },
  {
    id: 'inv',
    nav: '인벤토리가 부족합니다',
    title: '인벤토리가 부족합니다',
    meta: 'Unity로 만든 5인 팀 프로젝트, 2주',
    link: { label: 'itch.io에서 플레이', to: 'https://jinsub706.itch.io/inventory-is-not-enough' },
    body: [
      '백팩 히어로의 가방 관리와 뱀파이어 서바이버의 생존을 합친 게임이다.',
      '맵 절차적 생성과 방 4종을 맡았고, 생성된 결과를 손으로 다듬어 재미를 맞췄다.',
    ],
    hook: 'assets/img/inv-hook.jpg',
    youtubeId: null,
    video: null,
    poster: 'assets/img/inv-hook.jpg',
  },
];

// 소개: title은 크게 나오는 한 줄이고, story는 그 아래 문단입니다.
export const about = {
  title: '공간으로 감정을 움직이는 레벨 디자이너',
  story: [
    '게임은 다른 매체와 달리 플레이어가 직접 겪습니다. 플레이어가 무엇을 겪고 어떻게 느낄지를 가장 가까이에서 다루는 일이 레벨 디자인이라고 생각합니다.',
    '아우터 와일즈에서 흩어져 있던 단서가 하나로 이어지던 순간이 가장 오래 남았습니다. 그런 발견의 순간을 설계하고 싶습니다.',
  ],
};

// 작업 상세: 작업을 열면 영상 아래에 이어지는 내용입니다. 레벨 기획서(PDF)의 '01 개요'를 옮겨 적었습니다.
// 타임 테이블, 긴장 곡선, 구역별 레벨 상세는 여기에 적지 않고 기획서로 보냅니다.
//   intent   기획 의도. shots는 그림 한 장과 글 한 덩어리이고, flow는 구역별 감정의 순서입니다.
//   concept  컨셉. shots의 note는 제목 아래의 흐린 한 줄입니다.
//   references  레퍼런스. name은 이름, take는 가져온 것입니다.
//   ai       AI 활용
//   blockout 블록아웃 반복. 적은 작업에만 나옵니다.
const engine = 'Unreal Engine 5.8, Game Animation Sample 기반';
const aiText = '동선, 감정, 플레이 테스트는 직접 판단하고, 구현과 검증은 언리얼 에디터에 연결한 Claude Code에 맡겼다.';

export const ritualNight = {
  title: '의식의 밤',
  lead: '1910년, 축제 소문을 듣고 기차로 온 고고학자가 여관에서 눈을 뜨자 마을은 광신도로 뒤덮여 있다. 두 시대를 오가며 절벽 꼭대기의 불타는 위커맨까지 올라가 의식을 멈춘다.',
  specs: [
    { label: '장르', value: '3인칭 시간 전환 퍼즐 어드벤처' },
    { label: '엔진', value: engine },
    { label: '맵 크기', value: '지형 504 × 504 m, 높이차 66 m' },
    { label: '플레이 타임', value: '약 6분 30초' },
    { label: '제작 기간', value: '약 3주' },
  ],
  intent: {
    title: '축제를 구경하러 온 외지인이, 의식을 멈추는 당사자가 되게 한다',
    text: '설렘 속의 불안에서 쫓기는 공포를 거쳐 맞서는 결의로 끝나도록, 낮에 걸은 마을을 밤과 미래로 다시 걷게 한다.',
    shots: [
      {
        src: 'assets/img/ritual-intent-1.jpg',
        alt: '이마에 시계가 달린 위커맨',
        title: '위커맨으로 처음부터 갈 곳을 알게 한다',
        body: '마을 전체가 하나의 오르막이다. 계단을 다 오르면 꼭대기의 위커맨이 보이고, 끝에는 그곳에 도착한다.',
      },
      {
        src: 'assets/img/ritual-intent-2.jpg',
        alt: '미래의 폐허를 달리는 장면',
        title: '두 시대를 오가며 길을 찾게 한다',
        body: '괘종시계와 회중시계로 같은 자리의 미래로 넘어간다. 현재는 광신도와 불길이 막고, 미래는 무너진 곳이 길이 된다.',
      },
      {
        src: 'assets/img/ritual-intent-3.jpg',
        alt: '로브를 입고 횃불로 불을 붙이는 장면',
        title: '원인을 만들면 결과가 남는 것을 겪게 한다',
        body: '묘목을 옮겨 심으면 미래에 나무가 서 있고, 말뚝을 태우면 미래에 지름길이 생긴다.',
      },
    ],
    flow: ['도착: 설렘 속의 불안', '마을: 쫓기는 공포', '절벽: 맞서는 결의'],
  },
  concept: {
    title: '100년에 한 번 축제가 열리는 절벽 마을',
    text: '1910년 영국의 어촌이다. 같은 마을을 낮, 의식의 밤, 폐허가 된 미래로 세 번 보여 준다.',
    shots: [
      {
        src: 'assets/img/ritual-concept-1.jpg',
        alt: '축제 인파로 붐비는 역 앞',
        title: '낮: 설렘과 불안',
        note: '축제 인파와 WELCOME 아치',
        body: '밝고 사람이 많은 마을이다. 꼭대기에는 아직 타지 않은 위커맨이 서 있다.',
      },
      {
        src: 'assets/img/ritual-concept-2.jpg',
        alt: '횃불과 붉은 로브가 막고 있는 밤의 거리',
        title: '의식의 밤',
        note: '폭풍우, 횃불, 붉은 로브',
        body: '낮에 걸어온 길을 광신도가 막고 있다. 따뜻한 빛은 전부 불이다.',
      },
      {
        src: 'assets/img/ritual-concept-3.jpg',
        alt: '폐허에서 빛나는 시계',
        title: '미래: 쓸쓸함과 조급함',
        note: '맑은 밤하늘과 푸른 폐허',
        body: '아무도 없고 조용하다. 빛나는 것은 시계뿐이고, 오래 머물 수 없다.',
      },
    ],
  },
  references: [
    { name: '보니파시오 절벽', take: '지형: 수평 지층과 낭떠러지 끝에 선 집' },
    { name: '텐비 (웨일스)', take: '동선: 역에서 마을을 지나 곶으로 가는 길' },
    { name: '마나롤라', take: '느낌: 꼭대기까지 층층이 쌓인 집과 그 아래 절벽' },
    { name: '히트맨 2, The Ark Society', take: '구조: 군중과 의식 사이를 지나가기' },
    { name: '인스머스의 그림자, 위커맨', take: '톤: 환대하던 어촌이 밤에 뒤집힘' },
    { name: '둠 이터널, 아이콘 오브 신', take: '절정: 거인을 길로 바꿔 쓰기' },
  ],
  ai: {
    text: aiText,
    items: [
      { title: '구현은 AI', body: '시간 전환, 괘종시계와 회중시계, 광신도 추격, 위커맨과 외신 연출 BP를 만들고, 직접 플레이하면서 수정했다.' },
      { title: '검증 자동화', body: '실제 입력으로 처음부터 엔딩까지 걷는 봇을 돌려서, 막히거나 붙잡히는 곳이 없는지 먼저 확인했다.' },
      { title: '판단은 직접', body: '시간 전환은 직접 켜고 끄던 것을, 제한 시간이 끝나면 저절로 돌아오게 바꿨다. 묘목도 그냥 심는 대신 옮겨 심고 미래의 나무를 쓰러뜨리게 바꿨다.' },
    ],
  },
  blockout: {
    text: '외부 피드백에서 "동선 유도가 이상하다"는 지적을 받았다. 걸어가는 화면을 4초마다 찍어 보니, 등불이 없는 미래 구간에서 목적지인 시계 2가 어두운 벽 뒤에 묻혀 있었다. "폐허에서 살아 있는 것은 시계뿐"이라는 규칙을 정해 미래의 시계에만 따뜻한 빛을 두었다. 시계 1은 넘어가자마자 눈앞에서 빛나며 규칙을 가르치고, 시계 2는 멀리서 보이는 목적지가 된다.',
    before: { src: 'assets/img/ritual-guide-before.jpg', alt: '푸른 밤의 폐허. 멀리 위커맨만 보이고 시계가 있는 집은 어둠에 묻혀 있다.', caption: '이전: 2026년 11월 10일, 어둠에 묻힌 미래의 시계 2' },
    after: { src: 'assets/img/ritual-guide-after.jpg', alt: '같은 자리. 멀리 시계가 있는 집의 무너진 벽 사이로 따뜻한 빛이 새어 나온다.', caption: '이후: 2026년 11월 11일, 시계에만 따뜻한 빛' },
  },
  next: { label: '다음 작업: 코쿤시티', work: 'chase' },
};

export const cocoonCity = {
  title: '코쿤시티',
  lead: '배달부가 병원 지하에서 치료제를 구해 다리 밑으로 가져가지만, 그곳에서 뒤통수를 맞고 강에 버려진다. 쓰레기장에서 눈을 뜬 그는 복수를 위해 배신자의 기지로 쳐들어간다.',
  specs: [
    { label: '장르', value: '3인칭 액션 어드벤처 (TPS)' },
    { label: '엔진', value: engine },
    { label: '맵 크기', value: '도시 동선 약 670 m, 쓰레기장 지형 252 × 252 m, 갱 기지 32 × 24 m × 2층' },
    { label: '플레이 타임', value: '약 7분 30초' },
    { label: '제작 기간', value: '약 3주' },
  ],
  intent: {
    title: '쫓기던 플레이어가 쫓는 쪽이 되는 통쾌함을 준다',
    text: '무력감에서 조급함을 거쳐 통쾌함으로 끝나도록, 구역마다 대응 방법과 빛, 높이를 바꾼다.',
    shots: [
      {
        src: 'assets/img/chase-intent-1.jpg',
        alt: '야적장에서 비를 맞으며 쏘는 장면',
        title: '구역마다 대응 방법을 바꿔 무력감을 통쾌함으로 뒤집는다',
        body: '맨손일 땐 숨어서 도망가고, 총을 쥐면 달리며 쏘고, 마지막엔 엄폐하며 싸우게 한다.',
      },
      {
        src: 'assets/img/chase-intent-2.jpg',
        alt: '작업등이 비추는 쓰레기장 길',
        title: '빛을 길잡이와 함정으로 써서 텐션을 유지시킨다',
        body: '손전등과 작업등으로 길을 알려 준다. 가장 밝은 길은 버스가 떨어져 막히는 함정으로 쓴다.',
      },
      {
        src: 'assets/img/chase-intent-3.jpg',
        alt: '바닥이 꺼져 지하로 떨어지는 장면',
        title: '낮은 곳에 떨어뜨리고, 높은 곳으로 스스로 뛰게 한다',
        body: '처음에는 바닥이 꺼져 지하로 떨어진다. 마지막에는 옥상에서 스스로 뛰어 빌딩 꼭대기의 기지로 들어간다.',
      },
    ],
    flow: ['도시: 무력감', '쓰레기장: 조급함', '적 소굴: 통쾌함'],
  },
  concept: {
    title: '배신과 복수',
    text: '지하로 떨어지고 쓰레기장 물가에 버려진 배달부가, 높은 곳에 있는 기지까지 올라가 갚아 준다. 구역이 바뀔 때마다 높이, 빛, 공간의 폭이 함께 바뀐다.',
    shots: [
      {
        src: 'assets/img/chase-concept-1.jpg',
        alt: '어두운 병원 지하, 손전등 옆에 선 감염체',
        title: '도시: 무력감',
        note: '지하, 푸른 어둠과 손전등 하나',
        body: '어둡고 좁은 병원 지하다. 무기가 없어 숨고 달아날 수밖에 없다.',
      },
      {
        src: 'assets/img/chase-concept-2.jpg',
        alt: '비 내리는 컨테이너 골목과 주황색 가로등',
        title: '쓰레기장: 조급함',
        note: '비와 주황색 가로등',
        body: '쓰레기 더미와 컨테이너 벽 사이의 외길이다. 적에 비해 탄이 부족하다.',
      },
      {
        src: 'assets/img/chase-concept-3.jpg',
        alt: '밝은 사무실에서 엄폐하고 쏘는 장면',
        title: '적 소굴: 통쾌함',
        note: '밝은 실내등',
        body: '빌딩 꼭대기의 기지다. 엄폐물 뒤에 자리를 잡고 한 명씩 제압한다.',
      },
    ],
  },
  references: [
    { name: '매사추세츠 종합병원', take: '도시: 실제 병원 단지의 병원과 도로 배치' },
    { name: '라스트 오브 어스', take: '전반: 탄이 부족해 쏠지 도망갈지 고르는 전투' },
    { name: '폴아웃: 뉴 베가스', take: '오프닝: 배신당하고 깨어나 복수의 이유를 얻음' },
    { name: '사이버펑크 2077', take: '후반: 방마다 엄폐하며 올라가는 갱 소탕 임무' },
    { name: '다크나이트', take: '진입: 뛰어내려 유리를 깨고 들어가는 홍콩 장면' },
    { name: '아키라', take: '탈출: 미끄러지며 멈추는 오토바이 제동' },
  ],
  ai: {
    text: aiText,
    items: [
      { title: '구현은 AI', body: '소총, 탄약, 감염체, 갱, 엔딩을 BP와 C++로 만들고, 직접 플레이하면서 수정했다.' },
      { title: '검증 자동화', body: '동선이 막히는 곳이 없는지, 적이 순서대로 나오는지 스크립트로 먼저 확인했다.' },
      { title: '판단은 직접', body: '총을 주운 뒤의 오르막 구간은 지루해서 버리고, 쏘면서 도망가는 골목으로 다시 만들었다. 엔딩도 컷신 대신 직접 기름을 붓게 바꿨다.' },
    ],
  },
  next: { label: '다음 작업: 화이트아웃', work: 'whiteout' },
};

export const whiteout = {
  title: '화이트아웃',
  lead: 'K-79 기지로 가던 수송기가 산맥에 추락한다. 살아남은 한 사람이 스노모빌로 설산을 내려와 불 꺼진 기지에 도착하지만, 기지에는 얼음 밑에서 깨어난 것이 남아 있다. 얼음에 박힌 쇄빙선의 엔진을 살려서 탈출한다.',
  specs: [
    { label: '장르', value: '3인칭 서바이벌 호러' },
    { label: '엔진', value: engine },
    { label: '맵 크기', value: '썰매 내리막 835 m, 기지 110 × 50 m, 쇄빙선 138 × 28 m' },
    { label: '플레이 타임', value: '약 8분 45초' },
    { label: '제작 기간', value: '약 2주' },
  ],
  intent: {
    title: '죽일 수 없는 것에게 쫓기는 공포를 주고, 끝에는 버텨 내게 한다',
    text: '질주에서 공포를 거쳐 버팀으로 끝나도록, 산에서는 달리고 기지에서는 도망가고 배에서는 자리를 지키게 한다.',
    shots: [
      {
        src: 'assets/img/whiteout-intent-1.jpg',
        alt: '복도 끝에서 다가오는 그것',
        title: '죽일 수 없는 적을 만날 때마다 다르게 대응하게 한다',
        body: '유리 너머로 지켜보고, 도망가고, 돌아서서 폭약으로 길을 막고, 끝에는 엔진 곁에서 버틴다.',
      },
      {
        src: 'assets/img/whiteout-intent-2.jpg',
        alt: '눈보라 너머로 흐릿하게 보이는 행렬',
        title: '시야를 좁혔다 열어 불안감과 해방감을 번갈아 준다',
        body: '눈보라와 꺼진 기지에서는 깃발과 손전등만 보이고, 고개와 동굴 출구에서는 목적지가 한눈에 보인다.',
      },
      {
        src: 'assets/img/whiteout-intent-3.jpg',
        alt: '동굴을 막을 폭약 상자',
        title: '돌아갈 길 없이 앞으로만 가게 한다',
        body: '착지한 턱은 뒤에서 무너지고, 동굴은 폭약으로 직접 막는다. 지나온 길이 뒤에서 닫힌다.',
      },
    ],
    flow: ['산: 질주', '기지: 공포', '배: 버팀'],
  },
  concept: {
    title: '연락이 끊긴 남극 기지',
    text: '산맥에서 바다까지 계속 내려간다. 구역이 바뀔 때마다 속도, 빛, 공간의 폭이 함께 바뀐다.',
    shots: [
      {
        src: 'assets/img/whiteout-concept-1.jpg',
        alt: '눈보라 속 깃발을 따라 기지로 가는 스노모빌',
        title: '산: 질주',
        note: '흰 눈보라와 붉은 깃발',
        body: '넓은 설산을 스노모빌로 내려간다. 멀리 붉은 배와 기지가 목적지로 보인다.',
      },
      {
        src: 'assets/img/whiteout-concept-2.jpg',
        alt: '꺼진 기지 안을 비추는 손전등',
        title: '기지: 공포',
        note: '꺼진 복도와 손전등 하나',
        body: '좁은 복도와 방이다. 죽일 수 없는 것이 쫓아오고, 다가오면 등이 꺼진다.',
      },
      {
        src: 'assets/img/whiteout-concept-3.jpg',
        alt: '붉은 비상등 아래의 엔진',
        title: '배: 버팀',
        note: '붉은 비상등',
        body: '기울어진 배의 기관실이다. 엔진이 켜질 때까지 자리를 지킨다.',
      },
    ],
  },
  references: [
    { name: '더 씽', take: '분위기: 얼음 밑에 묻힌 것' },
    { name: '데드 스페이스', take: '기지: 설원의 괴물' },
    { name: '띄운 남극 기지', take: '실루엣: 기둥 위의 건물' },
    { name: 'SOMA', take: '길 안내: 빛나는 폴' },
    { name: '아이슬란드 얼음 동굴', take: '동굴: 어둠 끝의 출구' },
    { name: '아웃라스트', take: '연출' },
  ],
  ai: {
    text: aiText,
    items: [
      { title: '구현은 AI', body: '스노모빌, 권총, 좀비, 추격, 엔진 디펜스 BP를 만들고, 직접 플레이하면서 수정했다.' },
      { title: '검증 자동화', body: '썰매가 끝까지 내려가는지, 문과 전원이 순서대로 열리는지 스크립트로 먼저 확인했다.' },
      { title: '판단은 직접', body: '길을 막는 쓰러지는 무전탑은 속도를 끊어서 버리고, 화이트아웃 구간으로 바꿨다. 마지막도 헬기 탈출 대신 배의 엔진을 지키게 바꿨다.' },
    ],
  },
  next: { label: '다음 작업: 인벤토리가 부족합니다', work: 'inv' },
};

// 작업 id별 상세 내용입니다. 여기에 있는 작업만 영상 아래에 상세가 나옵니다.
export const details = { ritual: ritualNight, chase: cocoonCity, whiteout };
