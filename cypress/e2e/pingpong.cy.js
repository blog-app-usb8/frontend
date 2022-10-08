describe('Pingpong', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })
  it('front page can be opened', function() {
    cy.contains('LOG IN TO APP')
  })
  it('front page page contains pong text', function() {
    cy.contains('pong')
  })
})