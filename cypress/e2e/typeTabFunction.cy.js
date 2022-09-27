/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Type tab", function() {
    
    it("Test for type tab function", function() {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq', 'Datos Personales | TestingQaRvn') 
    })
    
});