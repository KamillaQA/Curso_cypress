describe('Página Perfil', ()=> {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/')
        cy.get('[data-test="login-button"]').click();
        cy.login('kprado@websupply.com.br', 'Acesso123')
    })
  
          it('Nome do perfil', () => {
              cy.request({
                  method: 'GET' ,
                  url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/811d27e4-1a7b-4deb-a1ba-064ca81736d3'
                 
              }).then((res) => {
                  expect(res.status).to.be.equal(200)
                  expect(res.body).is.not.empty
                  expect(res.body).to.have.property('perfil')
              expect(res.body.perfil.nome).to.be.equal('Kamilla Carvalho')
                               
              })
          })
      })