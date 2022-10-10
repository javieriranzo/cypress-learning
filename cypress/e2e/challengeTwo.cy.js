/// <reference types="Cypress" />

require('cypress-xpath')

describe("Challenge two - Pratice distinc components", function() {
   
    it("Create a new user. Complete form", function() {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq', 'ToolsQA')
        cy.get('body').click()
        cy.xpath("//*[@id='firstName']").type("Javier")
    })
    
});