module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'next/core-web-vitals',
		'google',
		'prettier'
	],
	plugins: ['react', '@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'require-jsdoc': 0
	}
};
