/// <reference types="Cypress" />
describe("Test - Funcion PageUp - PageDown", function() {

    it("Funcion PageUp para recorrer la página hacia arriba'", function() {
        cy.visit("https://demoqa.com/text-box");
        cy.title().should('eq', 'ToolsQA');
        cy.wait(1000);
    });

});