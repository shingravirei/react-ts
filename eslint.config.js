import eslint from '@eslint/js';
import pluginQuery from '@tanstack/eslint-plugin-query';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactPluginCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat['jsx-runtime'],
	eslintPluginUnicorn.configs['flat/recommended'],
	jsxA11y.flatConfigs.recommended,
	...pluginQuery.configs['flat/recommended'],
	{
		plugins: {
			'react-compiler': reactPluginCompiler,
		},
	},
	{
		languageOptions: {
			parserOptions: {
				project: [
					'./tsconfig.app.json',
					'./tsconfig.node.json',
					'./tsconfig.vitest.json',
				],
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		rules: {
			'unicorn/prevent-abbreviations': 'off',
			'unicorn/filename-case': 'off',
			'unicorn/no-null': 'off',
		},
	},
	{
		rules: {
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-member-access': 'off',
			'@typescript-eslint/no-misused-promises': 'off',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
				},
			],
		},
	},
	{
		plugins: {
			'react-hooks': reactHooks,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
		},
	},
	{
		ignores: ['eslint.config.js', 'src/routeTree.gen.ts'],
	},
	eslintConfigPrettier,
);
