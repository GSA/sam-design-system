import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { SdsDialogRef, SdsDialogService } from '@gsa-sam/components';

@Component({
  selector: 'sds-slide-out-basic',
  templateUrl: './slide-out-basic.component.html',
})
export class SlideOutBasicComponent {
  openedDialogRef: SdsDialogRef<any>;

  constructor(public dialog: SdsDialogService, private options: ScrollStrategyOptions) {}

  buttonClicked() {
    if (!this.openedDialogRef) {
      this.openedDialogRef = this.dialog.open(SlideOutTemplateComponent, {
        hasBackdrop: false,
        slideOut: true,
      });
    } else {
      this.openedDialogRef.close();
      this.openedDialogRef = null;
    }
  }
}
@Component({
  selector: 'sds-slide-out-template',
  templateUrl: './template.html',
  styleUrls: ['template.scss'],
})
export class SlideOutTemplateComponent {
  constructor() {}
}
