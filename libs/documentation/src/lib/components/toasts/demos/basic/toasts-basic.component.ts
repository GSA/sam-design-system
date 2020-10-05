import { Component ,ViewEncapsulation } from '@angular/core';
import { ToastrService,GlobalConfig } from 'ngx-toastr';

@Component({
  templateUrl: './toasts-basic.component.html',
  styleUrls: ['./toasts-basic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToastsBasic {
  options: GlobalConfig;


  constructor(private toastr: ToastrService) {
    this.options = this.toastr.toastrConfig;
    
  }
 
  showInfo() {
    
    this.toastr.info('Hello world!', '' ,{ toastClass:'alert-info'});
  }
  showSuccess() {
    this.toastr.success('Account request successfully submitted!', "", {toastClass:'check-circle'});
  }
  clear(){
    this.toastr.clear();
  }
  fixNumber(field: keyof GlobalConfig): void {
    (this.options as any)[field] = Number(this.options[field]) as any;
  }
}
