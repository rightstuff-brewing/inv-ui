import { InvUiPage } from './app.po';

describe('inv-ui App', () => {
  let page: InvUiPage;

  beforeEach(() => {
    page = new InvUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
