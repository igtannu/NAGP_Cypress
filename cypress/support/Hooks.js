beforeEach(() => {
    // Custom code to run before each test
    cy.setCookie('language', 'en'); // Replace 'language' with the actual cookie name
    cy.visit('/'); // Replace with the URL you want to visit
  });
