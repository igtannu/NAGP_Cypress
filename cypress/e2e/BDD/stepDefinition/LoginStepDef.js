import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPOM from "../../Pages/LoginPOM";

const loginPage=new LoginPOM()
Given('Open browser and URL', () => {
	cy.visit('/')
});

When('Enter {string} and {string} for Login', (username,password) => {
    loginPage.validLoginData(username,password);
});

Given('Click on {string} Button', (btn) => {
    // Scroll up by 500 pixels
    loginPage.clickLoginButton(btn)
});

Then('Verify if Login successfully', () => {
    loginPage.verifyDashboard().should('contain','Dashboard')
});

Then('Verify if Login failed',()=>{
    loginPage.InvalidCred().should('contain','Invalid credentials')
});


