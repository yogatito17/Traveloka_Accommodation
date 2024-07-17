const SearchCarRentalHomepage = require('./pageobjects/Search_Car_Homepage.cjs');
const SelectCarToBeRentaled = require('./pageobjects/Select_Car_Page.cjs');
const RentaledCarPDP = require('./pageobjects/Car_PDP.cjs');
const PersonalInformationCarBooking = require('./pageobjects/Personal_Information_Page.cjs');
const RequirementAndAdditionalNotesCarBooking = require('./pageobjects/Requirement_Notes_Page.cjs');
const Payment = require('./pageobjects/Payment_Page.cjs');

describe('Car Rental Scenario', () => {
    it('should rental car successfully until proceed to payment', async () => {
        // Open Traveloka URL
        await SearchCarRentalHomepage.open();
        // Search Car To Be Rentaled
        await SearchCarRentalHomepage.searchCarRental();
        // Select Car
        await SelectCarToBeRentaled.selectCar();
        // Rental Car PDP
        await RentaledCarPDP.continueWithoutInput();
        await browser.switchToParentFrame()
        await RentaledCarPDP.continueWithInputPickUpDropOffLocationInformation('Gelora Bung Karno','Parkir JCC');
        // Input Personal Information to Rent A Car
        await PersonalInformationCarBooking.inputContactInformation('Muhammad Yoga Twindito','081213589256','yogatito17@gmail.com');
        await PersonalInformationCarBooking.inputDriverInformation('Mr.','Muhammad Yoga Twindito','081213589256');
        // Input Additional Information
        await RequirementAndAdditionalNotesCarBooking.additionalNotes('Car charger for mobile phone');
        // Check The Car To Be Rent Requirement
        await RequirementAndAdditionalNotesCarBooking.Requirement();
        // Continue to Payment
        await RequirementAndAdditionalNotesCarBooking.continueCarRentalBooking();
        // Select Payment Method
        await Payment.selectMandiriVAPayment();
        // Verify On Payment Gateway
        await Payment.verifyPaymentGateway();
    });
});
