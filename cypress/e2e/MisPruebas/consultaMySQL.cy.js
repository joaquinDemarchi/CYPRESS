describe('Haremos una conexión con MySQL', () => {
    it.only('Debe obtener los resultados de una consulta', () => {
      //en el task recibe el nombre del task y el parametro 
          //del mismo, en este caso un query estandar a una BDD mysql
          cy.task('queryDB', 'SELECT * FROM animales').then(
        (result) => {
          cy.log(result);
          //expect(result.length).to.equal(4);
        }
      );
    });
  });


//otras pruebas a base de datos
//completar con datos de variables reales 

/*describe("Pruebas a base de datos", () => {
    after(() => {
          //uso el task nuevamente esta vez para limpiar la base de datos
          //despues de cada prueba
      cy.task("queryDB", "DELETE FROM pruebas");
    });
  
    it("Inserto en la base de datos", function () {
      cy.task(
        "queryDb",
        "INSERT INTO pruebas ( nombre, apellidoMaterno,apellidoPaterno ) VALUES ( 'Javier', 'Fuentes' ,'Mora')"
      ).then((result) => {
        cy.log(result);
        expect(result.affectedRows).to.eq(1);
              //guardo el id con un wrap y un as
        cy.wrap(result.insertId).as("id");
      });
    });
  
    it("Select para comprobar que este lo de la prueba pasada", function () {
      cy.task("queryDb", `SELECT * FROM pruebas WHERE id= ${this.id}`).then(
        (result) => {
          cy.log(result);
          expect(result[0].nombre).to.eq("Javier");
          expect(result[0].apellidoMaterno).to.eq("Fuentes");
          expect(result[0].apellidoPaterno).to.eq("Mora");
        }
      );
    });
  
    it("Delete para borrar lo que se hizo en los test pasados", function () {
      cy.task("queryDb", `DELETE FROM pruebas WHERE id= ${this.id}`).then(
        (result) => {
          cy.log(result);
          expect(result.affectedRows).to.eq(1);
          expect(result.serverStatus).to.eq(2);
        }
      );
    });
  });*/