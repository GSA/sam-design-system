import { INavigationLink, NavigationMode } from './common-navigation-model';
export class NavigationHelper {
  /**
   * checks if link is internal
   * @param link
   */
  isLinkInternal(link: INavigationLink) {
    return link.mode === NavigationMode.INTERNAL;
  }

  /**
   * checks if link is external
   * @param link
   */
  isLinkExternal(link: INavigationLink) {
    return link.mode === NavigationMode.EXTERNAL;
  }
}
