import { Component } from '@angular/core';
import { GlobalConfig, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sds-toasts-message',
  templateUrl: './toasts-message.component.html',
})
export class ToastsMessageComponent {
  options: GlobalConfig;

  constructor(private toastr: ToastrService) {
    this.options = this.toastr.toastrConfig;

    this.options.iconClasses = {
      error: 'sds-toast--error',
      info: 'sds-toast--info',
      success: 'sds-toast--success',
      warning: 'sds-toast--warning',
    };

    this.options.enableHtml = true;
    this.options.closeButton = true;
    this.options.disableTimeOut = true;
  }

  showPlainTextMessage() {
    this.toastr.info('Plain Toast Message', '');
  }
  showHTMLMessage() {
    this.toastr.info('<i>HTML Toast Message</i>', '');
  }
}
