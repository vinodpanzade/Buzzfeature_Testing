import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../Pages/LoginPage";
const loginPage=new LoginPage();


Given("User will go on Login Page",()=>{
    loginPage.visit()
})


When("user will enter login cred",()=>{
    loginPage.login("Admin","admin123")
})


Then("Verifying all features which is present",()=>{


    const Feature=["Admin","PIM","Leave","Time","Recruitment","My Info","Dashboard","Directory","Claim","Buzz"]
    const pageheading=["User Management","PIM","Leave","Time","Recruitment","PIM","Dashboard","Directory","Claim","Buzz"]

    Feature.forEach((data,index)=>{

        // cy.contains(data).should("exist").click()
        // cy.contains(pageheading[index]).should("exist")
        cy.get("span").contains(data).click()
        cy.get("h6").contains(pageheading[index])
    })

})


