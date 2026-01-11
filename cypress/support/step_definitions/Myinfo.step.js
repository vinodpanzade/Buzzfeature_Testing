import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../Pages/LoginPage";
import Myinfo from "../../Pages/Myinfo.page"

const loginPage=new LoginPage();
const myinfo=new Myinfo();


Given("user is on sign in page",()=>{
    loginPage.visit();

})

When("user enters valid sign in cred",()=>{
    loginPage.login("Admin","admin123")
})

Then("user myifo should be visible",()=>{
    myinfo.myinfofeature();
})

