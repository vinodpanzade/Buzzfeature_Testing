import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../Pages/LoginPage";

const loginPage = new LoginPage();

Given("User is on Login page", () => {
  loginPage.visit();
});

When("User enters valid credential", () => {
  loginPage.login("Admin", "admin123");
});


Then("user menu options should be displayed and accessible", () => {
  cy.get(".oxd-userdropdown-tab").click();

  const arr = ["About", "Support", "Change Password", "Logout"];
  cy.get("ul.oxd-dropdown-menu > li > a")
    .should("have.length", arr.length)
    .each(($el, index) => {
      cy.wrap($el).should("contain.text", arr[index]);
      cy.screenshot(arr[index])
      // this is we can check element content href
      cy.wrap($el).should("have.attr", "href").and("not.be.empty");

      //this is we are verifying the link of url
      const url = $el.prop("href");
      cy.request(url).its("status").should("eq", 200);
    });

});

