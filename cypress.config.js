const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor")
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify")

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on,config)
  on("file:preprocessor", browserify.default(config))
  require('cypress-mochawesome-reporter/plugin')(on);

  return config;

}
module.exports = defineConfig({
  projectId: 'f66odv',
  reporter: 'cypress-mochawesome-reporter',
  env:{"api_url":"https://reqres.in/",
  "token": "QpwL5tke4Pnpja7X4"},

  e2e: {
    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
    // specPattern:'cypress/e2e/BDD/Features/*.feature' ,
    specPattern:['cypress/e2e/testsAPI/APITests.cy.js' , 'cypress/e2e/BDD/Features/*.feature'],


    baseUrl:"https://opensource-demo.orangehrmlive.com/",
    watchForFileChanges:true,
    defaultCommandTimeout:7000,
    setupNodeEvents
  },
});
