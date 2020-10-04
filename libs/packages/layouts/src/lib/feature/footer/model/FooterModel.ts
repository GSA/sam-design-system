import { INavigationLink, NavigationMode } from '@gsa-sam/components';

export class FooterModel {
  /**
   * List of sections and their links
   */
  linkSections: FooterLinkSection[];

  /**
   * Footer text and logo
   */

  footerLogo?: FooterLogo;

  /**
   * Footer disclaimer
   */

  disclaimer?: string;

}

export class FooterLinkSection {
  /**
   * Title text for the section
   */
  text: string;

  /**
   * Links in the section
   */
  links: FooterLink[];
}

export class FooterLink implements INavigationLink {
  /**
   * Internal Angualr Routes, External HREF, EVENT: event on parent component
   */
  mode: NavigationMode;

  /**
   * Text to be displayed in the link
   */
  text: string;

  /**
   * Navigation Route
   */
  route: string;
}

export interface FooterLogo {
  /**
   * Text for the Header
   */

  text: string;

  /**
   * Image Source Path for the Image button
   */

  imageSourcePath: string;

  /**
   * Alt text for image
   */

  imageAltText: string;

  /**
   * link for logo image
   */

  href?: string;

  /**
   * agency name adjacent to logo
   */

  agencyName?: string;

}
