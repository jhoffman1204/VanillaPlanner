import { VanillaPlannerPage } from './app.po';

describe('vanilla-planner App', () => {
  let page: VanillaPlannerPage;

  beforeEach(() => {
    page = new VanillaPlannerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
