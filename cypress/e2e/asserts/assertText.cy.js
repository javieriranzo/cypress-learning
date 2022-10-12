/// <reference types="Cypress" />

describe("Asserts Text", function() {
   
    it("Assert Text - Validate product condition", function() {
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
    }),

    it("Assert Text - Validate product price", function () {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq', 'My Store')
        cy.get("#block_top_menu").contains('Women').click()
        cy.get(".product-container").find(".product-image-container").eq(2).click()
        
        cy.get("#our_price_display").then((e) => {
            let productPrice = e.text()
            // Delete dollar symbol
            productPrice = productPrice.slice(1,6)
            productPrice = parseInt(productPrice)
            cy.log(productPrice < 30 ? "Aviable for shop" : "Not aviable for shop")
        })
    })
    
});