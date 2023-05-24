import { Component, Input } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';
import { DialogConfigurableTemplateComponent } from './dialog-configurable-template.component';

@Component({
  selector: 'sds-dialog-configurable',
  templateUrl: './dialog-configurable.component.html',
})
export class DialogConfigurableComponent {
  @Input()
  alert: 'error' | 'warning' | 'info' | 'success';

  @Input()
  width: 'small' | 'medium' | 'large';

  constructor(public dialog: SdsDialogService) {}

  openDialog() {
    this.dialog.open(DialogConfigurableTemplateComponent, {
      width: this.width,
      alert: this.alert,
    });
  }
}
