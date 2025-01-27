import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
	plugins: [
		TanStackRouterVite(),
		tsconfigPaths(),
		vanillaExtractPlugin(),
		react({
			babel: {
				plugins: [
					[
						'babel-plugin-react-compiler',
						{
							target: '19',
						},
					],
				],
			},
		}),
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
