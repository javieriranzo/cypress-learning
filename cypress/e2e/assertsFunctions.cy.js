/// <reference types="Cypress" />

describe("Asserts functions", function() {
    
    it("Assert: be.visible. Field is visible on page", function() {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq', 'Datos Personales | TestingQaRvn') 
        cy.get("#wsf-1-field-21").should("be.visible").type("Francisco Javier")
    })

    it("Assert: be-enable. Field is enable to insert value", function() {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq', 'Datos Personales | TestingQaRvn') 
        cy.get("#wsf-1-field-21").should("be.enabled").type("Francisco Javier")
    })
    
});