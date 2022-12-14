import { should } from 'chai';

describe('Soupwarts Recipe Display', () => {
  beforeEach(() => {
    cy.visit('/');
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
    cy.get('.recipe-container').should('be.visible');
    cy.get('.recipe-title').should('be.visible').contains('Eliopulos Stew');
    cy.get('.recipe-serving').should('be.visible').contains('6 Servings');
    cy.get('.recipe-ingredients').should('be.visible');
    cy.get('.recipe-instructions > h4')
      .should('be.visible')
      .contains('Instructions');
    cy.get('.active').should('be.visible').contains('Return Home');
  });

  it('Should return to the home screen when selecting the Return Home Button', () => {
    cy.visit('/gryffindor');
    cy.get('#work').click();
    cy.get('[href="/hufflepuff"] > img').should('be.visible');
    cy.get('[href="/ravenclaw"] > img').should('be.visible');
    cy.get('[href="/gryffindor"] > img').should('be.visible');
    cy.get('[href="/slytherin"] > img').should('be.visible');
  });

  it('Should have a nav bar that allows user to navigate to other house soups', () => {
    cy.visit('/gryffindor');
    cy.get('[href="/hufflepuff"]').click();
    cy.get('.recipe-title').contains('Egg Soup');
    cy.get('[href="/ravenclaw"]').click();
    cy.get('.recipe-title').contains('Veggie Soup');
    cy.get('[href="/slytherin"]').click();
    cy.get('.recipe-title').contains('Broth');
  })

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
