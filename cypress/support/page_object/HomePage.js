class HomePage{

    get languageDropdown() {return cy.get('[data-test="language-select"]')}
    get spanishLanguage() { return cy.get('[data-test="lang-es"]')}
    get englishLanguage() { return cy.get('[data-test="lang-en"]');}
    get homeTextTranslate() {return cy.get('a[data-test="nav-home"]'); }

    searchInput() { return cy.get('input[data-test="search-query"]');}
    searchButton() { return cy.get('button[data-test="search-submit"]');}
    productTitles() { return cy.get('.card-title'); }

    open() {
        cy.visit('https://practicesoftwaretesting.com/');
    }

    getCurrentLanguage() {
        return cy.get('#language');
    }


     searchForProduct(keyword) {
        this.searchInput().clear().type(keyword);
        this.searchButton().click();
    }

    getProductTitlesText() {
        const titles = [];

        return this.productTitles()
            .each(($el) => {
                titles.push($el.text());
            })
            .then(() => titles);
    }

    productTitleByName(name) {
        return cy.contains('[data-test="product-name"]', name);
    }

    compareButtons() {
    return cy.get('[data-test="compare-btn"]');
  }

  compareNowLink() {
    return cy.get('[data-test="compare-link"]');
  }

    addProductToCompare(index) {
        this.compareButtons()
      .eq(index)
      .should('be.visible')
      .and('be.enabled')
      .click();
     }

    goToComparison() {
        this.compareNowLink().click();
    }

    sortDropdown() {
        return cy.get('[data-test="sort"]');
    }

    productPrices() {
        return cy.get('[data-test="product-price"]');
    }

}

export default HomePage;