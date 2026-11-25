# 레벨 디자이너 박세준 포트폴리오

React, Vite, Astryx 컴포넌트로 만든 정적 사이트입니다. GitHub Pages에 올립니다.

## 실행

Node.js 20.19 이상이 필요합니다.

```bash
npm install
```

```bash
npm run dev
```

터미널에 나오는 주소를 열면 저장할 때마다 화면이 바로 바뀝니다. 배포될 결과물을 미리 보려면 `npm run build` 후 `npm run preview`를 실행합니다.

## 자료 채우기

글과 파일 경로는 모두 [src/content.js](src/content.js) 한 파일에 있습니다. `null`은 준비되는 대로 값을 넣습니다. 영상과 대표 스크린샷이 모두 없는 작업에는 `플레이 영상 자리` 표시가 나오고, 값을 넣으면 사라집니다.

파일은 `public/assets/` 아래에 넣고, `content.js`에는 `assets/`부터 적습니다. 예를 들어 `public/assets/img/ritual-hook.jpg`는 `'assets/img/ritual-hook.jpg'`로 적습니다.

| 자료 | 파일을 넣을 곳 | `content.js`에서 채울 곳 |
| --- | --- | --- |
| 이메일 | | `profile.email` |
| 전화번호 (소개 화면에만 나옴) | | `profile.phone` |
| 소개 글 | | `about.title`, `about.story` |
| PR 문서 PDF | `public/assets/docs/` | `profile.pr` |
| 작업별 훅 이미지 | `public/assets/img/` | `works[].hook` |
| 작업별 플레이 영상 | 긴 영상은 YouTube (의식의 밤, 코쿤시티, 화이트아웃은 넣어 둠) | `works[].youtubeId` 또는 `works[].video` |
| 작업별 대표 스크린샷 | `public/assets/img/` | `works[].poster` |
| 인벤토리가 부족합니다 게임 주소 | | `works[]`의 `link.to` |
| 작업 상세의 스크린샷 | `public/assets/img/` | `ritualNight`, `cocoonCity`, `whiteout` |
| 레벨 기획서 PDF | `public/assets/docs/` | `works`의 `doc` |

### 훅 이미지

작업마다 훅 장면을 16:9 이미지 한 장으로 준비해 `hook`에 적습니다. 첫 화면에서 `works` 순서대로 넘어가고, 왼쪽 목록의 진행선이 함께 움직입니다. 한 장이 보이는 시간은 `hookSeconds`에서 바꿉니다. `hook`을 비워 두면 `poster`를 대신 보여 줍니다.

### 작업 추가와 순서

작업은 `works` 배열 순서대로 왼쪽 목록과 첫 화면 훅 이미지에 나옵니다. 작업을 더하면 `id`를 영어로 정하고 훅 이미지를 함께 넣습니다. 상세가 없는 작업은 `body`와 `points`에 짧은 설명을 적으면 왼쪽에 나옵니다. 세로가 낮은 창(600px)에서도 한 화면에 들어가도록 작업은 4개까지를 기준으로 맞춰 두었습니다.

### 작업 상세

작업을 열면 영상 아래에 이어지는 설명입니다. 따로 페이지가 없고, 스크롤해서 봅니다. 내용은 레벨 기획서의 '01 개요'(프로젝트 개요, 기획 의도, 컨셉, 레퍼런스, AI 활용)를 옮긴 것이고, 타임 테이블, 긴장 곡선, 구역별 레벨 상세는 적지 않고 `레벨 기획서 보기 (PDF)` 버튼으로 보냅니다. `details`에 작업 `id`로 내용을 넣은 작업만 상세가 나옵니다. 다른 작업에도 만들려면 `ritualNight`와 같은 모양으로 내용을 쓰고 `details`에 더합니다.

첫 화면의 훅 이미지와 작업 영상의 크기는 `src/site.css`의 `--media-w` 한 줄에서 함께 바꿉니다. 지금은 오른쪽 영역 폭의 90%, 화면 높이의 72% 중 작은 쪽입니다. 좁은 창에서는 같은 파일의 `.page-home .stage` 줄이 크기를 정합니다. 제목 크기는 같은 파일 맨 아래의 `작업 상세의 제목 크기`에서 바꿉니다.

### 레벨 기획서

`works`의 `doc`에 PDF 경로를 적으면 왼쪽 설명에 버튼이 나옵니다. 기획서를 고치면 PDF를 다시 내보내 같은 이름으로 덮어씁니다.

### 이미지

16:9, 가로 1600px의 JPG로 저장합니다. 이미지마다 `alt`에 그림을 설명하는 문장을 적습니다. 바깥 사이트로 가는 링크와 PDF는 새 탭으로 열립니다.

## GitHub Pages에 올리기

1. GitHub에서 새 저장소를 만듭니다. 이름은 무엇이든 상관없습니다.
2. 이 폴더를 그 저장소의 `main` 브랜치에 올립니다.
3. 저장소의 Settings > Pages에서 Source를 `GitHub Actions`로 고릅니다.

이후 `main`에 올릴 때마다 [배포 작업](.github/workflows/deploy.yml)이 사이트를 다시 만들어 올립니다.

GitHub는 100MB가 넘는 파일을 받지 않고, Pages 사이트 전체는 1GB 안쪽을 권장합니다. 풀 플레이스루처럼 긴 영상은 YouTube에 올리고 `youtubeId`를 적습니다.

## 파일 구성

| 위치 | 내용 |
| --- | --- |
| `src/content.js` | 사이트의 글과 자료 경로 |
| `src/theme.js` | 색, 글꼴, 모서리 |
| `src/site.css` | 화면 배치 |
| `src/home.jsx`, `src/hook-images.jsx` | 홈과 훅 이미지 |
| `src/detail.jsx` | 영상 아래에 이어지는 작업 상세 |
| `src/shell.jsx` | 왼쪽 목록과 화면 틀 |
| `DESIGN.md` | 디자인 명세 |
