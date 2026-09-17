import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative URLs allow deployment to either username.github.io or username.github.io/repository.
  base: './',
  plugins: [react()],
});
