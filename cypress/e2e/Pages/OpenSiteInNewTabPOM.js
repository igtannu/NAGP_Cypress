class OpenSiteInNewTab{
    site(){
        return cy.get("a[href='http://www.orangehrm.com']")
    }
    clickSite(){
    this.site().click( { target: '_blank' })
    cy.wait(2000)
 
    }

}
export default OpenSiteInNewTab