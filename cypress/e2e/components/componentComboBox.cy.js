/// <reference types="Cypress" />

describe("Combo box", function() {

    // Review why it does not work with the check() function
    
    it("Test for combobox component", function() {
        cy.visit("https://testingqarvn.com.es/combobox/")
        cy.title().should('eq', 'ComboBox | TestingQaRvn')
        cy.get('#wsf-1-field-53').should('be.visible').select('Linux').should('have.value', 'Linux')
        cy.get('#wsf-1-field-53').should('be.visible').select('Windows').should('have.value', 'Windows')
        cy.get('#wsf-1-field-53').should('be.visible').select('Mac').should('have.value', 'Mac')
    })
    
});