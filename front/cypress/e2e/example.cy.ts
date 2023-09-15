// https://on.cypress.io/api

describe('Login', () => {
  it('visits the app root url', () => {
    cy.visit('/login')
    cy.contains('div', 'ACCESO AL SISTEMA')
  })
})
