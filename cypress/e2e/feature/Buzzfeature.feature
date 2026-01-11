Feature: Buzz Page

  Scenario: User accesses Buzz page after login
    Given user is on the login page
    When user enters valid login credentials
    Then user should see the Buzz Newsfeed page
