module.exports = {
	root: true,
	env: {
		es2022: true,
		browser: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:unicorn/recommended',
		'prettier',
	],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
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
	ignorePatterns: ['*.cjs', '*.html', '*.config.js'],
};
