class HomePage {
    elements = {
        navbarSignUpButton: () => cy.get("#navbarExample #signin2"),
        navbarLogInButton: () => cy.get("#navbarExample #login2"),
        
    }
    
    getNavbarSignUpButton() {
        this.elements.navbarSignUpButton()
    }
    clickNavbarSignUpButton() {
        this.elements.navbarSignUpButton().click()
    }
    clickNavbarLogInButton() {
        this.elements.navbarLogInButton().click()
    }
}

module.exports = new HomePage();