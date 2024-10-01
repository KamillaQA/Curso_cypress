describe('Página Inicial', () => {
    it('Teste de visita a página de /home do Adopet', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('a', 'Fazer login').click();
        cy.get('input[name="email"]').type('kprado@websupply.com.br');
        cy.get('input[name="password"]').type('Acesso123');
        cy.contains('button', 'Entrar').click();
      })
})