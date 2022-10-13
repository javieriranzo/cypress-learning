/// <reference types="Cypress" />

describe("Asserts Challenge", function() {
   
    it("Assert challenge - Window references - Charset property", function() {
        // Test web charset property
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq', 'The Number Game')
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
    })
    
})