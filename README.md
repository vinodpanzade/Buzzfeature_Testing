📌 Project Overview

This project automates critical user workflows in OrangeHRM with a dynamic and maintainable approach, avoiding hardcoded assumptions and mimicking how a real user interacts with the system.

The framework validates:

Navigation stability

UI component integrity

Data consistency across screens

Dynamic content rendering (posts, tabs, cards)

🧩 Modules Automated
✅ 1. My Info Module

Focus: Navigation + Structural Validation

What’s covered:

Navigates to My Info

Verifies profile image presence

Iterates through all tabs dynamically:

Personal Details

Contact Details

Emergency Contacts

Dependents

Immigration

Job

Salary

Report-to (handled UI text mismatch → Report to)

Qualifications

Memberships

Validates correct page heading for each tab

✅ 2. Buzz Module

Focus: Dynamic Feed Validation & Component Integrity

What’s covered:

Navigates to Buzz Newsfeed

Validates profile image URL format

Verifies feed filter buttons:

Most Recent Posts

Most Liked Posts

Most Commented Posts

Dynamically validates any number of posts:

Profile image

Header text

Three-dot menu availability

Treats each Buzz card as a single business entity

Verifies footer actions per card:

Like (❤️)

Comment (💬)

Share (🔁)

💡 Advanced approach used:

Scoped validations using each() + within()

DOM-aware scoping to handle sibling structures

No dependency on fixed post count or user data

🧠 Key Automation Concepts Applied

✔ Page Object Model (POM)

✔ Dynamic DOM traversal

✔ Data-driven testing using arrays & mappings

✔ UI text normalization (Report-to → Report to)

✔ Avoidance of flaky selectors

✔ Clean separation of test intent vs UI structure

🛠️ Tech Stack

Cypress

JavaScript

Cypress Cucumber (BDD – optional support)

Git & GitHub

Node.js

cypress/
 ├── e2e/
 │   ├── buzz/
 │   ├── myinfo/
 ├── pages/
 │   ├── Buzzpage.js
 │   ├── Myinfo.js
 ├── support/
 │   ├── commands.js


💡 Design decision:
Instead of over-testing every field, the test ensures each tab loads correctly, which is ideal for smoke + regression coverage.
