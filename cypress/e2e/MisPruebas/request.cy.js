
//**SACAR URL BASE**/


//HEADERS


describe('Probando headers', () => {

    it('Debe de validar el header y el content type', () => {
        cy.visit("http://localhost:3000")

        cy.request('datos')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')
    })
})

//STATUS

describe('Probando statuses', () => {

    it('Debe de validar el status code exitoso', () => {
      cy.visit("http://localhost:3000")
        cy.request('datos') //puede ir asi o "/datos"
            .its('status')
            .should('eq', 200)
    })

    it('Debe de validar el status code fallido', () => {
        //Mostrar que esto fallara porque no existe el endpoint pero fallara antes de hacer la asercion
        // cy.request('/datos/4')
        //     .its('status')
        //     .should('eq', 404)

        //Debemos de pasar la propiedad failOnStatusCode
        cy.request({
              url: 'http://localhost:3000/nsdjnjhsdfh', 
              failOnStatusCode: false })
            .its('status')
            .should('eq', 404)
    })
})

//BODY

describe('Probando body', () => {

    it('Debe de validar el header y el content type', () => {
        cy.visit("http://localhost:3000")

        cy.request('datos/1')
            .its('body')
            .its('first_name')
            .should('be.equal', 'Dell')

        cy.request('datos/1').then((response) => {
            expect(response.status).to.be.equal(200)
            expect(response.headers['content-type']).to.be.equal('application/json; charset=utf-8')
            expect(response.body.first_name).to.be.equal('Dell')
            expect(response.body.last_name).to.be.equal('Smouten')
        })
    })
})

//ERRORES

describe("Probando errores", () => {
    it("Debe de validar el status code fallido y el mensaje de error", () => {
      //Debemos de pasar la propiedad failOnStatusCode si no cypress no lo correra
      cy.log("se esta usando propiedad failOnStatusCode")
      cy.pause("se esta usando propiedad failOnStatusCode") //podemos pausar la ejecucion para ver 
      
      cy.request({
        url: "https://pokeapi.co/api/v2/aaa",
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.be.eq("Not Found");
      });
    });
  
    it("Debe de validar el status code fallido y el mensaje de error de rick and morty", () => {
      //Debemos de pasar la propiedad failOnStatusCode
      cy.request({
        url: "https://rickandmortyapi.com/api/location/3999999",
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.have.property("error", "Location not found");
      });
    });
  });

//CREANDO UN NUEVO ELEMENTO

describe("Probando requests", () => {
  it("Debe de crear un empleado", function () {
    // DO a post request
    cy.request({
      url: "employees",
      method: "POST",
      body: {
        first_name: "Prueba",
        last_name: "Desarrollador",
        email: "aa@cc.com",
      },
			//CAPTURA la respuesta
    }).then((response) => {
			//verifica su estado
      expect(response.status).to.eq(201);
			//verifica que exista la prop id
      expect(response.body).to.have.property("id");
      //guardar el id del empleado
      const id = response.body.id;
			//al id le asigna un alias
      cy.wrap(id).as("id");
    });
  });
  it("Debemos de validar que se haya creado en la base de datos", () => {
    cy.request("GET", "employees").then((response) => {
      //validate that the last record was created
      expect(response.body[response.body.length - 1].first_name).to.eq(
        "Prueba"
      );
    });
  });

  it("Debemos de modificar al empleado con un nuevo correo", function () {
    // primer manera de hacerlo
    // cy.request("GET", "employees").then((response) => {
    //   //validate that the last record was created
    //   const lastEmployeeId = response.body[response.body.length - 1].id;
    //   cy.request({
    //     url: `employees/${lastEmployeeId}`,
    //     method: "PUT",
    //     body: {
    //       first_name: "Pepito",
    //       last_name: "Desarrollador",
    //       email: "nuevo@correo.com",
    //     },
    //   }).then((response) => {
    //     cy.log(response);
    //     expect(response.status).to.eq(200);
    //     expect(response.body).to.have.property("id");
    //   });
    // });
    cy.request({
			//llama el id del empleado
      url: `employees/${this.id}`,
      method: "PUT",
      body: {
        first_name: "Pepito 3",
        last_name: "Desarrollador",
        email: "nuevo@correo.com",
      },
    }).then((response) => {
      cy.log(response);
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
    });
  });

  it("Debemos de eliminar el registro creado", function () {
    cy.request({
			//llama el id del empleado
      url: `employees/${this.id}`,
      method: "DELETE",
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});