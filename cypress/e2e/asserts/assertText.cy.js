/// <reference types="Cypress" />


describe("Asserts Text", function() {
   
    it("Assert Text - ", function() {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq', 'My Store')
        cy.get("#block_top_menu").contains('Women').click()
        cy.get(".product-container").find(".product-image-container").eq(2).click()
        
        cy.get("#product_condition .editable").then((e) => {
            let productCondition = e.text()
            if (productCondition == "New") {
                cy.log("New product")
            }
        })
    })
    
});