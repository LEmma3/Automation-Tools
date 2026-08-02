import HomePage from '../../support/page_object/HomePage';
import ComparisonPage from '../../support/page_object/ComparisonPage';

describe('Product comparison feature', () => {
    it('should display price comparison correctly', () => {
        const homePage = new HomePage();
        const comparisonPage = new ComparisonPage();
        homePage.open();

        cy.url().should('include', 'practicesoftwaretesting');

        homePage.addProductToCompare(0);

        homePage.addProductToCompare(1);

        homePage.goToComparison();

        cy.url().should('include', '/comparison');

        comparisonPage.isDisplayed();

        comparisonPage.getProductNamesText().then((names) => {
            expect(names).to.have.length(2);
            expect(names[0]).to.not.equal(names[1]);
        });

        comparisonPage.prices().then(($prices) => {
            const price1 = parseFloat($prices.eq(0).text().replace('$', ''));
            const price2 = parseFloat($prices.eq(1).text().replace('$', ''));

            expect(price1).to.be.a('number');
            expect(price2).to.be.a('number');
            expect(price1).to.not.equal(price2);

            comparisonPage.specRows().should('have.length.greaterThan', 0);
        });
    });
});
