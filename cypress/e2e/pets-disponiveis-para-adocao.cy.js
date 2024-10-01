describe('Página de pets para adotar', () => {
    it('Ver a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('a', 'Ver pets disponíveis para adoção').click();
      })
})