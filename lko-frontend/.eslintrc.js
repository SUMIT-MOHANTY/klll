module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: { browser: true, es2021: true },
  settings: { react: { version: 'detect' } }
};
