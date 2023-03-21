import { Component, Input } from '@angular/core';
import { GlobalConfig, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sds-toasts-configurable',
  templateUrl: './toasts-configurable.component.html',
})
export class ToastsConfigurableComponent {
  options: GlobalConfig;

  @Input()
  toastMessage: string = 'Test Message';

  @Input()
  toastType: 'General' | 'Success' | 'Info' | 'Warning' | 'Error';

  @Input()
  set toastTimeout(timeout: number) {
    this.options.timeOut = timeout;
  }

  @Input()
  set disableTimeout(disable: boolean) {
    this.options.disableTimeOut = disable;
  }

  @Input()
  set preventDuplicates(prevent: boolean) {
    this.options.preventDuplicates = prevent;
  }

  constructor(private toastr: ToastrService) {
    this.options = this.toastr.toastrConfig;
    this.options.enableHtml = true;
    this.options.iconClasses = {
      error: 'sds-toast--error',
      info: 'sds-toast--info',
      success: 'sds-toast--success',
      warning: 'sds-toast--warning',
    };
    this.options.closeButton = true;
  }

  showToast() {
    switch (this.toastType) {
      case 'General':
        this.toastr.show(this.toastMessage, '');
        break;
      case 'Success':
        this.toastr.success(this.toastMessage, '');
        break;
      case 'Info':
        this.toastr.info(this.toastMessage, '');
        break;
      case 'Warning':
        this.toastr.warning(this.toastMessage, '');
        break;
      case 'Error':
        this.toastr.error(this.toastMessage, '');
        break;
      default:
        this.toastr.error('Select a toast type below!', '');
        break;
    }
  }
}
