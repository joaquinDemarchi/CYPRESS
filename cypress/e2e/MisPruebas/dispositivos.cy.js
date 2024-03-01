describe("Prueba en distintos dispositivos.",()=>{

it('Usando el viewport Desktop', () => {
    cy.viewport(1200,720)
    cy.visit("https://chaco.gob.ar/")
    cy.visit("https://chaco.gob.ar/noticias")
    cy.wait(5000)
});

it('Usando el viewport movil', () => {
    cy.viewport(375,830)
    cy.visit("https://chaco.gob.ar/")
    cy.wait(5000)
});

it('Usando el viewport movil 2', () => {
    cy.viewport("iphone-6")
    cy.visit("https://chaco.gob.ar/")
    cy.wait(5000)
});

})