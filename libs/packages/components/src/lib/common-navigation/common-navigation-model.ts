export interface INavigationLink {
  /**
   * Text to be displayed in the link
   */
  text: string;

  /**
   * Navigation Route
   */
  route: string;

  /**
   * Internal Angualr Routes, External HREF, EVENT: event on parent component
   */
  mode: NavigationMode;
}

export enum NavigationMode {
  INTERNAL,
  EXTERNAL,
  EVENT,
  LABEL,
}

export interface Selectable {
  /**
   * Identifier for the item when search for selected
   */
  id: string;

  /**
   * Status of if the item is selected
   */
  selected?: boolean;
}
