describe('Homepage', () => {
    it('should load the homepage', () => {
        const baseUrl = Cypress.config('baseUrl') || 'http://localhost:3000'; // Ensure a valid URL
        // Visit the homepage where the Home component is displayed
        cy.visit(baseUrl);
        cy.contains('Welcome to Bendat!');
    });
});
