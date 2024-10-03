describe('Página Inicial', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
  })

    it('Verificar se o Title "AdoPet" está na página home', () => {
      cy.title().should('eq', 'AdoPet');
    })

   it('Visita a página de /home do Adopet', () => {
        cy.contains('a', 'Fazer login').click();
        cy.get('input[name="email"]').type('kprado@websupply.com.br');
        cy.get('input[name="password"]').type('Acesso123');
        cy.contains('button', 'Entrar').click();
    })

    it('Verificar se o tetxo "Quem ama adota" está na página home', () => {
      cy.contains('p', 'Quem ama adota!').should('be.visible');
    })

    it('Verificar se o texto "Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!" está na página home', () => {
      cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })
})