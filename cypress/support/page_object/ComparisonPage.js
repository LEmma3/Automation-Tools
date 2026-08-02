class ComparisonPage {
    table() {
        return cy.get('[data-test="comparison-table"]');
    }

    productNames() {
        return cy.get('[data-test="product-name"]');
    }

    prices() {
        return cy.get('[data-test="compare-price"]');
    }

    specRows() {
        return cy.get('.spec-diff');
    }

    isDisplayed() {
        return this.table().should('be.visible');
    }

    getProductNamesText() {
        return this.productNames().then(($els) => {
            return Cypress.$.makeArray($els).map((el) => el.innerText);
        });
    }
}

export default ComparisonPage;
