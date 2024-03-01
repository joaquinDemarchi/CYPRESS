describe('Interactuando con los elementos',()=>{let texto
	Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

	it('Click',()=>{cy.visit('/buttons')
	cy.get('button').eq(3).click()
	cy.get('#dynamicClickMessage').should('be.visible').and('contain','You have done a dynamic click')})

	it('Double Click',()=>{cy.visit('/buttons')
	cy.get('#doubleClickBtn').dblclick()
	cy.get('#doubleClickMessage').should('be.visible').and('contain','You have done a double click')})

	it('Right Click',()=>{cy.visit('/buttons')
	cy.get('#rightClickBtn').rightclick()
	cy.get('#rightClickMessage').should('be.visible').and('contain','You have done a right click')})

	it('Force Click',()=>{cy.visit('/dynamic-properties')
	cy.get('#enableAfter').click({timeout:0,force:true})})

	it('Click por posicion',()=>{cy.visit('/buttons')
	cy.get('button').eq(3).parent().parent().click('topRight')
	cy.get('sbutton').eq(3).parent().parent().click('bottomLeft')
	cy.get('button').eq(3).parent().parent().click(5,60)})

	it('Multiple Click',()=>{cy.visit('/buttons')
	cy.get('.btn.btn-primary').click({multiple:true})})

	it('Click con teclas alternativas',()=>{cy.visit('/buttons')
	cy.get('button').eq(3).click({shiftKey:true,altKey:true,ctrlKey:true,metaKey:true,})})
	
	it('Inputs type text',()=>{cy.visit('/automation-practice-form')
	cy.get('#firstName').type('Javier')
	cy.get('#lastName').type('Fuentes')
	cy.get('#firstName').type('Javier')
	cy.get('#firstName').type('{selectAll}{backspace}')
	cy.get('#firstName').type('Otro nombre')
	cy.get('#firstName').clear()
	cy.get('#firstName').type('Otro nombre{enter}')})

	it.only('Checkboxes y radio botnones ',()=>{cy.visit('/automation-practice-form')
	cy.get("label[for='gender-radio-1']").click()
	cy.get("label[for='hobbies-checkbox-1']").click()})

	it('Extrayendo informacion',function(){cy.visit('/automation-practice-form')
	cy.get('#firstName').as('nombre')
	cy.get('@nombre').type('Javier')
	cy.get('@nombre').then(($nombre)=>{texto=$nombre.val()
	expect(texto).to.equal('Javier')})
	cy.get('@nombre').invoke('val').should('equal','Javier')
	cy.get('@nombre').invoke('val').as('nombreGlobal')})

	it('pasando informacion entre its',function(){cy.get('#lastName').type(texto)
	cy.get('#lastName').type(this.nombreGlobal)})

	it('Interactuando con dropdowns(select)',()=>{cy.visit('https://itera-qa.azurewebsites.net/home/automation')
	cy.get('.custom-select').select(10)
	cy.get('.custom-select').select('3').should('have.value','3')
	cy.get('.custom-select').select('Greece').should('have.value','4')})

	it('Interactuando con dropdowns(select) dinamico',()=>{cy.visit('https://react-select.com/home')
	cy.get('#react-select-6-input').type(' ')
	cy.get('#react-select-6-listbox').children().children().each(($el,index,$list)=>{if($el.text()==='Red'){$el.on('click')}})
	cy.get('#react-select-6-option-3').click()})

	it('Interactuando con tablas',()=>{cy.visit('https://www.w3schools.com/html/html_tables.asp')
	cy.get('#customers').find('th').each(($el,index,$list)=>{cy.log($el.text())})
	cy.get('#customers').find('th').first().invoke('text').should('equal','Company')
	cy.get('#customers').find('th').eq(1).invoke('text').should('equal','Contact')
	cy.get('#customers').find('th').eq(2).invoke('text').should('equal','Country')
	cy.get('#customers').find('tr').should('have.length',7)
	cy.get('#customers').find('tr').eq(1).find('td').eq(1).invoke('text').should('equal','Maria Anders')
	cy.get('#customers').find('tr').eq(1).find('td').eq(1).then(($el)=>{const texto=$el.text()
	expect(texto).to.equal('Maria Anders')
	cy.wrap($el).should('contain','Maria Anders')})})

	it('Interactuando con data picker',()=>{cy.visit('https://material.angular.io/components/datepicker/overview')
	cy.get('datepicker-overview-example').find('input').eq(0).type('12/02/2005{enter}')
	cy.get('datepicker-overview-example').find('svg').click()})

	it('Interactuando con modals',()=>{cy.visit('/modal-dialogs')
	cy.get('#showSmallModal').click()
	cy.get('#closeSmallModal').click()})

	it('Interactuando con popups',()=>{cy.visit('/alerts')
	const stub=cy.stub()
	cy.on('window:confirm',stub)
	cy.get('#confirmButton').click().then(()=>{expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')})
	cy.contains('You selected Ok').should('exist')})

	it('Interactuando con tooltips',()=>{cy.visit('/tool-tips')
	cy.get('#toolTipButton').trigger('mouseover')
	cy.contains('You hovered over the Button').should('exist')
	cy.get('#toolTipButton').trigger('mouseout')
	cy.contains('You hovered over the Button').should('not.exist')})

	it('Interactuando con drag and drops',()=>{cy.visit('/dragabble')
	cy.get('#dragBox').trigger('mousedown',{which:1,pageX:600,pageY:100}).trigger('mousemove',{which:1,pageX:600,pageY:600}).trigger('mouseup')})})