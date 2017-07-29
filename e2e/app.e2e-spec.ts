import { NodeAng2Page } from './app.po';

describe('node-ang2 App', () => {
  let page: NodeAng2Page;

  beforeEach(() => {
    page = new NodeAng2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
