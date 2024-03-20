describe('Footer Individuals Column', () => {
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

describe('Footer Builders Column', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should redirect to "/start-building"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(2)')
      .contains('Start Building')
      .click();
    cy.url().should('eq', 'https://multiversx.com/builders/start-building');
  });

  it('Should be visible"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(2)')
      .contains('Fundamentals')
      .should('be.visible');
  });

  it('Should be visible"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(2)')
      .contains('Migration Guide')
      .should('be.visible');
  });

  it('Should redirect to docs', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(2)')
      .contains('Technology')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('eq', 'https://docs.multiversx.com/');
  });

  it('Should redirect to validators docs', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(2)')
      .contains('Become a Validator')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('eq', 'https://docs.multiversx.com/validators/overview/');
  });

  it('Should be visible"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(2)')
      .contains('Hackathons')
      .should('be.visible');
  });

  it('Should redirect to environment page', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(2)')
      .contains('Releases')
      .click();
    cy.url().should('eq', 'https://multiversx.com/releases');
  });
});

describe.only('Footer Ecosystem Column', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should redirect to "/ecosystem"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(3)')
      .contains('Discover')
      .click();
    cy.url().should('eq', 'https://multiversx.com/ecosystem');
  });

  it('Should redirect to "/projects"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(3)')
      .contains('Projects')
      .click();
    cy.url().should('eq', 'https://multiversx.com/ecosystem/projects');
  });

  it('Should redirect to "/partners"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(3)')
      .contains('Partners')
      .click();
    cy.url().should('eq', 'https://multiversx.com/ecosystem/partners');
  });

  it('Should redirect to "/validators"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(3)')
      .contains('Validators')
      .click();
    cy.url().should('eq', 'https://multiversx.com/ecosystem/validators');
  });

  it('Should redirect to "/service-providers"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(3)')
      .contains('Service Providers')

      .click();
    cy.url().should('eq', 'https://multiversx.com/ecosystem/service-providers');
  });
});

describe('Footer Community Column', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Footer Resources Column', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  });

  describe('Footer About Column', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  });

  describe('Socials', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  });
});
