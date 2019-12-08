import {browser, by, element} from 'protractor';

describe('footer', () => {

  beforeEach(async () => await browser.get('/footer'));

  describe('text input', () => {

    it('should update input value when user types', async () => {
      const footer = element(by.tagName('sds-footer'));
      expect(footer).toBeDefined();
    });

  });

});
