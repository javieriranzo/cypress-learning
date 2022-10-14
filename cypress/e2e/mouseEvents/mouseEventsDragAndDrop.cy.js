/// <reference types="Cypress" />

require('@4tw/cypress-drag-drop')

describe("Mouse events", function() {

    it("Mouse events - Drag and drop - First example", function() {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.title().should('eq', 'The Internet')
        cy.wait(1500)
        cy.get('#column-a').drag('#column-b', {force:true})
    })

})