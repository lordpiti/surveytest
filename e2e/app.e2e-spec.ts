import { SurveyAngular2Page } from './app.po';

describe('survey-angular2 App', function() {
  let page: SurveyAngular2Page;

  beforeEach(() => {
    page = new SurveyAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
