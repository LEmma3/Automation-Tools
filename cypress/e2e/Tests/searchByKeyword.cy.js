import HomePage from "../../support/page_object/HomePage";

describe("Language change", () => {
    it('should show relevant results matching the searched keyword', () => {
        const homePage = new HomePage();
        homePage.open();
        cy.url().should('include', 'practicesoftwaretesting.com');
        homePage.searchForProduct('hammer');
        homePage.productTitles().should('exist');
        homePage.productTitles().should('have.length.greaterThan', 0);
        homePage.productTitleByName('Court Hammer').should('be.visible');
        homePage.productTitles().each(($el) => {
            expect($el.text().toLowerCase()).to.include('hammer');
            });
    });
});