class SelectCarToBeRentaled {
    get continueOnPreferredCarButton() {return $('(//div[@class="css-1dbjc4n r-18u37iz r-ymttw5 r-95jzfe"]//div[@class="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1777fci"])[1]');}
    get continueOnPreferredCarProviderButton() {return $('//div[@class="css-901oao css-bfa6kz r-jwli3a r-t1w4ow r-cygvgh r-b88u0q r-1iukymi r-q4m81j" and text()="Continue"]');}        
    
    async selectCar() {
        await this.continueOnPreferredCarButton.waitForClickable();
        await this.continueOnPreferredCarButton.click();
        await this.continueOnPreferredCarProviderButton.waitForClickable();
        await this.continueOnPreferredCarProviderButton.click();
    }
}

module.exports = new SelectCarToBeRentaled();