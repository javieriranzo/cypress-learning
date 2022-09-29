/// <reference types="Cypress" />

describe("Radio buttons", function() {

    // Review why it does not work with the check() function
    
    it("Test for radiobuttons component", function() {
        cy.visit("https://testingqarvn.com.es/radio-buttons/")
        cy.title().should('eq', 'Radio Buttons | TestingQaRvn')
        cy.get('#wsf-1-label-44-row-1').contains('CypressIO').click()
        cy.get('#wsf-1-label-44-row-2').contains('WebdriverIO').click()
        cy.get('#wsf-1-label-44-row-3').contains('Selenium').click()        
    })
    
});