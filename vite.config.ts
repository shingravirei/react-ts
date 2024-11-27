import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		TanStackRouterVite(),
		react({
			babel: {
				plugins: [
					[
						'babel-plugin-react-compiler',
						{
							target: '18',
						},
					],
				],
			},
		}),
		tsconfigPaths(),
		vanillaExtractPlugin(),
	],
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			targets: browserslistToTargets(browserslist('>= 0.25%')),
		},
	},
	build: {
		cssMinify: 'lightningcss',
	},
});
