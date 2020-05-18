import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';

import { SIDE_MENU_FILTERS_TOOLBAR_SAMPLE_DATA } from '../side-menu-filters-sample.data';

@Component({
  selector: 'sds-side-menu-filters-toolbar-sample',
  templateUrl: './side-menu-filters-toolbar-sample.component.html'
})
export class SideMenuFiltersToolbarSampleComponent implements OnInit {
  sideMenuFiltersToolbarResults: any = {};
  sideMenuFiltersToolbarForm = new FormGroup({});
  sideMenuFiltersToolbarModel = {};
  options: FormlyFormOptions = {};
  sideMenuFiltersToolbarFields: FormlyFieldConfig[] = SIDE_MENU_FILTERS_TOOLBAR_SAMPLE_DATA;

  /**
   * Event when something is checked/selected in the grid
   */
  public sideMenuFiltersToolbarChange$ = new BehaviorSubject<object>(null);

  constructor() {}

  public ngOnInit() {
    this.sideMenuFiltersToolbarChange$.subscribe(res => {
      this.sideMenuFiltersToolbarResults = res;
    });
  }
}
