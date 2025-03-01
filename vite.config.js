import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true, // Asegura que detecte cambios en todos los entornos
    },
    host: true, // Permite acceso desde redes locales
    port: 5173, // Puedes cambiar el puerto si es necesario
    strictPort: true, // Evita que cambie de puerto automáticamente
    hmr: {
      overlay: true, // Muestra errores en pantalla en tiempo real
    },
  },
})
