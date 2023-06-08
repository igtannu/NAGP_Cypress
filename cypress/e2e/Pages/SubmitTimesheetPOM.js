class SubmitTimesheetPOM{
myTimesheet(){
    return cy.get("div[class='oxd-grid-item oxd-grid-item--gutters orangehrm-dashboard-widget'] div:nth-child(6)")
}
clickMyTimeSheet(){
    this.myTimesheet().click()
}
}
export default SubmitTimesheetPOM