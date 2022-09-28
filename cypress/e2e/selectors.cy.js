/// <reference types="Cypress" />

require('cypress-xpath')

describe("Component selectors", function() {

    it("Component selector. Selector by ID", function() {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq', 'Datos Personales | TestingQaRvn')
        // To indicate that the component is selected by its ID, use the symbol "#".
        cy.get('#wsf-1-field-21').should('be.visible').type('SelectorByID')
    })

    it("Component selector. Selector by attribute", function() {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq', 'Datos Personales | TestingQaRvn')
        // To use the selector with Attributes, use the symbols "[" and "]" and in the middle enter the name of the attribute with the value. 
        cy.get("[placeholder='Nombre:']").should('be.visible').type('SelectorByAttribute')
    })

    it("Component selector. Selector by CopySelector", function() {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq', 'Datos Personales | TestingQaRvn')
        // To use the selection by CopySelector is the same than ID selection
        cy.get('#wsf-1-field-21').should('be.visible').type('SelectorByCopySelector')
    })

    it("Component selector. Selector by Xpath", function() {
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should('eq', 'Datos Personales | TestingQaRvn')
        // To use the selection by Xpath, the function "cy.xpath()" must be used.
        cy.xpath('//*[@id="wsf-1-field-21"]').should('be.visible').type('SelectorByXpath')
    })

    it("Component selector. Selector by Contains", function() {
        cy.visit("https://testingqarvn.com.es/radio-buttons/")
        cy.title().should('eq', 'Radio Buttons | TestingQaRvn')
        // To use the selection by Contains, the function ".contains()" must be used.
        cy.get('#wsf-1-label-44-row-1').contains('CypressIO').click();
        cy.wait(1000)
        cy.get('#wsf-1-label-44-row-2').contains('WebdriverIO').click();
        cy.wait(1000)
        cy.get('#wsf-1-label-44-row-3').contains('Selenium').click(); 
    })

})