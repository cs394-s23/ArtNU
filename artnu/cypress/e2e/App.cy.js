/* globals cy */
    
describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('opens with sign in page', () => {
        cy.visit ('/');
        cy.get('[data-cy=sign-in]').should('contain', 'Sign In');
      });
  
  });