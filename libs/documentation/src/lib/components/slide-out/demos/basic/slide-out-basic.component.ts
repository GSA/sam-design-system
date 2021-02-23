import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SdsDialogRef } from '@gsa-sam/components';
import { SdsSlideOutComponent } from '@gsa-sam/layouts';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  templateUrl: './slide-out-basic.component.html',
  styleUrls: ['./slide-out-basic.component.scss'],
  selector: `sds-slide-out-basic-demo`
})
export class SlideOutBasicComponent {

  @ViewChild('exitButton') exitButton: ElementRef;
  @ViewChild(SdsSlideOutComponent) slideOut: SdsSlideOutComponent;

  // Adding keyup listener to allow user to close slide-out with ESC key
  // @HostListener('window:keyup', ['$event'])
  // keyEvent(event: KeyboardEvent) {
  //   if (event.key === 'Escape') {
  //     this.closeSlideOut();
  //   }
  // }

  /**
   * Tracking visibilty of slide-out
   */
  // visible = false;

  constructor() {}


  buttonClicked(){
    // this.visible = !this.visible;
    // if(this.visible){
    //   setTimeout(()=>{
    //     this.exitButton.nativeElement.focus(); // Focus on first element in slide-out
    //   })
    // }
    this.slideOut.open(SlideOutTemplateComponent);
  }

  // closeSlideOut(){
  //   this.visible = false;
  // }

}

@Component({
  selector: 'sds-slide-out-template',
  templateUrl: './slide-out-template.html',
  styleUrls: ['slide-out-template.scss']
})
export class SlideOutTemplateComponent {

  constructor(private dialogRef: SdsDialogRef<any>){

  }

  close(){
    this.dialogRef.removePanelClass('show');
    this.dialogRef.addPanelClass('hide');
    setTimeout(()=>{
      this.dialogRef.close();
    },1000);

  }
}
