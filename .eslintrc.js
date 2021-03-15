module.exports = {
  env: {
    browser: true,
    commonjs: false,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    //     for import not require types imports
    //     sourceType: 'module',
    ecmaVersion: 12,
  },
  rules: {
    'no-empty': 'error',
    'no-empty-function': 'error',
    'default-case': 'error',
    'no-empty-pattern': 'error',
    'no-implicit-coercion': 'warn',
    'no-magic-numbers': 'error',
    'require-await': 'error',
  },
};
