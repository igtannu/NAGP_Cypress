describe("API Testing ",()=>{


    it("GET Request",()=>{
        cy.request({
            method:'GET',
            url:Cypress.env("api_url")+'api/users/2'
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.data.id).to.eq(2)
        })
    })

    it("GET Request",()=>{
        cy.request({
            method:'GET',
            url:Cypress.env("api_url")+'api/users?page=2'
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.total).to.eq(12)
        })
    })

    it('POST request', () => {
        cy.request({method: 'POST', 
        url: Cypress.env("api_url")+'api/users',
         body: {
        "name": "Tanu",
        "job": "QA"
        }}).then((response) =>{
        //Asserting the status code to be 201 for successful execution
        expect(response.status).to.eq(201)
        //Asserting the name which we have inserted into
        expect(response.body.name).to.eq("Tanu")
        //Asserting the status text to confirm whether it is created
        expect(response.statusText).to.eq("Created")
        })
        })

        it('POST request', () => {
            cy.request({method: 'POST', 
            url: Cypress.env("api_url")+'api/login',
            body: {
                "email": "eve.holt@reqres.in",
                "password": "cityslicka"
            }}).then((response) =>{
                expect(response.status).to.eq(200)
            //Asserting the status code to be 201 for successful execution
            expect(response.body.token).to.eq(Cypress.env("token"))
            })
            })
    


})