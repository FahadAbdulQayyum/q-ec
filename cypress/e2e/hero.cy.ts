describe('Hero Component', () => {
    it('renders correctly and navigates on button click', () => {
      const baseUrl = Cypress.config('baseUrl') || 'http://localhost:3000'; // Ensure a valid URL
      // Visit the homepage where the Hero component is displayed
      cy.visit(baseUrl);
  
      // Verify the title is present
      cy.get('[data-testid="hero-title"]').should('contain.text', 'Welcome to Our Store');
  
      // Verify the button exists
      cy.get('[data-testid="hero-button"]').should('be.visible');
  
      // Intercept the navigation to "/Location"
      cy.intercept('GET', '/Location').as('navigateToLocation');
  
      // Click the button
      cy.get('[data-testid="hero-button"]').click();
  
      // Wait for the navigation to complete
      cy.wait('@navigateToLocation');
  
      // Verify the URL has changed to "/Location"
      cy.url().should('include', '/Location');
    });
  });