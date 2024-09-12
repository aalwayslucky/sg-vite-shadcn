import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: ['jotai/babel/preset'],
      },
    }),
  ],
  envPrefix: ['VITE_', 'TAURI_'],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
