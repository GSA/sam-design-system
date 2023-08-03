import { Component } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { DialogTemplateComponent } from './official-template.component';

@Component({
  selector: 'sds-dialog-policy',
  templateUrl: './dialog-policy.component.html',
})
export class DialogPolicyComponent {
  constructor(public dialog: SdsDialogService) {}

  open(): void {
    this.dialog.open(DialogTemplateComponent, {});
  }
}
