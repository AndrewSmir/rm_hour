module.exports = {
  root: true,
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ["eslint:recommended", 'prettier'],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'warn',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
  },
};
