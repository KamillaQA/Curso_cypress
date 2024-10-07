describe('Página de Login', () => {
  beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="login-button"]').click();
      cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login',{
      statusCode:404, }).as('stubPost')
  })

  it('Falha no login do sistema', () => {
    cy.get('[data-test="input-loginEmail"]').type('kprado.com');
    cy.get('[data-test="input-loginPassword"]').type('kakak');
    cy.get('[data-test="submit-button"]').click();
    cy.contains('Por favor, verifique o email digitado').should('be.visible')
    cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
  })
  it('Verifica mensagem de falha no login', ()=> {
    cy.get('[data-test="submit-button"]').click();
    cy.contains('É necessário informar um endereço de email').should('be.visible')
    cy.contains('Insira sua senha').should('be.visible')
  })
  it ('Deve falhar por conta dos dados mesmo que os campos sejam preenchidos corretamente', ()=> {
    cy.login('kprado@web.com.br', 'Acesso123')
    cy.wait('@stubPost')
    cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible')
})
})