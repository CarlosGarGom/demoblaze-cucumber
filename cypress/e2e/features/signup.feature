Feature: SignUp
    Tests related with signup modal and signup users

    Background:
        Given the user visit the demoblaze website
        

    Scenario: User is able to sign up with valid credentials
    When the user click on the nav sign up button
        When the user types the username "user" and password "password"
        And the user click on the modal sign up button
        Then the alert should say "signUpSuccesfull"



  Scenario:   User is able to log in with valid credentials      
        When the user click on the nav login button
        And the user types the username "user" and password "password"
        And the user click on the modal login button
        Then the sign up button should contain "user"