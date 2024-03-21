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

describe('Footer Ecosystem Column', () => {
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

  it('Should redirect to "/events"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(4)')
      .contains('Events Calendar')
      .click();
    cy.url().should('eq', 'https://multiversx.com/events');
  });

  it('Should redirect to governance page', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(4)')
      .contains('Governance')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should('eq', 'https://governance.multiversx.com/');
  });

  it('Should be visible"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(4)')
      .contains('Ambassadors Program')
      .should('be.visible');
  });

  it('Should redirect to "/faq"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(4)').contains('FAQ').click();
    cy.url().should('eq', 'https://multiversx.com/faq');
  });

  it('Should redirect to "/blog"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(4)').contains('Blog').click();
    cy.url().should('eq', 'https://multiversx.com/blog');
  });
});

describe('Footer Resources Column', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should redirect to whitepaper', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(5)')
      .contains('Whitepaper')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should(
      'eq',
      'https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b22e7c42f65345c285ccb8_multiversx-whitepaper.pdf'
    );
  });

  it('Should redirect to economics paper', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(5)')
      .contains('Economics Paper')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should(
      'eq',
      'https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65b2970798d806096d77d786_multiversx-economics-paper.pdf'
    );
  });

  it('Should redirect to token metrics', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(5)')
      .contains('Token Metrics')
      .invoke('removeAttr', 'target')
      .click();
    cy.url().should(
      'eq',
      'https://assets-global.website-files.com/6597cc7be68d63ec0c8ce338/65ae95b4c88ea4ffb4b03be7_multiversx-token-metrics.pdf'
    );
  });
});

describe('Footer About Column', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should redirect to "/transformation"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(6)')
      .contains('From Elrond to MultiversX')
      .click();
    cy.url().should('eq', 'https://multiversx.com/transformation');
  });

  // cypress doesn't like asserting downloads
  it('Should be visible', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(6)')
      .contains('Media Kit')
      .should('be.visible');
  });

  it('Should redirect to "/careers"', () => {
    cy.get('.footer_links-wrap > div:nth-of-type(6)')
      .contains('Careers')
      .click();
    cy.url().should('eq', 'https://multiversx.com/careers');
  });
});

describe('Legal', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should redirect to "/disclaimer"', () => {
    cy.get('#w-node-_1d6f5599-f99e-66ac-6ef4-0a5eb0f7e88f-2bf1fd79')
      .contains('Disclaimer')
      .click();
    cy.url().should('eq', 'https://multiversx.com/legal/disclaimer');
  });

  it('Should redirect to "/responsible-disclosure-policy"', () => {
    cy.get('#w-node-_1d6f5599-f99e-66ac-6ef4-0a5eb0f7e88f-2bf1fd79')
      .contains('Responsible Disclosure Policy')
      .click();
    cy.url().should(
      'eq',
      'https://multiversx.com/legal/responsible-disclosure-policy'
    );
  });

  it('Should redirect to "/privacy-policy"', () => {
    cy.get('#w-node-_1d6f5599-f99e-66ac-6ef4-0a5eb0f7e88f-2bf1fd79')
      .contains('Privacy Policy')
      .click();
    cy.url().should('eq', 'https://multiversx.com/legal/privacy-policy');
  });

  it('Should redirect to "/terms-of-use"', () => {
    cy.get('#w-node-_1d6f5599-f99e-66ac-6ef4-0a5eb0f7e88f-2bf1fd79')
      .contains('Terms of Use')
      .click();
    cy.url().should('eq', 'https://multiversx.com/legal/terms-of-use');
  });
});
