// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login",()=>{

    cy.setCookie('language', 'en'); // Replace 'language' with the actual cookie name

    cy.xpath('//input[@name="username"]').type("Admin");
    cy.xpath('//input[@name="password"]').type("admin123");
    cy.contains("button","Login").click();

});
Cypress.Commands.add("randomNo",()=>{
    const min = 1000; // Minimum value (inclusive)
    const max = 9999; // Maximum value (inclusive)
  
    // Generate a random number between min and max
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
});


