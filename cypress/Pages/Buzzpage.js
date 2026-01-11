class Buzzpage {
  buzzfeature() {
    // cy.get("span").contains("Buzz").click()
    // cy.get("h6").contains("Buzz")
    cy.contains("Buzz").should("exist").click();
    cy.get("h6").contains("Buzz");
    cy.contains("Buzz Newsfeed").should("exist");

    //check the correct url of profile photo
    cy.get(".orangehrm-buzz-profile-image img")
      .should("have.attr", "src")
      .and("include", "/viewPhoto/");

    //cy.get(".oxd-buzz-post-input").should("exist").type("hello this is my text")
    // cy.screenshot("ss after text entered")
    //cy.get(".oxd-buzz-post-slot button").click()
    // cy.screenshot("pop up ss after post ")
    //cy.get(".oxd-glass-button").contains("Share Photos").click()
    //cy.get('input[type="file"]').attachFile("postdata.JPG", { force: true })
    //cy.get(".orangehrm-photo-upload-area>i").click()
    // cy.get('input[type="file"]', { timeout: 10000 })
    // .attachFile("postdata.JPG", { force: true })

    //cy.screenshot("uploding the photo")

    //get the   recent post
    cy.get("button").contains("Most Recent Posts").should("exist");

    //verifying all buttons content
    const contentarr = [
      "Most Recent Posts",
      "Most Liked Posts",
      "Most Commented Posts",
    ];

    contentarr.forEach((content) => {
      cy.get("button").contains(content).should("exist");
    });

    //here we are counting the cards content after clikcing on button
    cy.get("button").contains("Most Recent Posts").should("exist").click();

    cy.get(".orangehrm-buzz-post").should("have.length.greaterThan", 0);

    cy.get(".orangehrm-buzz-post").each(($post, index) => {
      cy.wrap($post).within(() => {
        // profile image
        cy.get(".orangehrm-buzz-profile-image img").should("exist");
        cy.log("profile image")

        // user name / header text
        cy.get(".orangehrm-buzz-post-header-text").should("exist");
        cy.log("par checks")

        //icon is exist or not
        cy.get(".bi-three-dots").should("exist");
         cy.log("three dots check")

      });
    });

    cy.get(".oxd-sheet.orangehrm-buzz").each(($card) => {
      cy.wrap($card).within(() => {
        // header
        //cy.log("Header checking")
        // cy.get(".orangehrm-buzz-post").should("exist")

        //body
        cy.log("body checking");
        cy.get(".orangehrm-buzz-post-body").should("exist");

        // footer
        cy.get(".orangehrm-buzz-post-footer").within(() => {
          cy.get(".orangehrm-heart-icon").should("exist");
          cy.log("heart icon ");
          cy.get(".bi-chat-text-fill").should("exist");
          cy.log("text fill icon");
          cy.get(".bi-share-fill").should("exist");
          cy.log("share icon");
        });
      });
    });

    cy.get("button").contains("Most Liked Posts").should("exist").click();
    cy.get(".oxd-sheet.orangehrm-buzz").should("exist");

    cy.get("button").contains("Most Commented Posts").should("exist").click();
    cy.get(".oxd-sheet.orangehrm-buzz").should("exist");


    //  cy.get(".orangehrm-buzz-post-header-details>.orangehrm-buzz-profile-image>img").should("have.attr","src","../pim/viewPhoto/empNumber/7") this is optional bez icon would of any person na how we can verify exact link for src

    //here we are verifying the image is present or not or icon
    // cy.get(
    //   ".orangehrm-buzz-post-header-details>.orangehrm-buzz-profile-image>img"
    // ).should("exist");

    //     cy.get(".orangehrm-buzz-post-header-text>.oxd-text").should("exist");
    //    // cy.get(".oxd-icon-button>.bi-three-dots").should("exist");

    //     //icon button
    //     // 1. Click the 3 dots
    //     cy.get(".bi-three-dots").first().click();

    //     // 2. Assert dropdown is visible
    //     cy.get(".oxd-dropdown-menu").should("be.visible");

    // 3. Validate options inside dropdown
    // const listcontent = ["Delete Post", "Edit Post"];

    // cy.get(".oxd-dropdown-menu").within(() => {
    //   listcontent.forEach((data) => {
    //     cy.contains("p", data).should("be.visible");
    //   });
    // });

    //for footer symbol
    // cy.get(".orangehrm-heart-icon").should("exist")
    // cy.get(".oxd-icon.bi-chat-text-fill").should("exist")
    // cy.get(".oxd-icon.bi-share-fill").should("exist")
  }
}

export default Buzzpage;
