/// <reference types = "cypress" />
require('cypress-xpath')

describe("Inicio - Pagina principal Administracion de Prevencion", function() {

    it("Validar label - Título pantalla login", function() {
        cy.visit('https://absentismo-personaltest.devapps.consum.es/globals/login')
        cy.get('.title').should('eq', '<span.title>')
    })

    it.only("Validar input - Nombre de usuario", function() {
        cy.visit('https://absentismo-personaltest.devapps.consum.es/globals/login')
        cy.xpath('/html/body/app-root/ng-sidebar-container/div/div/csm-login/div/div/div/div[2]/div/div[4]/div/dx-text-box/div/div[1]/input').type('fjiranzo.ITI')
    });

    it("Validar input - Contraseña", function() {
        cy.visit('https://absentismo-personaltest.devapps.consum.es/globals/login')
        cy.xpath('/html/body/app-root/ng-sidebar-container/div/div/csm-login/div/div/div/div[2]/div/div[6]/div/dx-text-box/div/div[1]/input').should('be.visible');
        cy.type('1234');
    })

});