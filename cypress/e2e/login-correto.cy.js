describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Login com sucesso no sistema', () => {
      cy.get('[data-test="input-loginEmail"]').type('kprado@websupply.com.br');
      cy.get('[data-test="input-loginPassword"]').type('Acesso123');
      cy.get('[data-test="submit-button"]').click();
    })
  })