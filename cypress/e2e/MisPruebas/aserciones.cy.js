// before(() => {
// 	//solo si se quiere correr antes de los dos bloques
// 	cy.visit('/automation-practice-form')
// })


describe('Aserciones', () => {
	// beforeEach(() => {
	// 	cy.visit('/automation-practice-form')
	// })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

	before(() => {
		cy.visit('/automation-practice-form')
	})

	afterEach(() => {
		cy.reload()
	})

	after(() => {
		// si quiero continuar con otro bloque en otra url
		cy.visit('/')
	})
	it('Verificar que estemos en la pagina correcta', () => {
		cy.url().should('include', 'demoqa.com')
	})

	it('Verificar que estemos en la seccion de formulario', () => {

		cy.get('#firstName')
			.should('be.visible')
			.should('have.attr', 'placeholder', 'First Name')

		cy.get('#firstName')
			.should('be.visible')
			.and('have.attr', 'placeholder', 'First Name')
	})

	it('Verificar que exista campo First Name', () => {
		cy.get('#firstName').then((element) => {
			expect(element).to.be.visible
			expect(element).to.have.attr('placeholder', 'First Name')
		})
	})
})

describe('Segundo Bloque', () => {
	beforeEach(() => {
		cy.visit('/automation-practice-form')
	})

	it('Aserciones', () => {
		cy.url().should('include', 'demoqa.com')

		cy.get('#firstName')
			.should('be.visible')
			.should('have.attr', 'placeholder', 'First Name')

		cy.get('#firstName')
			.should('be.visible')
			.and('have.attr', 'placeholder', 'First Name')
	})
})