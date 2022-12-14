describe('Soupwarts homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Should display the Soupwarts header', () => {
    cy.get('h1').should('be.visible');
  });

  it('Should show the user guide statement', () => {
    cy.get('p').should(
      'contain',
      'Pick your house to be sorted a soup'
    );
  });
  it('should display a random quote about soup' , () => {
    cy.get('p').contains('-')
  })

  it('Should display all four house logos', () => {
    cy.get('[href="/hufflepuff"] > img').should('be.visible');
    cy.get('[href="/ravenclaw"] > img').should('be.visible');
    cy.get('[href="/gryffindor"] > img').should('be.visible');
    cy.get('[href="/slytherin"] > img').should('be.visible');
  });
});
