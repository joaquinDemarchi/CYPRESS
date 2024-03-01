/// <reference types="cypress" />

// ¡Bienvenido a Cypress!
//
// Este archivo de especificación contiene una variedad de pruebas de ejemplo
// para una aplicación de lista de tareas que están diseñadas para demostrar
// el poder de escribir pruebas en Cypress.
//
// Para aprender más sobre cómo funciona Cypress y
// lo que lo convierte en una herramienta de prueba tan impresionante,
// por favor lea nuestra guía de inicio:
// https://on.cypress.io/introduction-to-cypress

describe('ejemplo de aplicación de lista de tareas', () => {
    beforeEach(() => {
      // Cypress comienza con un lienzo en blanco para cada prueba
      // por lo que debemos indicarle que visite nuestro sitio web con el comando `cy.visit()`.
      // Dado que queremos visitar la misma URL al inicio de todas nuestras pruebas,
      // lo incluimos en nuestra función beforeEach para que se ejecute antes de cada prueba.
      cy.visit('https://example.cypress.io/todo')
    })
  
    it('muestra dos elementos de lista de tareas de forma predeterminada', () => {
      // Usamos el comando `cy.get()` para obtener todos los elementos que coinciden con el selector.
      // Luego, usamos `should` para afirmar que hay dos elementos coincidentes,
      // que son los dos elementos predeterminados.
      cy.get('.todo-list li').should('have.length', 2)

      
  
      // Podemos ir más allá y verificar que las tareas predeterminadas contienen
      // el texto correcto. Usamos las funciones `first` y `last`
      // para obtener individualmente el primer y último elemento coincidente,
      // y luego realizamos una afirmación con `should`.
      cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
      cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
    })

    it("Vuelve atras", () => {
        cy.go("back")
      })

      it("Vuelve atras", () => {
        cy.go("back")
      })

      it("Vuelve atras", () => {
        cy.go("back")
      })
  
    it('puede agregar nuevos elementos de lista de tareas', () => {
      // Almacenaremos el texto de nuestro elemento en una variable para que podamos reutilizarlo
      const newItem = 'Pay electric bill'
  
      // Obtengamos el elemento de entrada y usemos el comando `type` para
      // ingresar nuestro nuevo elemento en la lista. Después de escribir el contenido de nuestro elemento,
      // también debemos escribir la tecla Enter para enviar la entrada.
      // Este elemento de entrada tiene un atributo data-test, así que lo usaremos para seleccionar el elemento de acuerdo con las mejores prácticas:
      // https://on.cypress.io/selecting-elements
      cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
  
      // Ahora que hemos escrito nuestro nuevo elemento, verifiquemos que realmente se haya agregado a la lista.
      // Dado que es el elemento más nuevo, debería existir como el último elemento en la lista.
      // Además, con los dos elementos predeterminados, deberíamos tener un total de 3 elementos en la lista.
      // Dado que las afirmaciones devuelven el elemento que se afirmó,
      // podemos encadenar ambas afirmaciones en una sola declaración.
      cy.get('.todo-list li')
        .should('have.length', 3)
        .last()
        .should('have.text', newItem)
    })
  
    it('puede marcar un elemento como completado', () => {
      // Además de usar el comando `get` para obtener un elemento por selector,
      // también podemos usar el comando `contains` para obtener un elemento por su contenido.
      // Sin embargo, esto devolverá la etiqueta <label>, que es el elemento de nivel más bajo que contiene el texto.
      // Para marcar el elemento, encontraremos el elemento <input> correspondiente a esta <label>
      // al recorrer el DOM hasta el elemento padre. A partir de ahí, podemos `find`
      // el elemento <input> de la casilla de verificación secundaria y usar el comando `check` para marcarlo.
      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
  
      // Ahora que hemos marcado el botón, podemos asegurarnos de que el elemento de la lista esté marcado como completado.
      // Nuevamente, usaremos `contains` para encontrar el elemento <label> y luego usaremos el comando `parents`
      // para recorrer múltiples niveles del DOM hasta encontrar el elemento <li> correspondiente.
      // Una vez que obtengamos ese elemento, podemos afirmar que tiene la clase 'completed'.
      cy.contains('Pay electric bill')
        .parents('li')
        .should('have.class', 'completed')
    })
  
    context('con una tarea marcada', () => {
      beforeEach(() => {
        // Tomaremos el comando que usamos anteriormente para marcar un elemento
        // Dado que queremos realizar varias pruebas que comienzan con la marcación
        // de un elemento, lo colocamos en el gancho beforeEach
        // para que se ejecute al comienzo de cada prueba.
        cy.contains('Pay electric bill')
          .parent()
          .find('input[type=checkbox]')
          .check()
      })
  
      it('puede filtrar tareas no completadas', () => {
        // Haremos clic en el botón "Activo" para
        // mostrar solo los elementos incompletos
        cy.contains('Active').click()
  
        // Después de filtrar, podemos afirmar que solo hay uno
        // elemento incompleto en la lista.
        cy.get('.todo-list li')
          .should('have.length', 1)
          .first()
          .should('have.text', 'Walk the dog')
  
        // Por si acaso, también afirmemos que la tarea que marcamos
        // no existe en la página.
        cy.contains('Pay electric bill').should('not.exist')
      })
  
      it('puede filtrar tareas completadas', () => {
        // Podemos realizar pasos similares a la prueba anterior para asegurarnos
        // de que solo se muestren tareas completadas
        cy.contains('Completed').click()
  
        cy.get('.todo-list li')
          .should('have.length', 1)
          .first()
          .should('have.text', 'Pay electric bill')
  
        cy.contains('Walk the dog').should('not.exist')
      })
  
      it('puede borrar todas las tareas completadas', () => {
        // Primero, hagamos clic en el botón "Borrar completado"
        // `contains` en realidad sirve para dos propósitos aquí.
        // Primero, asegura que el botón exista en el DOM.
        // Este botón solo aparece cuando al menos una tarea está marcada,
        // por lo que este comando verifica implícitamente que existe.
        // En segundo lugar, selecciona el botón para que podamos hacer clic en él.
        cy.contains('Clear completed').click()
  
        // Luego asegurémonos de que solo haya un elemento
        // en la lista y que nuestro elemento no exista
        cy.get('.todo-list li')
          .should('have.length', 1)
          .should('not.have.text', 'Pay electric bill')
  
        // Finalmente, asegurémonos de que el botón de borrar ya no exista.
        cy.contains('Clear completed').should('not.exist')
      })
    })
  })
