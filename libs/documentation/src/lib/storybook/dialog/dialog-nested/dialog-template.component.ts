import { Component } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { SecondNestedDialogComponent } from './second-nested-dialog.component';

@Component({
  selector: 'sds-dialog-nested-template',
  templateUrl: './dialog-template.component.html',
})
export class DialogNestedComponent {
  constructor(public dialog: SdsDialogService) {}

  openDialog(): void {
    this.dialog.open(SecondNestedDialogComponent, {
      width: 'small',
    });
  }
}
