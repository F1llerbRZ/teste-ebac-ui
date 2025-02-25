/// <reference types="cypres"/>

describe('Funcionalidade = Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('thiagoteste@email.com.br')
        cy.get('#password').type('090385aB@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiagoteste (não é thiagoteste? Sair)')
    
    })
       
});