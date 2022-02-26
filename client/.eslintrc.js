module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    quotes: [2, 'single'],
    semi: [2, 'always'],
    'quote-props': [2, 'as-needed'],
    'linebreak-style': [2, 'unix'],
    'no-multiple-empty-lines': [
      2,
      {
        max: 1,
        maxEOF: 0,
      },
    ],
    'no-trailing-spaces': [
      2,
      {
        skipBlankLines: true,
        ignoreComments: true,
      },
    ],
    'no-throw-literal': [2],
    'prefer-promise-reject-errors': [2],
    'eol-last': [2, 'unix'],
    'newline-before-return': [2],
    '@typescript-eslint/semi': [2, 'always'],
  },
};
