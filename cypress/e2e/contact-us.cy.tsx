describe("Contact Us Page", () => {
    beforeEach(() => {
      const baseUrl = Cypress.config('baseUrl') || 'http://localhost:3000'; // Ensure a valid URL
      // Visit the homepage where the Hero component is displayed
      cy.visit(baseUrl+"/ContactUs");
    });
  
    it("renders the heading correctly", () => {
      cy.get('[data-testid="contact-us-heading"]').should("exist").and("have.text", "Contact Uss");
    });
  
    it("renders the ContactUsComponent correctly", () => {
      cy.get('[data-testid="contact-us-page"]').should("exist");
    });
  });
  












// describe("Contact Us Page", () => {
//     beforeEach(() => {
//       // Visit the Contact Us page
//       cy.visit("/ContactUs");
//     });
  
//     it("renders the heading correctly", () => {
//       // Check if the heading exists with the correct text
//       cy.get('[data-testid="contact-us-heading"]').should("exist").and("have.text", "Contact Uss");
//     });
  
//     it("renders the ContactUsComponent correctly", () => {
//       // Check if the ContactUsComponent is rendered by testing any part of it
//       cy.get('[data-testid="contact-us-page"]').should("exist");
//       // Replace this selector with a testable part of the ContactUsComponent
//       cy.get('[data-testid="contact-us-page"] *').should("exist");
//     });
//   });
  

















// // describe('Contact Us Page', () => {
// //     beforeEach(() => {
// //         // Visit the Contact Us page
// //         cy.visit('/ContactUs');
// //     });

// //     it('renders the Contact Us page correctly', () => {
// //         // Check if the Contact Us page is loaded
// //         cy.get('[data-testid="contact-us-page"]').should('exist');

// //         // Check if the heading is rendered
// //         cy.get('[data-testid="contact-us-heading"]')
// //             .should('be.visible')
// //             .and('contain.text', 'Contact Uss');
// //     });

// //     it('renders the ContactUsComponent correctly', () => {
// //         // Check if the ContactUsComponent is rendered
// //         // Replace this selector with the appropriate test id from ContactUsComponent if needed
// //         cy.get('[data-testid="contact-us-component"]').should('exist');
// //     });
// // });
