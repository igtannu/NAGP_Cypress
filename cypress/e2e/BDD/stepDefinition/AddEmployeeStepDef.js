import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AddEmployeePOM from "../../Pages/AddEmployeePOM";
import Utils from "../../../support/utils";

const addEmployeePage = new AddEmployeePOM()
const utils = new Utils()

Given('Open URL then Login to site', () => {
    cy.login()
})

When('Toggle on create Login details', () => {
    addEmployeePage.clickToggle()
})

When('Click on {string} menu', (name) => {
    // cy.fixture("addEmployee").as("addEmployeeData")
    addEmployeePage.addEmployee(name)
})

When('Enter firstname and lastname', () => {
    cy.fixture('addEmployee').then((addEmployeedata) => {
        const { firstname, lastname } = addEmployeedata;
        addEmployeePage.inputEmployeeData(firstname, lastname)
    });
})

When('Enter password and username', () => {
    addEmployeePage.enterUsernamePass(utils.randomUserName(), utils.randomPass())
});



Then('Verify if save succesfully be on Employee list page', () => {
    cy.fixture('addEmployee').then((addEmployeedata) => {
        const { firstname, lastname } = addEmployeedata;
        addEmployeePage.verifyIfEmployeeCreated(firstname + " " + lastname)
    });
});

