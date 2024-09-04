import RandomUser from "../data/RandomUser.js";
import LoginPage from "../pages/LoginPage.js";
import FormsPage from "../pages/FormsPage.js";
import SwipePage from "../pages/SwipePage.js";
import DragPage from "../pages/DragPage.js";

describe('Mobile Demo App Test', () => {
    const randomUser = new RandomUser();
    
    it('Login with valid credentials', async () => {
        await LoginPage.openLoginTab();
        await LoginPage.enterEmail(randomUser.getEmail);
        await LoginPage.enterPassword(randomUser.getPassword);
        await LoginPage.clickLoginSubmitBtn();
        await LoginPage.assertLoginSuccessMsgVisible();
        await LoginPage.clickAlertOKBtn();
    });
    it('Login with valid credentials', async () => {
        await LoginPage.openLoginTab();
        await LoginPage.enterEmail(randomUser.getUsername);
        await LoginPage.enterPassword(randomUser.getPassword);
        await LoginPage.clickLoginSubmitBtn();
        await LoginPage.assertInvalidEmailMsgVisible();
    });
    it('Form elements test', async () => {
        await FormsPage.openFormsTab();
        await FormsPage.enterText(randomUser.getUsername);
        await FormsPage.assertEnteredTextIsEqual(randomUser.getUsername);
        await FormsPage.clickSwitch();
        await FormsPage.assertSwitchTextIsOn();
        await FormsPage.selectDropdownItemAndVerify("webdriver.io is awesome");
        await FormsPage.clickActiveBtn();
        await FormsPage.assertActiveBtnAlertTextVisible();
        await FormsPage.clickAlertOKBtn();
    });
    it('Swipe test', async () => {
        await SwipePage.openSwipeTab();
        await SwipePage.swipe(0.8, 0.5, 0.2, 0.5);
        await SwipePage.swipe(0.8, 0.5, 0.2, 0.5);
        await SwipePage.assertThirdSliderItemVisible();
        await SwipePage.swipe(0.2, 0.5, 0.8, 0.5);
        await SwipePage.swipe(0.2, 0.5, 0.8, 0.5);
        await SwipePage.assertFirstSliderItemVisible();
        await SwipePage.swipe(0.2, 0.8, 0.2, 0.1);
        await SwipePage.assertBottomSecretLogoVisible();
        await SwipePage.swipe(0.2, 0.1, 0.2, 0.8);
        await SwipePage.assertTopPageTitleVisible();
    });
    it('Drag and Drop refresh test', async () => {
        await DragPage.openDragTab();
        await DragPage.dragPieceAndVerify();
        await DragPage.clickRefreshBtn();
        await DragPage.assertDragPiecesVisible();
    });
});

