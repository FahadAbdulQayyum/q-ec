describe("Navbar Component", () => {
    beforeEach(() => {
        const baseUrl = Cypress.config('baseUrl') || 'http://localhost:3000'; // Ensure a valid URL
        cy.visit(baseUrl);
    });

    it("should display the logo", () => {
        cy.get("img[alt='bendat Logo']").should("exist");
    });

    it("should toggle the menu on mobile", () => {
        cy.get("button[aria-label='Toggle Menu']").click();
        cy.get("nav").should("be.visible");

        cy.get("button[aria-label='Toggle Menu']").click();
        cy.get("nav").should("not.be.visible");
    });

    it("should display navigation links", () => {
        const navLinks = [
            "New & Featured",
            "Men",
            "Women",
            "Kids",
            "Sale",
            "SNKRS",
        ];
        navLinks.forEach((link) => {
            cy.contains(link).should("exist");
        });
    });

    it("should navigate to the Sale page when clicking the Sale link", () => {
        cy.contains("Sale").click();
        cy.url().should("include", "/Products");
    });

    it("should search when typing in the search bar", () => {
        cy.get("input[placeholder='Search']").type("Nike");
        cy.wait(500); // Simulate debounce delay
    });

    it("should display the heart (favorites) and cart icons", () => {
        cy.get(".heart").should("exist");
        cy.get(".cart").should("exist");
    });
});
