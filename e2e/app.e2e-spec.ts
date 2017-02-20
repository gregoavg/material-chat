import { MaterialChatPage } from './app.po';

describe('material-chat App', () => {
  let page: MaterialChatPage;

  beforeEach(() => {
    page = new MaterialChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
