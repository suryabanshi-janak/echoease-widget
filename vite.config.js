import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      NODE_ENV: 'production',
    },
  },
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: './src/index.jsx',
      name: 'widget',
      fileName: (format) => `widget.${format}.js`,
    },
    target: 'esnext',
  },
});
