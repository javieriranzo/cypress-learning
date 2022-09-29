/// <reference types="Cypress" />

require('cypress-plugin-tab')

describe("Type tab", function() {
    
    it("Test for type tab function", function() {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq', 'Datos Personales | TestingQaRvn') 
        cy.get("#wsf-1-field-21").type("Francisco Javier")
        .tab().type("Iranzo Rebenaque")
        .tab().type("javieriranzo92@gmail.com")
        .tab().type("666305652")
        .tab().type("Albalat dels Sorells, Valencia")
        cy.wait(10000)
    })
    
});