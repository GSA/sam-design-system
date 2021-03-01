import { INavigationLink, NavigationMode } from '@gsa-sam/components';

export class FooterModel {
  /**
   * List of sections and their links
   */
  linkSections: FooterLinkSection[];
  disclaimer?: string;
  /**
   * Footer text and logo
   */

  footerLogo?: FooterLogo;
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

  /**
   * Hide external link icon
   */
  hideIcon?: boolean = false;
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
   * link
   */
  href: string;

  agencyName: string;
}
