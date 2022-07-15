module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:cypress/recommended',
    'plugin:chai-friendly/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': 'webpack',
  },
  globals: {
    cy: true,
    pendo: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'linebreak-style': 'off',
    quotes: ['warn', 'single'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'comma-dangle': 'warn',
    'no-unused-vars': 'warn',
    'import/newline-after-import': 'warn',
    'import/extensions': 'warn',
    'react/jsx-props-no-spreading': 'off',
    semi: 'warn',
  },
  overrides: [
    {
      files: ['*.jsx', '*.js'],
    },
  ],
};
