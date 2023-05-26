import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    watch: {
      usePolling: true
    }
  },
  plugins: [react({
    exclude: /\.stories\.(t|j)sx?$/,
    include: '**/*.tsx',
  }),
  ],

  base: '/',
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  define: {
    'process.env': process.env
  }
})

