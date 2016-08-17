import { SpacestatesPage } from './app.po';

describe('spacestates App', function() {
  let page: SpacestatesPage;

  beforeEach(() => {
    page = new SpacestatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
