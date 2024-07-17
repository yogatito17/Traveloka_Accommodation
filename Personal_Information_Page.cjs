class PersonalInformationCarBooking {
    get contactName() {return $('(//input[@aria-labelledby="name.full"])[1]');}
    get contactPhoneNumber() {return $('(//input[@aria-label="Phone Number"])[1]');}
    get contactEmail() {return $('(//input[@aria-labelledby="emailAddress"])[1]');}
    get contactSaveButton() {return $('(//div[text()="Save"])[1]');}
    get driverTitle() {return $('//div[@aria-labelledby="title"]');}
    get driverMrTitle() {return $('//option[@value="MR"]');}
    get driverName() {return $('(//input[@aria-labelledby="name.full"])[2]');}
    get driverPhoneNumber() {return $('(//input[@aria-label="Phone Number"])[2]');}
    get driverSaveButton() {return $('(//div[text()="Save"])[2]');}
    get continueOnPersonalInformationButton() {return $('(//div[text()="Continue"])[2]');}
    
    async inputContactInformation(NameContact,phoneNumberContact,EmailContact) {
        await browser.pause(15000);
        await this.contactName.waitForClickable();
        await this.contactName.addValue(NameContact);
        await this.contactPhoneNumber.waitForClickable();
        await this.contactPhoneNumber.addValue(phoneNumberContact);
        await this.contactEmail.waitForClickable();
        await this.contactEmail.addValue(EmailContact);
        await this.contactSaveButton.waitForClickable();
        await this.contactSaveButton.click();
    }

    async inputDriverInformation(titleDriver,NameDriver,phoneNumberDriver) {
        await browser.pause(3000);
        await this.driverTitle.waitForClickable();
        await this.driverTitle.click();
        await this.driverTitle.selectByVisibleText(titleDriver);
        await this.driverName.waitForClickable();
        await this.driverName.addValue(NameDriver);
        await this.driverPhoneNumber.waitForClickable();
        await this.driverPhoneNumber.addValue(phoneNumberDriver);
        await this.driverSaveButton.waitForClickable();
        await this.driverSaveButton.click();
        await this.continueOnPersonalInformationButton.waitForClickable();
        await this.continueOnPersonalInformationButton.click();

    }
}

module.exports = new PersonalInformationCarBooking();