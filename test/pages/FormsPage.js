import BasePage from "./BasePage.js";

class FormsPage extends BasePage {
    get textInput () {
        return $('~text-input');
    }
    get textInputResult () {
        return $('~input-text-result');
    }
    get switch () {
        return $('~switch');
    }
    get switchText () {
        return $('~switch-text');
    }
    get dropdown () {
        return $('//android.widget.EditText[@text="Select an item..."]');
    }
    get activeBtn () {
        return $('~button-Active');
    }
    get activeBtnAlertText () {
        return $('//android.widget.TextView[@text="This button is active"]');
    }
    
    async enterText (text) {
        await this.textInput.setValue(text); 
    }
    async assertEnteredTextIsEqual (text) {
        await expect(this.textInputResult).toHaveText(text);
    }
    async clickSwitch () {
        await this.switch.click();
    }
    async assertSwitchTextIsOn () {
        await expect(this.switchText).toHaveText("Click to turn the switch OFF");
    }
    async selectDropdownItemAndVerify (itemText) {
        await this.dropdown.click();
        await $(`//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="${itemText}"]`).click();
        await expect($(`//android.widget.EditText[@text="${itemText}"]`)).toBeDisplayed();
    }
    async clickActiveBtn () {
        await this.activeBtn.click();
    }
    async clickActiveBtnAlertOKBtn () {
        await this.activeBtnAlertOKBtn.click();
    }
    async assertActiveBtnAlertTextVisible () {
        await expect(this.activeBtnAlertText).toBeDisplayed();
    }

}
export default new FormsPage();