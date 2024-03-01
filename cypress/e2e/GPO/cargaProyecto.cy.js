describe('crear proyecto', function () {

    it('login', function () {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        //abrira una nueva pestaña pero no dentro de cypress
        cy.visit('https://devapp8.chaco.gob.ar/gpotestecom/servlet/com.gpo.login')
        cy.get('#vUSERNAME').type(99000000019)
        cy.wait(1000)
        cy.get('#vUSERPASSWORD').type(123)
        
        cy.get('#BTNENTER').click()
        cy.wait(3000)

        /*
        cy.get('#sidebar_ul > :nth-child(2) > :nth-child(1) > .menu-text').click()
        cy.wait(3000),m,mnm,n
        cy.get('[style="display: block;"] > :nth-child(4)').click()
        cy.wait(3000)
        cy.get('#BTNINSERT').click()
        cy.wait(5000)
        cy.get('#gxp0_ifrm')
        */

        cy.visit('https://devapp8.chaco.gob.ar/gpotestecom/servlet/com.gpo.wpaltaproyectorapido?UAfQZGq60VE0qICsg_Io11rnsWkEAIo5M2H-nyRIqSZWpOJwYGKDou882sdv1GQE')
        cy.wait(2000)

        cy.get('#PROYECTO_PROYDSC').type('proyecto de prueba')
        cy.get('#COMBO_PROYECTO_PROIDContainer_btnGroupDrop ').click()
        cy.get(':nth-child(5) > .ExtendedComboLevel0 > .OptionLabel').click()
        cy.wait(1000)

        cy.get('#COMBO_PROYECTO_PROYORIGENDEMANDAIDContainer_btnGroupDrop').click()
        cy.wait(1000)
        
        //Seleccion de organismo 
        cy.get('#COMBO_PROYECTO_PROYORIGENDEMANDAIDContainer > .dropdown-menu > :nth-child(2) > .FilterOptions > ul > :nth-child(3) > .ExtendedComboLevel0').click()
        cy.wait(1000)

        cy.get('#COMBO_SUBTEMATICAIDCOMPUESTOContainer_btnGroupDrop').click()
        cy.get(':nth-child(4) > .ExtendedComboLevel1 > .OptionLabel').click()
        cy.wait(1000)

        cy.get('#COMBO_PROYECTO_TIPOINTERVENCIONIDContainer_btnGroupDrop').click()
        cy.get('#COMBO_PROYECTO_TIPOINTERVENCIONIDContainer > .dropdown-menu > :nth-child(2) > .FilterOptions > ul > :nth-child(3) > .ExtendedComboLevel1').click()
        cy.wait(1000)

        cy.get('#COMBO_PROYECTO_PROYMODAMEDIDContainer_btnGroupDrop').click()
        cy.get('#COMBO_PROYECTO_PROYMODAMEDIDContainer > .dropdown-menu > :nth-child(2) > .FilterOptions > ul > :nth-child(1) > .ExtendedComboLevel0').click()
        cy.wait(1000)

        //tipo
        cy.get('#COMBO_PROYECTO_PROYTIPOUBICIDContainer_btnGroupDrop').click()
        cy.wait(1000)
        //concentrada
        cy.get('#COMBO_PROYECTO_PROYTIPOUBICIDContainer > .dropdown-menu > :nth-child(2) > .FilterOptions > ul > :nth-child(2) > .ExtendedComboLevel0').click()
        cy.wait(1000)
        
        cy.get('#PROYECTO_PROYPPTOFECHA').type('8/8/23')
        cy.wait(1000)

        cy.get('#COMBO_PROYECTO_PROYALCAIDContainer_btnGroupDrop').click()
        cy.get('#COMBO_PROYECTO_PROYALCAIDContainer > .dropdown-menu > :nth-child(2) > .FilterOptions > ul > :nth-child(5) > .ExtendedComboLevel0').click()
        cy.wait(1000)

        cy.get('#COMBO_PROYLOCIDContainer_btnGroupDrop').click().wait(500)
        cy.get('#COMBO_PROYLOCIDContainer > .dropdown-menu > :nth-child(2) > .FilterOptions > ul > :nth-child(2) > .ExtendedComboLevel0').click()

        cy.get('#PROYECTO_PROYPLAZO').click()
        cy.wait(1000)
        cy.get('#PROYECTO_PROYPLAZO').type('90')

        cy.get('#PROYECTO_PROYPLAZOUMID').click()
        cy.wait(1000)
        cy.get('#PROYECTO_PROYPLAZOUMID').type('m')

        
        // cy.get('#PROYECTO_PROYPLAZOUMID').type('M')

        // cy.get('#BTNBTNVERIFICAR').click()

        // cy.get('#BTNBTNVERIFICAR')

        // cy.get('#PanelBody_DVPANEL_TABLEATTRIBUTESContainer').type(2018)

    });

});