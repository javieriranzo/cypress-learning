/// <reference types="Cypress" />

describe("Check box", function() {
    
    // Review why it does not work with the check() function

    it("Test for checkbox component", function() {
        cy.visit("https://testingqarvn.com.es/radio-buttons/")
        cy.title().should('eq', 'Radio Buttons | TestingQaRvn')
        cy.get('#wsf-1-label-42-row-1').contains('PHP').click()
        cy.get('#wsf-1-label-42-row-2').contains('PYTHON').click()
        cy.get('#wsf-1-label-42-row-3').contains('JS').click()  
    })
    
});