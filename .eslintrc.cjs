module.exports = {
	root: true,
	env: {
		es2022: true,
		browser: true,
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:unicorn/recommended',
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
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
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
				},
			},
		],
	},
	ignorePatterns: ['*.cjs', '*.html', '*.config.js'],
};
