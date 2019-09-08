describe('test google search', () => {
	it('acess to google', () => {
		cy.visit('https://www.google.co.jp/')

		cy.get('input[name=q]')
			.type('lassic{enter}')
	})
})
