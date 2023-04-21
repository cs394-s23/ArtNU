/* globals cy */
    
describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('opens with sign in page', () => {
        cy.visit ('/');
        cy.get('[data-cy=sign-in]').should('contain', 'Sign In');
    });

    it('sends order', () => {
        cy.visit ('/');
        cy.get('[data-cy=buy-btn]').first().click();
        cy.get('[data-cy=send-btn]').click();
        cy.get('[data-cy=order-complete-msg]').should('contain', 'Order sent.')
    });
  
  });