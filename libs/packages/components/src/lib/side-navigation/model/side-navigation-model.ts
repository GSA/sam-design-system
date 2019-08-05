import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';

export class SideNavigationModel {

    /**
     * 
     */
    navigationLinks: NavigationLink[];
}


export class NavigationLink implements Selectable, INavigationLink {

    /**
     * Internal Angualr Routes, External HREF, EVENT: event on parent component
     */
    mode: NavigationMode;

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
    children?: NavigationLink[];

    /**
     * Identifier for the item when search for selected 
     */
    id: string;

    /**
     * Status of if the item is selected 
     */
    selected?: boolean;


    /**
     * Query string paramaters supporeted with external and internal links
     * ex. { 'name': 'value',...}
     */
    queryParams?: {
        [k: string]: any;
    }

}




