describe("Prueba en distintos dispositivos.",()=>{

    it('Usando el viewport Desktop', () => {
        cy.viewport(1200,720)
        cy.visit("https://ecom-reingenieria-prueba.chaco.gob.ar/")
        // cy.scrollTo('bottom', { duration: 10000 });

        cy.contains('Empresa').click()
        cy.contains('Nosotros').click()
        cy.wait(2000)

        cy.contains('Mision').scrollIntoView()
        cy.wait(2000)

        // cy.contains('VALORES').scrollIntoView()
        // cy.wait(2000)

        cy.contains('Responsabilidad Social').scrollIntoView()
        cy.wait(2000)

        cy.contains('autoridades').scrollIntoView()
        cy.wait(2000)

        cy.get('footer').scrollIntoView()


        cy.go('back')
    });
    
    // it('Usando el viewport movil', () => {
    //     cy.viewport(375,830)
    //     cy.visit("https://ecom-reingenieria-prueba.chaco.gob.ar/")

        
    // });
    
    
    })