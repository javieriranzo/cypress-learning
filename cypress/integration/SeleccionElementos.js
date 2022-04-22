/// <reference types="Cypress" />
describe("Test - Seleccion elementos", function() {

    it("Seleccionar título de la página", function() {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'ToolsQA');
        cy.log("¡Funcion title() OK!");
    });

    it("Seleccionar elemento por name", function() {
        cy.visit("https://www.google.es/");
        cy.get("[name='q']");
    });

    it("Seleccionar elemento por class", function() {
        cy.visit("https://www.google.es/");
        cy.get("[name='q']").type("Francisco Javier Iranzo Rebenaque {enter}");
        cy.get(".LC20lb");
    });

    it("Seleccionar elemento por selector", function() {
        cy.visit("https://www.google.es/");
        cy.get("[name='q']").type("Francisco Javier Iranzo Rebenaque {enter}");
        cy.get("#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.NJo7tc.Z26q7c.jGGQ5e > div > a > h3").click();
    })

})