describe('Página de Cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
})

  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {    

    cy.Cadastrar('Kamilla', 'kprado@websupply.com.br', 'Acesso123')
  })
})