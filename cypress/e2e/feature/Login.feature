Feature: Login

  Scenario: Valid login
    Given user is on login page
    When user enters valid credentials
    Then dashboard should be visible
