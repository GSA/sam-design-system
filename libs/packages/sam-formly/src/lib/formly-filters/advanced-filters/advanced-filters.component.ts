import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SdsDialogService } from '@gsa-sam/components';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { SdsAdvancedFiltersService } from './sds-advanced-filters.service';
import { SdsFormlyDialogData } from '../../formly-dialog/formly-dialog-data.model';
import { SdsFormlyDialogComponent } from '../../formly-dialog/formly-dialog.component';

@Component({
  selector: 'sds-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.scss']
})
export class AdvancedFiltersComponent {
  /**
   * Pass in a Form Group for ReactiveForms Support
   */
  @Input() public form: FormGroup;

  /**
   *  Fields are used to configure the UI components
   */
  @Input() public fields: FormlyFieldConfig[];

  /**
   *  Model used to display the filter values.
   */
  @Input() public model: any;

  /**
   *    Options for the form.
   */
  @Input() public options: FormlyFormOptions = {};

  constructor(
    public dialog: SdsDialogService,
    private advancedFiltersService: SdsAdvancedFiltersService
  ) {}

  openDialog(): void {
    const modalFields: FormlyFieldConfig[] = this.advancedFiltersService.convertToCheckboxes(
      this.fields
    );

    const data: SdsFormlyDialogData = {
      fields: modalFields,
      originalFields: this.fields,
      originalModel: this.model,
      submit: 'Update',
      title: 'More Filters',
      isAdvanceFilter: true
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
