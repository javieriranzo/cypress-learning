/// <reference types="Cypress" />

describe("Asserts And", function() {
   
    it("Assert And - Concatenate validations", function() {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq', 'My Store')
        cy.get("#header > div.nav > div > div > nav > div.header_user_info > a").should("be.visible").click()
        cy.get("#email_create").should("be.visible").and("have.class", "is_required validate").then(() => {
            cy.get("#email_create").should("be.visible").type("javier@email.com")
        })
    })
})