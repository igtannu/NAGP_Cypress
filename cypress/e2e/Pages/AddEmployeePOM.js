import Utils from "../../support/utils"

class AddEmployeePOM{

    clickPIM(name){
        return cy.xpath('//span[text()="'+name+'"]')
    }
    clickEmployeeList(){
        return cy.xpath("//a[text()='Employee List']")
    }
    // addButton(){
    //     return cy.xpath("//button[text()=' Add ']")
    // }
    firstName(){
        return cy.get("input[placeholder='First Name']")
    }
    lastName(){
        return cy.get("input[placeholder='Last Name']")  
    }
    employeeId(){
        return cy.xpath("//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']")
    }
    saveButton(){
        return cy.xpath("//button[normalize-space()='Save']")
    }
    createLoginDetailsToggle(){
        return cy.xpath("//span[@class='oxd-switch-input oxd-switch-input--active --label-right']")
    }
    username(){
        return cy.xpath("(//input[@class='oxd-input oxd-input--active'])[3]")
    }
    password(){
        return cy.get("div[class='oxd-grid-item oxd-grid-item--gutters user-password-cell']>div[class='oxd-input-group oxd-input-field-bottom-space']>div>input[type='password']")
    }
    confirmPassword(){
        return cy.get("div[class='oxd-grid-item oxd-grid-item--gutters']>div[class='oxd-input-group oxd-input-field-bottom-space']>div>input[type='password']")
    }
    verifyEmployeeSave(){
        return cy.xpath("//div[@class='orangehrm-edit-employee-name']//h6")
    }
    addEmployee(name){
        this.clickPIM(name).click();
        // this.addButton().click();
    }
    clickEmployeeList(){
        this.clickEmployeeList().click();

    }
    inputEmployeeData(firstName,lastName){
        this.firstName().type(firstName)
        this.lastName().type(lastName)
        // this.employeeId().clear().type(Utils.randomNo())
       
        // this.saveButton().click()
        
    }
    clickToggle(){
        this.createLoginDetailsToggle().click()
    }
    enterUsernamePass(username,password){
        this.username().type(username)
        this.password().type(password)
        this.confirmPassword().type(password)
    }
    clickSaveButton(){
        this.saveButton().click()
    }
    verifyIfEmployeeCreated(name){
        cy.wait(5000)
        this.verifyEmployeeSave().should('contain.text',name)
    }
}
export default AddEmployeePOM