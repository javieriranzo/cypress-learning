/// <reference types="Cypress" />

describe("Type pageUp, pageDown", function() {
    
    it("Test for type pageUp function", function() {
        cy.visit("http://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA') 
        cy.visit("www.google.com")
        cy.wait(4000)
        cy.get("#userName").type('{pageup}')
        cy.wait(2000)
    })

    it("Test for type pageDown function", function() {
        cy.visit("http://demoqa.com/text-box")
        cy.title().should('eq', 'ToolsQA') 
        cy.visit("www.google.com")
        cy.wait(4000)
        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
    });
    
});