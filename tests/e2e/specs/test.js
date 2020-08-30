// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('span.white--text', 'Alex Medvedev')
  })
  it('Visits the books url', () => {
    cy.visit('/books')
    cy.contains('h1', 'Книги')
  })
})
