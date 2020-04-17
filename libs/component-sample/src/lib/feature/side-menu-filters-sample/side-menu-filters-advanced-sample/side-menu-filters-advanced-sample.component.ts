import { Component } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { SIDE_MENU_FILTERS_SAMPLE_DATA } from '../side-menu-filters-sample.data';
import { SdsDialogService } from '@gsa-sam/components';
import { SideMenuFiltersAdvancedDialogSampleComponent } from './side-menu-filters-advanced-dialog-sample/side-menu-filters-advanced-dialog-sample.component';

@Component({
  selector: 'sds-side-menu-filters-advanced-sample',
  templateUrl: './side-menu-filters-advanced-sample.component.html'
})

export class SideMenuFiltersAdvancedSampleComponent {

  results: any = {};
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = SIDE_MENU_FILTERS_SAMPLE_DATA;

  /**
   * Event when something is checked/selected in the grid
   */
  public filterChange$ = new BehaviorSubject<object>(null);

  constructor(public dialog: SdsDialogService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(
      SideMenuFiltersAdvancedDialogSampleComponent,
      {
        width: 'medium',
        data: {
          form: this.form,
          model: this.model,
          fields: this.fields,
          options: this.options
        }
      }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }
}
