// 사이트에 들어가는 글과 자료는 이 파일에서만 고칩니다.
//
// [대괄호]   아직 정해지지 않은 내용입니다. 실제 내용으로 바꿉니다.
// null       아직 없는 주소나 파일입니다. 준비되면 채웁니다.
// 파일 경로  public 폴더를 기준으로 적습니다.
//            public/assets/img/ritual-hook.webp 는 'assets/img/ritual-hook.webp' 로 적습니다.

export const profile = {
  heading: '레벨 디자이너 박세준',
  copyright: '© 2026 박세준',
  email: 'rabibel4454@naver.com',
  resume: null, // 예: 'assets/resume.pdf'
  itch: null, // 예: 'https://이름.itch.io'
  artstation: null, // 예: 'https://www.artstation.com/이름'
};

// 홈에서 훅 이미지 한 장이 보이는 시간(초)입니다.
export const hookSeconds = 6;

export const works = [
  {
    id: 'ritual',
    nav: '의식의 밤',
    title: '의식의 밤',
    meta: 'Unreal Engine 5.8, 시간 전환 퍼즐, 약 3주',
    body: ['절벽 마을을 꼭대기의 위커맨까지 오르며 의식의 밤과 폐허를 오갑니다.'],
    points: ['현재에서 한 일이 미래에 남아 길이 됩니다.', '위커맨은 처음부터 보이는 목표이자 마지막 길입니다.'],
    // 홈에 나오는 훅 장면 이미지입니다. 16:9로 준비합니다.
    hook: 'assets/img/ritual-hook.jpg',
    // 작업을 열었을 때 나오는 영상입니다. 긴 영상은 youtubeId, 짧은 파일은 video에 적습니다.
    youtubeId: 'R-gQ8o8CT28', // 영상 주소의 v= 뒤나 youtu.be/ 뒤에 있는 값 (LD_RitualNight)
    video: null, // 예: 'assets/video/ritual-night.mp4'
    poster: null, // 예: 'assets/img/ritual-night.webp'
  },
  {
    id: 'chase',
    nav: '코쿤시티',
    title: '코쿤시티',
    meta: 'Unreal Engine 5.8, 액션 어드벤처, 약 3개월',
    note: '자세한 내용 준비 중',
    body: ['배신당해 버려진 주인공이 소총 한 자루로 복수하러 갑니다.'],
    points: ['탄이 모자라, 길을 막는 감염체만 쏘며 도망칩니다.', '걸어온 길에 남긴 기름 줄이 그대로 도화선이 됩니다.'],
    hook: 'assets/img/chase-hook.jpg',
    youtubeId: 'HG2KQ-4RPgc', // LD_CocoonCity
    video: null,
    poster: null,
  },
  {
    id: 'whiteout',
    nav: '화이트아웃',
    title: '화이트아웃',
    meta: 'Unreal Engine 5.8, 서바이벌 호러, 약 2주',
    note: '자세한 내용 준비 중',
    body: ["남극 설산을 내려와, '그것'을 피해 얼음에 박힌 쇄빙선으로 탈출합니다."],
    points: ['스노모빌 구간은 막지 않고, 지나치는 사건으로 긴장을 줍니다.', "'그것'은 싸우기 전에 유리 너머에서 먼저 보여 줍니다."],
    hook: 'assets/img/whiteout-hook.jpg',
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
      '백팩 히어로의 가방 관리와 뱀파이어 서바이버의 생존을 합친 게임입니다.',
      '맵 절차적 생성과 방 4종을 맡았고, 생성된 결과를 손으로 다듬어 재미를 맞췄습니다.',
    ],
    hook: 'assets/img/inv-hook.jpg',
    youtubeId: null,
    video: null,
    poster: 'assets/img/inv-hook.jpg',
  },
];

export const about = {
  story: [
    '레퍼런스 게임의 한 레벨을 뜯어보고, 그 구조를 제 오리지널 레벨로 다시 짭니다. 블록아웃 단계에서 플레이가 재미없으면 버리고 처음부터 다시 시작합니다.',
    '[학력, 경력, 좋아하는 장르 한두 줄]',
  ],
  tools: '쓰는 도구는 Unreal Engine 5(Modeling Mode, Blueprint, GASP), 블록아웃용 메시를 만드는 Blender, 팀 프로젝트에서 쓴 Unity입니다.',
};

// 자세히 보기: 의식의 밤. 작업을 열고 아래로 스크롤하면 영상 아래에 이어집니다.
export const ritualNight = {
  title: '의식의 밤',
  lead: '1910년 영국의 절벽 어촌. 100년에 한 번 열리는 축제를 보러 온 고고학자가 의식의 밤 한가운데에서 깨어나, 두 시대를 오가며 절벽 꼭대기의 불타는 위커맨까지 오릅니다.',
  specs: [
    { label: '엔진', value: 'Unreal Engine 5.8, Game Animation Sample 기반' },
    { label: '역할', value: '1인 작업: 기획, 블록아웃, 연출' },
    { label: '플레이타임', value: '6분 31초 (영상 기준)' },
    { label: '제작 기간', value: '2026년 10월 31일부터 11월 20일까지, 약 3주' },
  ],
  goals: {
    text: '플레이어가 "지금 한 일이 다른 시대에 그대로 남는다"는 규칙을 배우고, 그 규칙으로 의식을 직접 멈추게 하는 것이 목표입니다.',
    items: [
      '하나의 오르막: 마을 전체가 역에서 절벽 꼭대기까지 이어지고, 불타는 위커맨이 처음부터 끝까지 보이는 목표가 됩니다.',
      '소란과 정적: 폭풍우와 횃불, 광신도로 시끄러운 현재와 맑고 텅 빈 미래를 같은 자리에 겹쳐 지어, 한 시대가 막은 길을 다른 시대가 엽니다.',
      '눈에 보이게 남는 원인과 결과: 옮겨 심은 묘목은 미래에 쓰러져 다리가 되고, 태운 목책은 지름길이 되고, 미래에 꺼진 바닥은 지하실로 가는 길이 됩니다.',
    ],
  },
  references: {
    text: '위로 갈수록 높아지는 바닷가 마을은 Hitman 2의 「The Ark Society」에서, 거대한 존재가 그대로 무대가 되는 클라이맥스는 DOOM Eternal의 「Icon of Sin」에서 가져왔습니다. 지형과 축척은 코르시카 보니파시오 윗마을을 따랐고, 미래에 남은 시간은 젤다의 전설 브레스 오브 더 와일드의 스태미나처럼 원형 링으로 보여 줍니다. 톤은 러브크래프트의 「인스머스의 그림자」입니다.',
    images: [
      { src: null, alt: '', caption: 'Hitman 2, 「The Ark Society」의 바닷가 성채' },
      { src: 'assets/img/ritual-ref-bonifacio.jpg', alt: '절벽 위에 붉은 지붕이 빽빽한 보니파시오 윗마을을 위에서 본 위성 사진', caption: '코르시카 보니파시오 윗마을, 실제 지형과 축척 (Google Earth)' },
      { src: null, alt: '', caption: 'DOOM Eternal, 「Icon of Sin」의 클라이맥스' },
    ],
  },
  route: {
    // 실제 UE 탑뷰 스크린샷입니다. alt에는 이미지를 설명하는 문장을 적습니다.
    topView: { src: 'assets/img/ritual-topview.jpg', alt: '보니파시오 위성 사진을 바닥에 깐 레벨 탑뷰. 왼쪽 아래 역에서 마을을 지나 오른쪽 위 제단까지 동선이 선으로 그려져 있다.' },
    // x, y는 탑뷰 이미지 위 위치(왼쪽 위 기준 %)입니다. 숫자를 넣으면 동선과 지점이 그려집니다.
    // major가 true인 비트는 표에서 굵게 표시합니다.
    // 시간은 플레이 영상의 타임코드입니다.
    beats: [
      { time: '0:00', beat: '도입', purpose: '축제 인파로 가득한 역에서 계단을 올라 여관에 듭니다. 절벽 꼭대기의 위커맨이 첫 화면부터 목표로 보입니다.', major: false, x: null, y: null },
      { time: '1:00', beat: '훅', purpose: '밤에 깨어 보니 광신도가 여관을 습격했습니다. 빛나는 괘종시계로 처음 미래의 폐허에 넘어가고, 잠시 뒤 저절로 돌아옵니다.', major: true, x: null, y: null },
      { time: '2:16', beat: '첫 타임어택', purpose: '현재에는 막힌 광장을 미래에서 정해진 시간 안에 가로질러 다음 시계에 닿습니다.', major: false, x: null, y: null },
      { time: '2:32', beat: '첫 추격', purpose: '뒷마당에서 광신도에게 쫓기며 노란 짐 더미와 헛간 지붕으로 오릅니다. 노란 면은 오를 수 있다는 표시입니다.', major: false, x: null, y: null },
      { time: '3:16', beat: '원인과 결과', purpose: '현재에서 묘목을 옮겨 심고, 미래에 자란 나무를 쓰러뜨려 골을 건넙니다.', major: false, x: null, y: null },
      { time: '4:37', beat: '외신 등장', purpose: '철문을 지나는 순간 바다에서 외신이 솟아오릅니다. 컷신 없이 플레이어의 화면 안에서 일어납니다.', major: true, x: null, y: null },
      { time: '5:02', beat: '클라이맥스', purpose: '밧줄 셋을 끊어 위커맨을 쓰러뜨리고, 늘어진 외신의 팔을 달려 이마에 박힌 시계를 멈춥니다.', major: true, x: null, y: null },
      { time: '6:09', beat: '엔딩', purpose: '다음 날 아침, 축제는 끝나 있고 주인공은 기차로 마을을 떠납니다.', major: false, x: null, y: null },
    ],
    eras: [
      {
        name: '현재',
        state: '의식의 밤. 폭풍우 속에 횃불과 광신도 인파가 가득해 시끄럽고 좁습니다.',
        open: '횃불로 태우고, 빠루로 뜯고, 로브를 입어 광신도 줄을 지나가며 길을 엽니다.',
        closed: '광신도의 줄과 불길, 잠긴 문이 길을 막습니다.',
      },
      {
        name: '미래',
        state: '의식이 남긴 폐허. 맑고 텅 빈 푸른 밤이고, 따뜻하게 빛나는 것은 시계뿐입니다.',
        open: '사라진 벽과 꺼진 바닥이 현재에서 막힌 길을 엽니다.',
        closed: '무너진 잔해와 촉수가 내리친 골이 길을 끊고, 머물 수 있는 시간은 30초에서 12초까지 줄어듭니다.',
      },
    ],
  },
  blockout: {
    text: '외부 피드백에서 "동선 유도가 이상하다"는 지적을 받았습니다. 걸어가는 화면을 4초마다 찍어 보니, 등불이 없는 미래 구간에서 목적지인 시계 2가 어두운 벽 뒤에 묻혀 있었습니다. "폐허에서 살아 있는 것은 시계뿐"이라는 규칙을 정해 미래의 시계에만 따뜻한 빛을 두었습니다. 시계 1은 넘어가자마자 눈앞에서 빛나며 규칙을 가르치고, 시계 2는 멀리서 보이는 목적지가 됩니다.',
    before: { src: 'assets/img/ritual-guide-before.jpg', alt: '푸른 밤의 폐허. 멀리 위커맨만 보이고 시계가 있는 집은 어둠에 묻혀 있다.', caption: '이전: 2026년 11월 10일, 어둠에 묻힌 미래의 시계 2' },
    after: { src: 'assets/img/ritual-guide-after.jpg', alt: '같은 자리. 멀리 시계가 있는 집의 무너진 벽 사이로 따뜻한 빛이 새어 나온다.', caption: '이후: 2026년 11월 11일, 시계에만 따뜻한 빛' },
  },
  next: { label: '다음 작업: 코쿤시티', work: 'chase' },
};

// 자세히 보기: 코쿤시티. 레퍼런스 이미지(references.images), 시대 비교(route.eras), 블록아웃 반복(blockout)은
// 의식의 밤처럼 적으면 나옵니다.
export const cocoonCity = {
  title: '코쿤시티',
  lead: '감염체가 들끓는 도시 코쿤시티. 병원에서 약을 구해 하수도를 빠져나온 주인공은 다리 밑 캠프에서 배신당해 강에 버려지고, 쓰레기장에서 주운 소총 한 자루로 배신자의 빌딩 꼭대기 기지까지 갑니다.',
  specs: [
    { label: '엔진', value: 'Unreal Engine 5.8, Game Animation Sample 기반' },
    { label: '장르', value: '3인칭 액션 어드벤처 (추격, TPS)' },
    { label: '플레이타임', value: '7분 35초 (영상 기준)' },
    { label: '제작 기간', value: '2026년 8월 말부터 11월까지, 약 3개월' },
  ],
  goals: {
    text: '설계의 중심에 둔 것은 세 가지입니다.',
    items: [
      '쏘면서 도망: 컨테이너 골목의 감염체는 공격하지 않고 다가오기만 합니다. 탄은 모두를 쓰러뜨리기엔 모자라서, 길을 막는 것만 쏘고 나아갑니다. 입구, 꺾인 곳의 매복, 뒤에서 쫓아오는 무리, 오토바이를 둘러싼 공터 순으로 압박의 방향이 바뀝니다.',
      '엄폐 높이는 세 가지뿐: 갱 기지의 가구를 80, 120, 200cm로만 맞췄습니다. 80은 웅크려 쏘는 높이, 120은 웅크리면 안전하고 서면 쏘는 높이, 200은 완전 엄폐입니다. 물건을 보는 순간 그 뒤에서 무엇을 할 수 있는지 읽힙니다.',
      '절정을 컷신이 아니라 조작으로: 보스를 쓰러뜨린 뒤 기름통을 들고 와 보스에게 붓고, 지나온 방을 거꾸로 걸으며 기름 줄을 남깁니다. 계단 아래에서 불을 붙이면 불이 그 줄을 되짚어 올라갑니다.',
    ],
  },
  references: {
    text: '병원은 The Last of Us Part II에서, 하수도는 Dying Light에서, 오프닝의 배신은 Fallout: New Vegas에서, 갱 소탕은 Cyberpunk 2077의 임무에서 가져왔습니다. 유리를 깨고 들어가는 진입은 영화 「다크 나이트」의 홍콩 장면을, 오토바이 제동은 「아키라」를 따랐습니다.',
    images: [],
  },
  route: {
    topView: { src: 'assets/img/chase-topview.jpg', alt: '코쿤시티 도심 구간을 위에서 본 평면도. 건물 사이로 동선이 붉은 선으로 그려져 있고 지점마다 번호가 붙어 있다.' },
    beats: [
      { time: '0:00', beat: '도입', purpose: '밤의 코쿤시티 거리에서 시작합니다. 0:25에 "Welcome to Cocoon City" 간판이 보입니다.', major: false, x: null, y: null },
      { time: '1:05', beat: '병원', purpose: '불 꺼진 병원 복도. 손전등 너머로 감염체의 실루엣이 보입니다.', major: false, x: null, y: null },
      { time: '1:50', beat: '첫 추격', purpose: '감염체에게 쫓기며 병원을 빠져나가, 감염체가 쏟아지는 원통형 하수관을 달립니다.', major: false, x: null, y: null },
      { time: '3:44', beat: '배신', purpose: '고속도로 다리 밑 캠프에서 뒤에서 다가온 습격자에게 당합니다. 화면이 꺼지고 어둠 위로 대사가 흐릅니다.', major: true, x: null, y: null },
      { time: '4:00', beat: '쓰레기장', purpose: '쓰레기장에서 눈을 뜨고, 손전등을 들고 쓰레기 더미 사이 골짜기를 지납니다.', major: false, x: null, y: null },
      { time: '4:55', beat: '소총', purpose: '소총을 줍는 순간 화면에 탄약 표시가 생깁니다.', major: false, x: null, y: null },
      { time: '5:10', beat: '쏘면서 도망', purpose: '컨테이너 골목에서 길을 막는 감염체만 쏘며 공터의 오토바이까지 갑니다.', major: true, x: null, y: null },
      { time: '5:48', beat: '진입', purpose: '기지의 유리를 깨고 오토바이째 뛰어들어, 아래층 사무실에서 총격전을 벌입니다.', major: true, x: null, y: null },
      { time: '6:48', beat: '보스', purpose: '위층 바와 라운지를 지나 보스 방에 닿습니다.', major: false, x: null, y: null },
      { time: '7:03', beat: '클라이맥스', purpose: '기름통을 들고 와 보스에게 붓고, 기름 줄을 끌며 걸어 나와 계단 아래에서 불을 붙입니다.', major: true, x: null, y: null },
      { time: '7:30', beat: '엔딩', purpose: '꼭대기 기지가 폭발하고, 낮은 건물 옥상에 오토바이가 멈춥니다.', major: false, x: null, y: null },
    ],
  },
  next: { label: '다음 작업: 화이트아웃', work: 'whiteout' },
};

// 자세히 보기: 화이트아웃. 탑뷰(route.topView)는 아직 없어서 나오지 않습니다.
export const whiteout = {
  title: '화이트아웃',
  lead: "남극의 산맥에 수송기가 추락합니다. 살아남은 주인공은 스노모빌로 설산을 내려와 불 꺼진 기지에 닿고, 기지 밑 얼음에서 파낸 '그것'에게 쫓기며 얼음에 박힌 쇄빙선으로 빠져나갑니다.",
  specs: [
    { label: '엔진', value: 'Unreal Engine 5.8, Game Animation Sample 기반' },
    { label: '장르', value: '3인칭 서바이벌 호러, 탈것 주행' },
    { label: '플레이타임', value: '8분 46초 (영상 기준)' },
    { label: '제작 기간', value: '2026년 11월 8일부터 11월 21일까지, 약 2주' },
  ],
  goals: {
    text: '설계의 중심에 둔 것은 세 가지입니다.',
    items: [
      '달리는 동안엔 막지 않는다: 스노모빌 구간에는 길을 막는 장애물 대신 지나치는 사건을 둡니다. 눈사태는 길을 좁힐 뿐 멈추게 하지 않고, 크레바스를 뛰어넘으면 착지한 턱이 뒤에서 무너지며 따라옵니다.',
      "괴물의 규칙은 싸우기 전에 유리 너머로: '그것'은 관측실의 유리 너머에서 처음 모습을 드러냅니다. 조작은 그대로 두고, 플레이어는 유리를 사이에 두고 생존자가 당하는 장면을 지켜봅니다. 그 전까지는 실루엣도 보여 주지 않습니다.",
      '마지막 무대는 얼음에 박힌 배: 후반에 힘이 빠지지 않도록 쇄빙선을 레벨 맨 아래 종착지로 옮겼습니다. 기름 두 통을 엔진에 넣고 기관실을 지키는 디펜스가 클라이맥스이고, 발전기에 기름을 넣어 기지에 불을 켜는 앞 구간이 그 연습이 됩니다.',
    ],
  },
  references: {
    text: '설산을 내려오는 스노모빌은 Gears 5에서, 조작을 뺏지 않고 목격하게 하는 장면은 Outlast에서, 방어 지점은 Dead Space 2에서, 기름을 모아 넣는 디펜스는 Left 4 Dead 2의 스캐빈지에서, 길잡이 유도등은 SOMA에서 가져왔습니다. 남극 기지와 얼음 속에서 파낸 것은 영화 「더 씽」입니다.',
    images: [],
  },
  route: {
    topView: null,
    beats: [
      { time: '0:00', beat: '도입', purpose: '추락한 수송기에서 시작해, 얼음 동굴에서 점프하고 붙잡아 오르며 조작을 익힙니다.', major: false, x: null, y: null },
      { time: '0:45', beat: '스노모빌', purpose: '급경사 내리막과 S자 커브, 빙벽 협곡을 스노모빌로 내려갑니다.', major: true, x: null, y: null },
      { time: '1:20', beat: '화이트아웃', purpose: '고원에서 시야가 하얗게 닫히고 빨간 깃발만 보입니다.', major: false, x: null, y: null },
      { time: '1:44', beat: '크레바스', purpose: '크레바스를 뛰어넘습니다.', major: false, x: null, y: null },
      { time: '2:35', beat: '기지', purpose: '불 꺼진 기지에 들어가 기름통을 발전기에 넣습니다. 3:02에 기지에 불이 들어옵니다.', major: false, x: null, y: null },
      { time: '3:45', beat: '첫 등장', purpose: "관측실 유리 너머로 '그것'이 처음 모습을 드러냅니다.", major: true, x: null, y: null },
      { time: '4:48', beat: '추격', purpose: "판자를 덧댄 문을 도끼로 뜯고 동관으로 들어서자 '그것'에게 쫓깁니다.", major: false, x: null, y: null },
      { time: '5:04', beat: '얼음 동굴', purpose: '냉동고 바닥 아래로 떨어져 기지 밑 얼음 동굴로 갑니다. 쫓기다 돌아서서 폭약 더미를 쏘면 동굴이 무너집니다.', major: false, x: null, y: null },
      { time: '5:50', beat: '쇄빙선', purpose: '동굴을 나서면 얼음에 박힌 붉은 쇄빙선이 보입니다. 화물창에서 좀비를 상대하며 기름 두 통을 찾습니다.', major: false, x: null, y: null },
      { time: '6:49', beat: '디펜스', purpose: '기관실에서 엔진 둘레로 밀려드는 좀비를 막아 냅니다.', major: true, x: null, y: null },
      { time: '8:30', beat: '엔딩', purpose: "배가 얼음을 깨고 나아가고, 벼랑 끝에 선 '그것'이 멀어지는 배를 봅니다.", major: false, x: null, y: null },
    ],
  },
  next: { label: '다음 작업: 인벤토리가 부족합니다', work: 'inv' },
};

// 작업 id별 자세히 보기 내용입니다. 여기에 있는 작업만 '자세히 보기'가 나옵니다.
export const details = { ritual: ritualNight, chase: cocoonCity, whiteout };
