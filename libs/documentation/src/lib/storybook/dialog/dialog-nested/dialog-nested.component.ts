import { Component } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { DialogNestedComponent } from './dialog-template.component';

@Component({
  selector: 'sds-dialog-nested',
  templateUrl: './dialog-nested.component.html',
})
export class DialogNestedBaseComponent {

  constructor(public dialog: SdsDialogService) {}

  openDialog(): void {
    this.dialog.open(DialogNestedComponent, {
      width: 'large'
    });
  }

}
