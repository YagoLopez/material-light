import { TestWebpackPage } from './app.po';

describe('test-webpack App', function() {
  let page: TestWebpackPage;

  beforeEach(() => {
    page = new TestWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
