describe('Página Perfil', ()=> {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="login-button"]').click();
        cy.login('kprado@websupply.com.br', 'Acesso123')
    })
    it('Deve exibir o nome do usuário ao acessar a página de perfil', () => {
        cy.intercept({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil',
            headers: {
              Authorization: `Bearer 811d27e4-1a7b-4deb-a1ba-064ca81736d3` // Trocar pelo token real se necessário
            }
          }, (req) => {
            req.reply({
              statusCode: 200,
              body: {
                nome: 'Kprado',  // Simulação de nome retornado pela API
                email: 'kprado@websupply.com.br'
              }
            });
          }).as('getPerfil');
        cy.get('.header__user').click();
        cy.get('.button').click();
        cy.wait('@getPerfil');
        cy.get('#nome').should('be.visible').and('contain','Kamilla Carvalho');
        //cy.contains('').should('be.visible')
    })    
})