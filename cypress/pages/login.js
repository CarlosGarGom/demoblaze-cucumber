class LoginPage {
    elements = {
      usernameInput: () => cy.get("#logInModal #loginusername"),
      passwordInput: () => cy.get("#logInModal #loginpassword"),
      loginButton: () => cy.get("#logInModal .btn-primary"),
    }
   
    typeUsername(username) {
        if (username === '') {
            // Si el nombre de usuario está vacío, simplemente borramos el campo
            this.elements.usernameInput().clear();
          } else {
            this.elements.usernameInput().type(username);
          }
    }
   
    typePassword(password) {
        if (password === '') {
            // Si el password está vacío, simplemente borramos el campo
            this.elements.passwordInput().clear();
          } else {
            this.elements.passwordInput().type(password)
          }
    }
   
    clickLogin() {
      this.elements.loginButton().click()
    }
   
    login(username, password) {
      this.typeUsername(username),
      this.typePassword(password),
      this.clickLogin()
    }
    getErrorMessage() {
        return this.elements.errorMessage();
    }
    getSvgErrorIcons() {
      return this.elements.errorUserPassSvg();
  }
   }
   
   module.exports = new LoginPage();