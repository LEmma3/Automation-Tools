const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },

  e2e: {
    baseUrl: 'https://practicesoftwaretesting.com/',
    specPattern: 'cypress/e2e/tests/**/*.cy.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 6000,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
