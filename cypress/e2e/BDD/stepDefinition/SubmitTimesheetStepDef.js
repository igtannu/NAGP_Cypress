import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RecruitmentPOM from "../../Pages/RecruitmentPOM";
import Utils from "../../../support/utils";
import SubmitTimesheetPOM from "../../Pages/SubmitTimesheetPOM";
const timesheetPage = new SubmitTimesheetPOM()
const utils = new Utils()

When('Click on MytimeSheet',()=>{
timesheetPage.clickMyTimeSheet()
})