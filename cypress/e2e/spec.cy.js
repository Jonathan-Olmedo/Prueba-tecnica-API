describe('test functionality of country explorer aplication', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Verify that user can view details of a country', () => {
    cy.contains('Afghanistan').click();
    cy.get('[data-test-id="centerPanel"]').contains('Name:').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Afghanistan').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Dial Code:').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('+93').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Continent:').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Asia').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Curency code:').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Afghan afghani').should('be.visible');
  })
  it('Verify that user can view details of a country but API dont have all properties', () => {
    cy.contains('Antarctica').click();
    cy.get('[data-test-id="centerPanel"]').contains('Name:').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Antarctica').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Dial Code:').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Información no disponible').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Continent:').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Antarctica').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Curency code:').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Información no disponible').should('be.visible');
  })
  it('Verify that a country is added to the history', () => {
    cy.contains('Antarctica').click();
    cy.get('[data-test-id="rightPanel"]').contains('Antarctica').should('be.visible').and('have.length', 1);
  })
  it('Verify that a country is not added more than once to the history and the counter is updated by clicking on the left side', () => {
    cy.contains('Antarctica').click();
    cy.contains('Antarctica').click();
    cy.get('[data-test-id="rightPanel"]').contains('Antarctica').should('have.length', 1);
  })
  it('Verify that a country is not added more than once to the history and the counter is updated by clicking on the right side', () => {
    cy.contains('Antarctica').click();
    cy.get('[data-test-id="rightPanel"]').contains('Antarctica').should('be.visible').click();
    cy.get('[data-test-id="rightPanel"]').contains('Antarctica').should('have.length', 1);
  })
  it('Verify that clicking on the right side updates the information in the central panel', () => {
    cy.contains('Afghanistan').click();
    cy.contains('Antarctica').click();
    cy.get('[data-test-id="centerPanel"]').contains('Name:').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Antarctica').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Dial Code:').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Información no disponible').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Continent:').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Antarctica').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Curency code:').should('be.visible');
    cy.get('[data-test-id="centerPanel"]').contains('Información no disponible').should('be.visible');
  })
  it('Verify that the counter changes when giving more than one click', () => {
    cy.contains('Afghanistan').click();
    cy.contains('Afghanistan').click();
    cy.get('[data-test-id="rightPanel"] span').contains('2').should('be.visible');
  })
})