import Utils from "../../support/utils"

class RecruitmentPOM {
selectVacancy(){
    return cy.xpath('//div[@class="oxd-select-text oxd-select-text--active"]')
}
selectPosition(){
    return cy.get(':nth-child(4) > span')
}
mailId(){
    return cy.xpath("(//input[@placeholder='Type here'])[1]")
}
contactNo(){
    return cy.xpath("(//input[@placeholder='Type here'])[2]")
}
browse(){
    return cy.get("input[type='file']")
}
status(){
    return cy.xpath("//div[@class='orangehrm-recruitment-status']")
}
saveButon(){
    return cy.get('.oxd-button--secondary')
}
interviewTitle(){
    return cy.get("body div[id='app'] div[class='oxd-layout'] div[class='oxd-layout-container'] div[class='oxd-layout-context'] div[class='orangehrm-background-container'] div[class='orangehrm-card-container'] form[class='oxd-form'] div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) input:nth-child(1)")
}
chooseInterviwer(){
    return cy.get(".oxd-autocomplete-option")
}
interviewer(){
    return cy.get("input[placeholder='Type for hints...']")
}
date(){
    return cy.get("input[placeholder='yyyy-mm-dd']")
}
clickCalender(){
    return cy.get('.oxd-date-input > .oxd-input')
}
chooseVacancyAndMail(email){
     this.selectVacancy().click()
     this.selectPosition().click()
     this.mailId().type(email)
     cy.wait(3000)
}

phoneNo(phoneno){
    this.contactNo().type(phoneno)
   
}
chooseResume(){
    this.browse().selectFile('cypress/fixtures/resume.pdf', {force: true}) 
    cy.wait(2000)
}
clickSave(){
    this.saveButon().click()
}
enterInterviewTitle(name){
    this.interviewTitle().click()
    this.interviewTitle().type(name)
}
enterInterviewerName(){
       this.interviewer().type("Odis Adalwi")
        cy.wait(2000)
        this.chooseInterviwer().click() 
}
chooseDate(date){
   
       
        this.date().type(date)
        this.clickCalender().click()
}
}

export default RecruitmentPOM