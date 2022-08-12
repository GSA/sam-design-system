import { Component, TemplateRef, ViewChild } from '@angular/core';
import { SdsDialogRef, SdsDialogService } from '@gsa-sam/components';

@Component({
  templateUrl: './custom-header.component.html',
  selector: `sds-slide-out-custom-header`,
  styleUrls: ['../basic/slide-out-template.scss'],
})
export class SlideOutCustomHeaderComponent {
  @ViewChild('templateRefCustom') ref: TemplateRef<any>;

  openedDialogRef: SdsDialogRef<any>;

  constructor(public dialog: SdsDialogService) {}

  buttonClicked() {
    if (!this.openedDialogRef) {
      this.openedDialogRef = this.dialog.open(this.ref, {
        hasBackdrop: false,
        height: '100%',
        position: { right: 'true' },
        slideOut: true,
        displayCloseBtn: false,
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
