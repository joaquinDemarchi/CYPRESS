
const { defineConfig } = require("cypress");


module.exports = defineConfig({
  //dimensiones del viewport
  viewportWidth: 1000,
  viewportHeight: 660,

  // Donde poner plugging e2e>setupNodeEvents>"plugins"
  e2e: {
    // baseUrl:"https://demoqa.com/",  
    
    
    setupNodeEvents(on, config) {
    // dentro de esta funcion van los pluggins 
        
      },

    excludeSpecPattern: [
        "cypress/e2e/1-getting-started/*.js",
        "cypress/e2e/2-advanced-examples/*.js"
    ],
    testIsolation: true
  },

});

