import { AdbcdmovieappPage } from './app.po';

describe('adbcdmovieapp App', function() {
  let page: AdbcdmovieappPage;

  beforeEach(() => {
    page = new AdbcdmovieappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
