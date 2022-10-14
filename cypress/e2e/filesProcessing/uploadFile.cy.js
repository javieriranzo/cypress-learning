/// <reference types="Cypress" />

require('cypress-xpath')
import 'cypress-file-upload'

describe("Files processing", function() {
   
    it("Files processing - Upload file", function() {
        const imgPath = "1.jpg"
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM')
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').should('be.visible').type('Admin')
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[2]/div/div[2]/input').should('be.visible').type('admin123')
        cy.xpath('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').should('be.visible').click()
        cy.xpath('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a').should('be.visible').click()
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[3]/div[1]/div/button').click()
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/div/div[2]/div[3]/div/form/div[1]/div/div/div/div[2]/div/div[1]').attachFile(imgPath)
    })
})