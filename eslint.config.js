import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import hooksPlugin from 'eslint-plugin-react-hooks';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

// TODO: eslint-plugin-react-hooks and eslint-plugin-react still don't support eslint 9 D:
export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	reactRecommended,
	reactJsxRuntime,
	eslintPluginUnicorn.configs['flat/recommended'],
	{
		plugins: {
			'react-hooks': hooksPlugin,
		},
		rules: hooksPlugin.configs.recommended.rules,
	},
	{
		plugins: {
			'jsx-a11y': jsxA11yPlugin,
		},
		rules: jsxA11yPlugin.configs.recommended.rules,
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
		},
	},
	{
		ignores: ['eslint.config.js'],
	},
	eslintConfigPrettier,
);
