class SignUpPage {
    elements = {
        usernameSignUpInput: () => cy.get("#signInModal #sign-username"),
        passwordSignUpInput: () => cy.get("#signInModal #sign-password"),

        modalSignUpUserButton: () => cy.get("#signInModal .btn-primary"),

    }

    typeUsername(username) {
        if (username === '') {
            // Si el nombre de usuario está vacío, simplemente borramos el campo
            this.elements.usernameSignUpInput().clear();
        } else {
            this.elements.usernameSignUpInput().type(username, { delay: 0 });
        }
    }

    typePassword(password) {
        if (password === '') {
            // Si el password está vacío, simplemente borramos el campo
            this.elements.passwordSignUpInput().clear();
        } else {
            this.elements.passwordSignUpInput().type(password, { delay: 0 })
        }
    }


    clickModalSignUpUserButton() {
        this.elements.modalSignUpUserButton().click()
    }

    signUp(username, password) {
        this.typeUsername(username),
        this.typePassword(password),
        this.clickSignUpUserButton()
    }
}

module.exports = new SignUpPage();