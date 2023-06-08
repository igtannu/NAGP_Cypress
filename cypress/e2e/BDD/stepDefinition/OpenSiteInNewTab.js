import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Utils from "../../../support/utils";
import OpenSiteInNewTab from "../../Pages/OpenSiteInNewTabPOM";

const utils = new Utils()
const newTabPage=new OpenSiteInNewTab()

When('Click on OrangeHRM site from footbar',()=>{
newTabPage.clickSite()
})