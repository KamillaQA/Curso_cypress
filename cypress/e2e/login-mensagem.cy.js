describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/'); 
    })

    it('Login com sucesso pelo ícone de mensagem no sistema', () => {
      cy.get('.header__message').click();
      cy.get('[data-test="input-loginEmail"]').type('kprado@websupply.com.br');
      cy.get('[data-test="input-loginPassword"]').type('Acesso123');
      cy.get('[data-test="submit-button"]').click();
    })
  })