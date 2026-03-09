import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
import { VitePWA } from 'vite-plugin-pwa';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const isAnalyze = mode === 'analyze';

  return {
    plugins: [
      react(),

      // Gzip (Production only)
      isProduction &&
        compression({
          algorithm: 'gzip',
          ext: '.gz',
          threshold: 10240,
        }),

      // Brotli (Production only)
      isProduction &&
        compression({
          algorithm: 'brotliCompress',
          ext: '.br',
          threshold: 10240,
        }),

      // PWA (Production only)
      isProduction &&
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon-16x16.png', 'favicon-32x32.png', 'apple-touch-icon.png'],
          manifest: false,
        }),

      // Bundle Analyzer (run with --mode analyze)
      isAnalyze &&
        visualizer({
          filename: 'dist/stats.html',
          open: true,
        }),
    ].filter(Boolean),

    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@components': resolve(__dirname, 'src/components'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@assets': resolve(__dirname, 'src/assets'),
      },
    },

    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      minify: 'esbuild',
      target: 'es2020',
      cssCodeSplit: true,
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
          },
          entryFileNames: 'assets/js/[name]-[hash].js',
          chunkFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
    },

    server: {
      port: 3000,
      open: true,
    },

    preview: {
      port: 3000,
      open: true,
    },

    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
  };
});
