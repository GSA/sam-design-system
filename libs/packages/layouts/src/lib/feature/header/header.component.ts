import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';
import {
  HeaderModel,
  HeaderNavigationLink,
  HeaderSecondaryLink
} from './model/HeaderModel';
import {
  INavigationLink,
  NavigationMode,
  Selectable
} from '@gsa-sam/components';
import { NavigationHelper } from '@gsa-sam/components';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { sds } from '@gsa-sam/sam-styles/src/icons/';

@Component({
  selector: 'sds-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class SdsHeaderComponent {
  @ViewChild('usaNavOpen') openNavBtn: ElementRef;
  @ViewChild('usaNavClose') closeNavBtn: ElementRef;
  mobileNavActive = false;
  /**
   * Navigation helper
   */
  navigationHelper = new NavigationHelper();

  /**
   * determines if the top banner is shown
   */
  @Input() showTopBanner = true;

  /**
   * Model used for the different display portions of the header
   */
  @Input() model: HeaderModel;

  @Input() topBannerDescription = '';

  @Input() showHeaderLogo = true;

  /**
   * event for event based
   */
  @Output()
  linkEvent = new EventEmitter<INavigationLink>();
  /**
   * Takes in a text string and removes all white space characters and returns the new string
   * @param text
   */
  removeWhiteSpace(text: string) {
    return text.replace(/ /g, '');
  }
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, sds);
  }
  /**
   * seeif any secondary link has a counter
   */
  hasCounter(): boolean {
    let hasCounter = false;
    if (this.model) {
      if (this.model.secondaryLinks) {
        this.model.secondaryLinks.forEach(function(item: HeaderSecondaryLink) {
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
    const item = this.find(id);
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
        this.model.navigationLinks.forEach(function(
          item: HeaderNavigationLink
        ) {
          item.selected = false;
          if (item.children) {
            item.children.forEach(function(child: HeaderNavigationLink) {
              child.selected = false;
            });
          }
        });
      }
      if (this.model.secondaryLinks) {
        this.model.secondaryLinks.forEach(function(item: HeaderSecondaryLink) {
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
        this.model.secondaryLinks.forEach(function(item: HeaderSecondaryLink) {
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
      this.model.navigationLinks.forEach(function(item: HeaderNavigationLink) {
        if (item.id === id) {
          toReturn = item;
        }
        if (item.children) {
          item.children.forEach(function(child: HeaderNavigationLink) {
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
   * Link clicked and emits the link data into an event
   * @param link
   */
  linkClickEvent(link: INavigationLink) {
    this.linkEvent.emit(link);
    return false;
  }

  // When the mobile nav is active, and the close box isn't visible,
  // we know the user's viewport has been resized to be larger.
  // Let's make the page state consistent by deactivating the mobile nav.
  @HostListener('window:resize', ['$event'])
  onBrowserResize(event) {
    if (
      this.mobileNavActive &&
      this.closeNavBtn.nativeElement.getBoundingClientRect().width === 0
    ) {
      this.mobileNavActive = false;
    }
  }

  openMobileNav() {
    this.mobileNavActive = true;
  }

  closeMobileNav() {
    this.mobileNavActive = false;
    // The mobile nav was just deactivated, and focus was on the close
    // button, which is no longer visible. We don't want the focus to
    // disappear into the void, so focus on the menu button if it's
    // visible (this may have been what the user was just focused on,
    // if they triggered the mobile nav by mistake).
    this.openNavBtn.nativeElement.focus();
  }

  // The mobile nav was just activated, so focus on the close button,
  navAnimationEnd() {
    this.closeNavBtn.nativeElement.focus();
  }
}
