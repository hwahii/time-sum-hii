
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 設定為相對路徑，這樣不論部署在網域根目錄或 /repo-name/ 都能運作
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // 確保 index.html 在根目錄
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
