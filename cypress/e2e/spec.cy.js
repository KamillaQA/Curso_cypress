describe('template spec', () => {
  it('Teste de acesso ao site', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Cadastrar').click();
    cy.get('input[name="nome"]').type('Kamilla Carvalho');
    cy.get('input[name="email"]').type('kbrado@websupply.com.br');
    cy.get('input[name="password"]').type('Acesso123');
    cy.get('input[name="confirm_password"]').type('Acesso123');
    cy.contains('button', 'Cadastrar').click();
  })
  it('Teste de ver a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção”', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Ver pets disponíveis para adoção').click();
  })
  it('Visite a página de principal do AdoPet e teste os botões header', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('.header__home').click();
  })
  it('Teste de visita a página de /home do Adopet', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Fazer login').click();
    cy.get('input[name="email"]').type('kprado@websupply.com.br');
    cy.get('input[name="password"]').type('Acesso123');
    cy.contains('button', 'Entrar').click();
  })
  it('Visite a página de /home do AdoPet e clique no botão “Falar com o responsável”', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('a', 'Fazer login').click();
    cy.get('input[name="email"]').type('kprado@websupply.com.br');
    cy.get('input[name="password"]').type('Acesso123');
    cy.contains('button', 'Entrar').click();
    cy.get('.header__message').click();
  })
})