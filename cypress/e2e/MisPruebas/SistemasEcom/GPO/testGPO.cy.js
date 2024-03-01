describe('Test TGD', function () {

    // before(() => {
    //     cy.clearAllCookies()

    //     cy.visit('http://stage.ventanillaunica.chaco.gov.ar/login')
    //     cy.clearCookies()

    //     cy.get('#inputUsername').type(20407738382)
    //     cy.get('#inputPassword').type('Uj060fuk')


    //     cy.get('.d-grid > .btn').click()
    // })

        it('Intgre ', function ()  {

            cy.clearAllCookies()

            cy.visit('https://devapp8.chaco.gob.ar/gpotestecom/servlet/com.gpo.login')
            
            cy.get('#vUSERNAME').type(99000000019)
            cy.wait(3000)

            cy.get('#vUSERPASSWORD').type(123)

            cy.get('#BTNENTER').click()

            cy.get('#sidebar_ul > :nth-child(2) > :nth-child(1) > .menu-expand').click()
            cy.wait(3000)
            cy.visit('https://devapp8.chaco.gob.ar/gpotestecom/servlet/com.gpo.proyectoww')
        
            cy.get('#BTNINSERT').click()
            cy.wait(10000)
            
            cy.contains('ACEPTAR').click()
        });

    })

    // context('Ingresar a aplicaciones', ()=>{
    //     it('Ingresar a SGBP  ', () => {
    //         cy.get(':nth-child(3) > .d-flex > .texto').click()

    //         cy.get(':nth-child(1) > .app-tasks > .flex-row > .flex-fill > .launch').invoke('removeAttr', 'target').click()
    //     });

    // })

