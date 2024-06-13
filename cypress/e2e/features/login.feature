@saucedemo @regression
Feature: Login section tests

Background:
 Given the user navigates to Sauce Demo

@smoke
Scenario: User is able to log in with valid credentials
 When the user enters the username "standard_user"
 And the user types the password "secret_sauce"
 And the user clicks on the login button
 Then the alert should say "Sign up successful."