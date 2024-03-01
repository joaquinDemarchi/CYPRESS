describe('Navegando entre diferentes tabs', function () {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

    it('Visitar links con target blank en distintas pestañas', function () {
        //abrira una nueva pestaÃ±a pero no dentro de cypress
        cy.visit('https://demoqa.com/links')
        cy.get('#simpleLink').click()
        cy.wait(3000)

    });

    it('Abrir la pagina dentro de la misma ventana', function () {
        cy.visit('https://demoqa.com/links')
        cy.get('#simpleLink').invoke('removeAttr', 'target').click()

    });
});

