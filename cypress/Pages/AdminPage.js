class AdminPage {
  // adminpagetesting() {
  //   cy.contains("Admin").should("exist").click();
  //   cy.contains("User Management").should("exist");
  //   cy.contains("System Users").should("exist");

  //   cy.contains("Username").should("exist");
  //   cy.get("input.oxd-input.oxd-input--active").eq(0).type("denny380");

  //   cy.contains("User Role").should("exist");
  //   // open dropdown
  //   cy.get("div.oxd-select-text").eq(0).click();
  //   // select value
  //   cy.contains(".oxd-select-option", "ESS").click();

  //   cy.contains("Employee Name").should("exist");
  //   cy.get("input[placeholder='Type for hints...']").type("Denny");

  //   cy.contains(".oxd-autocomplete-option", "Denny Glennis Wolff Towne Terry").click();

  //   cy.contains("Status").should("exist");
  //   cy.get("div.oxd-select-text").eq(1).click();
  //   cy.contains(".oxd-select-option", "Enabled").click();

  //   cy.get(".orangehrm-left-space").click()

  //   // verify the colm in tables
  //   cy.get(".oxd-table-header .oxd-table-row .oxd-table-th").then(($col) => {
  //     const colcount = $col.length;
  //     cy.wrap(colcount).should("eq", 6);
  //   });

  //   //verify the name of colm
  //   const headers = [
  //     "Username",
  //     "User Role",
  //     "Employee Name",
  //     "Status",
  //     "Actions",
  //   ];
  //   cy.get(".oxd-table-header .oxd-table-row .oxd-table-th").each(
  //     ($col, index) => {
  //       if (index > 0 && index < headers.length + 1) {
  //         cy.wrap($col).should("contain", headers[index - 1]);
  //       }
  //     }
  //   );

  //   const body = ["denny380", "ESS", "Denny Terry", "Enabled"];
  //   cy.get(".oxd-table-card .oxd-table-row .oxd-table-cell").each(
  //     ($cell, index) => {
  //       if (index > 0 && index < body.length + 1) {
  //         cy.wrap($cell).find("div").invoke("text").should("contain", body[index - 1]);
  //       }
  //     }
  //   );

  //   cy.get(".oxd-button--ghost").click()

  // }

  Userdata() {
    cy.contains("Admin").click();

    // verify the colm in tables
    cy.get(".oxd-table-header .oxd-table-row .oxd-table-th").then(($col) => {
      const colcount = $col.length;
      cy.wrap(colcount).should("eq", 6);
    });

    //verify the name of colm
    const headers = [
      "Username",
      "User Role",
      "Employee Name",
      "Status",
      "Actions",
    ];
    cy.get(".oxd-table-header .oxd-table-row .oxd-table-th").each(
      ($col, index) => {
        if (index > 0 && index < headers.length + 1) {
          cy.wrap($col).should("contain", headers[index - 1]);
        }
      }
    );
    const users = [];

    cy.get(".oxd-table-body .oxd-table-card")
      .each(($row) => {
        const user = {};

        cy.wrap($row)
          .find(".oxd-table-cell")
          .each(($cell, index) => {
            cy.wrap($cell)
              .invoke("text")
              .then((text) => {
                const value = text.trim();

                if (index === 1) user.username = value;
                if (index === 2) user.userRole = value;
                if (index === 3) user.employeeName = value;
                if (index === 4) user.status = value;
              });
          })
          .then(() => {
            cy.log(JSON.stringify(users));
            users.push(user);
          });
      })
      .then(() => {
        cy.wrap(users).as("usersData"); // ✅ STORE ONCE
      });
  }
  adminpagetesting() {
    // Navigate ONCE
    cy.contains("Admin").should("exist").click();
    cy.contains("User Management").should("exist");
    cy.contains("System Users").should("exist");

    cy.get("@usersData").then((users) => {
      cy.wrap(users).each((user) => {
        // Username
        cy.get("input.oxd-input.oxd-input--active")
          .eq(0)
          .clear()
          .type(user.username);

        // User Role
        cy.get("div.oxd-select-text").eq(0).click();
        cy.contains(".oxd-select-option", user.userRole).click();

        // Employee Name (autocomplete)
        cy.get("input[placeholder='Type for hints...']")
          .clear()
          .type(user.employeeName.split(" ")[0]);

        cy.get(".oxd-autocomplete-option").should("be.visible").first().click();

        // Status
        cy.get("div.oxd-select-text").eq(1).click();
        cy.contains(".oxd-select-option", user.status).click();

        // Search
        cy.get(".orangehrm-left-space").click();
        //cy.screenshot(user.username)

        cy.get(".oxd-table-card")//Gets ALL table rows (20 rows)
          .contains(".oxd-table-cell", user.username)//now its searcing this username is present inside this 20 rows or not 
          .should("exist");

        // Reset for next user
        cy.get(".oxd-button--ghost").click();
      });
    });
  }

  Table() {
    cy.contains("Admin").should("exist").click();
    cy.contains("User Management").should("exist");

    //Records found

    //number or coloumn
    cy.get(".oxd-table-header .oxd-table-row .oxd-table-th").then(($col) => {
      const colcount = $col.length;
      cy.log(colcount);
    });

    //number of rows
    cy.get(".oxd-table-body .oxd-table-card").then(($row) => {
      const rowcount = $row.length;
      cy.log(rowcount);
      cy.contains(`(${rowcount}) Records Found`).should("exist");
    });
  }
}
export default AdminPage;
