import { SideNavigationModel } from '../../side-navigation/model/side-navigation-model';

export class SelectionPanelModel extends SideNavigationModel {
  /**
   * The mode selected impacts which version of the selection panel is used.
   * 'SELECTION' mode will only display the top level navigation items and
   * will not display children items. 'NAVIGATION' mode will display the children
   * navigation items indented under its parent. If a mode is not passed in,
   * then 'NAVIGATION' mode is assumed.
   */
  selectionMode?: 'SELECTION' | 'NAVIGATION';
}