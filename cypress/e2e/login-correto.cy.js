describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Login com sucesso no sistema', () => {
     cy.login('kprado@websupply.com.br', 'Acesso123')
    })
  })