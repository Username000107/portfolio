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

글과 파일 경로는 모두 [src/content.js](src/content.js) 한 파일에 있습니다. `[대괄호]`는 실제 내용으로 바꾸고, `null`은 준비되는 대로 값을 넣습니다. 값을 넣으면 임시 그림과 `영상 자리` 표시는 저절로 사라집니다.

파일은 `public/assets/` 아래에 넣고, `content.js`에는 `assets/`부터 적습니다. 예를 들어 `public/assets/img/ritual-hook.webp`는 `'assets/img/ritual-hook.webp'`로 적습니다.

| 자료 | 파일을 넣을 곳 | `content.js`에서 채울 곳 |
| --- | --- | --- |
| 이메일, itch.io, ArtStation 주소 | | `profile` |
| 이력서 PDF | `public/assets/resume.pdf` | `profile.resume` |
| 작업별 훅 이미지 | `public/assets/img/` | `works[].hook` |
| 작업별 플레이 영상 | 긴 영상은 YouTube (의식의 밤, 코쿤시티, 화이트아웃은 넣어 둠) | `works[].youtubeId` 또는 `works[].video` |
| 작업별 대표 스크린샷 | `public/assets/img/` | `works[].poster` |
| 인벤토리가 부족합니다 게임 주소 | | `works[]`의 `link.to` |
| 의식의 밤 자세히 보기 | `public/assets/img/` | `ritualNight` |

### 훅 이미지

작업마다 훅 장면을 16:9 이미지 한 장으로 준비해 `hook`에 적습니다. 첫 화면에서 `works` 순서대로 넘어가고, 왼쪽 목록의 진행선이 함께 움직입니다. 한 장이 보이는 시간은 `hookSeconds`에서 바꿉니다. `hook`을 비워 두면 `poster`를 대신 보여 줍니다.

### 작업 추가와 순서

작업은 `works` 배열 순서대로 왼쪽 목록과 첫 화면 훅 이미지에 나옵니다. 작업을 더하면 `id`를 영어로 정하고, 훅 이미지가 준비되기 전까지 보일 임시 그림을 `src/placeholders.js`에 같은 `id`로 넣습니다. 세로가 낮은 창(600px)에서도 한 화면에 들어가도록 작업은 4개까지를 기준으로 맞춰 두었습니다.

### 자세히 보기

작업을 열면 영상 아래에 이어지는 설명입니다. 따로 페이지가 없고, 스크롤해서 봅니다. `details`에 작업 `id`로 내용을 넣은 작업만 왼쪽에 `자세히 보기` 링크가 나오고, 없는 작업은 `note`의 글이 나옵니다. 다른 작업에도 만들려면 `ritualNight`와 같은 모양으로 내용을 쓰고 `details`에 더합니다.

영상 크기는 `src/site.css`의 `--media-w` 한 줄에서 바꿉니다. 지금은 오른쪽 영역 폭의 86%, 화면 높이의 68% 중 작은 쪽입니다. 좁은 창에서는 같은 파일의 `.page-home.picked .stage` 줄이 영상 크기를 정합니다.

### 동선과 비트

`ritualNight.route.topView`에 UE 탑뷰 스크린샷을 넣고, `beats`의 `x`와 `y`에 이미지 위 위치를 왼쪽 위 기준 %로 적으면 동선과 지점이 그려집니다. 비워 두면 표만 나옵니다.

### 이미지

WebP로 저장합니다. 이미지마다 `alt`에 그림을 설명하는 문장을 적습니다.

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
| `src/detail.jsx` | 영상 아래에 이어지는 자세히 보기 |
| `src/shell.jsx` | 왼쪽 목록과 화면 틀 |
| `DESIGN.md` | 디자인 명세 |
