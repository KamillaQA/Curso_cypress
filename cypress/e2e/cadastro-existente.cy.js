describe('Página de Cadastro', () => {

    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[data-test="register-button"]').click();
  })
  
    it('Deve preencher os campos do formulário com um usuário já cadastrado', () => {    
      cy.get('[data-test="input-name"]').type('Kamilla Carvalho');
      cy.get('[data-test="input-email"]').type('kprado@websupply.com.br');
      cy.get('[data-test="input-password"]').type('Acesso123');
      cy.get('[data-test="input-confirm-password"]').type('Acesso123');
      cy.get('[data-test="submit-button"]').click();
    })
  })