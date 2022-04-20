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

})