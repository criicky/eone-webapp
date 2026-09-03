import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ui/', // Set the base path for the application
  build:{
    emptyOutDir: true,
    ///outDir: '../ReservationService/src/main/resources/ui', // Output directory for the build
  },
  server: {
    host: '0.0.0.0',  // Allow access from outside the container
    port: 8081, // Port to run the server on
    strictPort: true,
    cors: true, // Enable CORS
    allowedHosts: ['all', "host.docker.internal"], // Allow access from all hosts
  }
})
