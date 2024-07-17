class RequirementAndAdditionalNotesCarBooking {
    get additionalNotes() {return $('//textarea[@placeholder="Odd or even license plates, car charger, baby car seat, etc."]');}
    get rentalRequirement() {return $('//div[@class="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"]');}
    get checkAllRequirementButton() {return $('(//div[@class="css-1dbjc4n"]//div[@class="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"])[2]');}
    get saveRequirementButton() {return $('(//div[text()="Save"])[2]');}
    get continueToPaymentButton() {return $('(//div[text()="Continue to Payment"])[2]');}
    get continueOnRecheckButton() {return $('(//div[text()="Continue"])[2]');}

    async inputAdditionalNotes(notes) {
        await this.additionalNotes.waitForClickable();
        await this.additionalNotes.addValue(notes);
    }

    async Requirement() {
        await this.rentalRequirement.waitForClickable();
        await this.rentalRequirement.click();
        await this.checkAllRequirementButton.waitForClickable();
        await this.checkAllRequirementButton.click();
    }

    async continueCarRentalBooking(){
        await this.continueToPaymentButton.waitForClickable();
        await this.continueToPaymentButton.click();
        await this.continueOnRecheckButton.waitForClickable();
        await this.continueOnRecheckButton.click();
    }
}

module.exports = new RequirementAndAdditionalNotesCarBooking();