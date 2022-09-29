/// <reference types="Cypress" />

describe("Visit command", function() {

    it("Test for visit command", function() {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
    });

})