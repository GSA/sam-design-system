import { Component, Inject } from '@angular/core';
import { SdsDialogRef, SDS_DIALOG_DATA } from '@gsa-sam/components';

@Component({
  selector: 'gsa-sam-side-menu-filteres-advanced-dialog-sample',
  templateUrl: './side-menu-filters-advanced-dialog-sample.component.html'
})

export class SideMenuFiltersAdvancedDialogSampleComponent {
  constructor(
    public dialogRef: SdsDialogRef<
      SideMenuFiltersAdvancedDialogSampleComponent
    >,
    // TODO: make data type
    @Inject(SDS_DIALOG_DATA) public data: any
  ) {}
}
