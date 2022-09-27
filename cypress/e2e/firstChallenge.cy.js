/// <reference types="Cypress" />

describe("First challenge", function() {

    it("Challenge step 1: Enter and validate texts", function() {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM')
        cy.get('.oxd-text--h5').should('eq', 'Login')
        cy.get('.oxd-button').should('be.visible').click()
    })
});