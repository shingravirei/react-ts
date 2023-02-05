/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { presetUno } from 'unocss';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		UnoCSS({
			presets: [presetUno()],
		}),
	],
	resolve: {
		alias: {
			'~': path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'src'),
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
	},
});
