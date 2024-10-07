describe('Api Adopet', ()=> {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MTFkMjdlNC0xYTdiLTRkZWItYTFiYS0wNjRjYTgxNzM2ZDMiLCJhZG9wdGVyTmFtZSI6IkthbWlsbGEgQ2FydmFsaG8iLCJpYXQiOjE3MjgwNjQyNDYsImV4cCI6MTcyODMyMzQ0Nn0.N4q6h_DIiSVEj1FWnTXEpQQ3BT-n5WZ7OqDpAG6fLh4`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET', 
            url:'https://adopet-api-i8qu.onrender.com/mensagem/811d27e4-1a7b-4deb-a1ba-064ca81736d3',
            headers:{ authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})