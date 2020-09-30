import { Component ,ViewEncapsulation } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './toasts-basic.component.html',
  styleUrls: ['./toasts-basic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToastsBasic {
  constructor(private toastr: ToastrService) {}
 
  showInfo() {
    this.toastr.info('Hello world!', 'alert-info', {timeOut:6000,positionClass:"toast-bottom-left"} );
  }
  showSuccess() {
    this.toastr.success('Account request successfully submitted!', 'check-circle', {timeOut: 6000,positionClass:"toast-bottom-left"});
  }

}
