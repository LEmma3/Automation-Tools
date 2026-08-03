const js = require('@eslint/js');
const eslintConfigPrettier = require('eslint-config-prettier');
const cypressPlugin = require('eslint-plugin-cypress');
const globals = require('globals');

module.exports = [
  js.configs.recommended,
  {
    ignores: [
      'node_modules/**',
      'cypress/reports/**',
      'cypress/downloads/**',
      'cypress/screenshots/**',
      'cypress/videos/**',
      'eslint.config.js'
    ],
  },
  {
    files: ['cypress/**/*.js'],
    plugins: {
      cypress: cypressPlugin,
    },
    languageOptions: {
      globals: {
        ...cypressPlugin.configs.recommended.languageOptions.globals,
        ...globals.node,
      },
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
      'no-unused-expressions': 'off',
    },
  },
  {
    files: ['cypress.config.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: 'module',
    },
  },
  eslintConfigPrettier,
];