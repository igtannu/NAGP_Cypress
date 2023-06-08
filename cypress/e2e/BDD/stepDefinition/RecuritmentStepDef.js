import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RecruitmentPOM from "../../Pages/RecruitmentPOM";
import Utils from "../../../support/utils";
const recurPage = new RecruitmentPOM()
const utils = new Utils()
When('Choose Vacany and enter mailId', () => {
    recurPage.chooseVacancyAndMail(utils.generateRandomEmail())
})
When('Enter phone no and choose Resume', () => {
    recurPage.phoneNo(utils.generateRandomPhoneNumber())
    recurPage.chooseResume()
})
When('Verify if status is {string}', (status) => {
    recurPage.status().click({ force: true }).should('have.text', status)
})
When('Click on save Button', () => {
    recurPage.clickSave()
})

When('Enter {string} Interview title', (title) => {
    recurPage.enterInterviewTitle(title)
})
When('Enter Interviewer name and choose', () => {
    recurPage.enterInterviewerName()
})
When('Choose date', () => {
    recurPage.chooseDate(utils.generateTodayDate())
})
