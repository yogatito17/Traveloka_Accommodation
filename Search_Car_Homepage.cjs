class SearchCarRentalHomepage {
    get carRentalButton() {return $('//div[@data-testid="product-pill-Car Rental"]');}
    get withoutDriverButton() {return $('//h4[text()="Without Driver"]');}
    get pickUpLocation() {return $('//input[@placeholder="Enter city or region"]');}
    get locationJakarta() {return $('(//div[@class="css-1dbjc4n r-14lw9ot r-1q52ik8 r-qklmqi r-1loqt21 r-18u37iz r-1wtj0ep r-ymttw5 r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu"])[1]');}
    get startDate() {return $('//input[@data-testid="rental-search-form-date-input-start"]');}
    get selectStartDate() {return $('(//div[@data-testid="mds-calendar"]//div[@data-year="2024" and @data-month="6"]//div[@class="css-901oao r-cwxd7f r-t1w4ow r-1b43r93 r-majxgm r-rjixqe r-q4m81j" and text()="19"])[1]');}
    get startTime() {return $('//input[@data-testid="rental-search-form-time-input-start"]');}
    get selectStartHour() {return $('//div[@class="css-1dbjc4n"]//div[@class="css-1dbjc4n r-14lw9ot r-1wh2hl7 r-e65k4z r-b4qz5r r-1dqxon3 r-u8s1d r-zchlnj"]//div[@class="css-1dbjc4n r-13awgt0"]//div[@class="css-901oao r-cwxd7f r-t1w4ow r-1b43r93 r-majxgm r-rjixqe r-q4m81j" and text()="9"]');}
    get selectStartMinute() {return $('//div[@class="css-1dbjc4n r-13awgt0"]//div[@class="css-1dbjc4n r-391gc0 r-1loqt21 r-1777fci r-tuq35u r-1otgn73 r-1i6wzkk r-lrvibr"]//div[@class="css-901oao r-cwxd7f r-t1w4ow r-1b43r93 r-majxgm r-rjixqe r-q4m81j" and text()="0"]');}
    get doneTimeButton() {return $('//div[@class="css-901oao r-t1w4ow r-cygvgh r-b88u0q r-1iukymi r-q4m81j"]');}
    get endDate() {return $('//input[@data-testid="rental-search-form-date-input-end"]');}
    get selectEndDate() {return $('(//div[@data-year="2024" and @data-month="6"]//div[@data-testid="date-cell-24-7-2024"]//div[@class="css-901oao r-cwxd7f r-t1w4ow r-1b43r93 r-majxgm r-rjixqe r-q4m81j" and text()="24"])[2]');}
    get endTime() {return $('//input[@data-testid="rental-search-form-time-input-end"]');}
    get selectEndHour() {return $('//div[@class="css-1dbjc4n r-1loqt21 r-1777fci r-tuq35u r-1otgn73 r-1i6wzkk r-lrvibr"]//div[@class="css-901oao r-cwxd7f r-t1w4ow r-1b43r93 r-majxgm r-rjixqe r-q4m81j" and text()="11"]');}
    get selectEndMinute() {return $('//div[@class="css-1dbjc4n r-391gc0 r-1loqt21 r-1777fci r-tuq35u r-1otgn73 r-1i6wzkk r-lrvibr"]//div[@class="css-901oao r-cwxd7f r-t1w4ow r-1b43r93 r-majxgm r-rjixqe r-q4m81j" and text()="0"]');}
    get searchButton() {return $('//div[@data-testid="rental-search-form-cta"]');}

    async open() {
        await browser.url('https://www.traveloka.com/en-id');
        await browser.maximizeWindow()

    }
    
    async searchCarRental() {
        await this.carRentalButton.waitForClickable();
        await this.carRentalButton.click();

        await this.withoutDriverButton.waitForClickable();
        await this.withoutDriverButton.click();
        
        await this.pickUpLocation.waitForClickable();
        await this.pickUpLocation.click();
        
        await this.pickUpLocation.waitForClickable();
        await this.pickUpLocation.addValue('Jakarta');
        await browser.pause(3000);

        await this.locationJakarta.waitForClickable();
        await this.locationJakarta.click();

        await this.startDate.waitForClickable();
        await this.startDate.click();
        
        await this.selectStartDate.waitForClickable();
        await this.selectStartDate.click();
        
        await this.startTime.waitForClickable();
        await this.startTime.click();
        
        await this.selectStartHour.waitForClickable();
        await this.selectStartHour.click();
        
        await this.selectStartMinute.waitForClickable();
        await this.selectStartMinute.click();
        
        await this.doneTimeButton.waitForClickable();
        await this.doneTimeButton.click();
        
        await this.endDate.waitForClickable();
        await this.endDate.click();
        
        await this.selectEndDate.waitForClickable();
        await this.selectEndDate.click();
        
        await this.endTime.waitForClickable();
        await this.endTime.click();
        
        await this.selectEndHour.waitForClickable();
        await this.selectEndHour.click();
        
        await this.selectEndMinute.waitForClickable();
        await this.selectEndMinute.click();
        
        await this.doneTimeButton.waitForClickable();
        await this.doneTimeButton.click();
        
        await this.searchButton.waitForClickable();
        await this.searchButton.click();
    }
}

module.exports = new SearchCarRentalHomepage();