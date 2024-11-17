import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@react-three/drei', '@react-spring/shared', '@react-spring/three'],
  },
  assetsInclude: ['**/*.glb'], // Include .glb files as assets
});
