import { Component, Inject } from '@angular/core';

import { SubHeaderWrapperMode, SerachDropDownItem } from '@gsa-sam/layouts';

import { BehaviorSubject } from 'rxjs';

import { INavigationLink, NavigationMode } from '@gsa-sam/components';

@Component({
  templateUrl: './sds-subheader-wrapper-search-wrapper.component.html',
  styleUrls: ['./sds-subheader-wrapper-search-wrapper.component.scss'],
  selector: `sds-subheader-wrapper-search-wrapper-dropdown-demo`,
})
export class SdsSubheaderWrapperSearchWrapperDropdownComponent {
  public actionEvent = new BehaviorSubject<string>(null);

  mode = SubHeaderWrapperMode.CUSTOM;

  backButton: INavigationLink = {
    text: '',
    route: 'documentation/components/workspace-tier-2-item',
    mode: NavigationMode.INTERNAL
  }
  searchDropDownItems: SerachDropDownItem[] = [
    { label: 'Item 1', value: 'itm1' },
    { label: 'Item 2', value: 'itm2' },
    { label: 'Item 3', value: 'itm3' }
  ];

  constructor() { }
  ngOnInit() {
    this.actionEvent.subscribe(value => {
      console.log('Action Click: ');
      console.log(value);
    });
  }

}
