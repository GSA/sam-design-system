import { Component } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { DialogDataReturnTemplateComponent } from './dialog-template.component';

@Component({
  selector: 'sds-dialog-data-return',
  templateUrl: './dialog-data-return.component.html',
})
export class DialogDataReturnComponent {
  constructor(public dialog: SdsDialogService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogDataReturnTemplateComponent, {
      width: 'medium',
      disableClose: true,
      displayCloseBtn: false,
    });

    dialogRef.afterClosed().subscribe((result) => {
      alert(`Returned ${result}`);
    });
  }
}
