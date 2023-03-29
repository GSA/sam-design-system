import { Component } from '@angular/core';
import { GlobalConfig, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sds-toasts-type',
  templateUrl: './toasts-type.component.html',
})
export class ToastsTypeComponent {
  options: GlobalConfig;

  constructor(private toastr: ToastrService) {
    this.options = this.toastr.toastrConfig;
    this.options.iconClasses = {
      error: 'sds-toast--error',
      info: 'sds-toast--info',
      success: 'sds-toast--success',
      warning: 'sds-toast--warning',
    };

    this.options.closeButton = true;
  }
  showSuccessToast() {
    this.toastr.success('A Success Toast Message', '');
  }
  showInfoToast() {
    this.toastr.info('An Info Toast Message', '');
  }
  showWarningToast() {
    this.toastr.warning('A Warning Toast Message', '');
  }
  showErrorToast() {
    this.toastr.error('An Error Toast Message', '');
  }
}
