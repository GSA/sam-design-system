import { Component } from '@angular/core';
import { DialogWidthTypeTemplate } from './dialog-template.component';
import { SdsDialogService } from '@gsa-sam/components';

@Component({
  selector: 'sds-dialog-width',
  templateUrl: './dialog-width.component.html'
})
export class DialogWidthComponent {

  constructor(public dialog: SdsDialogService) {}

  openSmallDialog(): void {
    this.dialog.open(DialogWidthTypeTemplate, {
      width: 'small',
      data: 'small'
    });
  }
  openMediumDialog(): void {
    this.dialog.open(DialogWidthTypeTemplate, {
      width: 'medium',
      data: 'medium'
    });
  }
  openLargeDialog(): void {
    this.dialog.open(DialogWidthTypeTemplate, {
      width: 'large',
      data: 'large'
    });
  }

}
