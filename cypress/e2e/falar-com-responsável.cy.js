describe('Falar com o responsável', () => {
    it('Visitar a página de /home do AdoPet e clicar no botão “Falar com o responsável”', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('a', 'Fazer login').click();
        cy.get('input[name="email"]').type('kprado@websupply.com.br');
        cy.get('input[name="password"]').type('Acesso123');
        cy.contains('button', 'Entrar').click();
        cy.get('.header__message').click();
      })
})