import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SIDE_MENU_FILTERS_SAMPLE_DATA } from './side-menu-filters-sample.data';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'sds-side-menu-filters-sample',
  templateUrl: 'side-menu-filters-sample.component.html'
})
export class SideMenuFiltersSampleComponent implements OnInit {
  sideMenuFiltersResults: any = {};
  sideMenuFiltersForm = new FormGroup({});
  sideMenuFiltersModel = {};
  sideMenuFiltersOptions: FormlyFormOptions = {};

  /**
   * Event when something is checked/selected in the grid
   */
  public sideMenuFiltersChange$ = new BehaviorSubject<object>(null);

  sideMenuFiltersFields: FormlyFieldConfig[] = SIDE_MENU_FILTERS_SAMPLE_DATA;

  public ngOnInit() {
    this.sideMenuFiltersChange$.subscribe(res => {
      this.sideMenuFiltersResults = res;
    });
  }
}
