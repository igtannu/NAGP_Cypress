import { expect } from 'chai';
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
Given('I have a valid user ID',()=>{

})
When('I send a {string} request to {string} and get response {string}', (Method,url,status) => {
    cy.request({
        method:Method,
        url:Cypress.env("api_url")+url
    }).then((response)=>{
        expect(response.status).to.eq(parseInt(status))
        expect(response.body.data.id).to.eq(2)
    })

});
