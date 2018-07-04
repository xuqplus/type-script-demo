import { Day6Page } from './app.po';

describe('day6 App', function() {
  let page: Day6Page;

  beforeEach(() => {
    page = new Day6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
