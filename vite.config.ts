/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import Pages from 'vite-plugin-pages';
import WindiCSS from 'vite-plugin-windicss';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), Pages(), WindiCSS()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/test/setup.ts',
	},
});
