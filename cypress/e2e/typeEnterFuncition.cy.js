/// <reference types="Cypress" />

describe("Type enter function", function() {
    
    it("Test for type enter function", function() {
        cy.visit("www.google.es")
        cy.title().should('eq', 'Google')
        cy.wait(1500) // Sleep execution for 1500ms
        cy.get("[name='q']").type("Cypress io {enter}") 
        // {enter} for press intro key
    });
    
});