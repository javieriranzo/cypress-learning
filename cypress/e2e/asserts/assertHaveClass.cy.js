/// <reference types="Cypress" />

describe("Asserts Have Class", function() {
   
    it("Assert Text - Using have.class function", function() {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq', 'My Store')
        cy.get("#header > div.nav > div > div > nav > div.header_user_info > a").should("be.visible").click()
        cy.get("#email_create").should("be.visible").should("have.class", "is_required validate").then(() => {
            cy.get("#email_create").should("be.visible").type("javier@email.com")
        })
    })
})
