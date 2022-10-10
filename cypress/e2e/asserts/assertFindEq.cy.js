/// <reference types="Cypress" />


describe("Asserts Find - Eq", function() {
   
    it("Assert Find - Eq - Find elements and equals", function() {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq', 'My Store')
        cy.get("#block_top_menu").contains('Women').click()
        cy.get(".product-container").find(".product-image-container").eq(0).click()
    })
    
});