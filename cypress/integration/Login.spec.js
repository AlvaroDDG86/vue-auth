describe('Login and Register flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })
  it('should run the frontend', () => {
    cy.contains('Welcome to the App!')
  })
  it('should login the user', () => {
    cy.contains('Login').click()
    cy.get('#email').type('test@test.com')
    cy.get('#password').type('122334')
    cy.get('.noauth').submit()
    cy.contains('Dashboard')
  })
  it('should login the user and fail', () => {
    cy.contains('Login').click()
    cy.get('#email').type('test@test.com')
    cy.get('#password').type('123')
    cy.get('.noauth').submit()
    cy.contains('Invalid login. Please try again.')
  })
  it('should signup the user, and the user exists', () => {
    cy.contains('Register').click()
    cy.get('#name').type('Fermín')
    cy.get('#email').type('test@test.com')
    cy.get('#password').type('122334')
    cy.get('.noauth').submit()
    cy.contains('An account with this email already exists.')
  })
  it('should signup the user, and the password is short', () => {
    cy.contains('Register').click()
    cy.get('#name').type('Fermín')
    cy.get('#email').type('test2@test.com')
    cy.get('#password').type('12')
    cy.get('.noauth').submit()
    cy.contains('Password too short.')
  })
})
