describe('IT用語辞典の検索', () => {
  it('CI', () => {
    cy.visit('http://e-words.jp/')
    cy.screenshot('01_page_loaded')

    cy.get('input[name=search]')
      .as('searchText')
      .type('CI')
    cy.screenshot('02_text_input')
    cy.get('@searchText')
      .type('{enter}')

    cy.get('#word')
      .should('have.text', '継続的インテグレーション')
    cy.screenshot('03_page_navigated')
  })
})
