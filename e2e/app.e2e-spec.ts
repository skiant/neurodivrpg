import { NeurodivrpgPage } from './app.po';

describe('neurodivrpg App', function() {
  let page: NeurodivrpgPage;

  beforeEach(() => {
    page = new NeurodivrpgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
