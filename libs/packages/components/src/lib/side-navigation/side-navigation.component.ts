import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SideNavigationModel, NavigationLink } from './model/side-navigation-model';
import { INavigationLink, NavigationMode } from '../common-navigation/common-navigation-model';
import { NavigationHelper } from '../common-navigation/navigation-helper';

@Component({
  selector: 'sds-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SdsSideNavigationComponent {

  /**
   * Navigation helper
   */
  navigationHelper = new NavigationHelper();

  /**
   * Model used for the different display portions of the side navigation 
   */
  @Input() model: SideNavigationModel;

  /**
   * Selects new item and parents and deselects previous
   * @param id 
   */
  select(id: string) {
    this.deselect();
    for (let i = 0; i < this.model.navigationLinks.length; i++) {
      let item = this.model.navigationLinks[i];
      this.selectItem(id, item, null);
    }
  }

  /**
   * Selects item if matches passed in id and will select parent
   * @param id 
   * @param item 
   * @param parent 
   */
  private selectItem(id: string, item: NavigationLink, parent: NavigationLink) {
    if (item.id === id) {
      item.selected = true;
      if (parent) {
        parent.selected = true;
      }
    } else {
      if (item.children) {
        for (let i = 0; i < item.children.length; i++) {
          let childItem = item.children[i];
          this.selectItem(id, childItem, item);
        }
        if (item.selected) {
          if (parent) {
            parent.selected = true;
          }
        }
      }
    }
  }


  /**
   * Deselects all the items in the side navigation model
   */
  deselect() {
    if (this.model) {
      if (this.model.navigationLinks) {
        for (let i = 0; i < this.model.navigationLinks.length; i++) {
          this.deselectItem(this.model.navigationLinks[i]);
        }
      }
    }
  }

  /**
   * checks if item is selected and if selcted will check children and will unselect
   */
  private deselectItem(item: NavigationLink) {
    if (item.selected) {
      item.selected = false;
      if (item.children) {
        for (let i = 0; i < item.children.length; i++) {
          this.deselectItem(item.children[i]);
        }
      }
    }
  }

  /**
   * event for event based
   */
  @Output()
  linkEvent = new EventEmitter<INavigationLink>();

  /**
   * Link clicked and emits the link data into an event
   * @param link 
   */
  linkClickEvent(link: INavigationLink) {
    this.linkEvent.emit(link);
    return false;
  }

}
