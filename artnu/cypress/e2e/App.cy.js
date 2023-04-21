/* globals cy */
    
describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });

    it ('opens with sign in page', () => {
        cy.visit ('/');
        cy.get('[data-cy=sign-in]').should('contain', 'Sign In');
    });

    it('shows homepage when click home button', () => {
        cy.visit ('http://localhost:3000/ArtNU/explore');
        cy.get('[data-cy=explore-btn').click();
        cy.get('[data-cy=page-title]').should('contain' ,'Explore');
    });
  
  });