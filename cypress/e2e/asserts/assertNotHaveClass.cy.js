/// <reference types="Cypress" />

describe("Asserts not.have.class", function() {
   
    it("Assert not.have.class - Class dont exist", function() {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq', 'My Store')
        cy.get("#header > div.nav > div > div > nav > div.header_user_info > a").should("be.visible").click()
        cy.get("#email_create").should("be.visible").and("not.have.class", "notExistClass").then(() => {
            cy.get("#email_create").should("be.visible").type("javier@email.com")
        })
    })
})