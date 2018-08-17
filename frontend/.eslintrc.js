module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-console': ['error', { allow: ['info', 'debug', 'warn', 'error'] }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
