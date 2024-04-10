import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import hooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	...tseslint.configs.strictTypeChecked,
	// reactRecommended, # FIXME: disabled till eslint-plugin-react updates to add support to eslint 9
	// reactJsxRuntime, # FIXME: disabled till eslint-plugin-react updates to add support to eslint 9
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
		ignores: ['eslint.config.js'],
	},
	eslintConfigPrettier,
);
