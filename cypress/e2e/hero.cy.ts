describe("Hero Component", () => {
  beforeEach(() => {
    const baseUrl = Cypress.config('baseUrl') || 'http://localhost:3000'; // Ensure a valid URL
    cy.visit(baseUrl);
    });

  it("should display the hero image", () => {
    cy.get("img[alt='Hero Image']").should("exist");
  });

  it("should display hero title and description", () => {
    cy.contains("Welcome to Our Store").should("exist");
    cy.contains("Explore the latest collection of Bendat Fashion").should(
      "exist"
    );
  });

  it("should display the Book Now button", () => {
    cy.contains("Book Now").should("exist");
  });

  it("should navigate to the Location page when clicking Book Now", () => {
    cy.contains("Book Now").click();
    cy.url().should("include", "/Location");
  });
});
