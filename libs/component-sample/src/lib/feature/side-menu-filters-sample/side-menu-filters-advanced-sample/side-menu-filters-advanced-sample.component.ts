import { Component } from '@angular/core';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { FormGroup } from '@angular/forms';
import { SdsDialogService } from '@gsa-sam/components';
import {
  SdsFormlyDialogComponent,
  SdsFormlyDialogData,
  SdsAdvancedFiltersService
} from '@gsa-sam/sam-formly';

import { SIDE_MENU_FILTERS_ADVANCED_SAMPLE_DATA } from '../side-menu-filters-sample.data';

@Component({
  selector: 'sds-side-menu-filters-advanced-sample',
  templateUrl: './side-menu-filters-advanced-sample.component.html',
})

export class SideMenuFiltersAdvancedSampleComponent {

  form: FormGroup = new FormGroup({});
  model: object = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = SIDE_MENU_FILTERS_ADVANCED_SAMPLE_DATA;

  constructor(
    public dialog: SdsDialogService,
    private advancedFiltersService: SdsAdvancedFiltersService
    ) { }

  openDialog(): void {
    const modalFields: FormlyFieldConfig[] = this.advancedFiltersService.convertToCheckboxes(this.fields);

    const data: SdsFormlyDialogData = {
      fields: modalFields,
      originalFields: this.fields,
      originalModel: this.model,
      cancel: 'Reset',
      submit: 'Update',
      title: 'Advanced Filters',
    };

    const dialogRef = this.dialog.open(SdsFormlyDialogComponent, {
      width: 'medium',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.fields = result.fields;
        this.model = result.model;
      }
    });
  }
}
