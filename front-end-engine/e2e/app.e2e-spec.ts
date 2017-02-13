import { FrontEndEnginePage } from './app.po';

describe('front-end-engine App', function() {
  let page: FrontEndEnginePage;

  beforeEach(() => {
    page = new FrontEndEnginePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
