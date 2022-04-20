/// <reference types="Cypress" />
describe("Test - Funcion TypeEnter", function() {

    it("Funcion para cuando se presione 'Enter'", function() {
        cy.visit("https://www.google.es/");
        cy.get("[name='q']").type("Francisco Javier Iranzo Rebenaque");
    });

})