describe('Footer Smoke Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should redirect to "/get-started"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(1)')
      .contains('Get Started')
      .click();
    cy.url().should('eq', 'https://multiversx.com/individuals/get-started');
  });

  it('Should redirect to "/egld"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(1)')
      .contains('The EGLD Token')
      .click();
    cy.url().should('eq', 'https://multiversx.com/individuals/egld');
  });

  it('Should redirect to "/on-chain-2fa"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(1)')
      .contains('On-chain 2FA')
      .click();
    cy.url().should('eq', 'https://multiversx.com/individuals/on-chain-2fa');
  });

  it('Should redirect to "/staking"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(1)')
      .contains('Staking')
      .click();
    cy.url().should('eq', 'https://multiversx.com/individuals/staking');
  });

  it('Should redirect to environment page', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(1)')
      .contains('Sustainability')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('eq', 'https://environment.multiversx.com/');
  });
});
