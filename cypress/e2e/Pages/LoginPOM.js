class LoginPOM{
    login_username(){
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }
    login_password(){
        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }
    login(btn){
        return cy.xpath('//button[normalize-space()="'+btn+'"]')
    }
    verifyDashboard(){
        return cy.get('.oxd-topbar-header-title')
    }
    InvalidCred(){
        return cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text')
    }
validLoginData(username,password){
   this.login_username().type(username)
   this.login_password().type(password)  
}
clickLoginButton(btn)
{ 
    this.login(btn).click({force: true})
}

}

export default LoginPOM