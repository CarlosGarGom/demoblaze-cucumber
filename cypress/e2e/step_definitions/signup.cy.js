import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import signUpPage from "../../pages/signup";
import homePage from "../../pages/home";
import loginPage from "../../pages/login";
let alertMessages;

beforeEach(() => {
    cy.fixture('signup/alert').as('alertMessages');
});

Given('the user visit the demoblaze website', function () {
    cy.visit('/');
});

When('the user click on the nav sign up button', function () {

    homePage.clickNavbarSignUpButton();
});
When('the user click on the nav login button', function () {

    homePage.clickNavbarLogInButton();
});
When('the user types the username {string} and password {string}', function (username, password) {
    const uniqueUsername = `${username}_${Date.now()}`;
    signUpPage.typeUsername(uniqueUsername);
    signUpPage.typePassword(password);
});

When('the user click on the modal sign up button', function () {
    signUpPage.clickModalSignUpUserButton();
});

When('the user click on the nav login button', function () {
    homePage.clickNavbarLogInButton();
});

When('the user click on the modal login button', function () {
    loginPage.clickLogin();
});

Then('the alert should say {string}', function (messageKey) {
    cy.wait(1000);
    cy.on('window:alert', (alertMessage) => {
        expect(alertMessage).to.equals(this.alertMessages[messageKey]);
    });
});

Then('the sign up button should contain {string}', function (messageKey) {
    
    cy.on('window:alert', (alertMessage) => {
        expect(alertMessage).to.equals(this.alertMessages[messageKey]);
    });
});   
