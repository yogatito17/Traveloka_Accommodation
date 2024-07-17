class RentaledCarPDP {
    get continueOnCarPDP1() {return $('(//div[@class="css-901oao css-bfa6kz r-jwli3a r-t1w4ow r-cygvgh r-b88u0q r-1iukymi r-q4m81j" and text()="Continue"])[2]');}
    get pickUpRentalOfficeOption() {return $('(//div[@class="css-901oao r-t1w4ow r-ubezar r-majxgm r-135wba7 r-fdjqy7" and text()="Rental Office"])[1]');}
    get rentalOfficeLocation() {return $('(//div[@class="css-901oao css-bfa6kz r-13awgt0 r-t1w4ow r-ubezar r-majxgm r-135wba7 r-1m04atk r-fdjqy7" and text()="Rental Office"])[1]');}
    get selectedRentalOfficeLocation() {return $('(//div[@class="css-1dbjc4n r-14lw9ot r-1q52ik8 r-qklmqi r-1loqt21 r-kzbkwu r-1otgn73 r-1i6wzkk r-lrvibr"])[1]');}
    get dropOffOtherLocationsOption() {return $('(//div[@class="css-901oao r-t1w4ow r-ubezar r-majxgm r-135wba7 r-fdjqy7" and text()="Other Locations"])[2]');}
    get searchOtherLocation() {return $('(//input[@placeholder="Search location or address"])[2]');}
    get selectedOtherLocation() {return $('(//div[@class="css-1dbjc4n r-14lw9ot r-1wh2hl7 r-e65k4z r-b4qz5r r-1dqxon3 r-u8s1d r-1e4vmmq"]//div[@class="css-1dbjc4n r-14lw9ot r-1q52ik8 r-qklmqi r-1loqt21 r-18u37iz r-1wtj0ep r-ymttw5 r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu"])[4]');}
    get dropOffAdditionalNotes() {return $('//textarea[@placeholder="Additional notes (optional)"]');}
    get continueOnCarPDP2() {return $('(//div[@class="css-901oao css-bfa6kz r-jwli3a r-t1w4ow r-cygvgh r-b88u0q r-1iukymi r-q4m81j" and text()="Continue"])[1]');}

    async continueWithoutInput() {
        await this.continueOnCarPDP1.click();
        await browser.pause(5000);
    }

    async continueWithInputPickUpDropOffLocationInformation(location,notes) {
        
        await this.pickUpRentalOfficeOption.waitForClickable();
        await this.pickUpRentalOfficeOption.click();
        
        await this.rentalOfficeLocation.waitForClickable();
        await this.rentalOfficeLocation.click();
        
        await this.selectedRentalOfficeLocation.waitForClickable();
        await this.selectedRentalOfficeLocation.click();
        
        await this.dropOffOtherLocationsOption.waitForClickable();
        await this.dropOffOtherLocationsOption.click();
        
        await this.searchOtherLocation.waitForClickable();
        await this.searchOtherLocation.addValue(location);

        await this.selectedOtherLocation.waitForClickable();
        await browser.pause(3000);
        await this.selectedOtherLocation.click();

        await this.dropOffAdditionalNotes.waitForClickable();
        await this.dropOffAdditionalNotes.addValue(notes);

        await this.continueOnCarPDP2.waitForClickable();
        await this.continueOnCarPDP2.click();
    }
}

module.exports = new RentaledCarPDP();