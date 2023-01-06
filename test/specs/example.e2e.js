 describe('My First demo appp testing', () => {
    it('should open and wait', async () => {
     await $(`~Forms`).click();
     await $(`//android.widget.EditText[@content-desc="text-input"]`).setValue(`someRandom a123`);

     await browser.pause(3000);
    })
})


