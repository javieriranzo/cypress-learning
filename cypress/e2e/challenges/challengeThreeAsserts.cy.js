/// <reference types="Cypress" />

describe("Asserts Challenge", function() {
   
    it("Assert challenge - Login with standard_user", function() {
        // Login with standard_user
        cy.visit("https://www.saucedemo.com/")
        cy.title().should('eq', 'Swag Labs')
        cy.wait(2000)
        cy.get("#user-name").should("be.visible").type("standard_user")
        cy.get("#password").should("be.visible").type("secret_sauce")
        cy.get("#login-button").should("be.visible").click()
    })

    

})