describe('TESTs en TGD pruebas', function () {

    beforeEach(() => {
        cy.clearAllCookies()

        cy.visit('https://tgdpruebas.chaco.gob.ar/login')
        cy.clearCookies()

        cy.get('#inputUsername').type(20407738382)
        cy.get('#inputPassword').type('Uj060fuk')


        cy.get('.d-grid > .btn').click()
    })

    context('Interaccion basica en menu de navegacion', ()=>{
        it('Intgre ', () => {
            cy.get(':nth-child(3) > .d-flex > .texto > .titulo').click()
            cy.wait(3000)

            cy.get(':nth-child(2) > .d-flex > .texto > .titulo').click()
            cy.wait(3000)

            cy.get(':nth-child(4) > .d-flex > .texto > .titulo').click()
            cy.wait(3000)

            cy.get(':nth-child(6) > .d-flex').click()
            cy.wait(3000)

            cy.get(':nth-child(7) > .d-flex > .texto > .titulo').click()
            cy.wait(3000)
        });

    })

    context('Ingresar a aplicaciones', ()=>{
        it.only('Ingresar a SGBP  ', () => {
            cy.get(':nth-child(3) > .d-flex > .texto').click()

            cy.get(':nth-child(1) > .app-tasks > .flex-row > .flex-fill > .launch').invoke('removeAttr', 'target').click()
        });

    })

})
