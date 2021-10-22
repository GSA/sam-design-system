import { Component } from '@angular/core';

import { SubHeaderWrapperMode, TabModel } from '@gsa-sam/layouts';

import { BehaviorSubject } from 'rxjs';

import { INavigationLink, NavigationMode } from '@gsa-sam/components';

@Component({
  templateUrl: './sds-subheader-wrapper-tabs.component.html',
  styleUrls: ['./sds-subheader-wrapper-tabs.component.scss'],
  selector: `sds-subheader-wrapper-tab-demo`,
})
export class SdsSubheaderWrapperTabComponent {
  public actionEvent = new BehaviorSubject<string>(null);

  mode = SubHeaderWrapperMode.TAB;

  backButton: INavigationLink = {
    text: '',
    route: 'documentation/components/workspace-tier-2-item',
    mode: NavigationMode.INTERNAL
  }

  tabs: TabModel[] =
    [
      { text: 'Tab 1', selected: true, id: 'tab1' },
      { text: 'Tab 2', selected: false, id: 'tab2' },
      { text: 'Tab 3', selected: false, id: 'tab3' }
    ];

  constructor() { }
  ngOnInit() {
    this.actionEvent.subscribe(value => {
      console.log('Action Click: ');
      console.log(value);
    });
  }

}
