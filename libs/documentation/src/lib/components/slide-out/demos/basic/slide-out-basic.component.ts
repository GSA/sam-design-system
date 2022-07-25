import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { SdsDialogRef, SdsDialogService } from '@gsa-sam/components';

@Component({
  templateUrl: './slide-out-basic.component.html',
  styleUrls: ['./slide-out-basic.component.scss'],
  selector: `sds-slide-out-basic-demo`,
})
export class SlideOutBasicComponent {
  openedDialogRef: SdsDialogRef<any>;

  constructor(
    public dialog: SdsDialogService,
    private options: ScrollStrategyOptions
  ) {}

  buttonClicked() {
    if (!this.openedDialogRef) {
      this.openedDialogRef = this.dialog.open(SlideOutTemplateComponent, {
        hasBackdrop: false,
        height: '100%',
        position: { right: 'true' },
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
  templateUrl: './slide-out-template.html',
  styleUrls: ['slide-out-template.scss'],
})
export class SlideOutTemplateComponent {
  constructor() {}
}
