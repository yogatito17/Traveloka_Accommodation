class Payment {
    get selectVirtualAccount() {return $('//div[text()="Virtual Account"]');}
    get selectMandiriVirtualAccount() {return $('//div[text()="Mandiri Virtual Account"]');}
    get payWithMandiriVAButton() {return $('(//div[text()="Pay with Mandiri Virtual Account"])[2]');}
    get pleaseTransferToTitle() {return $('//h1[text()="Please Transfer to"]');}

    async selectMandiriVAPayment() {
        await this.selectVirtualAccount.waitForClickable();
        await this.selectVirtualAccount.click();
        await this.selectMandiriVirtualAccount.waitForClickable();
        await this.selectMandiriVirtualAccount.click();
        await this.payWithMandiriVAButton.waitForClickable();
        await this.payWithMandiriVAButton.click();
    }

    async verifyPaymentGateway() {
        await this.pleaseTransferToTitle.waitForDisplayed({});
        await expect(pleaseTransferToTitle).toBeDisplayed()
    }

}

module.exports = new Payment();