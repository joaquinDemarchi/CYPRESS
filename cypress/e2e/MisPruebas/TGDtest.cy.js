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

            cy.visit('https://gobiernodigital.chaco.gob.ar/login')
            
    
            cy.get('#username').type(20407738382)
            cy.get('#password').type('KAITO88sino')
    
    
            cy.get(':nth-child(4) > .btn').click()

            cy.visit('https://gobiernodigital.chaco.gob.ar/frontpanel/aplicacion/mis-aplicaciones')

            cy.contains('IPDUV')
                .invoke('removeAttr', 'target')
                .parent()
                .parent()
                .click()
            
            cy.go("back")
    
        });

    })

    // context('Ingresar a aplicaciones', ()=>{
    //     it('Ingresar a SGBP  ', () => {
    //         cy.get(':nth-child(3) > .d-flex > .texto').click()

    //         cy.get(':nth-child(1) > .app-tasks > .flex-row > .flex-fill > .launch').invoke('removeAttr', 'target').click()
    //     });

    // })

