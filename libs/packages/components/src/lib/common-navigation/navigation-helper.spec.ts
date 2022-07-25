import { NavigationHelper } from './navigation-helper';
import { NavigationMode } from './common-navigation-model';
describe('NavigationHelper', () => {
  it('should create an instance', () => {
    expect(new NavigationHelper()).toBeTruthy();
  });

  it('should be internal', () => {
    let helper = new NavigationHelper();
    expect(
      helper.isLinkInternal({
        mode: NavigationMode.INTERNAL,
        text: 'test',
        route: '/',
      })
    ).toBe(true);
  });

  it('should not be internal with external', () => {
    let helper = new NavigationHelper();
    expect(
      helper.isLinkInternal({
        mode: NavigationMode.EXTERNAL,
        text: 'test',
        route: '/',
      })
    ).toBe(false);
  });

  it('should not be internal with event', () => {
    let helper = new NavigationHelper();
    expect(
      helper.isLinkInternal({
        mode: NavigationMode.EVENT,
        text: 'test',
        route: '/',
      })
    ).toBe(false);
  });

  it('should be external', () => {
    let helper = new NavigationHelper();
    expect(
      helper.isLinkExternal({
        mode: NavigationMode.EXTERNAL,
        text: 'test',
        route: '/',
      })
    ).toBe(true);
  });

  it('should not be external with internal', () => {
    let helper = new NavigationHelper();
    expect(
      helper.isLinkExternal({
        mode: NavigationMode.INTERNAL,
        text: 'test',
        route: '/',
      })
    ).toBe(false);
  });

  it('should not be external with event', () => {
    let helper = new NavigationHelper();
    expect(
      helper.isLinkExternal({
        mode: NavigationMode.EVENT,
        text: 'test',
        route: '/',
      })
    ).toBe(false);
  });
});
