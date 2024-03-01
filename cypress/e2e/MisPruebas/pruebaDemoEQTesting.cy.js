let espera1 = 2000
let espera2 = 7000

describe("Localizadores",()=> {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('Obtener elemento por un tag', () => {
        cy.visit("/alerts")
        //captura todos los h1
        cy.get('button')
        cy.wait(espera1)
    })

    

    it('Obtener elemento por id', () => {
        // cy.visit("/alerts")
        //captura los inputs con ese id
        cy.get('#timerAlertButton')
        cy.wait(espera1)
    })

   

    it('Obtener elemento por clases', () => {
        // cy.visit("/alerts")
        //captura los elementos con esa clase
        cy.get('.main-header')
        cy.wait(espera2)
    })

    

    it('Texto que contenga alert', () => {
        // cy.visit("/alerts")
        //captura captura el primer elemento que contengan "name"
        cy.contains('alert')
        cy.wait(espera2)
        
    })

    

    it('Div que contenga appear', () => {
        // cy.visit("/alerts")
        //captura captura el primer elemento que contengan "name" dentro del div  
        cy.get("div").contains('appear')
    })
    
    

    it('Ir a formulario y llevarlo ', () => {
        cy.visit("/automation-practice-form")
        cy.get('#firstName')
			.should('be.visible')
            .type('Joaquin')
        
        cy.wait(espera1)

        cy.get('#lastName')
			.should('be.visible')
            .type('Demarchi')

        cy.wait(espera1)

        cy.get('#userEmail')
			.should('be.visible')
            .type('joa.demarchi@gmail.com')

        cy.wait(espera1)

        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
            .click()

        cy.wait(espera1)

        cy.get('#userNumber')
            .type(3624889961)

        cy.wait(espera1)

        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label')
            .click()
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label')
            .click()

        cy.get('#currentAddress')
            .type('Direccion de ejemplo.')
        
        cy.wait(espera1)

            cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer')
                .click()

        cy.wait(espera1)

            cy.get('#react-select-3-option-2').click()
        
    })

})