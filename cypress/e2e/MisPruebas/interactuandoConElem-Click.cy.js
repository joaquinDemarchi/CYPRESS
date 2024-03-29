describe('Interactuando con los elementos', () => {


	Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })


	it('Prueba Click', () => {
		cy.visit('/buttons')
        //obtiene todos los botones, selecciona el 3ero y le hace click
		cy.get('button').eq(3).click()
        //comprueba que aparezca el mensaje y contenga el texto 'You have done ...'
		cy.get('#dynamicClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a dynamic click')
	})

	it('Prueba Double Click', () => {
		cy.visit('/buttons')
		cy.get('#doubleClickBtn').dblclick()
		cy.get('#doubleClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a double click')
	})

	it('Prueba Right Click', () => {
		cy.visit('/buttons')
		cy.get('#rightClickBtn').rightclick()
		cy.get('#rightClickMessage')
			.should('be.visible')
			.and('contain', 'You have done a right click')
	})

	it('Prueba Force Click', () => {
		cy.visit('/dynamic-properties')
		// cy.get('#enableAfter').click({ timeout: 0 })
		cy.get('#enableAfter').click({ timeout: 0, force: true })
	})

	it('Prueba Click por posicion', () => {
		cy.visit('/buttons')
		cy.get('button').eq(3).parent().parent().click('topRight')
		cy.get('button').eq(3).parent().parent().click('bottomLeft')
		cy.get('button').eq(3).parent().parent().click(5, 60)
	})

	it('Prueba Multiple Click', () => {
		cy.visit('/buttons')
		cy.get('.btn.btn-primary').click({ multiple: true })
	})

	it.only('Prueba Click con teclas alternativas', () => {
		cy.visit('/buttons')
		cy.get('button').eq(3).click({
			shiftKey: true,
			// p optionKey
			altKey: true,
			ctrlKey: true,
			// windows o command en mac
			metaKey: true,
		})
	})
})