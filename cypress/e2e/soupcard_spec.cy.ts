import { should } from 'chai';

describe('Soupwarts Recipe Display', () => {
  beforeEach(() => {
    cy.visit('/');
    // cy.visit('http://localhost:3000/')
    // cy.get('[href="/gryffindor"] > img').click();
    // cy.intercept('https://api.api-ninjas.com/v1/recipe?query=stew', {
    //   fixture: 'get_stub.json',
    // }).as('soup-card');

    // cy.visit('http://localhost:3000/gryffindor');
  });

  it('Should display the Soupwarts header', () => {
    cy.get('.header').contains('SOUPWARTS');
  });

  it('Should display loading image while retrieving data', () => {
    cy.visit('/gryffindor');
    cy.get('.loading-icon').should('be.visible');
  })

  it('Should display a soup recipe after clicking on a house logo', () => {
    cy.intercept('https://api.api-ninjas.com/v1/recipe?query=stew', {
      fixture: 'get_stub.json',
    });
    cy.visit('/gryffindor');
    cy.get('.recipe-container').should('be.visible')
    cy.get('.card-title').should('be.visible').contains('Eliopulos Stew');
    cy.get('.recipe-container > :nth-child(2)').should('be.visible');
    cy.get('.card-serving').should('be.visible').contains('6 Servings');
    cy.get('.recipe-instructions > h4')
      .should('be.visible')
      .contains('Instructions');
    cy.get('.recipe-container > :nth-child(5)').should('be.visible');
    cy.get('.active').should('be.visible').contains('Return Home');
  });

  it('Should return to the home screen when selecting the link', () => {
    cy.visit('/gryffindor');
    cy.get('.active').click();
    cy.get('[href="/hufflepuff"] > img').should('be.visible');
    cy.get('[href="/ravenclaw"] > img').should('be.visible');
    cy.get('[href="/gryffindor"] > img').should('be.visible');
    cy.get('[href="/slytherin"] > img').should('be.visible');
  });

  it('Should display an error message if there was a fail to fetch for gryffindor', () => {
    cy.intercept('GET', 'https://api.api-ninjas.com/v1/recipe?query=stew', {
      forceNetworkError: true,
    });
    cy.visit('http://localhost:3000/gryffindor');
    cy.get('p').contains('Failed to fetch. Try again later.');
  });

  it('Should display an error message if there was a fail to fetch for slytherin', () => {
    cy.intercept('GET', 'https://api.api-ninjas.com/v1/recipe?query=broth', {
      forceNetworkError: true,
    });
    cy.visit('http://localhost:3000/slytherin');
    cy.get('p').contains('Failed to fetch. Try again later.');
  });

  it('Should display an error message if there was a fail to fetch for hufflepuff', () => {
    cy.intercept(
      'GET',
      'https://api.api-ninjas.com/v1/recipe?query=egg%20soup',
      { forceNetworkError: true }
    );
    cy.visit('http://localhost:3000/hufflepuff');
    cy.get('p').contains('Failed to fetch. Try again later.');
  });

  it('Should display an error message if there was a fail to fetch for ravenclaw', () => {
    cy.intercept(
      'GET',
      'https://api.api-ninjas.com/v1/recipe?query=veggie%20soup',
      { forceNetworkError: true }
    );
    cy.visit('http://localhost:3000/ravenclaw');
    cy.get('p').contains('Failed to fetch. Try again later.');
  });
});
