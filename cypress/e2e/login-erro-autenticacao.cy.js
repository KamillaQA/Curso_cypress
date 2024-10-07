describe('Caminho Triste do Login - Erro de Autenticação', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
  
      // Intercepta a requisição de login e força um erro 401
      cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
        statusCode: 401,
        body: {
          error: 'Falha no login. Consulte suas credenciais.'
        }
      }).as('cadastroUsuario');
    });
  
    it('Deve exibir uma mensagem de erro ao receber erro 401', () => {
      cy.get('[data-test="input-loginEmail"]').type('usuario@invalido.com');
      cy.get('[data-test="input-loginPassword"]').type('Senha185');
      cy.get('[data-test="submit-button"]').click();
  
      // Aguarda pela interceptação da requisição de login
      cy.wait('@cadastroUsuario');
  
      // Valida se a mensagem de erro correta é exibida ao usuário
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
    });
  });
  