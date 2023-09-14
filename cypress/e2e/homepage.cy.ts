// https://on.cypress.io/api

describe('Page Loads', () => {
    before(() => {
        cy.visit('/')
    })

    it('Titles Exist', () => {
        let heading = cy.contains('.v-toolbar-title__placeholder', 'Movie Store')
        heading.should('be.visible')
        cy.title().should('include', 'Movie App')
    })

    it('Inputs Exist', () => {
       cy.get('[aria-describedby="input-6-messages"]')
        cy.get('[aria-owns="v-menu-10"]').should('be.visible')
        cy.get('[aria-owns="v-menu-13"]').should('be.visible')
    })

    it("Cards are Visible", () => {
        cy.get('.v-card').should('be.visible')
        cy.get(".v-card-title").should('be.visible')
    })


    it('Header Exist with a Button', () => {
        let header = cy.get('#app').find('header')
        header.should('be.visible')
        header.get("button")
    })

    it('Footer Exist with Buttons', () => {
        let footer = cy.get('#app').find('footer')
        footer.should('be.visible')
        footer.get("button")
    })
})
