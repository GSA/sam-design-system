import { Component, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';
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
   * Reference to the the Template used for internal links
   */
  @ViewChild('sideNavRouteLinkTemplate', { static: false })
  private sideNavRouteLinkTemplate: TemplateRef<any>;

  /**
   * Reference to the the Template used for side menu items that are a label
   */
  @ViewChild('sideNavLabelLinkTemplate', { static: false })
  private sideNavLabelLinkTemplate: TemplateRef<any>;

  /**
   * Reference to the the Template used for external href 
   */
  @ViewChild('sideNavHREFLinkTemplate', { static: false })
  private sideNavHREFLinkTemplate: TemplateRef<any>;

  /**
   * Reference to the the Template used for event response
   */
  @ViewChild('sideNavEVENTLinkTemplate', { static: false })
  private sideNavEVENTLinkTemplate: TemplateRef<any>;

  /**
   * Takes the navigation item and returns the template to be used
   * @param item navigation item
   */
  getItemTemplate(item: NavigationLink): TemplateRef<any> {
    let template = null;
    switch (item.mode) {
      case NavigationMode.EVENT:
        template = this.sideNavEVENTLinkTemplate;
        break;
      case NavigationMode.EXTERNAL:
        template = this.sideNavHREFLinkTemplate;
        break;
      case NavigationMode.INTERNAL:
        template = this.sideNavRouteLinkTemplate;
        break;
      case NavigationMode.LABEL:
        template = this.sideNavLabelLinkTemplate;
        break;
      default:
        template = null;
        break;
    }
    return template;
  }

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

  /**
   * creates url from provided route and query params
   * @param item 
   */
  urlBuilder(item: NavigationLink) {
    let url = item.route;
    let queryParams = this.queryStringBuilder(item);
    if (queryParams) {
      if (url.indexOf('?') === -1) {
        url += '?' + queryParams;
      } else if (url.indexOf('?') === url.length - 1) {
        url += queryParams;
      } else {
        url += '&' + queryParams;
      }
    }
    return url;
  }

  /**
   * creates query string
   * @param item 
   */
  private queryStringBuilder(item: NavigationLink) {
    const ret = [];
    for (let d in item.queryParams) {
      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(item.queryParams[d]));
    }
    return ret.join('&');
  }
}
