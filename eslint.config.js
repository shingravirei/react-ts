import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
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
		},
	},
	{
		ignores: ['eslint.config.js'],
	},
	eslintConfigPrettier,
);
