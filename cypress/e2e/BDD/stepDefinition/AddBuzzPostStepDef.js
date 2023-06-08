import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import Utils from "../../../support/utils";
import BuzzPOM from "../../Pages/BuzzPOM";
const buzzPage=new BuzzPOM()

const utils = new Utils()
When('Enter text and upload image',()=>{
    buzzPage.buzzpom()
})
When('Click on Share Button for buzz',()=>{
    buzzPage.clickShare()
})
Then('Verify if post uploaded',()=>{
    cy.wait(2000)
    buzzPage.HiWorld().should('be.visible').should('have.text','Hello world!')
})