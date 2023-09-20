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
	plugins: ['react', '@typescript-eslint', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	rules: {
		'require-jsdoc': 0,
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'new-cap': 'off',
		'no-html-link-for-pages': 0,
		'prettier/prettier': 'error',
		camelcase: 'off'
	}
};
