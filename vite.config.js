import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 상대 경로로 빌드해서 저장소 이름과 상관없이 GitHub Pages에서 열리게 합니다.
  base: './',
  plugins: [react()],
  build: {
    // public/assets는 영상과 이미지 자리이므로 빌드 결과물은 build 폴더로 분리합니다.
    assetsDir: 'build',
  },
});
