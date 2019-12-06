/**
 * @license
 * Copyright [COPYRIGHT HOLDER] All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at [LINK TO LICENSE]
 */

import {INavigationLink, NavigationMode} from '@gsa-sam/components/core';

export class FooterModel {
  /**
   * List of sections and their links
   */
  linkSections: FooterLinkSection[];

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
}
