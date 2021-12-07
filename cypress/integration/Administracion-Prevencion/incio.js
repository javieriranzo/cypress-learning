/// <reference types = "cypress" />
require('cypress-xpath')

describe("Inicio - Pagina principal Administracion de Prevencion", function() {

    it("Validar campos", function() {

        cy.visit('https://absentismo-personaltest.devapps.consum.es/globals/login');
        // cy.title().should('eq', 'administracion-prevencion');
        cy.xpath()

    });

});