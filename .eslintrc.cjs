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
	],
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
	},
	rules: {
		'react/jsx-uses-react': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
	},
	ignorePatterns: ['.eslintrc.cjs', 'prettier.config.cjs'],
};
