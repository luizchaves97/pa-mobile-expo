module.exports = {
  env: {
    es2020: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks'],
  rules: {
    camelcase: 'off',
    'prettier/prettier': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/await-thenable': 'warn',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-no-useless-fragment': 'warn',
    'react/prop-types': 'off',
    'no-console': ['warn', { allow: ['tron'] }],
  },
};
