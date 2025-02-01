describe("UpperBanner Component", () => {
    beforeEach(() => {
        const baseUrl = Cypress.config('baseUrl') || 'http://localhost:3000'; // Ensure a valid URL
        cy.visit(baseUrl);
    });
  
    it("should display default navigation links", () => {
      cy.contains("Find a Store").should("exist");
      cy.contains("Help").should("exist");
    });
  
    it("should display Sign In and Join Us when user is not logged in", () => {
      cy.contains("Join Us").should("exist");
      cy.contains("Sign In").should("exist");
    });
  
    it("should display welcome message when user is logged in", () => {
      const userInfo = {
        firstname: "John",
        lastname: "Doe",
        email: "john@example.com",
      };
  
      localStorage.setItem("userInfo", JSON.stringify(userInfo)); // Mock login
      cy.reload(); // Reload to trigger useEffect
  
      cy.contains(`Welcome, ${userInfo.firstname}!`).should("exist");
    });
  
    it("should redirect user based on login state", () => {
      cy.url().should("not.include", "/Sign/In");
  
      localStorage.removeItem("userInfo"); // Simulate logged-out state
      cy.reload();
  
      cy.url().should("include", "/Sign/In");
    });
  
    it("should display the logout button when user is logged in", () => {
      const userInfo = {
        firstname: "Jane",
        lastname: "Doe",
        email: "jane@example.com",
      };
  
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      cy.reload();
  
      cy.get("svg").should("exist"); // Check for logout icon
    });
  });
  