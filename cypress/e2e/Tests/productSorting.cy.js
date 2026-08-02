import HomePage from "../../support/page_object/HomePage";

describe('Sorting Products', () => {

    it('should sort products by price ascending', () => {

        const homePage = new HomePage();
        homePage.open();

        homePage.sortDropdown().select('Price (Low - High)');

        homePage.productPrices().should(($prices) => {

            const prices = [];
            $prices.each((i, el) => {
                prices.push(
                    parseFloat(el.innerText.replace('$', ''))
                );
            });

            const sorted = [...prices].sort((a, b) => a - b);

            expect(prices).to.deep.equal(sorted);
            expect(prices[0]).to.equal(Math.min(...prices));
        });
    });
});