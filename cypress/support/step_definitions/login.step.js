import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../Pages/LoginPage"

const loginPage = new LoginPage();

Given("user is on login page", () => {
  loginPage.visit();
});

When("user enters valid credentials", () => {
  loginPage.login("Admin", "admin123");
});

Then("dashboard should be visible", () => {
  cy.contains("Dashboard").should("exist");
});
