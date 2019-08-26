import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderModel, HeaderNavigationLink, HeaderSecondaryLink } from './model/HeaderModel';
import { INavigationLink, NavigationMode, Selectable } from '../common-navigation/common-navigation-model';
import { NavigationHelper } from '../common-navigation/navigation-helper';
@Component({
  selector: 'sds-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class SdsHeaderComponent {

  /**
  * Navigation helper
  */
  navigationHelper = new NavigationHelper();

  /**
   * determines if the top banner is shown
   */
  @Input() showTopBanner: boolean = true;

  /**
   * Model used for the different display portions of the header 
   */
  @Input() model: HeaderModel;

  /**
   * Takes in a text string and removes all white space characters and returns the new string
   * @param text 
   */
  removeWhiteSpace(text: string) {
    return text.replace(/ /g, '');
  }

  /**
   * seeif any secondary link has a counter
   */
  hasCounter(): boolean {
    let hasCounter = false;
    if (this.model) {
      if (this.model.secondaryLinks) {
        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {
          if (item.hasCounter) {
            hasCounter = true;
          }
        });
      }
    }
    return hasCounter;
  }

  /**
   * Deselects previous seletion
   * @param id 
   */
  select(id: string) {
    this.deselect();
    let item = this.find(id);
    if (item) {
      item.selected = true;
    }
  }

  /**
   * Deselects all the items in the header model
   */
  deselect() {
    if (this.model) {
      if (this.model.home) {
        this.model.home.selected = false;
      }
      if (this.model.navigationLinks) {
        this.model.navigationLinks.forEach(function (item: HeaderNavigationLink) {
          item.selected = false;
          if (item.children) {
            item.children.forEach(function (child: HeaderNavigationLink) {
              child.selected = false;
            });
          }
        });
      }
      if (this.model.secondaryLinks) {
        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {
          item.selected = false;
        });
      }
    }
  }

  /**
   * Finds the navigation element by id in the header model 
   * @param id of the navigation item
   */
  find(id: string): Selectable {
    let toReturn = null;
    if (this.model) {
      if (this.model.home) {
        if (this.model.home.id === id) {
          toReturn = this.model.home;
        }
      }
      toReturn = this.findNavigationLinks(id, toReturn);
      if (this.model.secondaryLinks) {
        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {
          if (item.id === id) {
            toReturn = item;
          }
        });
      }
    }
    return toReturn;
  }

  /**
   * Searchs the items in the navigation links
   * @param id 
   */
  private findNavigationLinks(id: string, toReturn: Selectable): Selectable {
    if (this.model.navigationLinks) {
      this.model.navigationLinks.forEach(function (item: HeaderNavigationLink) {
        if (item.id === id) {
          toReturn = item;
        }
        if (item.children) {
          item.children.forEach(function (child: HeaderNavigationLink) {
            if (child.id === id) {
              toReturn = child;
            }
          });
        }
      });
    }
    return toReturn;
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
