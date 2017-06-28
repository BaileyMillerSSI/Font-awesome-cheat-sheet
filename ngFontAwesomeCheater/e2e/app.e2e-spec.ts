import { NgFontAwesomeCheaterPage } from './app.po';

describe('ng-font-awesome-cheater App', () => {
  let page: NgFontAwesomeCheaterPage;

  beforeEach(() => {
    page = new NgFontAwesomeCheaterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
