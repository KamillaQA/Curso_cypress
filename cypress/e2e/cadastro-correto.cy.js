describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Kamilla Carvalho');
    cy.get('[data-test="input-email"]').type('kbrado@websupply.com.br');
    cy.get('[data-test="input-password"]').type('Acesso123');
    cy.get('[data-test="input-confirm-password"]').type('Acesso123');
    cy.get('[data-test="submit-button"]').click();
  })
})