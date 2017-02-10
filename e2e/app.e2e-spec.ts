import { CamchatioFacebookPage } from './app.po';

describe('camchatio-facebook App', function() {
  let page: CamchatioFacebookPage;

  beforeEach(() => {
    page = new CamchatioFacebookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
