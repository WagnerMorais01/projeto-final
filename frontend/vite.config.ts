import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: { watch: { awaitWriteFinish: true } },
  plugins: [react()],
  envPrefix: 'FRONTEND_',
})
