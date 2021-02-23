import { Component, Input} from '@angular/core';
import { SdsDialogService } from '@gsa-sam/components';

@Component({
  selector: 'sds-slide-out',
  templateUrl: 'slide-out.component.html',
})
export class SdsSlideOutComponent {
  private _visible: boolean = false;

  constructor(private dialog: SdsDialogService) {}
  @Input()
  set visible(value: boolean){
    this._visible = value;
  }
  get visible(): boolean{
    return this._visible;
  }

  open(componentTodisplay: any){
    this.dialog.open(componentTodisplay, {
      autoFocus: true,
      // disableClose: true,
      hasBackdrop: false,
      height: '100%',
      position: {right: 'true'},
      restoreFocus: true,
      panelClass: ['dialog-slide-out', 'show'],
      // displayCloseBtn: false
    })
  }


}
