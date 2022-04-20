/// <reference types="Cypress" />

describe("Test - Visitar pagina", function() {

    it("Visitar página pruebas text-box y rellenar campos", function() {
        cy.visit("https://demoqa.com/text-box");
    });

})