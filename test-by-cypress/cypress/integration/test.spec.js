describe('IT用語辞典の検索', () => {
	it('IT用語辞典の検索', () => {
		cy.visit('http://e-words.jp/')

		cy.get('input[name=search]')
			.type('CI')
		
		cy.get('.gsc-search-button .gsc-search-button-v2')
			.click()
	})
})
