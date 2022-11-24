/* eslint-disable no-undef */
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    rules: {
        'space-before-function-paren': 'off',
        'quote-props': 'off',
        'indent': 'off',
        'padded-blocks': 'off',
        'no-unused-vars': 'warn',
        'semi': ['error', 'always'],
        'object-curly-spacing': ['error', 'always'],
        '@typescript-eslint/indent': ['error', 4, { SwitchCase: 1 }],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/semi': ['warn'],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-empty-function': ['warn'],
        'no-return-assign': 'off',
        'brace-style': 'off'
    }
};