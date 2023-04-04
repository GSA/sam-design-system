import { Component } from '@angular/core';
import { GlobalConfig, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sds-toasts-timeout',
  templateUrl: './toasts-timeout.component.html',
})
export class ToastsTimeoutComponent {
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

  showTwoSecondTimeoutMessage() {
    this.options.disableTimeOut = false;
    this.options.timeOut = 2000;
    this.toastr.info('This Message Will Disappear In 2 Seconds', '');
  }
  showNoTimeoutMessage() {
    this.options.disableTimeOut = true;
    this.toastr.info('This Message Will Not Timeout', '');
  }
}
