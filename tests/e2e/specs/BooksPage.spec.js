describe('Tests for books page', () => {
    it('Visits the books url', () => {
        cy.visit('/books')
        cy.contains('h1', 'Книги')
    })
    it('founds the 3rd chevron, clicks it and we see chevron up', ()=>{
        cy.visit('/books')
        cy.get('.v-btn[id="2"] i.mdi-chevron-down')
        cy.get('.v-btn[id="2"]').click()
        cy.get('.v-btn[id="2"] i.mdi-chevron-up')
    })
    it('founds the 4rd buyBtn, clicks it and we see 1 in cart', ()=>{
        cy.visit('/books')
        cy.contains('.miniCart .v-badge__wrapper', 0)
        cy.get('.booksGrid div:nth-child(2) .v-card__actions button:nth-child(2)').click()
        cy.contains('.miniCart .v-badge__wrapper', 1)
    })
})
