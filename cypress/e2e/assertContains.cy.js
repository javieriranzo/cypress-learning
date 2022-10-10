/// <reference types="Cypress" />


describe("Asserts Contains", function() {
   
    it("Assert contains - Contains elements", function() {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq', 'My Store')
        cy.wait(2000)
        cy.get("#block_top_menu").contains('Women').click()
    })
    
});