/// <reference types="Cypress" />
describe("Test - Funcion TypeEnter", function() {

    it("Funcion para cuando se presione 'Enter'", function() {
        cy.visit("https://www.google.es/");
        cy.get("[name='q']").type("Francisco Javier Iranzo Rebenaque {enter}");
        cy.get("#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.NJo7tc.Z26q7c.jGGQ5e > div > a > h3").click();
    });

});