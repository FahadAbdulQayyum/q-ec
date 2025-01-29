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
  














// describe('Hero Component Tests', () => {
//     beforeEach(() => {
//       // Visit the page containing the Hero component
//       cy.visit('/');
//     });
  
//     it('renders the Hero component with text and button', () => {
//       // Check if the title is rendered
//       cy.contains('Welcome to Our Store').should('exist');
  
//       // Check if the description is rendered
//       cy.contains('Explore the latest collection of Bendat Fashion').should('exist');
  
//       // Check if the button is visible
//       cy.get('button').contains('Book Now').should('be.visible');
//     });
  
//     it('navigates to the /Location page when the "Book Now" button is clicked', () => {
//       // Intercept the route navigation to verify it
//       cy.intercept('GET', '/Location').as('locationPage');
  
//       // Click the "Book Now" button
//       cy.get('button').contains('Book Now').click();
  
//       // Wait for the route to complete and check if it was called
//       cy.wait('@locationPage');
  
//       // Assert the URL to ensure the navigation happened
//       cy.url().should('include', '/Location');
//     });
  
//     it('displays the loading spinner while navigating', () => {
//       // Override the "router.push" method to simulate a delay
//       cy.window().then((win) => {
//         cy.stub(win, 'router', {
//           push: cy.stub().callsFake(() => new Promise((resolve) => setTimeout(resolve, 1000))),
//         });
//       });
  
//       // Click the button
//       cy.get('button').contains('Book Now').click();
  
//       // Check if the loading spinner is visible
//       cy.get('.loader').should('be.visible');
//     });
//   });
  









// // // import { Hero } from '@/components/Hero';
// // // describe('<Hero />', () => {
// // //     it('should render and display expected content', () => {
// // //       // Mount the React component for the About page
// // //       cy.mount(<Hero />)
   
// // //       // The new page should contain an h1 with "About page"
// // //       cy.contains('Welcome to Our Store').should('be.visible');

   
// // //       // Validate that a link with the expected URL is present
// // //       // *Following* the link is better suited to an E2E test
// // //       cy.get('a[href="/"]').should('be.visible')
// // //     })
// // //   })



// // describe('Hero Component', () => {
// //     beforeEach(() => {
// //       // Visit the homepage where the Hero component is rendered
// //       cy.visit('http://localhost:3000/');
// //     });
  
// //     it('should display the hero image', () => {
// //       // Check if the image with the correct src is rendered
// //       cy.get('img[alt="Hero Image"]').should('be.visible');
// //     });
  
// //     it('should display the headline and description', () => {
// //       // Verify the headline text
// //       cy.contains('Welcome to Our Store').should('be.visible');
  
// //       // Verify the description text
// //       cy.contains('Explore the latest collection of Bendat Fashion').should('be.visible');
// //     });
  
// //     it('should navigate to /Location when "Book Now" is clicked', () => {
// //       // Click the "Book Now" button
// //       cy.contains('Book Now').click();
  
// //       // Verify that the URL has changed to /Location
// //       cy.url().should('include', '/Location');
// //     });
// //   });
  