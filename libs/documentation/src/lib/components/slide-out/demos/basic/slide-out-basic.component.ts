import { ScrollStrategyOptions } from '@angular/cdk/overlay';
import { Component } from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';

@Component({
  templateUrl: './slide-out-basic.component.html',
  styleUrls: ['./slide-out-basic.component.scss'],
  selector: `sds-slide-out-basic-demo`
})
export class SlideOutBasicComponent {

  constructor(public dialog: SdsDialogService, private options: ScrollStrategyOptions) {}

  buttonClicked(){
    this.dialog.open(SlideOutTemplateComponent, {
      hasBackdrop: false,
      height: '100%',
      position: {right: 'true'},
      slideOut: true
    })
  }
}

@Component({
  selector: 'sds-slide-out-template',
  templateUrl: './slide-out-template.html',
  styleUrls: ['slide-out-template.scss']
})
export class SlideOutTemplateComponent {

  constructor(){}
}
