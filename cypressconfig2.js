
const { defineConfig } = require("cypress");
//funciones exportadas para conectar c/ BDD
const mysql = require('mysql');

//funcion para conectar base de datos
function queryTestDB(query) {
  //usamos la propiedad para crear una conexion
  //y le pasamos los parametros
    const connection = mysql.createConnection({
      //completar con datos reales
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'datos2',
    });
    //conectamos con la propiedad
    connection.connect();
  
  //devuelve una promesa
    return new Promise((resolve, reject) => {
    //usamos el metodo query 
      connection.query(query, (error, results) => {
        if (error) reject(error);
        else {
        //si todo sale bien se termina la conexion
        //para no dejar conex abiertas nuestra BDD
          connection.end();
        //Y devuelvo los resultados
          return resolve(results);
        }
      });
    });
  }

module.exports = defineConfig({
  //dimensiones del viewport
  viewportWidth: 1000,
  viewportHeight: 660,

  // Donde poner plugging e2e>setupNodeEvents>"plugins"
  e2e: {
    baseUrl:"https://demoqa.com/",
    setupNodeEvents(on, config) {
    // dentro de esta funcion van los pluggins 
        
        on('task',{
          //"log" es el nombre de la funcion 
          log(message){
            console.log('Mensaje del console log del task ' + message)
            return null
          } 
        })

        on('task', {
          //en este caso lo llamamos queryDB
          queryDB: (query) => {
            return queryTestDB(query);
          },
        });
      },

    excludeSpecPattern: [
        "cypress/e2e/1-getting-started/*.js",
        "cypress/e2e/2-advanced-examples/*.js"
    ],
    testIsolation: false
  },

});

