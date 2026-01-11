class Myinfo {
  myinfofeature() {
    cy.contains("My Info").click();

    cy.get("img.employee-image").should("exist");

    const details = [
      "Personal Details",
      "Contact Details",
      "Emergency Contacts",
      "Dependents",
      "Immigration",
      "Job",
      "Salary",
      "Report-to",
      "Qualifications",
      "Memberships",
    ];

    details.forEach((data) => {
      cy.get(".orangehrm-tabs-item").contains(data).click();
      const expectedHeading = data === "Report-to" ? "Report to" : data;

      cy.get("h6").should("contain.text", expectedHeading);
    });
  }
}

export default Myinfo;
