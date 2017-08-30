import { Ng4LazyLoadingPage } from './app.po';

describe('ng4-lazy-loading App', () => {
  let page: Ng4LazyLoadingPage;

  beforeEach(() => {
    page = new Ng4LazyLoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
