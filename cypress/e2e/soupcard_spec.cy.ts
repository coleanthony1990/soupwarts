import { should } from "chai";

describe('Soupwarts Recipe Display', () => {

  beforeEach(() => {
    cy.intercept('https://api.api-ninjas.com/v1/recipe?query=stew', {
      fixture: 'get_stub.json',
    });
    cy.visit('http://localhost:3000/')
  })
  
  it('Should display the Soupwarts header', () => {
    cy.get('h1').should('be.visible')
  })

  it('Should display a soup recipe after clicking on a house logo', () => {
    cy.get('[href="/gryffindor"] > img').click()
    cy.get('[href="/gryffindor"] > img').should('not.exist')
    cy.get('h2').should('be.visible').contains('Eliopulos Stew')
    cy.get('.recipe-container > :nth-child(2)').should('be.visible')
    cy.get('.recipe-container > :nth-child(3)').should('be.visible').contains('6 Servings')
    cy.get('h3').should('be.visible').contains('Instructions')
    cy.get('.recipe-container > :nth-child(5)').should('be.visible')
    cy.get('.active').should('be.visible').contains('Return Home')
  })

  it('Should return to the home screen when selecting the link', () => {
    // cy.get('.active').click()
  })
})