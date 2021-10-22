import {
  Component,
  Output,
  EventEmitter,
  Input,
  OnInit
} from '@angular/core';
import { INavigationLink, NavigationMode, SearchSettings, Selectable } from '@gsa-sam/components';
import { Router } from '@angular/router';


@Component({
  selector: 'sds-subheader-wrapper',
  templateUrl: 'sds-subheader-wrapper.component.html'
})
export class SdsSubheaderWrapperComponent implements OnInit {


  constructor(private router: Router) { }

  @Input() backbuttonBehavior: INavigationLink;

  @Input() title: string;

  @Input() mode: SubHeaderWrapperMode;

  @Input() tabs: TabModel[];

  @Input() searchEnabled: boolean = false;

  @Output() action = new EventEmitter<string>();

  @Input() searchPlaceholderText: string;

  @Input() searchDropDownItems: SerachDropDownItem[];

  searchModel = {};

  HeaderMode = SubHeaderWrapperMode;

  menu = {
    trigger: {
      type: 'plain', // plain | primary
      shadow: true
    },
    actions: []
  };

  searchSettings: SearchSettings = {
    placeholder: '',
    parentSelector: '.sds-subheader__content',
    inputClass:
      'width-card-lg widescreen:width-mobile display-none desktop-lg:display-inline-block',
    size: 'small',
    ariaLabel: 'Search',
    dropdown: {}


  };



  searchSubmit(model) {
    this.action.emit(model);
  }

  public backClick(): void {
    if (!this.backbuttonBehavior) {
      window.history.back();
    } else {
      switch (this.backbuttonBehavior.mode) {
        case NavigationMode.INTERNAL:
          this.router.navigate([this.backbuttonBehavior.route]);
          break;
        case NavigationMode.EXTERNAL:
          window.location.href = this.backbuttonBehavior.route;
          break;
        default:
          window.history.back();
      }
    }
  }


   ngOnInit() {

    if (this.searchPlaceholderText) {
      this.searchSettings.placeholder = this.searchPlaceholderText;
    }

    if (this.searchDropDownItems) {
      this.searchSettings.dropdown =
      {
        id: 'searchOptions',
        placeholder: '-Select-',
        options: this.searchDropDownItems,
        inverse: false,
      };
    }


  }
}

export enum SubHeaderWrapperMode {
  CUSTOM,
  //Accept and Reject buttons
  REQUEST,//(Accept/Reject),

  SUBMIT,//(Submit/EDIT)
  //
  SEARCH,
  //
  TAB
}

export class TabModel implements Selectable {
  text: string;
  id: string;
  selected?: boolean;
}

export class SerachDropDownItem {
  label: string;
  value: string;
}

