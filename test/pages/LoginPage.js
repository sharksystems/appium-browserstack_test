import BasePage from "./BasePage.js";

class LoginPage extends BasePage {
    get emailInputField () {
        return $('~input-email');
    }
    get passwordInputField () {
        return $('~input-password');
    }
    get loginSubmitBtn () {
        return $('~button-LOGIN');
    }
    get loginSuccessMsg () {
        return $('//android.widget.TextView[@text="You are logged in!"]');
    }
    get invalidEmailMsg () {
        return $('//android.widget.TextView[@text="Please enter a valid email address"]');
    }

    async enterEmail (email) {
        await this.emailInputField.setValue(email);
    }
    async enterPassword (password) {
        await this.passwordInputField.setValue(password);
    }
    async clickLoginSubmitBtn () {
        await this.loginSubmitBtn.click();
    }
    async login (email, password) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginSubmitBtn();
    }

    async assertLoginSuccessMsgVisible () {
        await expect(this.loginSuccessMsg).toBeDisplayed();
    }
    async assertInvalidEmailMsgVisible () {
        await expect(this.invalidEmailMsg).toBeDisplayed();
    }
}

export default new LoginPage();