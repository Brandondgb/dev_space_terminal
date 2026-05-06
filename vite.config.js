import { defineConfig } from 'vite';

export default defineConfig({
  base: '/',

  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    minify: 'terser',
    sourcemap: false,
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    rollupOptions: {
      input: {
        main: 'index.html',
        webxr: 'webxr/index.html',
        fallback: 'fallback/index.html',
      },
      output: {
        manualChunks: {
          'aframe': ['aframe'],
        },
      },
    },
  },

  server: {
    port: 3000,
    open: true,
    strictPort: false,
    sourcemap: true,
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$primary: #2E9E72; $accent: #00FFCC;`,
      },
    },
  },
});
