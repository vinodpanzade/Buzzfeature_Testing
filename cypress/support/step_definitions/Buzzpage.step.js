import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../Pages/LoginPage";
import Buzzpage from "../../Pages/Buzzpage";
const loginPage=new LoginPage();
const buzzpage =new Buzzpage();


Given("user is on the login page",()=>{
    loginPage.visit();

})

When("user enters valid login credentials",()=>{
    loginPage.login("Admin","admin123")
})

Then("user should see the Buzz Newsfeed page",()=>{
    buzzpage.buzzfeature();
})



