import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { SdsDialogRef, SdsDialogService } from '@gsa-sam/components';

@Component({
  selector: 'sds-slide-out-custom-template',
  templateUrl: './slide-out-custom-template.component.html',
})
export class SlideOutCustomTemplateComponent {
  @ViewChild('templateRefCustom') ref: TemplateRef<any>;

  openedDialogRef: SdsDialogRef<any>;

  constructor(public dialog: SdsDialogService, private options: ScrollStrategyOptions) {}

  buttonClicked() {
    if (!this.openedDialogRef) {
      this.openedDialogRef = this.dialog.open(this.ref, {
        hasBackdrop: false,
        slideOut: true,
      });
    } else {
      this.openedDialogRef.close();
      this.openedDialogRef = null;
    }
  }

  onCloseSlideOut() {
    this.openedDialogRef.close();
  }
}
