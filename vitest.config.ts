import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			environment: 'jsdom',
			setupFiles: ['./src/tests/setup-vitest.ts'],
			coverage: {
				enabled: true,
				include: ['src/**/features/**', 'src/**/lib/**'],
				exclude: [
					'**/Components/**',
					'**/routes/**',
					'**/__tests__/**',
					'**/tests/**',
				],
				reporter: ['html', 'text'],
			},
		},
	}),
);
