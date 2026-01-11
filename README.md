# 🚀 Cypress UI Automation Framework – OrangeHRM

A scalable, real-world **Cypress UI automation framework** built to validate core modules of the **OrangeHRM application**, focusing on **dynamic UI behavior, maintainability, and professional QA practices**.

---

## 📌 Project Overview

This project automates critical user workflows in OrangeHRM using a **dynamic and DOM-aware approach**, avoiding hardcoded assumptions and ensuring stability across UI changes.

The framework is designed to:
- Validate application navigation
- Ensure UI component integrity
- Handle dynamic content safely
- Reflect real-world QA automation strategies

---

## 🧩 Modules Automated

---

## 1. My Info Module

**Focus:** Navigation & Structural Validation

### What’s covered
- Navigates to **My Info**
- Verifies profile image presence
- Iterates through all My Info tabs dynamically:
  - Personal Details
  - Contact Details
  - Emergency Contacts
  - Dependents
  - Immigration
  - Job
  - Salary
  - Report-to (UI-normalized to **Report to**)
  - Qualifications
  - Memberships
- Validates correct page heading for each tab

**Design decision:**  
Instead of validating every field, the test confirms **tab navigation stability**, which is ideal for **smoke and regression testing**.

---

## 2. Buzz Module

**Focus:** Dynamic Feed Validation & Component Integrity

### What’s covered
- Navigates to **Buzz Newsfeed**
- Validates profile image URL format
- Verifies feed filter buttons:
  - Most Recent Posts
  - Most Liked Posts
  - Most Commented Posts
- Dynamically validates any number of posts:
  - Profile image
  - Header text
  - Three-dot menu availability
- Treats each Buzz card as a single business entity
- Verifies footer actions per card:
  - Like
  - Comment
  - Share

### Advanced approach used
- Scoped validations using `each()` and `within()`
- DOM-aware scoping to handle sibling structures
- No dependency on fixed post count or user-specific data

---

## 🧠 Key Automation Concepts Applied
- Page Object Model (POM)
- Dynamic DOM traversal
- Data-driven testing using arrays and mappings
- UI text normalization (`Report-to` → `Report to`)
- Avoidance of flaky selectors
- Clear separation of test intent vs UI structure

---

## 🛠️ Tech Stack
- Cypress
- JavaScript
- Cypress Cucumber (BDD – optional support)
- Git and GitHub
- Node.js

---


---

## 🧪 Testing Philosophy

> **Test what can break, not everything that exists.**

- Navigation is fully covered
- Critical UI components are validated
- Deep form testing is kept selective to ensure stability

---

## 📈 Future Enhancements
- API + UI hybrid validation
- Custom Cypress commands
- Soft assertions and enhanced reporting
- CI/CD integration (Jenkins / GitHub Actions)
- Role-based Buzz permissions validation

---

## 👤 Author

**Vinod Panzade**  
Quality Engineer | Automation Enthusiast  

Focused on building **scalable, maintainable, and production-ready test automation frameworks**.



