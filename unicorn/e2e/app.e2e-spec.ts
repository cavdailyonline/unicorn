import { UnicornPage } from './app.po';

describe('unicorn App', function() {
  let page: UnicornPage;

  beforeEach(() => {
    page = new UnicornPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
