import { Component, Inject } from '@angular/core';

import { SubHeaderWrapperMode, SerachDropDownItem } from '@gsa-sam/layouts';

import { BehaviorSubject } from 'rxjs';

import { INavigationLink, NavigationMode } from '@gsa-sam/components';

@Component({
  templateUrl: './sds-subheader-wrapper-submit.component.html',
  styleUrls: ['./sds-subheader-wrapper-submit.component.scss'],
  selector: `sds-subheader-wrapper-submit-demo`,
})
export class SdsSubheaderWrapperSubmitComponent {
  public actionEvent = new BehaviorSubject<string>(null);

  mode = SubHeaderWrapperMode.SUBMIT;

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
