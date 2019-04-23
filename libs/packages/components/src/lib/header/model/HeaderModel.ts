export interface HeaderModel {

    /**
     * Header logo and header logo home link
     */
    home: HeaderHome;

    /**
     * List of secondary links
     */
    secondaryLinks: HeaderSecondaryLink[];

    /**
     * List of main navigaation links/drop downs
     */
    navigationLinks: HeaderNavigationLink[];
}


export class HeaderHome implements Selectable {
    /**
     * Text for the Header
     */
    text: string;

    /**
     * Navigation Route for Home image button
     */
    route: string;

     /**
     * Identifier for the item when search for selected 
     */
    id: string;

    /**
     * Status of if the item is selected 
     */
    selected: boolean;
}

/**
 * 
 */
export class HeaderNavigationLink implements Selectable {
    /**
     * Text to be displayed in the link or button
     */
    text: string;

    /**
     * Navigation Route 
     */
    route: string;

    /**
     * List of child navigation items that will show when no route is provieded
     */
    children: HeaderNavigationLink[];

    /**
     * Identifier for the item when search for selected 
     */
    id: string;

    /**
     * Status of if the item is selected 
     */
    selected: boolean;
}


export class HeaderSecondaryLink implements Selectable {

    /**
     * Text to be displayed in the link
     */
    text: string;

    /**
     * Navigation Route
     */
    route: string;

    /**
     * Class or image 
     */
    imageClass: string;

    /**
     * displays counter with image
     */
    hasCounter: boolean;

    /**
     * Identifier for the item when search for selected 
     */
    id: string;

    /**
     * Status of if the item is selected 
     */
    selected: boolean;
}

export interface Selectable {
    /**
     * Identifier for the item when search for selected 
     */
    id: string;

    /**
     * Status of if the item is selected 
     */
    selected: boolean;
}
