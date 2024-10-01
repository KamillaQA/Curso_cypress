describe('Página de Cadastro', () => {
    it('Visitar a página de principal do AdoPet e selecionar os botões header', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__home').click();
      })
})