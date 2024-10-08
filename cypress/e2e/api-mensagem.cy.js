describe('Api Adopet', ()=> {

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET', 
            url:'https://adopet-api-i8qu.onrender.com/mensagem/811d27e4-1a7b-4deb-a1ba-064ca81736d3',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})