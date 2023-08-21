import { Component } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';

@Component({
  selector: 'sds-dialog-data-return-template',
  templateUrl: './dialog-template.component.html',
  styleUrls: ['dialog-template.component.scss'],
})
export class DialogDataReturnTemplateComponent {
  constructor(public dialog: SdsDialogService) {}

  returnData: string = '';
}
