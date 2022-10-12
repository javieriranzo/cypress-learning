/// <reference types="Cypress" />

describe("Asserts Text", function() {
   
    it("Assert Text - Using have.value function", function() {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq', 'My Store')
        cy.get("#header > div.nav > div > div > nav > div.header_user_info > a").should("be.visible").click()
        cy.get("#email_create").should("be.visible").type("javier@email.com")
        cy.get("#SubmitCreate").should("be.visible").click()
        cy.wait(5000)
        cy.get("#account-creation_form > div:nth-child(1) > div.clearfix > div:nth-child(3) > label").should("be.visible").click()
        cy.get("#customer_firstname").should("be.visible").type("Javier")
        cy.get("#customer_firstname").should("have.value", "Javier").then(() => {
            cy.get("#customer_lastname").should("be.visible").type("Iranzo Rebenaque")
        })
    })

    it.only("Assert Text - Using contains.value function", function() {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq', 'My Store')
        cy.get("#header > div.nav > div > div > nav > div.header_user_info > a").should("be.visible").click()
        cy.get("#email_create").should("be.visible").type("javier@email.com")
        cy.get("#SubmitCreate").should("be.visible").click()
        cy.wait(10000)
        cy.get("#account-creation_form > div:nth-child(1) > div.clearfix > div:nth-child(3) > label").should("be.visible").click()
        cy.get("#customer_firstname").should("be.visible").type("Francisco Javier")
        cy.get("#customer_firstname").should("contains.value", "Javier").then(() => {
            cy.get("#customer_lastname").should("be.visible").type("Iranzo Rebenaque")
        })
    })


})