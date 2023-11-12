/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-setup/setup.ts',
    include: ['**/?(*.)test.ts?(x)'],
    coverage: {
      provider: 'v8', // or 'v8'
    },
  },
});
