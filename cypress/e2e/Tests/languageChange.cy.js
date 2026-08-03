import HomePage from '../../support/page_object/HomePage';

describe('Language change', () => {
    it('should switch the site language from English to Spanish', () => {
        const homePage = new HomePage();
        homePage.open();
        homePage.getCurrentLanguage().should('contain', 'EN');
        homePage.languageDropdown.click();
        homePage.spanishLanguage.should('be.visible').click();
        homePage.homeTextTranslate.should('be.visible', { timeout: 10000 });
        homePage.homeTextTranslate.should('have.text', 'Inicio');
        homePage.getCurrentLanguage().should('contain', 'ES');
    });
});
