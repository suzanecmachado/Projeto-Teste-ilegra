// -- Global Commands --
Cypress.Commands.add('alidateUrl', (url) => {
    cy.url().should('contain', url);
})

Cypress.Commands.add('accessPageAndValidate', (page, url) => {
    cy.visit(page);
    cy.alidateUrl(url);
});

// -- Register Page Commands --
Cypress.Commands.add('validateButtonSearchOpen', () => {
    cy.get('#search-open').should('be.visible').click()
});

Cypress.Commands.add('validateButtonSearchSubmit', () => {
    cy.get('.desktop-search > .search-form > .search-submit').click();
});

Cypress.Commands.add('validateFieldSearch', () => {
    cy.get('.desktop-search > .search-form > label > .search-field').click()
});

Cypress.Commands.add('validateExistingArticleSearch', () => {
    cy.validateFieldSearch().click().type("Agibank promove campanha do agasalho em Campinas").click();
    cy.validateButtonSearchSubmit();
    cy.get('.entry-title > a').should('be.visible').click({
        force: true
    });
    cy.contains("Agibank promove campanha do agasalho em Campinas").should('be.visible')
});

Cypress.Commands.add('validateArticleNotFound', () => {
    cy.validateFieldSearch().type("cypress é legal").click();
    cy.validateButtonSearchSubmit();
    cy.contains('Nenhum resultado').should('be.visible')
});