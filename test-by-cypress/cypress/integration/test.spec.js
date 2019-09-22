describe('IT用語辞典の検索', () => {
	it('CI', () => {
		cy.visit('http://e-words.jp/')

		cy.get('input[name=search]')
			.type('CI{enter}')

		cy.get('#word')
			.should('have.text', '継続的インテグレーション')
	})
})
