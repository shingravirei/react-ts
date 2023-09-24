/** @type { import("@types/eslint").Linter.BaseConfig } */
module.exports = {
	root: true,
	env: {
		es2022: true,
		browser: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'jsx-a11y'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@typescript-eslint/strict',
		'plugin:react-hooks/recommended',
		'plugin:unicorn/recommended',
		'plugin:jsx-a11y/recommended',
		'prettier',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		project: './tsconfig.json',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	overrides: [
		{
			files: ['src/**/*.tsx', 'src/**/*.jsx'],
			rules: {
				'unicorn/filename-case': ['off'],
			},
		},
	],
	rules: {
		'@typescript-eslint/no-non-null-assertion': 'off',
		'unicorn/prevent-abbreviations': [
			'error',
			{
				replacements: {
					props: {
						properties: false,
					},
					ref: {
						reference: false,
					},
					vars: {
						variables: false,
					},
					env: {
						environment: false,
					},
				},
			},
		],
	},
	ignorePatterns: [
		'*.cjs',
		'*.html',
		'*.config.js',
		'dist/',
		'coverage/',
		'vite.config.ts',
		'panda.config.ts',
	],
};
