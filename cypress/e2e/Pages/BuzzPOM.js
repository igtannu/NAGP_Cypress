class BuzzPOM{
    writepost(){
        return cy.xpath("//div[@class='orangehrm-buzz-post-modal-header-text']//textarea[@placeholder=\"What's on your mind?\"]")
    }
    addImage(){
        return cy.get(".oxd-file-input")
    }
    share(){
        return cy.get(".oxd-form-actions > .oxd-button")
    }
    HiWorld(){
       return cy.get(':nth-child(1) > .oxd-sheet > :nth-child(2) > .orangehrm-buzz-post-body > .orangehrm-buzz-post-body-text')
    }
    buzzpom(){
        this.writepost().click()
        this.writepost().type('Hello world!')
        this.addImage().selectFile('cypress/fixtures/t.jpg', {force: true}) 
    }
    clickShare(){
        this.share().click({force:true})
    }
    
}
export default BuzzPOM