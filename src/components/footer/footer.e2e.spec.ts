import {browser, by, element} from 'protractor';

describe('footer', () => {
  beforeEach(async () => await browser.get('/footer'));

  it('should exists on page', async () => {
    expect(await browser.isElementPresent(by.css('sds-footer'))).toBe(
      true,
      'Expected footer components to exist'
    );
  });
});
