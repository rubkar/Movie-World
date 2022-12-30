import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {
      REACT_APP_API_URL: 'http://www.omdbapi.com?apikey=b6003d8a',
    },
  },
});
