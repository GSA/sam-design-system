import { Component } from '@angular/core';
import { GlobalConfig, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sds-toasts-prevent-duplicates',
  templateUrl: './toasts-prevent-duplicates.component.html',
})
export class ToastsPreventDuplicatesComponent {
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
    this.options.preventDuplicates = true;
  }

  showMessageWithoutDuplicates() {
    this.toastr.show('This Message Will Not Duplicate', '');
  }
}
