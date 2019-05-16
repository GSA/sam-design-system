import { Component, Input } from '@angular/core';
import { SideNavigationModel, NavigationLink, Selectable } from './model/side-navigation-model';

@Component({
  selector: 'sds-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SdsSideNavigationComponent {

  /**
   * Model used for the different display portions of the side navigation 
   */
  @Input() model: SideNavigationModel;

  /**
   * Selects new item and deselects previous
   * @param id 
   */
  select(id: string) {
    this.deselect();
    for (let i = 0; i < this.model.navigationLinks.length; i++) {
      let item = this.model.navigationLinks[i];
      this.checkItem(id, item, null);
    }
  }

  private checkItem(id: string, item: NavigationLink, parent: NavigationLink) {
    if (item.id === id) {
      item.selected = true;
      if (parent) {
        parent.selected = true;
      }
    } else {
      if (item.children) {
        for (let i = 0; i < item.children.length; i++) {
          let childItem = item.children[i];
          this.checkItem(id, childItem, item);
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
   * checks if item is selected and if selcted will check children
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


}
