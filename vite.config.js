import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/house-of-gains/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        story: resolve(__dirname, 'story.html'),
        trainers: resolve(__dirname, 'trainers.html'),
        programs: resolve(__dirname, 'programs.html'),
        membership: resolve(__dirname, 'membership.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        contact: resolve(__dirname, 'contact.html'),
        app: resolve(__dirname, 'app.html')
      }
    }
  }
});
