/// <reference types="cypress" />
import {
  blogdoagi
} from '../../fixtures/urls.json';

describe('Search functionality', () => {

  context('Search articles on the Agi blog', () => {
    beforeEach(() => {
      cy.accessPageAndValidate('/', blogdoagi);
      cy.validateButtonSearchOpen();
    });

    //Cenário Feliz da funcionalidade Pesquisar
    it('Search and validate an existing article', () => {
      cy.validateExistingArticleSearch();
    });

    //Cenário Triste da funcionalidade Pesquisar
    it('Search and validate message No results for an article that does not exist', () => {
      cy.validateArticleNotFound();
    });
  });
})