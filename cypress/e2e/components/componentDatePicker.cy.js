/// <reference types="Cypress" />

require('cypress-xpath')

describe("Component datepicker", function() {
   
    it("Datepickers - Work with dates", function() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').should('be.visible').type('Admin')
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').should('be.visible').type('admin123')
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').should('be.visible').click()
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[5]/a').should('be.visible').click()
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[1]/button').should('be.visible').click()
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/div[1]/div[2]/input').should('be.visible').type('Javier')
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/div[2]/div[2]/input').should('be.visible').type('Iranzo')
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div/div/div[2]/div[3]/div[2]/input').should('be.visible').type('Rebenaque')
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div/div/div[2]/div/div/div[1]').should('be.visible').select('Senior QA Lead')

    })
})