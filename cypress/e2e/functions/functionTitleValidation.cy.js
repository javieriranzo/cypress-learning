/// <reference types="Cypress" />

describe("Validate title page", function() {
    it ("Test for validate title page", function() {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq', 'Datos Personales | TestingQaRvn')
        cy.log("Runs ok!")
    })
})