import { Angular4TrainingPage } from './app.po';

describe('angular4-training App', () => {
  let page: Angular4TrainingPage;

  beforeEach(() => {
    page = new Angular4TrainingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
