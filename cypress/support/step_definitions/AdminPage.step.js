import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../Pages/LoginPage";

import AdminPage from "../../Pages/AdminPage";

const loginPage = new LoginPage();
const adminPage = new AdminPage();

Given("user is on Login page now", () => {
  loginPage.visit();
});

When("user will enter valid username password", () => {
  loginPage.login("Admin", "admin123");
});

Then("Test the Admin Page", () => {
    
  adminPage.Userdata();
  adminPage.adminpagetesting();
});
