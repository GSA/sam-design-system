import { Component, TemplateRef, ViewChild } from '@angular/core';
import { SdsDialogRef, SdsDialogService } from '@gsa-sam/components';

@Component({
  templateUrl: './slide-out-template-ref.component.html',
  selector: `sds-slide-out-template-ref-demo`,
  styleUrls: ['../basic/slide-out-template.scss']
})
export class SlideOutTemplateRefComponent {

  @ViewChild('templateRef') ref: TemplateRef<any>;

  openedDialogRef: SdsDialogRef<any>;


  constructor(public dialog: SdsDialogService) {}

  buttonClicked(){
    if(!this.openedDialogRef){
      this.openedDialogRef = this.dialog.open(this.ref, {
        hasBackdrop: false,
        height: '100%',
        position: {right: 'true'},
        slideOut: true
      })
    } else {
      this.openedDialogRef.close();
      this.openedDialogRef = null;
    }
  }
}
