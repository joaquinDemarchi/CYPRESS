

describe("Prueba navegacion en Platzi", ()=>{
    it('ir a platzi', () => {
        cy.visit("https://platzi.com/")
    });
    it('recargar pagina', () => {
        cy.reload()
    });

    it('recargar pagina de forma forzada', () => {
        cy.visit("https://google.com/")
        cy.reload(true)
    });

    it('navegar hacia atras', () => {
        cy.visit("https://google.com/")
        cy.visit("https://www.google.com/search?q=perros&rlz=1C1YTUH_enAR1079AR1080&oq=perros&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCTE5NzFqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8")
        cy.go("back")
    });
})