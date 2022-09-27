/// <reference types="Cypress" />

describe("Type enter function", function() {
    
    it("Test for type enter function", function() {
        cy.visit("www.google.es")
        cy.title().should('eq', 'Google')
        cy.wait(4000) // Sleep execution for 1500ms
        cy.get("#L2AGLb").click() // click button to close dialog
        cy.wait(2000)
        cy.get("[name='q']").type("Cypress io {enter}") // {enter} for press intro key   
    });
    
});