import { Vanillaplannerv2Page } from './app.po';

describe('vanillaplannerv2 App', () => {
  let page: Vanillaplannerv2Page;

  beforeEach(() => {
    page = new Vanillaplannerv2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
