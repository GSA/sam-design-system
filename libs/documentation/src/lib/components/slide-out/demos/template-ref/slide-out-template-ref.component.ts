import { Component, TemplateRef, ViewChild } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';

@Component({
  templateUrl: './slide-out-template-ref.component.html',
  selector: `sds-slide-out-template-ref-demo`,
  styleUrls: ['../basic/slide-out-template.scss']
})
export class SlideOutTemplateRefComponent {

  @ViewChild('templateRef') ref: TemplateRef<any>
;
  constructor(public dialog: SdsDialogService) {}

  buttonClicked(){
    this.dialog.open(this.ref, {
      hasBackdrop: false,
      height: '100%',
      position: {right: 'true'},
      slideOut: true
    })
  }
}
