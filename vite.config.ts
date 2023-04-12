import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { mySSRPlugin } from './plugins/rsc-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mySSRPlugin()],
  build: {
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      // overwrite default .html entry
      input: '/src/entry-client.tsx',
    },
  },
})
