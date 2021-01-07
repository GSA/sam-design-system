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
    this.options.iconClasses = {
      error: 'sds-toast--error',
      info: 'sds-toast--info',
      success: 'sds-toast--success',
      warning: 'sds-toast--warning',
    };
  }
 
  showInfo() {
    
    this.toastr.info('Your information will be saved before leaving editor view', "");
  }
  showSuccess() {
    this.toastr.success('Account request successfully submitted', "");
  }
  showWarning() {
    this.toastr.warning('Something requires your attention', "");
  }
  showError() {
    this.toastr.error('Something went wrong', "");
  }
  clear(){
    this.toastr.clear();
  }
  fixNumber(field: keyof GlobalConfig): void {
    (this.options as any)[field] = Number(this.options[field]) as any;
  }
}
