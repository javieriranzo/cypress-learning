/// <reference types="Cypress" />

describe("Asserts Challenge", function() {
   
    it("Assert challenge - Window references - Charset property", function() {
        // Test web charset property
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq', 'The Number Game')
        cy.document().should("have.property", "charset").and("eq", "UTF-8")
    })

    it("Assert challenge - Window references - Validate URL", function() {
        // Validate URL
        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.title().should('eq', 'The Number Game')
        // Validate only a slice of URL 
        cy.url().should("include", "/random-number.html")
        // Validate complete URL
        cy.url().should("eq", "https://testsheepnz.github.io/random-number.html")
    })

})