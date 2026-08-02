import HomePage from '../../support/page_object/HomePage';

describe('Language change', () => {
    it('should switch the site language from English to Spanish', () => {
        const homePage = new HomePage();
        homePage.open();
        homePage.getCurrentLanguage().should('contain', 'EN');
        homePage.languageDropdown.click();
        homePage.spanishLanguage.click();
        homePage.homeTextTranslate.should('be.visible').and('have.text', 'Inicio');
        homePage.getCurrentLanguage().should('contain', 'ES');
    });
});
