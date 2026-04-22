import { Component } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';

/**
 * OFFICIAL
 * ================================================
 */
@Component({
    selector: 'sds-dialog-sample-official',
    templateUrl: './official-template.html',
    standalone: false
})
export class OfficialComponent {}

/*
 * MAIN COMPONENT
 * ================================================
 */
@Component({
    selector: 'sds-modal-sample',
    templateUrl: './dialog-official.component.html',
    standalone: false
})
export class DialogOfficial {
  constructor(public dialog: SdsDialogService) {}

  openOfficial() {
    this.dialog.open(OfficialComponent, {
      width: 'large',
    });
  }
}
