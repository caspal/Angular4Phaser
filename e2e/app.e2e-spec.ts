import { Angular4PhaserPage } from './app.po';

describe('angular4-phaser App', () => {
  let page: Angular4PhaserPage;

  beforeEach(() => {
    page = new Angular4PhaserPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
