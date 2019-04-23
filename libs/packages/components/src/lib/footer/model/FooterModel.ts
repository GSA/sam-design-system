export interface FooterModel {

    /**
     * List of sections and their links
     */
    linkSections: FooterLinkSection[];

    /**
     * Footer text and logo
     */
    footerLogo: FooterLogo;
}

export interface FooterLinkSection {

    /**
     * Title text for the section
     */
    text: string;

    /**
     * Links in the section
     */
    links: FooterLink[];
}

export interface FooterLink {

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


