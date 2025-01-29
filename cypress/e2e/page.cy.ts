describe('Home Page', () => {
    it('should render all the main components of the page', () => {
      // Visit the home page
      const baseUrl = Cypress.config('baseUrl') || 'http://localhost:3000'; // Ensure a valid URL
      cy.visit(baseUrl);
  
      // Check if BendatApp is rendered
      cy.contains('BendatApp Component Text').should('exist'); // Replace with unique text or selector from BendatApp.
  
      // Check if Hero is rendered
      cy.contains('Hero Component Text').should('exist'); // Replace with unique text or selector from Hero.
  
      // Check if FirstLook is rendered
      cy.contains('FirstLook Component Text').should('exist'); // Replace with unique text or selector from FirstLook.
  
      // Check if FlashSale is rendered
      cy.contains('FlashSale Component Text').should('exist'); // Replace with unique text or selector from FlashSale.
  
      // Check if Featured is rendered
      cy.contains('Featured Component Text').should('exist'); // Replace with unique text or selector from Featured.
  
      // Continue for the other components...
    });
  });
  