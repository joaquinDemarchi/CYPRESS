const minHs = 4;
const maxHs = 8;
const horas = Math.floor(Math.random() * (maxHs - minHs + 1)) + minHs;
console.log(horas);

const minDias = 4;
const maxDias = 6;
const dias = Math.floor(Math.random() * (maxDias - minDias + 1)) + minDias;
console.log(dias);

const minSal = 100000;
const maxSal = 400000;
const salario = Math.floor(Math.random() * (maxSal - minSal + 1)) + minSal;
console.log(salario);

const minGast = 40;
const maxGast = 200000;
const gasto = Math.floor(Math.random() * (maxGast - minGast + 1)) + minGast;
console.log(gasto);

describe('dsfdsfssf', function(){
    it('preueba 1',()=>{
        cy.visit('http://127.0.0.1:5500/index.html')
        cy.wait(3020)
        
    
        cy.get('#horasXDia').type(horas)
        cy.get('#diasXSem').type(dias)
        cy.get('#salario').type(salario)
        cy.get('#gasto').type(gasto)

        cy.get('button').click()

        cy.wait(2000)

        cy.get('#resultado').contains('gasto')
    })
})